import { Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-accent" fill="currentColor" />
          <span className="font-display text-lg font-semibold text-foreground">Farid Syifa Arrahim</span>
        </div>

        <p className="text-muted-foreground text-sm">
          © {currentYear} All rights reserved.
        </p>

        <p className="text-muted-foreground text-sm">
          Made with <span className="text-accent">♥</span> in Indonesia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
