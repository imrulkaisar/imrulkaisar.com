import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import Image from "next/image";
import githubIcon from "@assets/images/icons/github.svg";
import desktopIcon from "@assets/images/icons/computer.svg";

const PortfolioCard = ({ data }) => {
  const { image, title, type, description, technologies, liveLink, codeLink } =
    data || {};
  return (
    <div className="portfolio">
      <div className="min-w-[250px]">
        <Image
          className="w-full h-[250px] object-cover object-top border"
          src={image}
          width="300"
          height="300"
          alt={title}
        />
      </div>
      <div className="flex-grow space-y-3">
        <h4 className="font-semibold text-2xl">
          {title} <span className="text-base text-gray-500">- {type}</span>
        </h4>
        <Separator className="h-1" />
        <div className="flex gap-1 flex-wrap">
          {technologies.map((technology, index) => (
            <Badge key={index} variant="secondary">
              {technology}
            </Badge>
          ))}
        </div>
        <div>{description}</div>
        <div className="flex gap-8">
          <div className="flex gap-3 items-center uppercase text-sm font-semibold text-cyan-600">
            <Image src={desktopIcon} width="24" height="24" alt="github" />
            <a href={liveLink} target="_blank">
              Live Website
            </a>
          </div>
          <div className="flex gap-3 items-center uppercase text-sm font-semibold text-cyan-600">
            <Image src={githubIcon} width="24" height="24" alt="github" />
            <a href={codeLink} target="_blank">
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
