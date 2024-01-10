import Link from "next/link";
import { CTAProps } from "./index.type";

const CTA = ({ href, size, label }: CTAProps) => {
  switch (size) {
    case "lg":
      return (
        <Link
          href={href}
          className=" bg-custom-red text-white px-10 py-5 rounded-full"
        >
          {label}
        </Link>
      );
    default:
      return (
        <Link
          href={href}
          className=" bg-custom-red text-white px-6 py-4 rounded-full"
        >
          {label}
        </Link>
      );
  }
};

export default CTA;
