import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowLeft, CheckCircle2, ChevronRight, ExternalLink, User } from "lucide-react";
import { BLOG_POSTS, type ContentBlock } from "@/lib/blog-posts";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found — Code, Coffee & AI" };
  return {
    title: `${post.title} — Code, Coffee & AI`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Code, Coffee & AI`,
      description: post.excerpt,
      type: "article",
      url: `https://codencoffee.io/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — Code, Coffee & AI`,
      description: post.excerpt,
      images: [`https://codencoffee.io/blog/${slug}/opengraph-image`],
    },
    alternates: { canonical: `https://codencoffee.io/blog/${slug}` },
  };
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "p":
      return <p key={index} className="text-lg text-muted-foreground leading-relaxed">{block.text}</p>;
    case "h2":
      return <h2 key={index} className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-2 leading-snug">{block.text}</h2>;
    case "h3":
      return <h3 key={index} className="font-heading text-xl font-bold text-foreground mt-7 mb-2 leading-snug">{block.text}</h3>;
    case "quote":
      return (
        <blockquote key={index} className="my-8 pl-6 border-l-4 border-primary">
          <p className="text-xl text-foreground font-medium italic leading-relaxed">&ldquo;{block.text}&rdquo;</p>
          {block.attribution && <footer className="mt-3 text-sm text-muted-foreground font-medium not-italic">— {block.attribution}</footer>}
        </blockquote>
      );
    case "list":
      return (
        <ul key={index} className="space-y-3 my-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-lg text-muted-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div key={index} className="my-6 p-6 rounded-2xl bg-primary/5 border border-primary/20">
          <p className="font-heading font-bold text-foreground mb-2">{block.title}</p>
          <p className="text-muted-foreground leading-relaxed">{block.text}</p>
        </div>
      );
    case "sources":
      return (
        <div key={index} className="mt-10 pt-6 border-t border-border/40">
          <h4 className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-3">Sources</h4>
          <ul className="space-y-2">
            {block.items.map((item, i) => (
              <li key={i}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
                  <ExternalLink className="w-3 h-3 shrink-0" />{item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
    url: `https://codencoffee.io/blog/${slug}`,
    mainEntityOfPage: `https://codencoffee.io/blog/${slug}`,
    author: { "@type": "Organization", name: "Code, Coffee & AI", url: "https://codencoffee.io" },
    publisher: { "@type": "Organization", name: "Code, Coffee & AI", url: "https://codencoffee.io", logo: { "@type": "ImageObject", url: "https://codencoffee.io/logo.png" } },
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main className="flex-1 pt-28 pb-24">
        <div className="container mx-auto max-w-3xl px-6">
          <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
            <Link href="/blog" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" />Blog
            </Link>
            <ChevronRight className="w-4 h-4 opacity-40" />
            <span className="text-foreground truncate max-w-[260px]">{post.title}</span>
          </div>

          <header className="mb-10">
            <div className="flex flex-wrap gap-1.5 mb-5">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/60">{tag}</span>
              ))}
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground italic leading-relaxed mb-5">{post.subtitle}</p>
            <div className="flex items-center flex-wrap gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{post.date}</span>
              <span className="opacity-40">·</span>
              <span>{post.readTime}</span>
              {post.author && (
                <>
                  <span className="opacity-40">·</span>
                  <span className="inline-flex items-center gap-1"><User className="w-3.5 h-3.5" />{post.author}</span>
                </>
              )}
            </div>
          </header>

          <div className="border-t border-border/40 mb-10" />

          <article className="space-y-5">
            {post.content.map((block, index) => renderBlock(block, index))}
          </article>

          <div className="border-t border-border/40 mt-16 mb-12" />

          {otherPosts.length > 0 && (
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">More from the blog</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {otherPosts.map((other) => (
                  <Link key={other.slug} href={`/blog/${other.slug}`} className="group block">
                    <article className="h-full flex flex-col bg-card border border-border rounded-2xl p-5 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {other.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border/60">{tag}</span>
                        ))}
                      </div>
                      <h3 className="font-heading text-base font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors flex-1">{other.title}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-3 pt-3 border-t border-border/60">
                        <Clock className="w-3 h-3" /><span>{other.date}</span><span className="opacity-40">·</span><span>{other.readTime}</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
