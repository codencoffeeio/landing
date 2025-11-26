import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Terminal, Users, Cpu, ArrowRight, ExternalLink } from "lucide-react";
import heroBg from "@assets/generated_images/sophisticated_coffee_shop_atmosphere_blur.png";
import textureBg from "@assets/generated_images/minimalist_coffee_and_code_abstract_texture.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Navigation (Minimal) */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-heading font-bold text-xl tracking-tight text-foreground flex items-center gap-2">
            <span className="text-primary">●</span> Code, Coffee & AI
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#events" className="hover:text-primary transition-colors">Events</a>
            <a href="#community" className="hover:text-primary transition-colors">Community</a>
          </div>
          <Button variant="outline" className="hidden sm:flex border-primary/20 hover:bg-primary/5 text-primary">
            Sign In
          </Button>
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

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Code, Coffee <br />
              <span className="text-primary">& AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-light max-w-xl leading-relaxed">
              Auckland's premier community for developers, creators, and thinkers. Where technology meets conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 transition-all hover:translate-y-[-2px]">
                Join the Community
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-foreground/10 hover:bg-foreground/5 backdrop-blur-sm">
                View Upcoming Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-background" id="about">
        <div className="container mx-auto px-6">
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
              <h3 className="font-heading text-2xl font-bold mb-4">Networking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with Auckland's best engineering talent in a relaxed, ego-free environment over great coffee.
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

      {/* Next Event Section */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden" id="events">
        {/* Abstract texture background for this section */}
        <div className="absolute inset-0 opacity-5 mix-blend-multiply pointer-events-none">
             <img src={textureBg} className="w-full h-full object-cover" alt="" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Upcoming Gathering</h2>
              <p className="text-muted-foreground">Don't miss our next meetup.</p>
            </div>
            <a href="#" className="text-primary font-medium flex items-center gap-2 hover:underline underline-offset-4">
              See all events <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <Card className="border-none shadow-2xl bg-card overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-12 gap-0 min-h-[300px]">
                {/* Date Column */}
                <div className="md:col-span-3 bg-secondary/50 p-8 flex flex-col justify-center items-center text-center border-r border-border/50">
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">December</span>
                  <span className="text-6xl font-heading font-bold text-foreground mb-2">14</span>
                  <span className="text-xl text-primary font-medium">Saturday</span>
                  <div className="mt-6 px-4 py-1 bg-background rounded-full text-xs font-bold tracking-wide border border-border">
                    10:00 AM
                  </div>
                </div>

                {/* Content Column */}
                <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-primary font-medium text-sm mb-4">
                    <span className="bg-primary/10 px-2 py-0.5 rounded text-xs">Panel Discussion</span>
                    <span className="bg-primary/10 px-2 py-0.5 rounded text-xs">Networking</span>
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    The Future of AI Agents in Production
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Join us for a morning of deep technical discussion on building reliable agentic workflows. 
                    Featuring speakers from leading local tech companies. Coffee provided by Daily Daily.
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Generator @ GridAKL, 12 Madden St</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>45 attending</span>
                    </div>
                  </div>
                </div>

                {/* Action Column */}
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center items-center md:items-end bg-secondary/10 border-l border-border/50">
                   <Button size="lg" className="w-full md:w-auto bg-foreground text-background hover:bg-foreground/90 rounded-full">
                     Get Tickets
                   </Button>
                   <p className="mt-4 text-xs text-muted-foreground text-center md:text-right">
                     Free for members.<br/>$10 for non-members.
                   </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 border-t border-border/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="font-heading font-bold text-2xl tracking-tight mb-2">Code, Coffee & AI</div>
              <p className="text-background/60 text-sm max-w-xs">
                Cultivating Auckland's tech ecosystem, one cup at a time.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-background/60 hover:text-background transition-colors">Twitter</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">LinkedIn</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Meetup</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Discord</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/40">
            <p>© 2024 Code, Coffee & AI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background">Privacy Policy</a>
              <a href="#" className="hover:text-background">Code of Conduct</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
