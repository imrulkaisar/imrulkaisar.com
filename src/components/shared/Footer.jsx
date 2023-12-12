import Image from "next/image";

import emailIcon from "@assets/images/icons/email.svg";
import whatsAppIcon from "@assets/images/icons/whatsapp.svg";
import locationIcon from "@assets/images/icons/location.svg";
import linkedInIcon from "@assets/images/icons/linkedin.svg";
import githubIcon from "@assets/images/icons/github.svg";

const Footer = () => {
  return (
    <footer className="">
      <div className="py-16 bg-gray-700">
        <div className="container-area max-w-4xl flex gap-8 justify-between text-white text-2xl">
          <a
            href="mailto:imrulkaisar3@gmail.com"
            className="flex flex-col gap-5 items-center"
          >
            <Image src={emailIcon} width={60} height={60} alt="whatsapp icon" />
            <p>imrulkaisar3@gmail.com</p>
          </a>
          <a
            href="https://call.whatsapp.com/voice/Kr5Tb6DCXVnIYsBBhwI6Lt"
            className="flex flex-col gap-5 items-center"
          >
            <Image src={whatsAppIcon} width={60} height={60} alt="email icon" />
            <p>+8801775577844</p>
          </a>
          <a href="#" className="flex flex-col gap-5 items-center">
            <Image
              src={locationIcon}
              width={60}
              height={60}
              alt="location icon"
            />
            <p>Dhaka, Bangladesh</p>
          </a>
        </div>
      </div>
      <div className="py-8 bg-gray-900 text-gray-300">
        <div className="container-area flex justify-between items-center">
          <p>&copy;2023 Imrul Kaisar | All Right Reserved</p>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/imrulkaisar/" target="_blank">
              <Image
                src={linkedInIcon}
                width={24}
                height={24}
                alt="linkedin icon"
              />
            </a>
            <a href="https://github.com/imrulkaisar/" target="_blank">
              <Image
                src={githubIcon}
                width={24}
                height={24}
                alt="github icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
