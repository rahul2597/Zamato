import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../App";

const Navbar = () => {
  const { signupshow,loginShowHandle } = useContext(UserContext);
  return (
    <div className="w-full h-[4rem] mt-1 border-black border- flex justify-center items-center space-x-2">
      <div className="border-black border-1">
        <img
          className="w-[8 rem] h-[1.65rem] mr-4 "
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt=""
        />
      </div>

      <div className="border-slate-300 border-[0.2px] rounded-lg flex h-[3.3rem] items-center px-1">
        <div className="border-black border- flex text-2xl space-x-2 ">
          <div className=" items-center mt-1">
            <IoLocationSharp className="text-red-400 items-center mx-1" />
          </div>
          <div className="items-center flex ">
            <input
              className="text-[1rem] focus:outline-none w-full"
              type="text"
              placeholder="Pune"
            />
            <IoMdArrowDropdown className="text-slate-600 mr-2" />
          </div>
        </div>
        <div className="w-[2px] h-[1.62rem] bg-slate-400"></div>

        <div className="border-black border- flex w-[420px] space-x-4 mx-2">
          <div className="border-black border-1 items-center text-2xl">
            <CiSearch  className="text-slate-400"/>
          </div>
          <input
            className="w-full text-[15px] focus:outline-none tracking-wider"
            type="text"
            placeholder="Search for restaurant,cuisine or a dish"
          />
        </div>
      </div>
      <div className="flex space-x-4  ">
        <div className="ml-[20px]"></div>
        <button
          className="border-black border-1 text-slate-400 text-xl"
          onClick={loginShowHandle}
        >
          Log in
        </button>
        <button
          className="border-black border-1 text-slate-400 text-xl"
          onClick={signupshow}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
