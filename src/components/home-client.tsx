"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Terminal, Users, Cpu, ArrowRight, ExternalLink, CheckCircle2, TrendingUp, MessageSquare } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const heroBg = "/images/hero-bg.png";

export function HomeClient() {
  const { data: meetupEvents, isLoading: isEventsLoading } = useQuery<{
    title: string;
    link: string;
    pubDate: string;
    description: string;
  }[]>({
    queryKey: ["meetup-events"],
    queryFn: async () => {
      const res = await fetch("/api/meetup-events");
      if (!res.ok) throw new Error("Failed to fetch events");
      return res.json();
    },
  });

  const nextEvent = meetupEvents?.[0];

  const { data: hnStories, isLoading: isHNLoading } = useQuery<{
    id: number;
    title: string;
    url: string;
    score: number;
    by: string;
    time: number;
    descendants: number;
  }[]>({
    queryKey: ["hn-ai-stories"],
    queryFn: async () => {
      const res = await fetch("/api/hn-ai-stories");
      if (!res.ok) throw new Error("Failed to fetch HN stories");
      return res.json();
    },
    staleTime: 30 * 60 * 1000,
  });

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Code, Coffee & AI",
        "url": "https://codencoffee.io",
        "description": "A community of engineers curious about the future. Live demos, software engineering, and AI — all over great coffee. Based in Auckland, New Zealand.",
        "location": { "@type": "Place", "name": "Auckland, New Zealand" },
        "sameAs": [
          "https://www.linkedin.com/company/code-coffee-n-ai/",
          "https://www.meetup.com/code-coffee-auckland/"
        ]
      }) }} />
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover opacity-40 grayscale-[20%] contrast-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7">
              <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                Code, Coffee <br />
                <span className="text-primary">& AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-light max-w-xl leading-relaxed">
                A community of engineers curious about the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.meetup.com/code-coffee-auckland/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 transition-all hover:translate-y-[-2px] bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                >
                  Join the Community
                </a>
                <a
                  href="https://www.meetup.com/code-coffee-auckland/events/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-14 px-8 text-lg rounded-full border-foreground/10 hover:bg-foreground/5 backdrop-blur-sm border font-medium"
                >
                  View All Events
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="max-w-md ml-auto lg:mt-0 mt-12">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Next Up
                </h2>
                <Card className="bg-background/40 backdrop-blur-xl border border-primary/20 shadow-2xl shadow-black/20">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>Saturday, 12th July</span>
                    </div>
                    <p className="font-heading font-bold text-xl text-foreground leading-snug">Next meetup coming up — details dropping soon</p>
                    <a
                      href="https://www.meetup.com/code-coffee-auckland/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      Follow on Meetup to get notified
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Blog Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">From the Blog</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-1">Latest reads</h2>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              All posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth" style={{ scrollbarWidth: "none" }}>
            {BLOG_POSTS.slice(0, 4).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block shrink-0 w-[80vw] sm:w-[340px] snap-start">
                <article className="h-full flex flex-col bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/60">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-3 border-t border-border/60">
                    <span>{post.date}</span>
                    <span className="opacity-40">·</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-5 sm:hidden text-center">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              All posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HN AI Stories */}
      {(isHNLoading || (hnStories && hnStories.length > 0)) && (
        <section className="py-16 border-y border-border/40 bg-secondary/20">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h2 className="font-heading text-lg font-bold text-foreground">What the community is reading</h2>
              </div>
              <a href="https://news.ycombinator.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                Top AI on Hacker News <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {isHNLoading ? (
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="animate-pulse h-14 bg-card rounded-xl border border-border/40" />
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {hnStories?.map((story, i) => {
                  const hoursAgo = Math.floor((Date.now() / 1000 - story.time) / 3600);
                  const timeAgo = hoursAgo < 24 ? `${hoursAgo}h ago` : `${Math.floor(hoursAgo / 24)}d ago`;
                  const href = story.url || `https://news.ycombinator.com/item?id=${story.id}`;
                  return (
                    <a key={story.id} href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-4 py-3 rounded-xl bg-card border border-border/40 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200">
                      <span className="text-sm font-bold text-muted-foreground/40 w-4 shrink-0 text-right">{i + 1}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate leading-snug">{story.title}</p>
                        <div className="flex items-center gap-3 mt-0.5">
                          <span className="text-xs text-muted-foreground flex items-center gap-1"><TrendingUp className="w-3 h-3" /> {story.score}</span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {story.descendants ?? 0}</span>
                          <span className="text-xs text-muted-foreground">{timeAgo}</span>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-primary shrink-0 transition-colors" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Focus Areas */}
      <section className="py-20 bg-background" id="about">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Software Engineering</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deep dives into architecture, clean code, and modern frameworks. From frontend polish to backend scale.
              </p>
            </div>
            <div className="group">
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Sparks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Live demos, fresh tools, and the kind of ideas that make you open a new tab on the way home.
              </p>
            </div>
            <div className="group">
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Artificial Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Exploring the frontier of LLMs, agents, and ML applications. Practical workshops and theory discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Builders Teaser */}
      <section className="py-20 bg-secondary/40 border-y border-border/40">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-primary fill-primary/10" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Verified</span>
            </div>
            <h2 className="font-heading text-4xl font-bold mb-4">Meet the Builders</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Community members who are actively shipping products.
            </p>
            <Link href="/builders" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:translate-y-[-2px] transition-all shadow-lg shadow-primary/20">
              View Verified Builders <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
