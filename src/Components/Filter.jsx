import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import { MdWorkspacePremium } from "react-icons/md";

const Filter = () => {
  return (
    <div className="flex h-[89px] space-x-4  items-center pl-[360px]">
      <div className="h-[87px]  flex justify-center items-center ">
        <div className="flex items-center border-[1.5px] border-gray-400 rounded-lg px-3 py-[6px] text-gray-400 bg-white">
          <BsFilterLeft className="mr-2" />
          Filter
        </div>
      </div>
      <div className="h-[87px]  flex justify-center items-center ">
        <div className="flex items-center border-[1.5px] border-gray-400 rounded-lg px-3 py-[6px] text-gray-400 bg-white">
          <MdWorkspacePremium className="mr-1 text-yellow-500" />
          Gold
        </div>
      </div>
      <div className="h-[87px]  flex justify-center items-center">
        <div className="flex items-center border-[1.5px] border-gray-400 rounded-lg px-3 py-[6px] text-gray-400 bg-white">
          Rating 4.0+
        </div>
      </div>
      <div className="h-[87px]  flex justify-center items-center">
        <div className="flex items-center border-[1.5px] border-gray-400 rounded-lg px-3 py-[6px] text-gray-400 bg-white">
          Outdorseating
        </div>
      </div>
      <div className="h-[87px]  flex justify-center items-center">
        <div className="flex items-center border-[1.5px] border-gray-400 rounded-lg px-3 py-[6px] text-gray-400 bg-white">
          Serves Alcohol
        </div>
      </div>
      <div className="h-[87px] flex justify-center items-center">
        <div className="flex items-center border-[1.5px] border-gray-400 rounded-lg px-3 py-[6px] text-gray-400 bg-white">
          Open now
        </div>
      </div>
      <div className="h-[87px]"></div>
    </div>
  );
};

export default Filter;
