import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BlogList } from "@/components/blog-list";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Code, Coffee & AI",
  description: "Insights, stories, and practical guides for developers navigating the age of AI.",
  openGraph: {
    title: "Blog — Code, Coffee & AI",
    description: "Insights, stories, and practical guides for developers navigating the age of AI.",
    type: "website",
    url: "https://codencoffee.io/blog",
    images: [{ url: "https://codencoffee.io/logo.png" }],
  },
  twitter: { card: "summary_large_image", title: "Blog — Code, Coffee & AI", description: "Insights, stories, and practical guides for developers navigating the age of AI.", images: ["https://codencoffee.io/logo.png"] },
  alternates: { canonical: "https://codencoffee.io/blog" },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 flex flex-col">
      <Nav />
      <BlogList posts={BLOG_POSTS} />
      <Footer />
    </div>
  );
}
