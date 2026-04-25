import { About } from "@/components/about";
import { Contact } from "@/components/contact";
// import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProject } from "@/components/project-section";
import { Skills } from "@/components/skills";
// import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Skills/>
      <FeaturedProject/>
      <About />
      <Contact />
    </>
  );
}
