import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
const Footer = () => {
  return (
    <div className="bg-slate-50 pl-[22rem] py-16">
      <div className=" flex justify-between w-[1100px]">
        <img
          className="w-[8 rem] h-[1.65rem]"
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt=""
        />
        <div className="flex space-x-6">
          <div className=" px-2 py-1 text-lg border-[0.1rem] border-slate-600 rounded-lg flex items-center space-x-2 ">
            <img
              className="h-4 w-6"
              src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
              alt=""
            />
            <h3>India</h3>
            <IoIosArrowDown />
          </div>
          <div className=" px-1 py-1 text-lg border-[0.1rem] border-slate-600 rounded-lg flex items-center space-x-2 ">
            <TbWorld />
            <h3>English </h3>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div className=" flex w-[1050px] py-6 justify-between">
        <div>
          <h4 className="font-semi-bold text-lg pb-2 ">ABOUT ZOMATO</h4>
          <p className=" text-gray-600 space-y-6 font-light text-sm">
            Who We Are <br />
            Blog <br />
            Work With Us <br />
            Investor Relations <br /> Report Fraud <br />
            Press Kit <br /> Contact Us
          </p>
        </div>
        <div>
          <h4 className="font-semi-bold text-lg pb-2">ZOMAVERSE</h4>
          <p className=" text-gray-600 space-y-6 font-light text-sm">
            Zomato Blinkit <br />
            Feeding India <br />
            Hyperpure <br />
            Zomaland <br />
          </p>
        </div>
        <div>
          <h4 className="font-semi-bold text-lg pb-2">FOR RESTAURANTS</h4>
          <p className=" text-gray-600 space-y-6 font-light text-sm">
            Partner With Us <br />
            Apps For You <br />
            <h4 className="font-semi-bold text-lg text-black pb-2">
              FOR ENTERPRISES
            </h4>
            Zomato For Enterprise
          </p>
        </div>
        <div>
          <h4 className="font-semi-bold text-lg pb-2"> LEARN MORE</h4>
          <br />
          <p className=" text-gray-600 space-y-6 font-light text-sm">
            Privacy <br />
            Security <br />
            Terms <br />
            Sitemap <br />
          </p>
        </div>
        <div>
          <h4 className="font-semi-bold text-lg pb-2">SOCIAL LINKS</h4>
          <div className=" flex space-x-4 items-center ">
             <SlSocialLinkedin />
            <SlSocialInstagram />
            <SlSocialTwitter />
            <TiSocialYoutube />
            <TiSocialFacebookCircular />
          </div>
          <br />
          <img
            className="w-40 h-10"
            src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
            alt=""
          />
          <br />
          <img
            className="w-40 h-10"
            src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-[1100px] h-[0.1px] bg-slate-400 pl-[22.3 rem] mt-8"></div>
      <p className="text-sm text-slate-700 py-4">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008 <br />-2024 © Zomato™ Ltd. All rights reserved.</p>
    </div>
  );
};

export default Footer;
