import { Button } from "@components/ui/button";
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import Link from "next/link";
import Image from "next/image";

import icon from "@assets/images/logo.png";
import menuIcon from "@assets/images/icons/menu.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="bg-violetBg py-8">
      <div className="container-area hidden lg:flex justify-between items-center">
        <Logo />
        <nav>
          <ul className="flex gap-8 text-white items-center text-xl">
            <MenuItems />
            <Link href="/resume.pdf">
              <Button className="bg-[#0753ec] text-xl">Resume</Button>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="container-area lg:hidden flex justify-between items-center">
        <Link href="/">
          <Image src={icon} width={50} height={40} alt="Logo Icon" />
        </Link>
        <Link href="/">
          <span className="text-white font-secondary text-3xl font-semibold">
            Imrul Kaisar
          </span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src={menuIcon} width={30} height={50} alt="mobile menu" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-5 min-w-[250px]">
            <DropdownMenuLabel className="text-lg bg-gray-100 text-center">
              Menu
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="px-2 text-lg">
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/#portfolios">Portfolios</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/#contact">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/resume.pdf" className="w-full">
                  <Button className="bg-[#0753ec] text-xl w-full">
                    Resume
                  </Button>
                </Link>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
