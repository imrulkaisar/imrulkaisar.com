import Image from "next/image";
import Link from "next/link";

import icon from "@/assets/images/logo.png";

const Logo = () => {
  return (
    <Link
      className="flex gap-4 items-center text-white font-secondary text-3xl font-semibold"
      href="/"
    >
      <Image src={icon} width={50} height={40} alt="Logo Icon" />
      <span>Imrul Kaisar</span>
    </Link>
  );
};

export default Logo;
