import Link from "next/link";

import { FooterItemProps } from "./index.type";

const FooterItem = ({ title, href }: FooterItemProps) => {
  return (
    <Link
      href={href}
      className="text-custom-lightgrey font-semibold leading-3 text-sm transition-all px-4 py-3"
    >
      {title}
    </Link>
  );
};

export default FooterItem;
