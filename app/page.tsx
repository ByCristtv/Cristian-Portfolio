import { BackgroundGlow } from "@/components/BackgroundGlow";
import { Navbar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectSection } from "@/components/ProjectSection";
import { Process } from "@/components/Process";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <BackgroundGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsSection />
        <ProjectSection />
        <Process />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
