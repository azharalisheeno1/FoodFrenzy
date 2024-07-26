import React from 'react'
import { IoSearch } from "react-icons/io5";
import { Outlet } from 'react-router-dom';
function BannerSection() {
  return (
    <>
    
    <div 
      className="relative w-full h-72 bg-cover bg-center my-10" 
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-20 h-full text-white">
        <div className="text-center w-1/2 md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold">Welcome to Our Website</h1>
          <p className="mt-2 md:mt-4 text-sm text-justify md:text-base">
          Welcome to Our Website! We are thrilled to have you here. Explore a world of innovation, creativity, and excellence as you navigate through our diverse offerings.

          </p>
        </div>
        <div className=" mt-4 md:mt-0 w-full md:w-full flex justify-end">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-14 bg-white text-black rounded"
            />
            <div className="absolute inset-y-0 -left-2 bg-red-700 rounded-l-md hover:bg-black flex items-center px-3">
             <IoSearch size={30} className=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default BannerSection