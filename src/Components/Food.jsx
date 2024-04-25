import React from "react";
import { fooditem } from "../utils/Restorentdata";
import { Link, Route, Router } from "react-router-dom";
import Restaurentdetail from "../pages/Restaurentdetail";

const Food = () => {
  const Detail = () => {};
  return (
    <div>
      <h1 className="text-black pl-[360px] text-[30px] p-4">
        Best Food in Pune
      </h1>
     
      <div className="px-[354px] flex flex-wrap items-center justify-center w-full space-x-5">
        {fooditem.map((item, index) => (
          <Link
            to={`/Restaurentdetail/${item.restaurantName}`}
            className="border-gray hover:border-[0.5px] hover:shadow-2xl h-[348px] w-[350px] pt-2 flex justify-center rounded-lg mt-2 cursor-pointer"
            key={index}
          >
            <div className="rounded h-[250px] w-[330px] relative">
              {item.id}
              <img
                className="h-[248px] w-[328px] rounded-xl"
                src={item.img}
                alt=""
              />

              <div className=" absolute flex bottom-4 justify-center items-center bg-black space-x-2 text-yellow-600 px-2 rounded-sm">
                {/* <PiCrownSimpleFill className=" mx-3" /> */}
                {item.logo}
                {item.discount}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-black font-normal text-lg">
                  {item.restaurantName}
                </div>
                <div className="bg-green-900 text-white rounded-lg px-2 mt-1 text-sm">
                  {item.review}
                </div>
              </div>
              <div className=" text-gray-400 flex justify-between mt-1">
                <div className="text-sm"> {item.foodType}</div>
                <div className="text-sm"> {item.foodPrice}</div>
              </div>
              <div className="text-sm text-gray-400 flex justify-between mt-1">
                <div className="text-sm">{item.location}</div>
                <div className="font-normal text-black"> {item.distance}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Food;
