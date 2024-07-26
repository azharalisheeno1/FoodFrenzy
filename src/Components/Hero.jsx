import React from "react";
import style from "./Hero.module.css";
import { motion } from "framer-motion";
import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/autoplay";

import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Banners
import pic from "../assets/Banners/slide1.png";
import pic2 from "../assets/Banners/slide2.png";
import pic3 from "../assets/Banners/slide3.png";

import { NavLink, Outlet } from "react-router-dom";

function Hero() {
  const banners = [
    {
      id: 1,
      part1: "Different",
      img: pic,
      title: "For A Different Test",
      description: "This is a unique and different test, designed to challenge your senses and offer a new experience.",
      span: "Spice",
    },
    {
      id: 2,
      img: pic2,
      part1: "Assian Lettuce Wrap",
      title: "Chopped Salad",
      description: "A refreshing chopped salad featuring crisp vegetables and a tangy dressing, perfect for a light meal.",
      span: "Chicken",
    },
    {
      id: 3,
      part1: "BBQ Chicken",
      img: pic3,
      title: "Creamy Avocado",
      description: "A rich and creamy avocado dish, complemented by a hint of citrus and spices for a delicious taste.",
      span: "Salad",
    },
    
  ];

  return (
    <>
      <div 
        className={`${style["img"]} h-screen pt-20  bg-cover  md:bg-center `}
      >
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay
          pagination={{ clickable: true }}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="md:flex p-7  items-center justify-center max-w-[1300px]  mx-auto ">
                <div className="md:w-[50%] text-center md:text-left  ">
                  <h1 className="md:text-4xl  text-2xl font-semibold ">
                    {banner.part1}{" "}
                    <span className="underline text-red-600">
                      {" "}
                      {banner.span}{" "}
                    </span>{" "}
                    {banner.title}
                  </h1>
                  <p className="my-6 text-justify">{banner.description}</p>
                  <NavLink to="/menu">
                  <button className="bg-red-800 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                  Discover Our Menu
                  </button>
                  </NavLink>
                </div>
                <div>
                  <motion.img  initial={{ rotate: 0 }}  animate={{ rotate: 360 }} transition={{ duration: 10 ,repeat:Infinity}} src={banner.img} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Outlet/>
    </>
  );
}

export default Hero;
