import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AICareersClient } from "@/components/ai-careers-client";

export const metadata: Metadata = {
  title: "AI Careers Landscape — Code, Coffee & AI Auckland",
  description: "The roles shaping AI engineering in 2026. Skills, tools, and experience levels for the most in-demand AI jobs in Auckland and beyond.",
  openGraph: {
    title: "AI Careers Landscape — Code, Coffee & AI Auckland",
    description: "The roles shaping AI engineering in 2026. Skills, tools, and experience required for the most in-demand AI jobs.",
    type: "website",
    url: "https://codencoffee.io/ai-careers",
    images: [{ url: "https://codencoffee.io/logo.png" }],
  },
  twitter: { card: "summary_large_image", title: "AI Careers Landscape — Code, Coffee & AI Auckland", description: "The roles shaping AI engineering in 2026.", images: ["https://codencoffee.io/logo.png"] },
  alternates: { canonical: "https://codencoffee.io/ai-careers" },
};

export default function AICareersPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 flex flex-col">
      <Nav />
      <AICareersClient />
      <Footer />
    </div>
  );
}
