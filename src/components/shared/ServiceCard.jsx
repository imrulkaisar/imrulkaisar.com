import { Button } from "@components/ui/button";
import Image from "next/image";

const ServiceCard = ({ icon, title, children }) => {
  return (
    <article className="max-w-xs h-full flex flex-col justify-center items-center text-center gap-2">
      <Image src={icon} width="80" height="80" alt={title} />
      <h4 className="pt-3 font-semibold text-2xl">{title}</h4>
      <p className="text-sm flex-grow">{children}</p>
      <Button variant="link">Learn More</Button>
    </article>
  );
};

export default ServiceCard;
