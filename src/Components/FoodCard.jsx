import React from 'react'
import rating from '../assets/rating.png'
function FoodCard({food}) {
  return (
    <>
    
    <div className="md:max-w-xs max-w-sm p-4 rounded my-5  overflow-hidden shadow-xl shadow-black bg-white mx-3">
      
      <div className="relative overflow-hidden  border-b-2 border-gray-300  hover:border-red-600 duration-300 ease-in sm:h-56 md:h-64 lg:h-56">
        <img
          className="w-full h-56 object-cover pb-5 transition-transform duration-300 ease-in-out transform hover:scale-110"
          src={food.strCategoryThumb}
          alt={food.strCategory}
        />
      </div>
      <div className=" flex items-center py-2 justify-between  ">
        <div className=" text-lg  text-center mb-2">{food.strCategory}</div>
          <img src={rating} className='h-8' alt="" />         
      </div>
    </div>
    </>
  )
}

export default FoodCard