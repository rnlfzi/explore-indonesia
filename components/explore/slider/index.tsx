"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { banners } from "../data";

const Slider = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [active, setActive] = useState(1);

  return (
    <div className="mt-6">
      <Swiper
        navigation={{ prevEl, nextEl }}
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper h-[220px]"
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.src}
              width={500}
              height={350}
              alt="banner"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative flex justify-center items-center mt-5 gap-2">
        <div
          ref={(node) => setPrevEl(node)}
          onClick={() => setActive(1)}
          className={
            active === 1
              ? "w-5 h-2 bg-custom-red rounded-full cursor-pointer"
              : "w-2 h-2 bg-gray-400 rounded-full cursor-pointer"
          }
        />
        <div
          ref={(node) => setNextEl(node)}
          onClick={() => setActive(2)}
          className={
            active === 2
              ? "w-5 h-2 bg-custom-red rounded-full cursor-pointer"
              : "w-2 h-2 bg-gray-400 rounded-full cursor-pointer"
          }
        />
      </div>
    </div>
  );
};

export default Slider;
