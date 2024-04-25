import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { UserContext } from "../App";
import { useContext } from "react";

const Login = () => {
  const { loginShowHandle } = useContext(UserContext);

  const [code, setCode] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        const countryCodes = data.map((country) => ({
          name: country.name.common,
          alpha2Code: country.cca2,
          alpha3Code: country.cca3,
          callingCodes: country.callingCodes,
        }));

        console.log(countryCodes);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div className="bg-slate-900 bg-opacity-95 w-full h-screen flex  justify-center items-center fixed top-0">
      <div className="border-slate-400 borde-[0.5px] text-2xl text-black bg-white rounded-lg py-5 absolute">
        <div className="bg-white py-1 px-1">
          <div className=" text-slate-700 flex space-x-80 justify-center items-center">
            <h2 className="text-[2rem]">Login</h2>{" "}
            <h1
              className="text-black text-[1.25rem] font-bold cursor-pointer"
              onClick={loginShowHandle}
            >
              X
            </h1>
          </div>
          <div className=" flex flex-col py-4 ">
            <div className="border-slate-400 border-[0.5px] flex m-4 rounded-lg py-2 ">
              {/* <div className="flex justify-center items-center space-x-4 text-slate-500">
                <img
                  className="w-[1rem] h-[1rem] ml-2 rounded-sm"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png"
                  alt=""
                />
                <div className="text-xl">+91</div>
              </div>

              <div className="flex justify-center items-center text-sm">
                <IoMdArrowDropdown className="text-slate-600 " />
                <div className="bg-slate-500 w-[1px] h-[1.5rem] py-2 text-sm"></div>
              </div> */}
              {}
              <input
                className="pl-2 w-[20rem] text-lg"
                type="text"
                placeholder="Phone"
              />
            </div>
            <div className="flex justify-center items-center bg-red-500 rounded-lg m-4 text-white my-2 text-sm py-3">
              Send One Time OTP
            </div>
            <div className="text-slate-500 flex  items-center justify-center mx-5 text-lg">
              <div className="w-full h-[1px] bg-slate-400"></div> <h6>or</h6>
              <div className="w-full h-[1px] bg-slate-400"></div>
            </div>
            <div className="text-slate-500 flex border-[0.5px] border-slate-400 items-center justify-center m-4 rounded-lg">
              <div className="flex  justify-center items-center space-x-1 py-1">
                <div className="text-red-500 text-3xl">
                  <IoIosMail />
                </div>
                <h3 className="text-sm">Continue with Email</h3>
              </div>
            </div>
            <div className="text-slate-500 flex border-[0.5px] border-slate-400 items-center justify-center m-4 rounded-lg ">
              <div className="flex  justify-center items-center space-x-1 py-1">
                <div>
                  <FcGoogle />
                </div>
                <h3 className="text-sm">Sign in with Google</h3>
              </div>
            </div>
            <hr className="text-slate-600 w-[90%] ml-4 m-4 items-center justify-center flex" />
            <div className="flex text-lg ml-4 text-slate-700">
              <h3>New to Zamato?</h3>
              <h3 className="text-red-600">Create Account</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
