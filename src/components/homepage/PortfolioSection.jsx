import bg from "@/assets/images/bg/bg-dots.png";
import PortfolioCard from "@components/shared/PortfolioCard";
import { Separator } from "@components/ui/separator";

import dhakaDwell from "@assets/images/portfolios/dhaka-dwell.png";
import studySync from "@assets/images/portfolios/StudySync.png";
import radiant from "@assets/images/portfolios/Radiant.png";

const PortfolioSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      className="py-20"
    >
      <div className="container-area max-w-4xl space-y-12">
        <h2 className="section-heading text-center">Portfolios</h2>
        <div className="space-y-8">
          <PortfolioCard
            data={{
              image: dhakaDwell,
              title: "Dhaka Dwell",
              type: "Rental Management System",
              description:
                "Efficient frontend solution for apartment rental management. Personalized dashboards, secure Stripe payment and real-time notifications streamline agreement management. Developed with React and React Query for a seamless, interactive user experience.",
              technologies: [
                "React.js",
                "Express.js",
                "Mongoose",
                "Tailwind CSS",
                "Axios",
                "Tanstack Query",
                "Stripe",
              ],
              liveLink: "http://dhakadwell.surge.sh/",
              codeLink: "https://github.com/imrulkaisar/Dhaka-Dwell-client",
            }}
          />
          <PortfolioCard
            data={{
              image: studySync,
              title: "Study Sync",
              type: "Dynamic Assignment Management",
              description:
                "Streamlined system with Firebase auth. Users create, update, delete assignments. Individuals filter, submit, view assignments. Mark completed ones. Public and private pages for creating, managing, updating assignments, ensuring better experience.",
              technologies: [
                "React.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "Axios",
              ],
              liveLink: "https://studysync.surge.sh/",
              codeLink: "https://github.com/imrulkaisar/StudySync-client",
            }}
          />
          <PortfolioCard
            data={{
              image: radiant,
              title: "Radiant Beauty Shop",
              type: "Cosmetics eCommerce shop",
              description:
                "Radiant, an exquisite Beauty and Custometrics eCommerce shop, illuminates your inner glow. Effortlessly add and update products for a personalized beauty routine. The intuitive filtering system ensures easy exploration of products from favorite brands, providing a radiant shopping experience.",
              technologies: [
                "React.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "Firebase",
              ],
              liveLink: "https://radiant.surge.sh/",
              codeLink: "https://github.com/imrulkaisar/Radiant-client",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
