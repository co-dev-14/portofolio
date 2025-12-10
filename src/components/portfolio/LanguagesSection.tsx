import { Star } from "lucide-react";

const languages = [
  { name: "Bahasa Indonesia", level: 100, flag: "🇮🇩" },
  { name: "English", level: 75, flag: "🇬🇧" },
];

const LanguagesSection = () => {
  return (
    <section className="section-padding relative">
      <Star className="absolute top-16 right-20 w-4 h-4 text-accent animate-twinkle" fill="currentColor" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-2">Communication</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Languages
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="bg-card p-6 rounded-2xl border border-border hover:border-accent/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{lang.flag}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {lang.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{lang.level}% Proficiency</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-orange rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${lang.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
