import React from "react";
import Navbar from "../Components/Navbar";
import Restaurentdetail from "./Restaurentdetail";
import overview from "../utils/overview.jpg";
import { MdOutlineContactPage } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import Detailreviews from "../Components/Detailreviews";

const Overview = () => {
  return (
    <>
    <Detailreviews/>
    <div className="flex pl-[23rem]">
      <div className=" flex flex-col px-3  ">
        <h1 className="text-[1.5rem]">About this place</h1>
        <div className="flex space-x-6  mt-4">
          <div className="flex px-2 py-2 space-x-2 border-[0.5px] border-slate-400 rounded-lg text-slate-600">
            <img className="h-[2.5rem] w-[2.5rem]" src={overview} alt="" />
            <div>
              <p className="text-sm">RESTAURANT SAFETY MEASURE</p>
              <h4>Well Sanitized Kitchen</h4>
            </div>
          </div>
          <div className="flex px-2 py-2 space-x-2 border-[0.5px] border-slate-400 rounded-lg text-slate-600">
            <img
              className="h-[2.5rem] w-[2.5rem]"
              src="https://b.zmtcdn.com/data/o2_assets/8ecc61badb80ea685f0afc71a4d721671585754288.png"
              alt=""
            />
            <div>
              <p className="text-sm">RESTAURANT SAFETY MEASURE</p>
              <h4>Well Sanitized Kitchen</h4>
            </div>
          </div>
          <div className="w-[150px]"></div>
        </div>
        <div className="flex justify-between text-[1.5rem] mt-4">
          <div> Menu</div>

          <div className="text-sm text-red-500 mt-2 px-3">See all menus</div>
        </div>
        <div className=" h-[9 rem] w-[9 rem] overflow-hidden mt-2">
          <img
            className="hover:scale-110"
            src="https://b.zmtcdn.com/data/menus/153/18691153/272a7ed2a724c7b1308ad886c4612184.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
            alt=""
          />
        </div>
        <h2>Food Menu</h2>
        <p className="text-sm">1 page</p>
        <h3 className="mt-3 text-normal text-slate-700">Cuisines</h3>
        <div className="flex justify-center items-center px-3 py-2 rounded-2xl border-[0.5px] border-slate-400 w-32 mt-1">
          <h4>North Indian</h4>
        </div>
        <h1 className="mt-2">Popular Dishes</h1>
        <p className="text-sm ">
          Premium Veg Thali, Sweet Paan, Rajasthani Thali, Khichda, Dhokla,
          Farsan
        </p>
        <h1 className="text-lg text-slate-600 mt-1">Average Cost</h1>
        <p className="text-slate-600 mt-1">
          ₹1,400 for two people (approx.)bord <br />
          Exclusive of applicable taxes and charges, if any <br />
          How do we calculate cost for two? <br />
          Digital payments accepted
        </p>
      </div>
      <div className=" relative items-center ml-14 flex flex-col">
        <img
          className="h-[5.33rem] w-[22rem] "
          src=" https://b.zmtcdn.com/data/o2_assets/700cc7305f13546c5fbe4ea94c3c97801682930121.png"
          alt=""
        />
        <div className="absolute top-4 left-48 text-white">
          <h1>Flat 10% OFF</h1>
          <h6>Download app</h6>
        </div>
        <div className=" border-slate-200 border-[0.4px] mt-4 p-4 rounded-lg">
          <h1 className="mt-2">Call</h1>
          <h2 className="text-red-500">
            +912066421185 <br />
            +917507288886
          </h2>
          <div>
            <h1>Directon</h1>
            <img
              className="w-[315px] h-[150px]"
              src="https://maps.zomato.com/php/staticmap?center=18.5335626000,73.8293326000&maptype=zomato&markers=18.5335626000,73.8293326000,pin_res32&sensor=false&scale=2&zoom=16&language=en&size=240x150&size=400x240&size=650x250"
              alt=""
            />
          </div>
          <p className="text-slate-600">
            2nd Floor, The Pavillion Mall, Senapati <br />
            Bapat Road, Pune
          </p>
          <div className=" flex text-slate-700  space-x-2 mt-1">
            <div className="border-slate-400 border-[0.3px] rounded-md px-3 py-1 flex justify-center items-center space-x-2 text-lg text-slate-700">
              <MdOutlineContactPage />
              <h1>Copy</h1>
            </div>
            <div className="border-slate-400 border-[0.3px] rounded-md px-3 py-1 flex justify-center items-center space-x-2 text-lg text-slate-700">
              <FaDirections className="text-red-500" />
              <h1>Direction</h1>
            </div>
          </div>
          <div className="flex items-center text-red-500 text-sm mt-3">
            <p>See all 6 FML - Food Music Love outlets in Pune</p>
            <IoMdArrowDropright />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Overview;
