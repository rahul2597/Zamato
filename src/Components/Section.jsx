import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import LocalStorage from "../utils/localstorage";
const Section = () => {
  const [selectedTab, setTab] = useState(LocalStorage.getItem("tabInfo"));

  const setTabIndex = (index) => {
    LocalStorage.setItem({ key: "tabInfo", value: index });
    LocalStorage.setItem({ key: "tabInfo", value: index });
    setTab(LocalStorage.getItem("tabInfo"));
  };

  const red = () => {};

  useEffect(() => {
    let data = LocalStorage.getItem("tabInfo");
    if (!data) {
      LocalStorage.setItem({ key: "tabInfo", value: 1 });
    }
  }, []);

  return (
    <>
      <div className=" flex pl-[24rem] items-center h-[5.6rem] space-x-4 mt-2 ml-1">
        <Link onClick={red} to="/" className=" rounded-full space-x-2 ">
          <div className="flex items-center" onClick={() => setTabIndex(1)}>
            <div className="bg-blue-200 rounded-full w-[50px] h-[50px] items-center flex justify-center">
              
              <img
                className="w-[30px] h-[30px] "
                src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp"
                alt=""
              />
            
            </div>
            <h2
              className={`text-xl ml-4 ${
                selectedTab === 1 ? "text-red-400" : "text-slate-400"
              } `}
            >
              Dining Out
            </h2>
          </div>
          <div
            className={` h-[2px] w-52 mt-4 ${
              selectedTab === 1 ? "bg-red-400" : "bg-white"
            }`}
          ></div>
        </Link>

        <Link onClick={red} to="/delivery" className="space-x-2">
          <div className="flex items-center" onClick={() => setTabIndex(2)}>
            <div className="bg-slate-200 rounded-full w-[50px] h-[50px] items-center flex justify-center">
              <img
                className="w-[30px] h-[30px]"
                src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp"
                alt=""
              />
            </div>
            <h2
              className={`text-xl ml-4 ${
                selectedTab === 2 ? "text-red-400" : "text-slate-400"
              } `}
            >
              Delivery
            </h2>
          </div>
          <div
            className={`h-[2px] w-48 mt-4 ${
              selectedTab === 2 ? "bg-red-400" : "bg-white"
            }`}
          ></div>
        </Link>

        <Link onClick={red} to="/night-life" className="space-x-2">
          <div className="flex items-center" onClick={() => setTabIndex(3)}>
            <div className="bg-slate-200 rounded-full w-[50px] h-[50px] items-center flex justify-center">
              <img
                className="w-[30px] h-[30px]"
                src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
                alt=""
              />
            </div>

            <h2
              className={`text-xl ml-4 ${
                selectedTab === 3 ? "text-red-400" : "text-slate-400"
              }`}
            >
              Nightlife
            </h2>
          </div>
          <div
            className={` h-[2px] w-48 mt-4 ${
              selectedTab === 3 ? "bg-red-400" : "bg-white"
            }`}
          ></div>
        </Link>
      </div>
      <hr />
    </>
  );
};

export default Section;
