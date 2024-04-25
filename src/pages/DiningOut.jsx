import React from "react";
import Navbar from "../Components/Navbar"
import Section from "../Components/Section";
import Collection from "../Components/Collection";
import Filter from "../Components/Filter";
import Food from "../Components/Food";
import Promotion from "../Components/Promotion";
import Location from "../Components/Location";
import Explore from "../Components/Explore";
import Footer from "../Components/Footer";

const DiningOut = ({show}) => {
  return (
    <div className="border-black border- w-full flex flex-col justify-center mt-[0.5px]">
      <Navbar show={show}/>
      <Location/>
      <Section />
      <Collection />
      <Filter />
      <Promotion />
      <Food />
      <Explore/>
      <Footer/>
    </div>
  );
};

export default DiningOut;
