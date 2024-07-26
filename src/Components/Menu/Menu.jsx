import { useEffect, useState } from "react";
import { food_list } from "../../assets";
import Loading from "../Loading/Loading";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Slices/CartSlice";

function Menu() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="max-w-screen-xl mx-auto pt-20 p-10 sm:p-10  md:pt-20">
          <h1 className="text-xl my-5 text-center md:text-2xl underline font-medium text-red-600">
            Enjoy Your Favorite Food Choices
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {food_list.map(
              ({ id, image, name, price, description, starts }) => (
                <div
                  key={id}
                  className="rounded overflow-hidden shadow-lg flex flex-col"
                >
                  <div className="relative">
                    <img
                      className="w-full hover:scale-110 ease-in duration-300"
                      src={image}
                      alt="Sunset in the mountains"
                    />
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id,
                            image,
                            name,
                            price,
                            description,
                            starts,
                            qty: 1,
                          })
                        )
                      }
                      className="text-xs hover:scale-125 absolute top-0 right-0 rounded-full bg-red-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-gray-600 hover:text-w-600 transition duration-500 ease-in-out"
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div className="px-6 py-4 mb-auto  ">
                    <div className="flex justify-between ">
                      <p className="font-medium text-md inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                        {name}
                      </p>
                      <p className="text-md   ">Rs {price}</p>
                    </div>
                    <div>
                      <p>{description}</p>
                      <img src={starts} className="mt-2" alt="" />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Menu;
