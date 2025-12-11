import { Star, ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "JuraganMigran",
    description: "Sistem Pendaftaran dan Pendataan Pekerja Migran Indonesia. Platform komprehensif untuk mengelola data dan proses pendaftaran PMI.",
    tags: ["Laravel", "HTML", "MySQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Talenta by JuraganMigran",
    description: "Sistem LLM untuk Pekerja Migran Indonesia. Solusi berbasis AI untuk membantu dan memberdayakan pekerja migran.",
    tags: ["Laravel", "HTML", "MySQL"],
    link: "#",
    github: "#",
  },
  {
    title: "MigranHub",
    description: "Sistem CMS untuk Pekerja Migran Indonesia. Platform manajemen konten yang terintegrasi untuk komunitas PMI.",
    tags: ["React", "Laravel", "JSON", "MySQL"],
    link: "#",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative bg-card/30">
      <Star className="absolute top-20 left-16 w-4 h-4 text-accent animate-twinkle" fill="currentColor" />
      <Star className="absolute bottom-24 right-20 w-3 h-3 text-orange animate-twinkle" style={{ animationDelay: "1s" }} fill="currentColor" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-accent" />
                <div className="flex gap-3">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/co-dev-14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            Lihat Lebih Banyak di GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
