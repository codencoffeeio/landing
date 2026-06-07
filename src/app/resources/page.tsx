import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ResourcesClient } from "@/components/resources-client";

export const metadata: Metadata = {
  title: "AI Resources — Curated by Code, Coffee & AI Auckland",
  description: "The best AI coding tools, learning resources, newsletters, and papers — curated by Auckland's AI engineering community.",
  openGraph: {
    title: "AI Resources — Curated by Code, Coffee & AI Auckland",
    description: "The best AI coding tools, learning resources, newsletters, and papers — curated by Auckland's AI engineering community.",
    type: "website",
    url: "https://codencoffee.io/resources",
    images: [{ url: "https://codencoffee.io/logo.png" }],
  },
  twitter: { card: "summary_large_image", title: "AI Resources — Curated by Code, Coffee & AI Auckland", description: "The best AI coding tools, learning resources, newsletters, and papers — curated by Auckland's AI engineering community.", images: ["https://codencoffee.io/logo.png"] },
  alternates: { canonical: "https://codencoffee.io/resources" },
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 flex flex-col">
      <Nav />
      <ResourcesClient />
      <Footer />
    </div>
  );
}
