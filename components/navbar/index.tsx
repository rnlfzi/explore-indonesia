"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import NavItem from "./navitem";

import { HiOutlineSearch, HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarBackground =
    scrollPosition > 0 ? "bg-custom-navy/50 backdrop-blur" : "bg-transparent";

  return (
    <nav
      className={`fixed flex items-center w-full h-[100px] px-10 gap-16 ${navbarBackground} z-50`}
    >
      <Image
        src="/images/logo.png"
        width={150}
        height={60}
        alt="logo"
        className="h-[60px] object-contain"
      />
      <div className="flex justify-end lg:justify-between items-center w-full">
        <div className="hidden lg:flex items-center gap-10">
          <NavItem title="destination" href="/" active />
          <NavItem title="experience" href="/" />
          <NavItem title="about" href="/" />
          <NavItem title="gallery" href="/" />
        </div>
        <div className="flex items-center gap-10">
          <HiOutlineSearch className="text-custom-lightgrey text-2xl cursor-pointer" />
          <HiMenu className="text-custom-lightgrey text-2xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
