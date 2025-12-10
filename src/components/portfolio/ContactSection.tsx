import { Star, MapPin, Mail, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      <Star className="absolute top-16 left-20 w-4 h-4 text-accent animate-twinkle" fill="currentColor" />
      <Star className="absolute top-32 right-16 w-5 h-5 text-accent animate-twinkle" fill="currentColor" style={{ animationDelay: "0.5s" }} />
      <Star className="absolute bottom-20 left-1/3 w-3 h-3 text-accent animate-twinkle" fill="currentColor" style={{ animationDelay: "1s" }} />

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent text-sm tracking-widest uppercase mb-2">Get In Touch</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Tertarik untuk berkolaborasi atau punya project yang ingin didiskusikan? Jangan ragu untuk menghubungi saya!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 text-foreground">
            <MapPin className="w-5 h-5 text-accent" />
            <span>Jakarta — Surabaya</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="https://github.com/co-dev-14"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
          >
            <Github className="w-5 h-5 text-accent" />
            <span className="text-foreground group-hover:text-accent transition-colors">GitHub</span>
          </a>
          <a
            href="https://instagram.com/co.dev_"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 text-accent" />
            <span className="text-foreground group-hover:text-accent transition-colors">Instagram</span>
          </a>
          <a
            href="https://tiktok.com/@co.dev_"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
            <span className="text-foreground group-hover:text-accent transition-colors">TikTok</span>
          </a>
        </div>

        {/* CTA Button */}
        <Button
          asChild
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-medium rounded-full"
        >
          <a href="mailto:hello@faridsyifa.dev">
            <Mail className="w-5 h-5 mr-2" />
            Say Hello!
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
