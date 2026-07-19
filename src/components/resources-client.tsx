"use client";
import { useState } from "react";
import { ExternalLink, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESOURCES, CATEGORY_LABELS, type ResourceCategory, type Resource } from "@/lib/resources";

const CATEGORIES: ResourceCategory[] = ["all", "ai-tools", "learning", "newsletters", "reading", "podcasts", "local"];

function ResourceCard({ resource: r, highlight }: { resource: Resource; highlight?: boolean }) {
  const categoryColour: Record<string, string> = {
    "ai-tools": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "learning": "bg-green-500/10 text-green-400 border-green-500/20",
    "newsletters": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "reading": "bg-orange-500/10 text-orange-400 border-orange-500/20",
    "local": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "podcasts": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  };

  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${
        highlight ? "bg-primary/5 border-primary/20 hover:border-primary/40" : "bg-card border-border/50 hover:border-border"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex flex-wrap gap-1.5">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${categoryColour[r.category]}`}>
            {CATEGORY_LABELS[r.category]}
          </span>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
            r.free ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-secondary text-muted-foreground border-border/40"
          }`}>
            {r.free ? "Free" : "Paid"}
          </span>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground/40 shrink-0 group-hover:text-primary transition-colors mt-0.5" />
      </div>
      <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{r.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{r.description}</p>
      {r.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {r.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border/40">{tag}</span>
          ))}
        </div>
      )}
    </a>
  );
}

export function ResourcesClient() {
  const [active, setActive] = useState<ResourceCategory>("all");

  const filtered = active === "all" ? RESOURCES : RESOURCES.filter(r => r.category === active);
  const picks = RESOURCES.filter(r => r.communityPick);

  return (
    <main className="flex-1 pt-32 pb-20">
      <div className="container mx-auto max-w-6xl px-6">

        <section className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" /> Curated by the community
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-5 leading-tight">
            The AI toolkit.<br />
            <span className="text-primary">No fluff, just signal.</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Everything the Code, Coffee & AI community is actually using, reading, and learning from — organised so you can find what you need fast.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-heading text-lg font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" /> Community Picks
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {picks.map((r) => (
              <ResourceCard key={r.name} resource={r} highlight />
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border/60 hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {CATEGORY_LABELS[cat]}
              <span className="ml-1.5 opacity-60 text-xs">
                {cat === "all" ? RESOURCES.length : RESOURCES.filter(r => r.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        <section className="mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((r) => (
              <ResourceCard key={r.name} resource={r} />
            ))}
          </div>
        </section>

        <section className="border-t border-border/40 pt-12 text-center">
          <h2 className="font-heading text-2xl font-bold mb-3">Using something we missed?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            This list is community-maintained. If there&apos;s a tool, course, or resource worth adding, send it through.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScvSvAjgguERxy97evSSVD8fo0Rvvrh43fOjsVWjfjndTtTwA/viewform" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-full gap-2 hover:-translate-y-1 transition-transform">
              <Mail className="w-4 h-4" /> Suggest a resource
            </Button>
          </a>
        </section>

      </div>
    </main>
  );
}
