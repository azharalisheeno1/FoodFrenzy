import React from 'react'
import ch1 from "../../assets/1.png";
import ch2 from "../../assets/2.png";
import ch3 from "../../assets/3.png";
import { Outlet } from 'react-router-dom';

function Chiefs() {
  
const cheiefs=[
  {id:1,name:"Cathy Aenderson",desc:"Chief Executive",img:ch1},
  {id:2,name:"Mike Dooley",desc:"Executive",img:ch2},
  {id:3,name:"Alextina Jimiey",desc:"Food Inspector",img:ch3},

]  
  return (
    <>
    
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Meet Our Team</h1>
      <div className='md:flex justify-center items-center gap-20'>
      {cheiefs.map((cheif)=>
      
      <div key={cheif.id} className="flex flex-wrap justify-center ">
      <div className="m-4  rounded overflow-hidden   border-b-2 hover:border-red-500 border-black shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="relative overflow-hidden">
          <img
            src={cheif.img}
            alt="Team Member"
            className="w-full border h-full object-cover transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="px-6 text-center py-4">
          <h2 className="font-bold text-xl mb-2">{cheif.name}</h2>
          <p className="text-gray-700 text-base">{cheif.desc}</p>
        
        </div>
      </div>
    </div>)} </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Chiefs