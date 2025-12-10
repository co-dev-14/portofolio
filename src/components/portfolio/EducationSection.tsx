import { Star, GraduationCap } from "lucide-react";

const educationData = [
  {
    school: "SMK Telekomunikasi Darul Ulum",
    level: "Sekolah Menengah Kejuruan",
    icon: "🎓",
  },
  {
    school: "MTs. Miftahul Ulum",
    level: "Madrasah Tsanawiyah",
    icon: "📚",
  },
  {
    school: "SDN Jarak 1",
    level: "Sekolah Dasar",
    icon: "✏️",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative bg-card/50">
      <Star className="absolute top-16 left-20 w-5 h-5 text-accent animate-twinkle" fill="currentColor" />
      <Star className="absolute bottom-24 right-24 w-4 h-4 text-accent animate-twinkle" fill="currentColor" style={{ animationDelay: "0.6s" }} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-2">My Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Education
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.school}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full md:-translate-x-1/2 z-10 ring-4 ring-background" />

                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 transition-colors group">
                    <span className="text-3xl mb-3 block">{edu.icon}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{edu.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
