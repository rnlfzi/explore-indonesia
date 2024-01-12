import Image from "next/image";
import React from "react";
import CTA from "../cta";

const Map = () => {
  return (
    <div className="w-full h-[500px] bg-white relative">
      <Image
        src="/images/mask-1.png"
        width={1000}
        height={500}
        alt="mask-1"
        className="h-full w-full object-cover absolute z-10"
      />
      <Image
        src="/images/mask-2.png"
        width={1000}
        height={500}
        alt="mask-2"
        className="h-full w-full object-cover absolute z-10"
      />
      <div
        className="absolute top-1/2 left-1/2 h-full flex flex-col justify-center max-w-md text-center gap-5"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <h3 className=" line-clamp-4 md:line-clamp-2 text-2xl font-semibold px-5">
          Our hills and valleys are like nothing you’ve seen.
        </h3>
        <p className="text-sm text-black/60 px-5 line-clamp-5 md:line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
          amet magna commodo, tempus dolor sit amet, laoreet elit. Donec mauris
          tortor.
        </p>
        <div className="mt-5">
          <CTA size="std" label="Start Traveling" href="/" />
        </div>
      </div>
    </div>
  );
};
export default Map;
