import React from "react";
import Food from "../Components/Food";
import { PiCrownSimpleFill } from "react-icons/pi";

const Restaurants = () => {
  const fooditem = [
    {
      img: "https://b.zmtcdn.com/data/pictures/7/19305617/97c95d8aa5fb3cc2a11e4ed81563823e_o2_featured_v2.jpg",
      restaurantName: "Pizza Club",
      foodType: "North Indian Continental...",
      foodPrice: "150 for One",
      location: "Koregaun park pune",
      distance: "58 min",
      discount: " 20%OFF",
      review: "3.6*",
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/chains/5/10215/8290f2b307232f45a7ee2b8b7c3ae1e5_o2_featured_v2.jpg",
      restaurantName: "Burger-Since 1989",
      foodType: "North Indian..",
      foodPrice: "150 for two",
      location: "The Pavillion mall",
      distance: "60 min",
      discount: " 50% OFF",
      review: "4.3*",
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/6/19276276/a26796194f710728da2653667e382b2f_o2_featured_v2.jpg",
      restaurantName: "Akhtar Samsosa",
      foodType: "North Indian Chiness...",
      foodPrice: "150 for two",
      location: "Senapati Bapat Road",
      distance: "47 min",
      discount: " 50% OFF",
      review: "4.4*",
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/chains/1/18738311/da66afee5ad93cc139170d3bc92df97c_o2_featured_v2.jpg",
      restaurantName: "The Momo panda",
      foodType: "momo ...",
      foodPrice: "150 for two",
      location: "The Mill Bund Garden",
      distance: "40 min",
      discount: "10% OFF",
      review: "4.2*",
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/3/19750683/987d86719049d6c9aa9667ae9ad9d2bc_o2_featured_v2.jpg",
      restaurantName: "Garva Biryani",
      foodType: "Biryani",
      foodPrice: "150 for two",
      location: "Kalyani Nagar,pune",
      distance: "30 min",
      discount: "10% OFF",
      review: "4.2*",
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/chains/2/10152/dd88ed01246bc34c56200866611e9a21_o2_featured_v2.jpg",
      restaurantName: "Narural Ice-cream",
      foodType: "Asian,thai, susui",
      foodPrice: "1,500 for two",
      location: "Deccan Gymkhana pune",
      distance: "60min",
      discount: "50% OFF",
      review: "4.2*",
    },

    {
      img: "https://b.zmtcdn.com/data/pictures/0/13480/30c5d30c1ff20a64c778cedf075344ba_o2_featured_v2.jpg",
      restaurantName: "MH-12 pav Bhaji",
      foodType: "Beverage",
      foodPrice: "140 for two",
      location: "Bhosle Shinde pune",
      distance: "36min",
      discount: " 50% OFF",
      review: "4.0*",
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/3/19339153/5fd78962da4448457cd528c2d350608d_o2_featured_v2.jpg",
      restaurantName: "Circl of Crust",
      foodType: "pizza",
      foodPrice: "100 for two",
      location: "Deccan Gyamkhana pune",
      distance: "20 min",
      discount: "50% OFF",
      review: "2.5*",
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/chains/2/18608702/c6ee3d18909461075ef0f6eab8300913_o2_featured_v2.jpg",
      restaurantName: "Box*-Desi MeAL",
      foodType: "North Indian Birayani",
      foodPrice: "250 for two",
      location: "The Pavillion Mall pune",
      distance: "33 MIN",
      discount: "50% OFF",
      review: "4.3*",
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/0/6506550/7263e36422f32e58807acfd8c063dde9_featured_v2.jpg",
      restaurantName: "Skye RoofTop",
      foodType: "South Indian Birayani",
      foodPrice: "2,000 for two",
      location: "Senapati,pune Station pune",
      distance: "3,2 km",
      discount: "",
      review: "4.3*",
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/9/20667439/c781b03599b5f87950cefba964e3ae94_featured_v2.jpg",
      restaurantName: "Mister Merchants",
      foodType: "North Indian Birayani",
      foodPrice: "2,500 for two",
      location: "vimag nagar pune",
      distance: "3,2 km",
      discount: " 10% OFF",
      review: "4.5*",
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/7/18602847/9e480d551a2ab71fed31587a981d44a9_featured_v2.jpg",
      restaurantName: "Publick",
      foodType: "North Indian Birayani",
      foodPrice: "3,000 for two",
      location: "Lohegaon pune",
      distance: "8.0 km",
      discount: "30% OFF",
      review: "4.5*",
    },
  ];
  return (
    <div>
      <h1 className="text-black pl-[360px] text-[30px] p-4">
        Delivery Restaurants in Pune
      </h1>
      <div className="px-[354px] flex flex-wrap items-center justify-center w-full space-x-5">
        {fooditem.map((item, index) => (
          <div
            className="border-gray hover:border-[0.5px] hover:shadow-2xl h-[348px] w-[350px] pt-2 flex justify-center rounded-lg mt-2 "
            key={index}
          >
            <div className="rounded h-[250px] w-[330px] relative">
              <img
                className="h-[248px] w-[328px] rounded-xl"
                src={item.img}
                alt=""
              />
              <div className=" absolute flex bottom-4 justify-center items-center bg-blue-500 space-x-2 text-white px-2 rounded-sm">
                {/* <PiCrownSimpleFill className=" mx-3" /> */}
                {item.logo}
                {item.discount}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-black font-normal text-lg">
                  {item.restaurantName}
                </div>
                <div className="bg-green-900 text-white rounded-lg px-2 mt-1 text-sm">
                  {item.review}
                </div>
              </div>
              <div className=" text-gray-400 flex justify-between mt-1">
                <div className="text-sm"> {item.foodType}</div>
                <div className="text-sm"> {item.foodPrice}</div>
              </div>
              <div className="text-sm text-gray-400 flex justify-between mt-1">
                <div className="text-sm">{item.location}</div>
                <div className="font-normal text-black"> {item.distance}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
