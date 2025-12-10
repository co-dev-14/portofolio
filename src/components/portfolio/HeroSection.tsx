import { Star, Github, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-24">
      {/* Decorative stars */}
      <Star className="absolute top-20 left-10 w-4 h-4 text-accent animate-twinkle" fill="currentColor" />
      <Star className="absolute top-32 right-20 w-6 h-6 text-accent animate-twinkle" fill="currentColor" style={{ animationDelay: "0.5s" }} />
      <Star className="absolute bottom-40 left-1/4 w-3 h-3 text-accent animate-twinkle" fill="currentColor" style={{ animationDelay: "1s" }} />
      <Star className="absolute top-1/3 right-1/3 w-5 h-5 text-accent animate-twinkle" fill="currentColor" style={{ animationDelay: "1.5s" }} />
      <Star className="absolute bottom-32 right-16 w-4 h-4 text-accent animate-twinkle" fill="currentColor" style={{ animationDelay: "0.7s" }} />

      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-8 w-16 h-16 border-2 border-accent/30 rotate-45 animate-float" />
      <div className="absolute bottom-1/3 right-12 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-8 h-8 border border-muted-foreground/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-6">
          <p className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mb-4">
            Welcome to my portfolio
          </p>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Farid</span>{" "}
          <span className="text-gradient">Syifa</span>
          <br />
          <span className="text-foreground">Arrahim</span>
        </h1>

        <p className="text-lg md:text-xl text-accent font-medium mb-4">
          Fullstack Developer | Content Creator
        </p>

        <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Jakarta — Surabaya
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="https://github.com/co-dev-14"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://instagram.com/co.dev_"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
          >
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://tiktok.com/@co.dev_"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
