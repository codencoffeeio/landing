import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Terminal, Users, Cpu, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import heroBg from "@assets/generated_images/sophisticated_coffee_shop_atmosphere_blur.png";
import textureBg from "@assets/generated_images/minimalist_coffee_and_code_abstract_texture.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Navigation (Minimal) */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="font-heading font-bold text-xl tracking-tight text-foreground flex items-center gap-2">
            Code, Coffee & AI
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="https://www.meetup.com/code-coffee-auckland/events/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Events</a>
            <a href="https://www.meetup.com/code-coffee-auckland/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Community</a>
            <Link href="/builders" className="hover:text-primary transition-colors">Builders</Link>
          </div>
        </div>
      </nav>

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
          <div className="max-w-3xl">
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
                View Upcoming Events
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Focus Areas */}
      <section className="py-20 bg-background" id="about">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Column 1 */}
            <div className="group">
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Software Engineering</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deep dives into architecture, clean code, and modern frameworks. From frontend polish to backend scale.
              </p>
            </div>

            {/* Column 2 */}
            <div className="group">
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Sparks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Live demos, fresh tools, and the kind of ideas that make you open a new tab on the way home.
              </p>
            </div>

            {/* Column 3 */}
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
            <Link
              href="/builders"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:translate-y-[-2px] transition-all shadow-lg shadow-primary/20"
            >
              View Verified Builders <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="font-heading font-bold text-2xl tracking-tight mb-2">
                Code, Coffee & AI
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                A community of engineers curious about the future.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/code-coffee-n-ai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://www.meetup.com/code-coffee-auckland/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Meetup</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 Code, Coffee & AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
