import { Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <Star className="absolute top-20 right-20 w-4 h-4 text-accent animate-twinkle" fill="currentColor" />
      <Star className="absolute bottom-20 left-16 w-3 h-3 text-accent animate-twinkle" fill="currentColor" style={{ animationDelay: "0.8s" }} />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
            <div className="relative">
              <div
                className="aspect-[4/5] rounded-2xl overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('foto.jpg')" }}
              >
                {/* overlay opsional */}
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent text-sm tracking-widest uppercase mb-2">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hello, I'm Farid
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Saya <span className="text-foreground font-medium">Farid Syifa Arrahim</span>, seorang Programmer dengan minat di bidang{" "}
                <span className="text-accent">Pemrograman</span>,{" "}
                <span className="text-accent">Desain Web</span>,{" "}
                <span className="text-accent">Desain UI/UX</span>,{" "}
                <span className="text-accent">Desain Grafis</span>,{" "}
                <span className="text-accent">Editing Video</span>, dan{" "}
                <span className="text-accent">Fotografi</span>.
              </p>
              <p>
                Saya menggabungkan kreativitas dan keahlian teknis untuk menciptakan solusi digital yang tidak hanya fungsional, tetapi juga estetis dan user-friendly.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["#Programmer", "#WebDesigner", "#UIUXDesigner", "#ContentCreator", "#Photographer"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
