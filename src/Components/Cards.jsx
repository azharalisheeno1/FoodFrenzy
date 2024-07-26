import React from 'react'

import pic from "../assets//cards/1.png"
import pic2 from "../assets//cards/2.png"
import pic3 from "../assets//cards/3.png"
import pic4 from "../assets//cards/4.png"
import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'
function Cards() {

  const cards = [
    {
      imgSrc: pic,
      title: '100% Swiss Quality',
      description: 'Experience the excellence of Swiss craftsmanship, renowned for its precision and reliability. Our products are crafted with meticulous attention to detail.',
    },
    {
      imgSrc: pic2,
      title: 'Organic Production',
      description: 'Our food production process adheres to the highest standards of safety and hygiene. We utilize state-of-the-art technology to ensure efficiency and consistency in every batch. ',
    },
    {
      imgSrc: pic3,
      title: 'Food Law Certified',
      description: 'Our products are fully compliant with all relevant food laws and regulations. We prioritize transparency and safety, ensuring that every item meets stringent legal standards.',
    },
    {
      imgSrc: pic4,
      title: 'Food Production',
      description: 'Embrace the purity of nature with our organic production methods. We prioritize sustainable practices that nurture the environment and promote biodiversity.',
    },
  ];
  return (
    < >
   <div className="flex flex-wrap justify-center gap-6 py-20 px-3">
      {cards.map((card, index) => ( 
        <motion.div 
        whileHover={{ rotate: [0, -5, 5, -5, 5, 0] }}
    transition={{ duration: 0.5 }}
          key={index}
          className="max-w-sm w-full p-6  lg:w-1/5 border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
        >
          <img
            className="w-20 h-20 mx-auto "
            src={card.imgSrc}
            alt={card.title}
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-center">{card.title}</h3>
            <p className="text-gray-600 text-justify ">{card.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
    <Outlet/>
    </>
  )
}

export default Cards