import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCartFlatbed } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";
import { motion, useScroll } from "framer-motion";
const Navbar = () => {


  
  const [isopne, setIsopen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {

    const handleScroll = () => {
      setSticky(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { id: 1, name: "Home", path: "/",  },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Menu", path: "/menu" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name:  <FaCartFlatbed size={40} className="mr-1" /> , path: "/cart" },
  ];

  return (
    <>
    <nav
      className={`  shadow-md font-semibold fixed w-full z-10 top-0 ${
        sticky ? "bg-white text-black  " : " text-gray-500 "
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex  items-center">
            <img src="../src/assets/logo/logo.png" className="w-20 " alt="" />
            <Link to="/" className="text-lg font-bold ">
              Food Frenzy
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-10">
            {links.map((link) => (
              <Link key={link.id} to={link.path} className="">
                {link.name}
              </Link>
            ))}
     
          </div>
          <div className="md:hidden" onClick={() => setIsopen(!isopne)}>
            <CgMenuRightAlt size={40} className="" />

            {isopne ? (
              <>
                <div className="absolute top-[55px] right-0 h-screen bg-white md:hidden flex flex-col items-center w-full px-14 py-24">
                  <ul className="flex flex-col space-y-12 justify-center items-center">
                    {links.map((link) => (
                      <Link
                        key={link.id}
                        to={link.path}
                        className="text-gray-800 text-3xl hover:text-gray-600"
                      >
                        {link.name}
                      </Link>
                    ))}
     
                  </ul>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <motion.div style={{ scaleX: scrollYProgress }} className="border-b border-4 border-red-500"></motion.div>
    </nav>
    </>
  );
};

export default Navbar;
