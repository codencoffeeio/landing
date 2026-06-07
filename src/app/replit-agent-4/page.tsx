import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Sparkles, Lightbulb, Clock, CheckCircle2, Heart, Users, Calendar, MapPin } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Event Recap: Replit Agent 4 Mini-Hackathon — Code, Coffee & AI Auckland",
  description: "Recap of our Replit Agent 4 mini-hackathon in Auckland. Builders used vibe coding to ship real apps in an afternoon. See what we built, resources from the event, and how to join the community.",
  openGraph: {
    title: "Event Recap: Replit Agent 4 Mini-Hackathon — Code, Coffee & AI Auckland",
    description: "Builders in Auckland used Replit Agent 4 to ship real apps in an afternoon. Recap, resources, and community links.",
    url: "https://codencoffee.io/replit-agent-4",
    type: "article",
    images: [{ url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Recap: Replit Agent 4 Mini-Hackathon — Code, Coffee & AI Auckland",
    description: "Builders in Auckland used Replit Agent 4 to ship real apps in an afternoon.",
    images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop"],
  },
  alternates: { canonical: "https://codencoffee.io/replit-agent-4" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Replit Agent 4 Mini-Hackathon",
  "description": "A mini-hackathon where Auckland builders used Replit Agent 4 to ship real apps using vibe coding.",
  "startDate": "2026-04-26",
  "endDate": "2026-04-26",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Auckland, New Zealand",
    "address": { "@type": "PostalAddress", "addressLocality": "Auckland", "addressCountry": "NZ" }
  },
  "organizer": { "@type": "Organization", "name": "Code, Coffee & AI", "url": "https://codencoffee.io" },
  "url": "https://codencoffee.io/replit-agent-4"
};

export default function ReplitAgent4Page() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-6">

          <section className="mb-20 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> April 26th · Event Recap
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Thanks for Coming — <br />
              <span className="text-primary">Vibe Coding with Replit Agent 4</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl leading-relaxed mb-8">
              What an afternoon. Ideas became apps, strangers became collaborators, and Agent 4 did not disappoint.
            </p>

            <div className="bg-secondary/50 border border-border text-foreground p-6 rounded-2xl text-left max-w-2xl mx-auto md:mx-0 shadow-sm">
              <h3 className="text-lg font-heading font-bold flex items-center gap-2 mb-3 text-primary">
                <Heart className="w-5 h-5" /> This event has now ended
              </h3>
              <div className="space-y-3 text-sm md:text-base text-muted-foreground">
                <p>Our Replit Agent 4 mini-hackathon on April 26th was a blast. We had builders of all skill levels show up, fire up Agent 4, and ship real things in a single afternoon.</p>
                <p>Whether you were there or missed it, the resources below are still worth a look. And if you want to be part of the next one, come join the community.</p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border/40">
              <div className="bg-card px-6 py-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-1"><Users className="w-4 h-4 text-primary" /></div>
                <div className="font-heading text-3xl font-bold text-foreground">1,000+</div>
                <div className="text-sm text-muted-foreground mt-1">Members</div>
              </div>
              <div className="bg-card px-6 py-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-1"><Calendar className="w-4 h-4 text-primary" /></div>
                <div className="font-heading text-3xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Events Run</div>
              </div>
              <div className="bg-card px-6 py-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-1"><MapPin className="w-4 h-4 text-primary" /></div>
                <div className="font-heading text-3xl font-bold text-foreground">Auckland</div>
                <div className="text-sm text-muted-foreground mt-1">New Zealand</div>
              </div>
              <div className="bg-card px-6 py-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-1"><Sparkles className="w-4 h-4 text-primary" /></div>
                <div className="font-heading text-3xl font-bold text-foreground">Est. 2024</div>
                <div className="text-sm text-muted-foreground mt-1">Founded</div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="font-heading text-2xl font-bold mb-4">What is Replit &amp; Vibe Coding?</h2>
            <div className="p-8 rounded-2xl bg-secondary/30 border border-border/40 text-lg text-muted-foreground leading-relaxed">
              <p>Replit is a platform where anyone — coder or not — can build and deploy real apps straight from their browser. Agent 4 is their latest AI that turns plain English into fully working software. Vibe coding is exactly what it sounds like: you describe the vibe, the AI writes the code. No terminal. No setup. Just ideas becoming real things.</p>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
              <Video className="w-6 h-6 text-primary" /> Resources from the Event
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://replit.com/agent4" target="_blank" rel="noopener noreferrer" className="group block h-full">
                <Card className="h-full bg-card hover:bg-secondary/40 transition-colors border-border/50">
                  <div className="aspect-video bg-muted relative overflow-hidden rounded-t-xl">
                    <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" alt="Replit Agent 4" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-12 h-12 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
                        <Video className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Replit Agent 4 Official Intro</h3>
                    <p className="text-sm text-muted-foreground">The official overview of what Agent 4 can do.</p>
                  </CardContent>
                </Card>
              </a>

              <a href="https://creatoreconomy.so/p/replit-agent-4-is-here-plan-design-build-tutorial" target="_blank" rel="noopener noreferrer" className="group block h-full">
                <Card className="h-full bg-card hover:bg-secondary/40 transition-colors border-border/50">
                  <div className="aspect-video bg-muted relative overflow-hidden rounded-t-xl">
                    <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop" alt="Tutorial" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-12 h-12 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
                        <Video className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Habit Tracker Build Tutorial</h3>
                    <p className="text-sm text-muted-foreground">10 mins — watch a full app get built from scratch using plain English prompts, canvas design, and parallel agents.</p>
                  </CardContent>
                </Card>
              </a>

              <a href="https://blog.replit.com/introducing-agent-4-built-for-creativity" target="_blank" rel="noopener noreferrer" className="group block h-full">
                <Card className="h-full bg-card hover:bg-secondary/40 transition-colors border-border/50">
                  <div className="aspect-video bg-muted relative overflow-hidden rounded-t-xl">
                    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop" alt="Blog post" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-12 h-12 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
                        <Video className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Replit Agent 4 Blog Post</h3>
                    <p className="text-sm text-muted-foreground">Straight from the Replit team — what&apos;s new and why it matters.</p>
                  </CardContent>
                </Card>
              </a>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <section>
              <h2 className="font-heading text-2xl font-bold mb-6">What People Built on the Night</h2>
              <ul className="space-y-4">
                {[
                  "Web and mobile apps from one-line ideas",
                  "Multiple UI variants compared side by side in minutes",
                  "Apps with login, database, and deployment — no code touched",
                  "Slides, animations, and dashboards in a single project"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-primary" /> Ideas People Brought
              </h2>
              <p className="text-muted-foreground mb-6">The best ideas were simple. A problem someone had, turned into something real in under an hour.</p>
              <div className="flex flex-wrap gap-2">
                {["Habit tracker", "Study timer", "Split bill calculator", "Local events feed", "Personal portfolio", "Daily journal"].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium border border-border/40">{tag}</span>
                ))}
              </div>
            </section>
          </div>

          <section className="mb-20">
            <h2 className="font-heading text-2xl font-bold mb-8 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" /> How the Night Went
            </h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {[
                { emoji: "🧠", title: "Quick intro", desc: "What Replit Agent 4 is and why it matters right now" },
                { emoji: "⚡", title: "Live demo", desc: "An app built from scratch in real time in front of the room" },
                { emoji: "🛠️", title: "Mini hackathon", desc: "Everyone brought an idea, Agent 4 helped build it, and things shipped" },
                { emoji: "💬", title: "Demo showcase", desc: "Builders shared what they shipped and connected with each other" },
              ].map((step, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-secondary text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mx-auto">
                    <span className="text-2xl">{step.emoji}</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl bg-card border border-border/50">
                    <div className="font-bold text-lg mb-1">{step.title}</div>
                    <div className="text-muted-foreground text-sm">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center py-12 border-t border-border/40">
            <h2 className="font-heading text-3xl font-bold mb-3">Want to come to the next one?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We run events regularly for engineers curious about AI and building things. Join the community and you&apos;ll be the first to know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.meetup.com/code-coffee-auckland/events/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform">
                  See Upcoming Events
                </Button>
              </a>
              <a href="https://www.meetup.com/code-coffee-auckland/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full hover:-translate-y-1 transition-transform">
                  Join the Community
                </Button>
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
