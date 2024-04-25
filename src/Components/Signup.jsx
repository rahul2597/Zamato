import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { UserContext } from "../App";


const Signup = () => {
    const {signupshow}=useContext(UserContext)
  return (
    <div className="w-full h-screen bg-black bg-opacity-80 flex justify-center items-center absolute top-0">
      <div className="border-[0.5px] border-slate-400 rounded-lg bg-white pb-8 pt-4 px-4">
        <div className="flex  text-slate-700 space-x-72 text-[1.8rem] mb-8 ml-3 pb-3 ">
          <h1 className="font-normal">Sign up</h1>
          <h3 className="text-lg text-black font-semibold cursor-pointer" onClick={signupshow}>X</h3>
        </div>
        <div className="felx flex-col  ">
          <input
            className="border-[0.5px] border-slate-400 py-2 block ml-4 m-4 rounded pr-20 pl-2 text-[1.2rem]"
            type="text"
            placeholder="Full Name "
          />
          <input
            className="border-[0.5px] border-slate-400 py-2 block ml-4 m-4 rounded pr-20 pl-2 text-[1.2rem]"
            type="email"
            placeholder="Email"
          />

          <div className="flex space-x-2 m-4">
            <input type="checkbox" />
            <p className="text-sm">
              I agree to Zomato's
              <span className="text-red-500">
                {" "}
                Terms of Service, Privacy Policy{" "}
              </span>{" "}
              and <br />
              <span className="text-red-500">Content Policies</span>
            </p>
          </div>
          <div className="bg-violet-200 p-2 items-center justify-center flex border-[0.5px] border-slate-400 m-4 rounded-lg text-white">
            <h1>Create account</h1>
          </div>
          <div className="text-slate-500 flex  items-center justify-center mx-5 text-lg m-4">
            <div className="w-full h-[1px] bg-slate-400"></div> <h6>or</h6>
            <div className="w-full h-[1px] bg-slate-400"></div>
          </div>
          <div className="flex  justify-center items-center space-x-1 py-1.5 m-4 rounded border-[0.5px] border-slate-400">
            <div>
              <FcGoogle />
            </div>
            <h3 className="text-sm">Sign in with Google</h3>
          </div>
          <hr className="text-slate-600 w-[90%] ml-4 m-4 items-center justify-center flex " />
        </div>
        <h2>
          Already have an account? <span className="text-red-500">Log in </span>
        </h2>
      </div>
    </div>
  );
};

export default Signup;
