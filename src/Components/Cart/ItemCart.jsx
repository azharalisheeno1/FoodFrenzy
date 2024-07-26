import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  Increment,
  Decrement,
} from "../../Redux/Slices/CartSlice";
function ItemCart({ id, image, name, price, starts, qty }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="p-5 mx-4 mt-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl sm:w-2/3 relative">
        <MdDelete
          onClick={() => dispatch(removeFromCart({ id }))}
          size={25}
          className="text-red-600 hover:text-red-700 hover:scale-110 cursor-pointer absolute top-2 right-2"
        />
        <div className="sm:flex gap-5 p-2 w-full items-center">
          <img
            src={image}
            className="sm:h-24 w-72 mx-auto mb-3 sm:mb-0 sm:w-auto hover:scale-110 duration-300"
            alt=""
          />
          <div className="flex flex-col justify-between w-full">
            <h1 className="text-lg font-medium">{name}</h1>

            <img src={starts} className="h-3 w-16" alt="" />
            <div className="flex justify-between items-center mt-2 w-full">
              <div className="flex items-center gap-3">
                <FiMinusCircle
                  onClick={() =>
                    qty > 1 ? dispatch(Decrement({ id })) : (qty = 0)
                  }
                  size={25}
                  className="hover:text-red-700 hover:scale-110"
                />
                <h1>{qty}</h1>
                <GoPlusCircle
                  size={25}
                  onClick={() => dispatch(Increment({ id }))}
                  className="hover:text-blue-700 hover:scale-110"
                />
              </div>
              <div>
                <p className="text-lg font-medium">
                  {" "}
                  <span className="text-sm text-gray-400 mr-2">RS</span> {price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCart;
