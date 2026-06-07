import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github, Linkedin, Globe, CheckCircle2, ArrowLeft } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Verified Builders · Code, Coffee & AI",
  description: "Community members who are actively shipping products. Meet the builders of the Code, Coffee & AI community.",
  openGraph: {
    title: "Verified Builders · Code, Coffee & AI",
    description: "Community members who are actively shipping products.",
    type: "website",
    url: "https://codencoffee.io/builders",
    images: [{ url: "https://codencoffee.io/logo.png" }],
  },
  twitter: { card: "summary_large_image", title: "Verified Builders · Code, Coffee & AI", description: "Community members who are actively shipping products.", images: ["https://codencoffee.io/logo.png"] },
  alternates: { canonical: "https://codencoffee.io/builders" },
};

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
  {
    id: "matthue",
    name: "Matthue",
    role: "Creator · Fizzap",
    bio: "Developing v2 of Fizzap, a social network platform featuring a 3D-like desktop UI. Handling A-Z design and development using a proprietary JS framework, PHP, and MySQL.",
    tags: ["Full Stack", "Founder", "UI/UX"],
    links: {
      project: "https://www.fizzap.com",
    },
  },
  {
    id: "emanuele",
    name: "Emanuele",
    role: "Builder · Italicore",
    bio: "Building Italicore, a dedicated language learning platform designed to help users master Italian.",
    tags: ["EdTech", "Builder", "Founder"],
    links: {
      project: "https://italicore.com",
    },
  },
  {
    id: "michael-wells",
    name: "Michael Wells",
    role: "Full Stack Developer",
    bio: "AI-centered full stack developer specializing primarily in web technology projects.",
    tags: ["Full Stack", "AI", "Web"],
    links: {
      website: "https://www.sygnal.com",
    },
  },
];

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

function BuilderCard({ builder }: { builder: Builder }) {
  const { name, role, bio, avatar, tags, links } = builder;
  return (
    <article className="group relative flex flex-col bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-start justify-between mb-5">
        <div className="relative">
          {avatar ? (
            <img src={avatar} alt={name} className="w-20 h-20 rounded-2xl object-cover border border-border" />
          ) : (
            <InitialsAvatar name={name} />
          )}
          <span className="absolute -bottom-1.5 -right-1.5 bg-background border border-border rounded-full p-0.5">
            <CheckCircle2 className="w-4 h-4 text-primary fill-primary/10" />
          </span>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 justify-end max-w-[55%]">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/60">{tag}</span>
            ))}
          </div>
        )}
      </div>

      <div className="mb-3">
        <h3 className="font-heading text-lg font-bold text-foreground leading-tight">{name}</h3>
        {role && <p className="text-sm text-muted-foreground mt-0.5">{role}</p>}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{bio}</p>

      {links && Object.keys(links).length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
          )}
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
          )}
          {links.website && (
            <a href={links.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
              <Globe className="w-3.5 h-3.5" /> Website
            </a>
          )}
          {links.project && (
            <a href={links.project} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
              <ExternalLink className="w-3.5 h-3.5" /> Project
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function BuildersPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Nav />

      <section className="pt-36 pb-14 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-7 h-7 text-primary fill-primary/10" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Verified</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-5 leading-[1.1]">Builders</h1>
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">Community members who are actively shipping products.</p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUILDERS.map((builder) => (
              <BuilderCard key={builder.id} builder={builder} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 border-b border-border/10">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-secondary/30 border border-border/50 rounded-3xl p-8 md:p-10 text-center flex flex-col items-center">
            <h2 className="font-heading text-3xl font-bold mb-3">Are you building something?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl leading-relaxed">
              Join us as a verified builder. Share your work, get feedback, and connect with other engineers actively shipping products.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd0vtWO5zy4-xy1e6pk6kshcp9AKg5TdRLVnexXnHkr7YeITg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 transition-all hover:translate-y-[-2px] bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
            >
              Apply as a Builder
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
