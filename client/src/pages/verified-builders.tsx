import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ExternalLink, Github, Linkedin, Globe, CheckCircle2, ArrowLeft } from "lucide-react";

// ─── Builder Data ────────────────────────────────────────────────────────────
// Add new builders here. All fields except `name` and `bio` are optional.
const BUILDERS: Builder[] = [
    {
        id: "ethan",
        name: "Ethan",
        role: "Software Developer · AI Tools",
        bio: "A tech enthusiast passionate about coding and building practical software to solve everyday problems. Currently building an AI-powered English dictionary with 4,000+ monthly active users.",
        tags: ["AI", "Builder", "Founder"],
        links: {
            linkedin: "https://www.linkedin.com/in/huanglisen",
            project: "https://english-dictionary.app/",
        },
    },
];

// ─── Types ────────────────────────────────────────────────────────────────────
interface BuilderLinks {
    github?: string;
    linkedin?: string;
    website?: string;
    project?: string;
}

interface Builder {
    id: string;
    name: string;
    role?: string;
    bio: string;
    avatar?: string;
    tags?: string[];
    links?: BuilderLinks;
}

// ─── Initials Avatar ─────────────────────────────────────────────────────────
function InitialsAvatar({ name }: { name: string }) {
    const initials = name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-border flex items-center justify-center text-2xl font-bold text-primary font-heading select-none">
            {initials}
        </div>
    );
}

// ─── Builder Card ─────────────────────────────────────────────────────────────
function BuilderCard({ builder }: { builder: Builder }) {
    const { name, role, bio, avatar, tags, links } = builder;

    return (
        <article className="group relative flex flex-col bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            {/* subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Avatar + verified badge */}
            <div className="flex items-start justify-between mb-5">
                <div className="relative">
                    {avatar ? (
                        <img
                            src={avatar}
                            alt={name}
                            className="w-20 h-20 rounded-2xl object-cover border border-border"
                        />
                    ) : (
                        <InitialsAvatar name={name} />
                    )}
                    <span className="absolute -bottom-1.5 -right-1.5 bg-background border border-border rounded-full p-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary fill-primary/10" />
                    </span>
                </div>

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 justify-end max-w-[55%]">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/60"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Name + role */}
            <div className="mb-3">
                <h3 className="font-heading text-lg font-bold text-foreground leading-tight">
                    {name}
                </h3>
                {role && (
                    <p className="text-sm text-muted-foreground mt-0.5">{role}</p>
                )}
            </div>

            {/* Bio */}
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                {bio}
            </p>

            {/* Links */}
            {links && Object.keys(links).length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                    {links.github && (
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                        >
                            <Github className="w-3.5 h-3.5" />
                            GitHub
                        </a>
                    )}
                    {links.linkedin && (
                        <a
                            href={links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                        >
                            <Linkedin className="w-3.5 h-3.5" />
                            LinkedIn
                        </a>
                    )}
                    {links.website && (
                        <a
                            href={links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                        >
                            <Globe className="w-3.5 h-3.5" />
                            Website
                        </a>
                    )}
                    {links.project && (
                        <a
                            href={links.project}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Project
                        </a>
                    )}
                </div>
            )}
        </article>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function VerifiedBuilders() {
    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary/20">

            <Helmet>
                <title>Verified Builders · Code, Coffee & AI</title>
                <meta name="description" content="Community members who are actively shipping products. Meet the builders of the Code, Coffee & AI community." />
                <meta property="og:title" content="Verified Builders · Code, Coffee & AI" />
                <meta property="og:description" content="Community members who are actively shipping products." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Verified Builders · Code, Coffee & AI" />
                <meta name="twitter:description" content="Community members who are actively shipping products." />
            </Helmet>

            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
                <div className="container mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="font-heading font-bold text-xl tracking-tight text-foreground flex items-center gap-2 hover:opacity-80 transition-opacity">
                        Code, Coffee & AI
                    </Link>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <a href="/#about" className="hover:text-primary transition-colors">About</a>
                        <a href="https://www.meetup.com/code-coffee-auckland/events/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Events</a>
                        <a href="https://www.meetup.com/code-coffee-auckland/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Community</a>
                        <Link href="/builders" className="text-primary font-semibold">Builders</Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-36 pb-14 px-6">
                <div className="container mx-auto max-w-6xl">
                    <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
                        <ArrowLeft className="w-4 h-4" />
                        Back to home
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <CheckCircle2 className="w-7 h-7 text-primary fill-primary/10" />
                        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Verified</span>
                    </div>

                    <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-5 leading-[1.1]">
                        Builders
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                        Community members who are actively shipping products.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="pb-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {BUILDERS.map((builder) => (
                            <BuilderCard key={builder.id} builder={builder} />
                        ))}
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
