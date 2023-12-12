// import Image from "next/image";
import bgImage from "@/assets/images/hero-banner.png";
import profileImage from "@/assets/images/imrul-kaisar.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
      className="min-h-screen bg-violetBg flex justify-between items-center bg-cover bg-center"
    >
      <div className="container-area flex justify-between items-center gap-10">
        <h2 className="text-white text-6xl leading-tight font-bold font-secondary">
          Hello! I'm, <br />
          Imrul Kaisar <br />
          Frondend Developer
        </h2>
        <Image
          src={profileImage}
          width="500"
          height="500"
          alt="Profile Image"
          className="rounded-full p-2 border-4 bg-[rgba(255,255,255,0.5)]"
        />
      </div>
    </section>
  );
};

export default Hero;
