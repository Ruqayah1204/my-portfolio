import { About } from "@/components/about";
import { Contact } from "@/components/contact";
// import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProject } from "@/components/project-section";
import SectionReveal from "@/components/section-reveal";
import { Skills } from "@/components/skills";
// import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <HeroSection />

      <SectionReveal>
        <Skills/>
      </SectionReveal>

      <SectionReveal>
        <FeaturedProject/>
      </SectionReveal>

      <SectionReveal>
        <About />
      </SectionReveal>

      <SectionReveal>
        <Contact />
      </SectionReveal>
    </>
  );
}
