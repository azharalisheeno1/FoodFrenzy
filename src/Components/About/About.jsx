import React from "react";
import about from "../../assets/exparience.png";
import ab1 from "../../assets/ab1.png";
import ab2 from "../../assets/ab2.png";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <div className="container mx-auto px-4 py-20 lg:pt-20 md:h-screen flex  justify-center items-center">
        <div className="flex flex-wrap md:gap-20 justify-center items-center  ">
          <div className="w-full md:w-1/2 lg:w-[600px] p-4">
            <img
              src={about}
              alt=""
              className="w-full h-auto rounded shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Why We Are The Best
            </h1>
            <p className="text-base text-justify text-gray-500 mb-6">
            Discover why we stand out from the rest. At Food Frenzy, we pride ourselves on delivering unparalleled quality and exceptional service. Our team of experts is dedicated to exceeding your expectations with innovative solutions, meticulous attention to detail, and a customer-first approach. 
            </p>

            <div >
              <div className="w-full flex    my-10 items-center">
                <div>
                  <img src={ab2} alt="" className="h-10 mr-5" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Online Booking</h1>
                  <p className="text-sm">Quick, easy, and secure bookings</p>
                </div>
              </div>

              <div className="w-full flex   my-10 items-center">
                <div>
                  <img src={ab1} alt="" className="h-10 mr-5" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Buffet Service</h1>
                  <p className="text-sm">Savor endless choices and flavors.</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default About;
