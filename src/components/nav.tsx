"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "https://www.meetup.com/code-coffee-auckland/events/", label: "Events", external: true },
  { href: "/builders", label: "Builders" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
  { href: "/ai-careers", label: "AI Careers" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl tracking-tight text-foreground flex items-center gap-2 hover:opacity-80 transition-opacity">
          Code, Coffee & AI
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.map(({ href, label, external }) =>
            external ? (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{label}</a>
            ) : (
              <Link key={href} href={href} className={`hover:text-primary transition-colors ${pathname === href || pathname.startsWith(href + "/") ? "text-primary font-semibold" : ""}`}>{label}</Link>
            )
          )}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon"><Menu className="w-6 h-6" /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-md">
              <div className="flex flex-col gap-6 mt-8 font-medium">
                {NAV_LINKS.map(({ href, label, external }) =>
                  external ? (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">{label}</a>
                  ) : (
                    <Link key={href} href={href} className={`text-lg hover:text-primary transition-colors ${pathname === href ? "text-primary font-semibold" : ""}`}>{label}</Link>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
