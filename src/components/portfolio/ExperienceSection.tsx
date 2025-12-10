import { Star, Briefcase } from "lucide-react";

const experienceData = [
  {
    company: "PT SUNHOLD DWA BAHURAKSA",
    role: "Programmer",
    description: "Mengembangkan solusi software dan aplikasi untuk kebutuhan perusahaan.",
    tags: ["#Problem-solver", "#Team-player", "#Detail-oriented"],
  },
  {
    company: "PT CRYSTAL BIRU MEULIGO",
    role: "Content Creator & Cameramen",
    description: "Membuat konten kreatif dan dokumentasi visual untuk keperluan perusahaan.",
    tags: ["#Creative", "#Visual-storyteller", "#Collaborative"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <Star className="absolute top-20 right-16 w-4 h-4 text-accent animate-twinkle" fill="currentColor" />
      <Star className="absolute bottom-16 left-20 w-5 h-5 text-accent animate-twinkle" fill="currentColor" style={{ animationDelay: "0.9s" }} />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-2">Professional Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experienceData.map((exp, index) => (
            <div
              key={exp.company}
              className="group relative bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Briefcase className="w-7 h-7 text-accent" />
              </div>

              <h3 className="font-display text-2xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {exp.role}
              </h3>
              <p className="text-accent text-sm font-medium mb-4">{exp.company}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
