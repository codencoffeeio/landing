import type { Metadata } from "next";
import { HomeClient } from "@/components/home-client";

export const metadata: Metadata = {
  title: "Code, Coffee & AI — A community of engineers curious about the future",
  description: "A community of engineers curious about the future. Live demos, software engineering, and AI — all over great coffee. Based in Auckland.",
  openGraph: {
    title: "Code, Coffee & AI",
    description: "A community of engineers curious about the future.",
    type: "website",
    url: "https://codencoffee.io/",
    images: [{ url: "https://codencoffee.io/logo.png" }],
  },
  twitter: { card: "summary_large_image", title: "Code, Coffee & AI", description: "A community of engineers curious about the future.", images: ["https://codencoffee.io/logo.png"] },
  alternates: { canonical: "https://codencoffee.io/" },
};

export default function HomePage() {
  return <HomeClient />;
}
