import React from "react";
import { RiDirectionLine } from "react-icons/ri";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaShare } from "react-icons/fa6";

const Direction = () => {
  return (
    <div>
      <div className=" flex justify-around items-center py-2 ">
        <div className="flex space-x-3">
          <div className="flex justify-center items-center px-2 py-1 border-slate-500 border-[0.5px] space-x-2 rounded-md">
            <RiDirectionLine className="text-red-500" />
            <h2>Direction</h2>
          </div>
          <div className="flex justify-center items-center px-2 py-1 border-slate-500 border-[0.5px] space-x-2 rounded-md ">
            {" "}
            <CiBookmarkPlus className="text-red-500" /> <h2>Bookmark</h2>
          </div>
          <div className="flex justify-center items-center px-2 py-1 border-slate-500 border-[0.5px] space-x-2 rounded-md">
            <FaShare className="text-red-500" />
            <h2>Share</h2>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Direction;
