/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { FaHeart } from "react-icons/fa";
import { adds } from "@/app/data/adds";

const Banner = () => {
  return (
    <div className="relative w-full">
      <h1 className=" text-4xl font-bold my-3">Seasonal</h1>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full xl:h-96 bg-dry lg:h-64 h-48"
      >
        {adds.map((add, index) => (
          <SwiperSlide key={index} className="relative rounded overflow-hidden">
            <img
              src={`/images/addvertisements/${add.img}`}
              alt={add.title}
              className="w-full h-full object-cover"
            />
            <h1 className="xl:text-4xl text-white truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                {add?.title}  
              </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
