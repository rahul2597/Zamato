import React from "react";
import Navbar from "../Components/Navbar";
import Section from "../Components/Section";
import Filter from "../Components/Filter";
import FirstOrder from "./FirstOrder";
import Topbrand from "./Topbrand";
import Location from "../Components/Location";
import Restaurants from "./Restaurants";
import Explore from "../Components/Explore";
import Footer from "../Components/Footer";
export const Delivery = ({ show }) => {
  return (
    <div className="border-black border- w-full flex flex-col justify-center mt-[0.5px]">
      <Navbar show={show} />

      <Location />
      <Section />
      <Filter />
      <FirstOrder />
      <Topbrand />
      <Restaurants />
      <Explore />
      <Footer />
    </div>
  );
};
