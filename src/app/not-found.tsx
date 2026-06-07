import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-6xl font-heading font-bold text-primary mb-4">404</p>
        <h1 className="text-2xl font-heading font-bold text-foreground mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto">That page doesn&apos;t exist.</p>
        <Link href="/" className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm font-medium hover:border-primary/40 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back home
        </Link>
      </div>
    </div>
  );
}
