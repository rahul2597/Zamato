import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Explore = () => {
  const data = [
    {
      text: "Popular cuisines near me",
    },
    {
      text: "Popular restaurant types near me",
    },
    {
      text: "Top Restaurant Chains",
    },
    {
      text: "Cities We Deliver To",
    },
  ];

  return (
    <div className="mt-40 pt-8 pl-[22.3rem] ">
      <h1 className=" text-[2rem] text-black">Explore options near me</h1>
      {data.map((item, index) => (
        <div className="border-slate-200 border-[0.2px] w-[68rem] px-8 py-3 my-6 rounded-lg flex justify-between items-center">
          <h1 className="text-[1.2rem] text-slate-800 font-normal">
            {item.text}
          </h1>
          <MdOutlineKeyboardArrowDown className="text-2xl" />
        </div>
      ))}
    </div>
  );
};

export default Explore;
