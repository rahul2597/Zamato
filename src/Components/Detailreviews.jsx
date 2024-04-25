import React from "react";
import { Link } from "react-router-dom";
import Overview from "../pages/Overview";

const Detailreviews = () => {
  return (
    <div className="pl-[23rem]">
      <div className="flex items-center  space-x-8 text-lg">
        <Link to="/Detailreviews/Overview">
          <div className="flex justify-center items-center px-3 py-1 border-[0.5px] rounded text-slate-400">
            <h1>Overflow</h1>
          </div>
        </Link>
        <Link to="/Detailreviews/orderOnline">
          <div className="flex justify-center items-center px-3 py-1 border-[0.5px] rounded text-slate-400">
            <h2>Order Online</h2>
          </div>
        </Link>
        <Link to="/Detailreviews/Reviews">
          <div className="flex justify-center items-center px-3 py-1 border-[0.5px] rounded text-slate-400">
            <h2>Reviews</h2>
          </div>
        </Link>
        <Link to="/Detailreviews/Photo">
          <div className="flex justify-center items-center px-3 py-1 border-[0.5px] rounded text-slate-400">
            <h2>Photos</h2>
          </div>
        </Link>

        <Link to="/Detailreviews/Menu">
          <div className="flex justify-center items-center px-3 py-1 border-[0.5px] rounded text-slate-400">
            <h2>Menu</h2>
          </div>
        </Link>
      </div>
      <div className="w-full h-[0.2px] bg-slate-500 mt-2"></div>
    </div>
  );
};

export default Detailreviews;
