/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Titles from "../Titles";
import { TbVectorTriangle } from "react-icons/tb";
import { prducts } from "@/app/data/products";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

const Catagories = () => {
  const [selectedValue, setselectedValue] = useState("second");
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const classNames = "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white "

  const CatagoryOptions = [
    {
      value: "all",
      title: "All",
    },
    {
      value: "onGoing",
      title: "onGoing",
    },
    {
      value: "completed",
      title: "completed",
    },
  ];
  return (
    <div className="my-16">
      <Titles title="catagories" Icon={TbVectorTriangle} />
      <div className="grid grid-cols-3 my-3 mt-6">
        {CatagoryOptions.map((option) => (
          <button
            key={option.value}
            className=" col-span-1 btn btn-outline btn-sm btn-primary text-white hover:text-subText transitions"
            onClick={() => {
              setselectedValue(option.value);
              alert(option.value);
            }}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* <Select label="Catagory" options={CatagoryOptions} onChange={(e) => setselectedValue(e.target.value)}/> */}
      <div className="my-10 py-4">
        <Swiper
          navigation={{
            nextEl,
            prevEl,
          }}
          // navigation={true}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="w-full xl:h-96 bg-dry lg:h-64 h-48"
        >
          {prducts?.slice(0, 5).map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="p-4 h-rate  hovered border border-border bg-dry rounded-lg overflow-hidden">
                  <img
                    src={`/images/products/${product?.img}`}
                    alt={product?.name}
                    className=" w-full h-full object-cover rounded-lg"
                  />
                  <div className="px-4 hoveres gap-6 bg-main bg-opacity-70 absolute top-0 bottom-0 left-0 right-0">
                    <button className="w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white">
                      <FaHeart />
                    </button>
                    <Link
                      className="font-semibold text-xl trancuted line-clamp-2"
                      href={`/product/${product?.name}`}
                    >
                      {product.name}
                    </Link>
                    {/* <div className="flex gap-4 text-star">
                    <Rating value={movie.rate} />
                  </div> */}
                  </div>
                </div>
              </SwiperSlide>
            );
            //  <Product key={index} product={product} />;
          })}
        </Swiper>
        <div className="w-full px-1 flex-rows  gap-6 pt-12">
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            {" "}
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            {" "}
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
