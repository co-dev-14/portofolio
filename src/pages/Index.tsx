import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import LanguagesSection from "@/components/portfolio/LanguagesSection";
import HobbiesSection from "@/components/portfolio/HobbiesSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import ScrollReveal from "@/components/portfolio/ScrollReveal";
import ProjectsSection from "@/components/portfolio/ProjectsSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <EducationSection />
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <ExperienceSection />
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <ProjectsSection />
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <SkillsSection />
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <LanguagesSection />
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <HobbiesSection />
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <ContactSection />
      </ScrollReveal>
      
      <Footer />
    </main>
  );
};

export default Index;
