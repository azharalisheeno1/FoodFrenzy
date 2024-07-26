import React from "react";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import emptycart from "../../assets/empt.png";
function Cart() {
  const cartData = useSelector((state) => state.cart.cart);
  const totalItems = cartData.reduce(
    (totalitem, item) => totalitem + item.qty,
    0
  );
  const totelprice = cartData.reduce(
    (totalprice, item) => totalprice + item.qty * item.price,
    0
  );
  return (
    <>
      <div className="min-h-screen pt-24  mb-10">
        <h1 className="text-center text-2xl text-red-600 md:text-3xl font-medium">
          Cart Selections
        </h1>
        <div className="sm:flex flex-wrap sm:mx-10 ">
          {cartData.length > 0 ? (
            cartData.map(({ id, image, name, price, starts, qty }) => (
              <ItemCart
                key={id}
                id={id}
                image={image}
                name={name}
                price={price}
                starts={starts}
                qty={qty}
              />
            ))
          ) : (
            <div className="mx-auto mt-20">
              <img src={emptycart} className="" alt="" />{" "}
            </div>
          )}
          {/* checkout */}
          <div className=" sm:fixed  right-0 top-40 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl mx-5 mt-20 sm:mt-0 sm:w-1/4 p-8">
            <div className="flex text-gray-700 mb-2 justify-between">
              <p>Total Items</p>
              <p>{totalItems}</p>
            </div>

            <div className="border-b border-gray-400 my-2 "></div>
            <div className="flex text-lg font-bold justify-between">
              <p>Total</p>
              <div>
                <h1>{totelprice}</h1>
              </div>
            </div>
            <button className="bg-red-600 w-full hover:bg-red-700 text-white font-bold py-1 mt-5 px-4 rounded">
              Checkout
            </button>
          </div>
          {/* end */}
        </div>
      </div>
    </>
  );
}

export default Cart;
