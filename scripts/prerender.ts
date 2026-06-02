/**
 * Post-build prerender script.
 *
 * Runs after `vite build`. For every known route it creates a
 * dist/public/<route>/index.html with the correct <title>, <meta>, og:,
 * twitter: and JSON-LD tags already in the HTML — no JavaScript required
 * for crawlers to read them.
 *
 * Vercel serves static files before applying rewrites, so these files take
 * precedence over the catch-all `/(.*) → /index.html` rewrite. React still
 * hydrates and runs normally for real users.
 */

import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Pure data files — no browser APIs, safe to import in Node via tsx
import { BLOG_POSTS } from '../client/src/lib/blog-posts.js';

const __dirnameESM = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirnameESM, '..');
const DIST = join(ROOT, 'dist/public');
const BASE_URL = 'https://codencoffee.io';
const OG_IMAGE = `${BASE_URL}/logo.png`;

const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

function truncate(text: string, max = 155): string {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

interface PageMeta {
  urlPath: string;
  title: string;
  description: string;
  type: 'website' | 'article';
  datePublished?: string;
}

function buildHtml({ title, description, type, datePublished, urlPath }: PageMeta): string {
  const url = `${BASE_URL}${urlPath}`;
  const desc = truncate(description);
  const t = esc(title);
  const d = esc(desc);

  const jsonLd = type === 'article'
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title.replace(/ — Code, Coffee & AI$/, ''),
        description: desc,
        datePublished,
        url,
        mainEntityOfPage: url,
        author: { '@type': 'Organization', name: 'Code, Coffee & AI', url: BASE_URL },
        publisher: {
          '@type': 'Organization',
          name: 'Code, Coffee & AI',
          url: BASE_URL,
          logo: { '@type': 'ImageObject', url: OG_IMAGE },
        },
      })
    : JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description: desc,
        url,
      });

  const injected = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ');

  // Strip any placeholder <title> Vite injects, then insert our tags
  return template
    .replace(/<title>[^<]*<\/title>/, '')
    .replace('</head>', `  ${injected}\n  </head>`);
}

function writeRoute(urlPath: string, html: string) {
  // '/' stays in DIST root; all others get a subdirectory
  const dir = urlPath === '/' ? DIST : join(DIST, urlPath);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
  console.log(`  ✓ ${urlPath}`);
}

// ── Static routes ─────────────────────────────────────────────────────────────

console.log('\nPrerendering routes...\n');

const staticRoutes: Array<Omit<PageMeta, 'type'>> = [
  {
    urlPath: '/',
    title: 'Code, Coffee & AI — Auckland AI Engineering Community',
    description: "Auckland's community for engineers building with AI. Monthly events, curated resources, and a growing network of practitioners.",
  },
  {
    urlPath: '/blog',
    title: 'Blog — Code, Coffee & AI',
    description: "Insights, tutorials, and honest takes from Auckland's AI engineering community.",
  },
  {
    urlPath: '/builders',
    title: 'Verified Builders · Code, Coffee & AI',
    description: 'Community members who are actively shipping products. Meet the builders of the Code, Coffee & AI community.',
  },
  {
    urlPath: '/resources',
    title: 'AI Resources — Curated by Code, Coffee & AI Auckland',
    description: "The best AI coding tools, learning resources, newsletters, and papers — curated by Auckland's AI engineering community.",
  },
  {
    urlPath: '/ai-careers',
    title: 'AI Careers Landscape — Code, Coffee & AI Auckland',
    description: 'The roles shaping AI engineering in 2026. Skills, tools, and experience levels for the most in-demand AI jobs in Auckland and beyond.',
  },
];

for (const route of staticRoutes) {
  writeRoute(route.urlPath, buildHtml({ ...route, type: 'website' }));
}

// ── Blog post routes ───────────────────────────────────────────────────────────

for (const post of BLOG_POSTS) {
  writeRoute(
    `/blog/${post.slug}`,
    buildHtml({
      urlPath: `/blog/${post.slug}`,
      title: `${post.title} — Code, Coffee & AI`,
      description: post.excerpt,
      type: 'article',
      datePublished: new Date(post.date).toISOString(),
    }),
  );
}

const total = staticRoutes.length + BLOG_POSTS.length;
console.log(`\n✅  ${total} routes prerendered → dist/public/\n`);
