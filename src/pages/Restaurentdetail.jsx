import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fooditem } from "../utils/Restorentdata";
import Navbar from "../Components/Navbar";
import Location from "../Components/Location";

import Direction from "../Components/Direction";
import Detailreviews from "../Components/Detailreviews";
import Overview from "./Overview";
const Restaurentdetail = () => {
  const { restaurantName } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurantData = () => {
      const foundRestaurant = fooditem.find(
        (item) => item.restaurantName === restaurantName
      );
      setRestaurant(foundRestaurant);
    };

    fetchRestaurantData();
  }, [restaurantName]);

  return (
    <div>
      <Navbar />
      <Location />
      <div className="   flex justify-center items-center space-x-2 mr-2">
        <div className="h-[23rem] w-[42rem] overflow-hidden">
          <img
            className=" hover:scale-110 duration-1000"
            src={restaurant?.img}
            alt=""
          />
        </div>
        <div className="space-y-1 items-center ">
          <div className="h-[11.4rem] w-[12.5rem] overflow-hidden ">
            <img
              className="hover:scale-110 duration-1000"
              src={restaurant?.img2}
              alt=""
            />
          </div>
          <div className="h-[11.4rem] w-[12.5rem] overflow-hidden ">
            <img
              className="hover:scale-110 duration-1000  "
              src={restaurant?.img3}
              alt=""
            />
          </div>
        </div>
        <div className="relative bg-black items-center flex justify-center">
          <img
            className="w-[12.5rem] h-[23rem] opacity-60 drop-shadow-2xl "
            src={restaurant?.img4}
            alt=""
          />
          <p className="absolute top-20 text-white ml-3">View Gallery</p>
        </div>

        {/* {restaurant.restaurantName}
        <div>{restaurant.foodType}</div>
        <div>{restaurant.foodPrice}</div>
        <div>{restaurant.location}</div>
        <div>{restaurant.discount}</div>
        <div>{restaurant.review}</div> */}
      </div>
      <div className=" flex justify-around ">
        <div className="text-[2.3rem] text-slate-900 ml-24">
          <h1 >{restaurant?.restaurantName}</h1>
        </div>
        <div className="flex text-sm  items-center justify-center pr-28 ">
          <div className="flex space-x-2 mr-6">
            <div className="flex items-center">
              <h4 className="bg-green-800 font-bold px-3 py-1 text-white  rounded-lg">
                {restaurant?. diningrateing}
              </h4>
            </div>
            <div className="flex flex-col space-y-1 ">
              <h5 className="font-bold text-black text-normal">{restaurant?.diningnumber}</h5>
              <p className="text-slate-500">Dining Rating</p>
            </div>
          </div>
          <div className="flex space-x-2  ">
            <div className="flex items-center">
              <h4 className="bg-green-800 font-bold px-3 py-1 text-white text-normal rounded-lg">
                {restaurant?. deliveryrateing}
              </h4>
            </div>
            <div className="flex flex-col space-y-1  ">
              <h5 className="font-bold text-black text-normal">{restaurant?.deliverynumber}</h5>
              <p className="text-slate-500">Delivery Rating</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-around items-center ml-4 ">
        <h4 className="text-slate-600 ">
          {restaurant?.foodTypedetail}
          <p className="text-normal text-slate-400 py-2">{restaurant?.location}</p>
          <p className="text-sm text-slate-400 py-1">
            <span className="text-red-500">Open now</span> 
            {restaurant?. openingtime}
          </p>
        </h4>
        <div></div>
      </div>
      <Direction/>
      {/* <Detailreviews/> */}
      <Overview/>
    </div>
  );
};

export default Restaurentdetail;
