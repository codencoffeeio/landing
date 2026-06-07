"use client";
import { useState } from "react";
import { Flame, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROLES, CATEGORY_LABELS, type RoleCategory, type Role } from "@/lib/roles";

const CATEGORIES: RoleCategory[] = ["all", "engineering", "data-ml", "infrastructure", "product", "specialist"];

function RoleCard({ role }: { role: Role }) {
  const categoryColour: Record<string, string> = {
    "engineering": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "data-ml": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "infrastructure": "bg-orange-500/10 text-orange-400 border-orange-500/20",
    "product": "bg-green-500/10 text-green-400 border-green-500/20",
    "specialist": "bg-rose-500/10 text-rose-400 border-rose-500/20",
  };

  return (
    <div className={`flex flex-col p-6 rounded-2xl border transition-all duration-200 ${
      role.trending ? "bg-primary/5 border-primary/30" : "bg-card border-border/50"
    }`}>
      <div className="flex flex-wrap gap-1.5 mb-3">
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${categoryColour[role.category]}`}>
          {CATEGORY_LABELS[role.category]}
        </span>
        {role.trending && (
          <span className="text-xs font-medium px-2 py-0.5 rounded-full border bg-amber-500/10 text-amber-400 border-amber-500/20 flex items-center gap-1">
            <Flame className="w-3 h-3" /> Trending
          </span>
        )}
      </div>
      <h3 className="font-heading font-bold text-lg text-foreground mb-2 leading-snug">{role.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{role.description}</p>
      <div className="space-y-3">
        <div>
          <div className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-1.5">Skills & Tools</div>
          <div className="flex flex-wrap gap-1.5">
            {role.skills.map(skill => (
              <span key={skill} className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border/40">{skill}</span>
            ))}
          </div>
        </div>
        <div className="pt-3 border-t border-border/40">
          <div className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-0.5">Experience</div>
          <div className="text-sm text-foreground font-medium">{role.experience}</div>
        </div>
        <div className="p-3 rounded-xl bg-secondary/50 border border-border/40">
          <p className="text-xs text-muted-foreground leading-relaxed italic">&ldquo;{role.trendingNote}&rdquo;</p>
        </div>
      </div>
    </div>
  );
}

export function AICareersClient() {
  const [active, setActive] = useState<RoleCategory>("all");

  const filtered = active === "all" ? ROLES : ROLES.filter(r => r.category === active);
  const trendingCount = ROLES.filter(r => r.trending).length;

  return (
    <main className="flex-1 pt-32 pb-20">
      <div className="container mx-auto max-w-6xl px-6">

        <section className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Flame className="w-4 h-4" /> {trendingCount} roles trending right now
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-5 leading-tight">
            AI Careers<br />
            <span className="text-primary">Landscape.</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            The roles shaping AI engineering in 2026 — what they do, what skills they need, and why they matter. Whether you&apos;re pivoting into AI or levelling up, this is the map.
          </p>
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
                {cat === "all" ? ROLES.length : ROLES.filter(r => r.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        <section className="mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((role) => (
              <RoleCard key={role.title} role={role} />
            ))}
          </div>
        </section>

        <section className="border-t border-border/40 pt-12 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-heading text-2xl font-bold mb-3">Meet people in these roles</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            The Code, Coffee & AI community includes engineers across all of these roles. Join us at the next event to connect, share notes, and learn from people doing this work in Auckland.
          </p>
          <a href="https://www.meetup.com/code-coffee-auckland/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full gap-2 hover:-translate-y-1 transition-transform shadow-lg shadow-primary/20">
              Join the Community <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </section>

      </div>
    </main>
  );
}
