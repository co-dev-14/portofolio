import { Star, Code, Palette, Film, Camera, Globe, Figma } from "lucide-react";

const skillCategories = [
  {
    title: "Coding",
    icon: Code,
    skills: ["PHP", "Laravel", "Codeigniter", "MySQL"],
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Web Design",
    icon: Globe,
    skills: ["HTML", "CSS", "Javascript", "Figma"],
    color: "from-orange/20 to-orange/5",
  },
  {
    title: "UI/UX Design",
    icon: Figma,
    skills: ["Figma", "User Research", "Prototyping", "Wireframing"],
    color: "from-yellow/20 to-yellow/5",
  },
  {
    title: "Graphics Design",
    icon: Palette,
    skills: ["Photoshop", "Corel Draw", "PixelLab", "Align Motion"],
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Video Editing",
    icon: Film,
    skills: ["Capcut", "Align Motion", "Adobe Premiere Pro"],
    color: "from-orange/20 to-orange/5",
  },
  {
    title: "Photography",
    icon: Camera,
    skills: ["Android Phone", "iOS Phone", "Adobe Illustrator"],
    color: "from-yellow/20 to-yellow/5",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative bg-card/50">
      <Star className="absolute top-24 left-16 w-4 h-4 text-accent animate-twinkle" fill="currentColor" />
      <Star className="absolute top-40 right-24 w-3 h-3 text-accent animate-twinkle" fill="currentColor" style={{ animationDelay: "0.4s" }} />
      <Star className="absolute bottom-20 right-16 w-5 h-5 text-accent animate-twinkle" fill="currentColor" style={{ animationDelay: "1.2s" }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-2">What I Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Technical Skills
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-card p-6 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <category.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-lg group-hover:bg-background/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
