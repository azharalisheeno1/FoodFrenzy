import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import g1 from "../../assets/g1.png";
import g2 from "../../assets/g2.png";
import g3 from "../../assets/g3.png";



function Cheifbooks() {

  const guests=[
    {id:1,pic:g1,title:"James Smith – Specifications 2024",pra:"James Smith, a leading industry professional, appreciates our innovative technology management and consultancy solutions. Our approach has empowered organizations globally to streamline their IT processes effectively. ", cate:"Regular Customer", name:"James Smith"},
    {id:2, pic:g2,title:"Robert Lee – IT Strategy Consultant",pra:"Robert Lee, a prominent IT strategy consultant, relies on our advanced technology management services for global organizations. ", cate:"VIP Customer",name:"Clifford Main"},
    {id:3,pic:g3,title:"Maria Gonzalez – Business Transformation Expert",pra:"Maria Gonzalez, a renowned business transformation expert, values our cutting-edge solutions for IT and consultancy. Our customized approach has significantly enhanced operational efficiency for various organizations.", cate:"Customer",name:"Jason"},
  ]
  return (
    <>
       <div className="container mx-auto p-4 mb-10">
      <h1 className="text-4xl font-bold text-center mb-8">Happy Customer</h1>
      <Swiper
        modules={[Pagination,Autoplay]}
        pagination={{ clickable: true }}
        autoplay
        className="mySwiper"
      >
        {guests.map((guest, index) => (
          <SwiperSlide key={index}>
            <div className="flex max-w-[1350px] mx-auto  flex-col lg:flex-row  ">
              <div className="lg:w-2/3  p-4 shadow-xl border-l-2 border-red-500 ">
                <h2 className="text-2xl font-semibold mb-2">{guest.title}</h2>
                <p className="text-gray-700 mb-4">{guest.pra}</p>
                <p className="text-lg font-medium">{guest.name}</p>
                <p className="text-gray-500">{guest.cate}</p>
              </div>
              <div className="lg:w-2/5 lg:pl-8">
               
                  <img
                    src={guest.pic}
                    alt="Customer"
                    className="w-full h-96  object-cover  object-top "
                  />
              
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
    </>
  )
}

export default Cheifbooks