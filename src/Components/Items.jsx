import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Items = (props) => {
  return (
    <div className=" mt-4 mr-4">
      <div className="relative ">
        <img
          className=" h-[330px] object-cover w-[260px] rounded-xl"
          src={props.item.img}
          alt=""
        />
        <div className="h-[330px] object-cover w-[260px] rounded-xl bg-black absolute bottom-0 opacity-30"></div>
        <div className="absolute bottom-1 ml-4 text-white text-xl">
          <h2 className="text-sm font-semibold">{props.item.title}</h2>
          <div className="flex bottom-8">
            <h6 className=" text-sm">{props.item.places}</h6>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
