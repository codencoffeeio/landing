import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Sparkles, Lightbulb, Clock, CheckCircle2 } from "lucide-react";

export default function ReplitAgent4() {
    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary/20 flex flex-col">
            <Helmet>
                <title>Pre-Event Guide: Replit Agent 4 — Code, Coffee & AI</title>
                <meta name="description" content="Your pre-event guide for the Replit Agent 4 meetup. Learn what vibe coding is and how to prepare." />
            </Helmet>

            {/* Navigation (Matches Home) */}
            <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
                <div className="container mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
                    <Link href="/">
                        <div className="font-heading font-bold text-xl tracking-tight text-foreground flex items-center gap-2 cursor-pointer">
                            Code, Coffee & AI
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <a href="https://www.meetup.com/code-coffee-auckland/events/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Events</a>
                        <a href="https://www.meetup.com/code-coffee-auckland/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Community</a>
                        <Link href="/builders" className="hover:text-primary transition-colors">Builders</Link>
                        <Link href="/replit-agent-4" className="hover:text-primary transition-colors text-primary font-semibold">Replit Event</Link>
                    </div>
                </div>
            </nav>

            <main className="flex-1 pt-32 pb-20">
                <div className="container mx-auto max-w-4xl px-6">

                    {/* 1. Hero */}
                    <section className="mb-20 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" /> April 12th Event
                        </div>
                        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            Your Pre-Event Guide — <br />
                            <span className="text-primary">Vibe Coding with Replit Agent 4</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-light max-w-2xl leading-relaxed">
                            New to Replit or vibe coding? Start here. Already a builder? There's something for you too.
                        </p>
                    </section>

                    {/* 2. What is Replit & Vibe Coding? */}
                    <section className="mb-20">
                        <h2 className="font-heading text-2xl font-bold mb-4">What is Replit & Vibe Coding?</h2>
                        <div className="p-8 rounded-2xl bg-secondary/30 border border-border/40 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Replit is a platform where anyone — coder or not — can build and deploy real apps straight from their browser. Agent 4 is their latest AI that turns plain English into fully working software. Vibe coding is exactly what it sounds like: you describe the vibe, the AI writes the code. No terminal. No setup. Just ideas becoming real things.
                            </p>
                        </div>
                    </section>

                    {/* 3. Watch Before You Come */}
                    <section className="mb-20">
                        <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
                            <Video className="w-6 h-6 text-primary" /> Watch Before You Come
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
                                        <p className="text-sm text-muted-foreground">Straight from the Replit team — what's new and why it matters.</p>
                                    </CardContent>
                                </Card>
                            </a>
                        </div>
                    </section>

                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        {/* 4. What Agent 4 Can Do */}
                        <section>
                            <h2 className="font-heading text-2xl font-bold mb-6">What You Can Build On The Night</h2>
                            <ul className="space-y-4">
                                {[
                                    "Build a web or mobile app from a one-line idea",
                                    "Design multiple UI variants at once and pick your favourite",
                                    "Handle login, database, and deployment without touching code",
                                    "Generate slides, animations, and dashboards in the same project"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* 5. Come Ready — Bring An Idea */}
                        <section>
                            <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                                <Lightbulb className="w-6 h-6 text-primary" /> Come Ready
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                The mini hackathon works best when you walk in with something in mind. It doesn't have to be polished — just one problem you'd love an app to solve.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Habit tracker", "Study timer", "Split bill calculator", "Local events feed", "Personal portfolio", "Daily journal"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium border border-border/40">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* 6. What's Happening On The Night */}
                    <section className="mb-20">
                        <h2 className="font-heading text-2xl font-bold mb-8 flex items-center gap-2">
                            <Clock className="w-6 h-6 text-primary" /> On The Night
                        </h2>
                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-secondary text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mx-auto">
                                    <span className="text-2xl">🧠</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl bg-card border border-border/50">
                                    <div className="font-bold text-lg mb-1">Quick intro</div>
                                    <div className="text-muted-foreground text-sm">What Replit Agent 4 is and why it matters right now</div>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-secondary text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mx-auto">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl bg-card border border-border/50">
                                    <div className="font-bold text-lg mb-1">Live demo</div>
                                    <div className="text-muted-foreground text-sm">Watch an app get built from scratch in real time</div>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-secondary text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mx-auto">
                                    <span className="text-2xl">🛠️</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl bg-card border border-border/50">
                                    <div className="font-bold text-lg mb-1">Mini hackathon</div>
                                    <div className="text-muted-foreground text-sm">Bring an idea, let Agent 4 build it, see what ships</div>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-secondary text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mx-auto">
                                    <span className="text-2xl">💬</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl bg-card border border-border/50">
                                    <div className="font-bold text-lg mb-1">Demo showcase</div>
                                    <div className="text-muted-foreground text-sm">See what others shipped and connect with fellow builders</div>
                                </div>
                            </div>

                        </div>

                    </section>

                    {/* 7. RSVP Button */}
                    <section className="text-center py-12 border-t border-border/40">
                        <h2 className="font-heading text-3xl font-bold mb-6">Ready to join us?</h2>
                        <a
                            href="https://www.meetup.com/code-coffee-auckland/events/313865621/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform">
                                RSVP on Meetup
                            </Button>
                        </a>
                    </section>

                </div>
            </main>

            {/* 8. Footer (Matches Home + note) */}
            <footer className="bg-card border-t border-border py-12 mt-auto">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-center md:text-left">
                        <div>
                            <div className="font-heading font-bold text-2xl tracking-tight mb-2">
                                Code, Coffee & AI
                            </div>
                            <p className="text-muted-foreground text-sm max-w-xs mx-auto md:mx-0">
                                A community of engineers curious about the future.
                            </p>
                        </div>
                        <div className="flex gap-6 mx-auto md:mx-0">
                            <a href="https://www.linkedin.com/company/code-coffee-n-ai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                            <a href="https://www.meetup.com/code-coffee-auckland/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Meetup</a>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                        <p>© 2026 Code, Coffee & AI. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div >
    );
}
