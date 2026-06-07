"use client";
import { useState } from "react";
import Link from "next/link";
import { PencilLine, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";

const POSTS_PER_PAGE = 6;

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  function goToPage(page: number) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="flex-1 pt-32 pb-24">
      <div className="container mx-auto max-w-6xl px-6">

        {/* Hero */}
        <section className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <PencilLine className="w-4 h-4" />
            From the Community
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-5 leading-tight">
            Insights, stories, and practical guides
            <br className="hidden md:block" />
            <span className="text-primary"> for builders.</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Real advice for developers navigating careers, job searches, and the age of AI — from people who&apos;ve been in the room.
          </p>
        </section>

        {/* Blog post grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visiblePosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="h-full flex flex-col bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="font-heading text-lg font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground italic mb-3 leading-relaxed">
                  {post.subtitle}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                    <span className="opacity-40">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-4 pt-4 border-t border-border/40">
            <p className="text-sm text-muted-foreground">
              Showing {startIndex + 1}–{Math.min(startIndex + POSTS_PER_PAGE, posts.length)} of {posts.length} posts
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium border border-border/60 bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-9 h-9 rounded-lg text-sm font-medium border transition-colors ${
                    page === currentPage
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border/60 hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium border border-border/60 bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
