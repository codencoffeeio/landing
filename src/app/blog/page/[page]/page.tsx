import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { BlogList, getBlogPage } from "@/components/blog-list";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const POSTS_PER_PAGE = 6;

export async function generateStaticParams() {
  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
  return Array.from({ length: totalPages - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  const pageNum = Number(page);
  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
  if (isNaN(pageNum) || pageNum < 2 || pageNum > totalPages) return { title: "Not Found" };
  return {
    title: `Blog — Page ${pageNum} — Code, Coffee & AI`,
    description: "Insights, stories, and practical guides for developers navigating the age of AI.",
    alternates: {
      canonical: `https://codencoffee.io/blog/page/${pageNum}`,
    },
  };
}

export default async function BlogPageN({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const pageNum = Number(page);
  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);

  if (isNaN(pageNum) || pageNum < 2 || pageNum > totalPages) notFound();

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 flex flex-col">
      <Nav />
      <BlogList posts={BLOG_POSTS} currentPage={pageNum} />
      <Footer />
    </div>
  );
}
