import { Button } from "@components/ui/button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="container-area py-20 flex flex-col items-center space-y-8">
      <p className="max-w-4xl text-center text-xl leading-relaxed">
        Detail-oriented front-end developer passionate about creating seamless
        user experiences. Leveraging expertise in HTML, CSS, and React.js, with
        proficiency in Tailwind Css, to contribute to innovative web projects.
        Seeking a challenging role in front-end development, potentially
        involving Express.js on the backend and MongoDB for comprehensive
        full-stack contributions. Eager to drive impactful solutions for dynamic
        teams.
      </p>
      <Link href="/resume.pdf" download="true">
        <Button className="bg-[#0753ec] text-xl">Download My Resume</Button>
      </Link>
    </section>
  );
};

export default AboutSection;
