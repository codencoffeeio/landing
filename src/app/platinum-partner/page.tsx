import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Users, Calendar, Zap, Shield, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Platinum Partner — Code, Coffee & AI Auckland",
  description: "One exclusive 90-day partnership slot for a single agency to reach Auckland's largest dedicated AI engineering community.",
  robots: { index: false, follow: false },
};

export default function PlatinumPartnerPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 flex flex-col">

      {/* Minimal nav — logo only, no links */}
      <nav className="w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto max-w-5xl px-6 h-16 flex items-center">
          <Link href="/" className="font-heading font-bold text-xl tracking-tight text-foreground">
            Code, Coffee & AI
          </Link>
        </div>
      </nav>

      <main className="flex-1 py-20">
        <div className="container mx-auto max-w-5xl px-6">

          <section className="mb-20 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" /> One slot · 90 days · Exclusive
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Platinum Partner —<br />
              <span className="text-primary">Auckland&apos;s AI Engineering Community</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              One agency. Ninety days. Exclusive access to 1,000+ local AI engineers, developers, and technical leaders — many actively exploring their next move.
            </p>
          </section>

          <section className="mb-20">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border/40">
              <div className="bg-card px-6 py-8 text-center">
                <div className="font-heading text-3xl font-bold text-foreground">1,000+</div>
                <div className="text-sm text-muted-foreground mt-1">Local members</div>
              </div>
              <div className="bg-card px-6 py-8 text-center">
                <div className="font-heading text-3xl font-bold text-foreground">12+ mo</div>
                <div className="text-sm text-muted-foreground mt-1">Running</div>
              </div>
              <div className="bg-card px-6 py-8 text-center">
                <div className="font-heading text-3xl font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground mt-1">Builders per event</div>
              </div>
              <div className="bg-card px-6 py-8 text-center">
                <div className="font-heading text-3xl font-bold text-foreground">Auckland</div>
                <div className="text-sm text-muted-foreground mt-1">NZ-only audience</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 shrink-0" />
              Auckland&apos;s largest dedicated AI engineering community — not a general tech meetup.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="font-heading text-2xl font-bold mb-2">What&apos;s included</h2>
            <p className="text-muted-foreground mb-8">Everything under one partnership. No add-ons, no tiers.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: <Users className="w-5 h-5 text-primary" />,
                  title: "Hosting rights across all events",
                  desc: "Your brand front and centre at every in-person event for 90 days. Introduction to the room, logo on all materials."
                },
                {
                  icon: <Shield className="w-5 h-5 text-primary" />,
                  title: "Market exclusivity",
                  desc: "No competing agency in the room. One partner, full category lock for the entire term."
                },
                {
                  icon: <Zap className="w-5 h-5 text-primary" />,
                  title: "Direct ATS lead capture",
                  desc: "Opt-in talent pipeline fed directly into your system. Members who are open to opportunities, not cold outreach."
                },
                {
                  icon: <Calendar className="w-5 h-5 text-primary" />,
                  title: "Community access",
                  desc: "Direct line to the community group. Post roles, share insights, and stay top of mind with 1,000+ local AI engineers."
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-card border border-border/40 hover:border-primary/20 transition-colors">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Platinum Partner</div>
                  <div className="font-heading text-5xl font-bold text-foreground mb-1">
                    $5,000 <span className="text-2xl font-medium text-muted-foreground">+ GST</span>
                  </div>
                  <div className="text-muted-foreground mt-2">90 days · One agency · Full exclusivity</div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    A single Senior AI Engineer placement typically returns <span className="text-foreground font-medium">10–15× this investment</span> in placement fees.
                  </div>
                </div>
                <div className="space-y-3 shrink-0">
                  {["Hosting rights at all events", "Category exclusivity", "Direct ATS pipeline", "Community posting access"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20 p-8 rounded-2xl bg-secondary/30 border border-border/40">
            <h2 className="font-heading text-xl font-bold mb-4">Most recent event</h2>
            <p className="text-muted-foreground leading-relaxed">
              We just wrapped a mini-hackathon in partnership with <strong className="text-foreground">Replit</strong> — 20+ builders in a room for an afternoon, shipping real apps with AI tools. The community spans senior engineers, founders, and AI practitioners across Auckland, with a consistent core who show up to every event and are deeply engaged in what&apos;s next in AI engineering.
            </p>
          </section>

          <section className="text-center py-12 border-t border-border/40">
            <h2 className="font-heading text-3xl font-bold mb-3">Let&apos;s have a chat</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              If this sounds like it could be a good fit for your team, I&apos;d love to connect — even just a quick coffee or a call to see if it makes sense.
            </p>
            <a href="mailto:naveenkolambage@gmail.com?subject=Platinum Partner — Code, Coffee %26 AI&body=Hi Naveen,%0A%0AI'm interested in the Platinum Partner opportunity. Let's find a time to chat.%0A%0A">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform gap-2">
                <Mail className="w-5 h-5" /> Get in touch
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">naveenkolambage@gmail.com</p>
          </section>

        </div>
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto max-w-5xl px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Code, Coffee & AI. All rights reserved.</p>
          <Link href="/" className="hover:text-primary transition-colors">Back to site <ArrowRight className="inline w-3 h-3" /></Link>
        </div>
      </footer>
    </div>
  );
}
