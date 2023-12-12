import AboutSection from "@components/homepage/AboutSection";
import EduSection from "@components/homepage/EduSection";
import Hero from "@components/homepage/Hero";
import PortfolioSection from "@components/homepage/PortfolioSection";
import Services from "@components/homepage/Services";
import SkillsSection from "@components/homepage/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <EduSection />
      <Services />
      <PortfolioSection />
    </div>
  );
}
