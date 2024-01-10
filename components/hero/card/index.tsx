import React from "react";
import { HeroCardProps } from "./index.type";

const HeroCard = ({ index, title, description }: HeroCardProps) => {
  return (
    <div className="flex flex-col gap-3 py-8 px-16">
      <span className=" text-custom-red font-bold">0{index + 1}</span>
      <h4 className="text-white font-semibold text-xl">{title}</h4>
      <p className="text-custom-lightgrey text-sm">{description}</p>
    </div>
  );
};

export default HeroCard;
