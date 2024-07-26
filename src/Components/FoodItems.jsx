import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import axios from "axios";
function FoodItems() {
  const [data, setData] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        const categories = res.data.categories;
        const firstEightCategories = categories.slice(0, 8);
        setData(firstEightCategories);
      })
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center md:text-3xl  text-2xl font-medium">
          Our Specials Menu
        </h1>
        <div className="flex flex-wrap  justify-center py-10 items-center   ">
          {data.map((food) => (
            <FoodCard key={food.idCategory} food={food} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FoodItems;
