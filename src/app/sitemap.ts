import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";

const BASE_URL = "https://codencoffee.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,              lastModified: "2026-05-23", changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/blog`,          lastModified: "2026-05-23", changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/resources`,     lastModified: "2026-05-27", changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/ai-careers`,    lastModified: "2026-05-27", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/builders`,      lastModified: "2026-05-23", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/replit-agent-4`,lastModified: "2026-05-23", changeFrequency: "yearly",  priority: 0.5 },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages];
}
