import Link from "next/link";
import React from "react";
import { NavItemProps } from "./index.type";

const NavItem = ({ title, href, active }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={`${
        active ? "text-white border-b-2 border-custom-red" : "text-custom-lightgrey"
      } uppercase font-normal text-sm transition-all px-4 py-3`}
    >
      {title}
    </Link>
  );
};

export default NavItem;
