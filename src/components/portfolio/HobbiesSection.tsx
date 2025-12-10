import { Star, Code, Palette, Film, Camera, Layout, Smartphone } from "lucide-react";

const hobbies = [
  { name: "Pemrograman", icon: Code, description: "Membuat solusi digital" },
  { name: "Desain Web", icon: Layout, description: "Membangun website modern" },
  { name: "UI/UX Design", icon: Smartphone, description: "Merancang pengalaman pengguna" },
  { name: "Desain Grafis", icon: Palette, description: "Kreasi visual kreatif" },
  { name: "Video Editing", icon: Film, description: "Produksi konten video" },
  { name: "Fotografi", icon: Camera, description: "Menangkap momen indah" },
];

const HobbiesSection = () => {
  return (
    <section className="section-padding relative bg-card/50">
      <Star className="absolute top-20 left-16 w-5 h-5 text-accent animate-twinkle" fill="currentColor" />
      <Star className="absolute bottom-24 right-20 w-3 h-3 text-accent animate-twinkle" fill="currentColor" style={{ animationDelay: "0.7s" }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-2">Beyond Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Hobbies & Interests
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.name}
              className="group bg-card p-6 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 text-center hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <hobby.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                {hobby.name}
              </h3>
              <p className="text-muted-foreground text-sm">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
