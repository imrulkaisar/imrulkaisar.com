import AboutSection from "@components/homepage/AboutSection";
import Hero from "@components/homepage/Hero";
import SkillsSection from "@components/homepage/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <AboutSection />
      <SkillsSection />
    </div>
  );
}
