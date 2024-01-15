import Image from "next/image";
import FooterItem from "./footer-item";

import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-custom-navy flex flex-col md:flex-row items-center w-full h-full md:h-[100px] px-10 gap-16 py-14">
      <Image
        src="/images/logo-1.png"
        width={150}
        height={60}
        alt="logo"
        className="h-[60px] object-contain"
      />
      <div className="flex flex-col md:flex-row justify-between items-center w-auto md:w-full gap-14">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <FooterItem title="About" href="/" />
          <FooterItem title="Pricing" href="/" />
          <FooterItem title="Company" href="/" />
          <FooterItem title="Blog" href="/" />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 text-white">
          <div className=" flex items-center justify-center text-white gap-5">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaGoogle />
          </div>
          <p className="text-xs">Copyright © 2024 by reynald</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
