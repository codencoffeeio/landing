export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 mt-auto">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="font-heading font-bold text-2xl tracking-tight mb-2">Code, Coffee & AI</div>
            <p className="text-muted-foreground text-sm max-w-xs">Cultivating the tech ecosystem, one cup at a time.</p>
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
  );
}
