import { Helmet } from "react-helmet-async";
import { Link, useParams } from "wouter";
import { Menu, Clock, ArrowLeft, CheckCircle2, ChevronRight, ExternalLink, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BLOG_POSTS, type ContentBlock } from "@/lib/blog-posts";

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'p':
      return (
        <p key={index} className="text-lg text-muted-foreground leading-relaxed">
          {block.text}
        </p>
      );

    case 'h2':
      return (
        <h2 key={index} className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-2 leading-snug">
          {block.text}
        </h2>
      );

    case 'h3':
      return (
        <h3 key={index} className="font-heading text-xl font-bold text-foreground mt-7 mb-2 leading-snug">
          {block.text}
        </h3>
      );

    case 'quote':
      return (
        <blockquote
          key={index}
          className="my-8 pl-6 border-l-4 border-primary"
        >
          <p className="text-xl text-foreground font-medium italic leading-relaxed">
            "{block.text}"
          </p>
          {block.attribution && (
            <footer className="mt-3 text-sm text-muted-foreground font-medium not-italic">
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      );

    case 'list':
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

    case 'callout':
      return (
        <div
          key={index}
          className="my-6 p-6 rounded-2xl bg-primary/5 border border-primary/20"
        >
          <p className="font-heading font-bold text-foreground mb-2">{block.title}</p>
          <p className="text-muted-foreground leading-relaxed">{block.text}</p>
        </div>
      );

    case 'sources':
      return (
        <div key={index} className="mt-10 pt-6 border-t border-border/40">
          <h4 className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-3">Sources</h4>
          <ul className="space-y-2">
            {block.items.map((item, i) => (
              <li key={i}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-3 h-3 shrink-0" />
                  {item.title}
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

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 flex flex-col">
      {post ? (
        <Helmet>
          <title>{post.title} — Code, Coffee & AI</title>
          <meta name="description" content={post.excerpt} />
          <meta property="og:title" content={`${post.title} — Code, Coffee & AI`} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://codencoffee.io/blog/${slug}`} />
          <meta property="og:image" content="https://codencoffee.io/logo.png" />
          <link rel="canonical" href={`https://codencoffee.io/blog/${slug}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${post.title} — Code, Coffee & AI`} />
          <meta name="twitter:description" content={post.excerpt} />
          <meta name="twitter:image" content="https://codencoffee.io/logo.png" />
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": new Date(post.date).toISOString(),
            "url": `https://codencoffee.io/blog/${slug}`,
            "mainEntityOfPage": `https://codencoffee.io/blog/${slug}`,
            "author": {
              "@type": "Organization",
              "name": "Code, Coffee & AI",
              "url": "https://codencoffee.io"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Code, Coffee & AI",
              "url": "https://codencoffee.io",
              "logo": { "@type": "ImageObject", "url": "https://codencoffee.io/logo.png" }
            }
          })}</script>
        </Helmet>
      ) : (
        <Helmet>
          <title>Post Not Found — Code, Coffee & AI</title>
        </Helmet>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-xl tracking-tight text-foreground flex items-center gap-2 hover:opacity-80 transition-opacity">
            Code, Coffee & AI
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="https://www.meetup.com/code-coffee-auckland/events/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Events</a>
            <Link href="/builders" className="hover:text-primary transition-colors">Builders</Link>
            <Link href="/blog" className="text-primary font-semibold">Blog</Link>
            <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
            <Link href="/ai-careers" className="hover:text-primary transition-colors">AI Careers</Link>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 backdrop-blur-md">
                <div className="flex flex-col gap-6 mt-8 font-medium">
                  <a href="https://www.meetup.com/code-coffee-auckland/events/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">Events</a>
                  <Link href="/builders" className="text-lg hover:text-primary transition-colors">Builders</Link>
                  <Link href="/blog" className="text-lg text-primary font-semibold">Blog</Link>
                  <Link href="/resources" className="text-lg hover:text-primary transition-colors">Resources</Link>
                  <Link href="/ai-careers" className="text-lg hover:text-primary transition-colors">AI Careers</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {post ? (
        <main className="flex-1 pt-28 pb-24">
          <div className="container mx-auto max-w-3xl px-6">

            {/* Back link + breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
              <Link href="/blog" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors font-medium">
                <ArrowLeft className="w-4 h-4" />
                Blog
              </Link>
              <ChevronRight className="w-4 h-4 opacity-40" />
              <span className="text-foreground truncate max-w-[260px]">{post.title}</span>
            </div>

            {/* Article header */}
            <header className="mb-10">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground italic leading-relaxed mb-5">
                {post.subtitle}
              </p>

              <div className="flex items-center flex-wrap gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{post.date}</span>
                <span className="opacity-40">·</span>
                <span>{post.readTime}</span>
                {post.author && (
                  <>
                    <span className="opacity-40">·</span>
                    <span className="inline-flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </>
                )}
              </div>
            </header>

            {/* Divider */}
            <div className="border-t border-border/40 mb-10" />

            {/* Content */}
            <article className="space-y-5">
              {post.content.map((block, index) => renderBlock(block, index))}
            </article>

            {/* Divider */}
            <div className="border-t border-border/40 mt-16 mb-12" />

            {/* More from the blog */}
            {otherPosts.length > 0 && (
              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">More from the blog</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {otherPosts.map((other) => (
                    <Link key={other.slug} href={`/blog/${other.slug}`} className="group block">
                      <article className="h-full flex flex-col bg-card border border-border rounded-2xl p-5 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {other.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="font-heading text-base font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors flex-1">
                          {other.title}
                        </h3>

                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-3 pt-3 border-t border-border/60">
                          <Clock className="w-3 h-3" />
                          <span>{other.date}</span>
                          <span className="opacity-40">·</span>
                          <span>{other.readTime}</span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            )}

          </div>
        </main>
      ) : (
        /* 404 state */
        <main className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center px-6">
            <p className="text-6xl font-heading font-bold text-primary mb-4">404</p>
            <h1 className="text-2xl font-heading font-bold text-foreground mb-3">Post not found</h1>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              That article doesn't exist. It may have been moved or the link is incorrect.
            </p>
            <Link href="/blog">
              <Button variant="outline" className="rounded-full gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 mt-auto">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="font-heading font-bold text-2xl tracking-tight mb-2">
                Code, Coffee & AI
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Cultivating the tech ecosystem, one cup at a time.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/code-coffee-n-ai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://www.meetup.com/code-coffee-auckland/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Meetup</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
            <p>© 2026 Code, Coffee & AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
