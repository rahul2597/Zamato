import React from "react";
import { PiCrownSimpleFill } from "react-icons/pi";

const Food = () => {
  const fooditem = [
    {
      img: "https://b.zmtcdn.com/data/pictures/3/20821553/4de78e22247123327cbfbc31ac639fee_featured_v2.jpg?output-format=webp",
      restaurantName: "L7 Club & Lounge",
      foodType: "North Indian Continental...",
      foodPrice: "1,300 for two",
      location: "Koregaun park pune",
      distance: "4.8 km",
      discount: " Flat 10% OFF",
      review: "4.5*",
      logo: <PiCrownSimpleFill className=" mx-3" />,
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/3/18691153/f437b00a51a33894d3e120d3775656a5_featured_v2.jpg?output-format=webp",
      restaurantName: "Maharaja Bhog",
      foodType: "North Indian..",
      foodPrice: "1,400 for two",
      location: "The Pavillion mall",
      distance: "3.2 km",
      discount: " Flat 10% OFF",
      review: "4.6*",
      logo: <PiCrownSimpleFill className=" mx-3" />,
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/2/19860482/d91cf871907d964c80aff9117c0c65cc_featured_v2.jpg?output-format=webp",
      restaurantName: "High Garden",
      foodType: "North Indian Chiness...",
      foodPrice: "1,400 for two",
      location: "Senapati Bapat Road",
      distance: "3.4 km",
      discount: " Flat 10% OFF",
      review: "4.4*",
      logo: <PiCrownSimpleFill className=" mx-3" />,
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/0/18884150/bd5ad869c4242e2cee6bedf4884d7dc2_featured_v2.jpg?output-format=webp",
      restaurantName: "2 Bhk Dinner & key Club",
      foodType: "North Indian ...",
      foodPrice: "3,000 for two",
      location: "The Mill Bund Garden",
      distance: "2 km",
      discount: "",
      review: "4.2*",
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/8/20686188/e529a1ec6d1b7d0efd4d4b148b34643f_featured_v2.jpg?output-format=webp",
      restaurantName: "Yati The Himalayan Kitchen",
      foodType: "Nepalese,Chinese Tibeta",
      foodPrice: "1,500 for two",
      location: "Kalyani Nagar,pune",
      distance: "5.8 km",
      discount: "Flat 10% OFF",
      review: "4.4*",
      logo: <PiCrownSimpleFill className=" mx-3" />,
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/6/20832356/23f5b189d836dd8f2211b15e37868e57_o2_featured_v2.jpg?output-format=webp",
      restaurantName: "Yakii",
      foodType: "Asian,thai, susui",
      foodPrice: "1,500 for two",
      location: "Deccan Gymkhana pune",
      distance: "1.6km",
      discount: "",
      review: "4.2*",
      logo: <PiCrownSimpleFill className=" mx-3" />,
    },

    {
      img: "https://b.zmtcdn.com/data/pictures/3/18664413/e3fe57ec179f4213a7751c94e1ad03e7_featured_v2.jpg?output-format=webp",
      restaurantName: "#60 Degree -Rooftop",
      foodType: "Beverage",
      foodPrice: "1,400 for two",
      location: "Bhosle Shinde pune",
      distance: "1.4km",
      discount: "",
      review: "4.0*",
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/0/19543310/e26e40f9da01828d78fd54191e62926c_featured_v2.jpg?output-format=webp",
      restaurantName: "Italy via Punjabi",
      foodType: "Italy ,punjabi,Indian",
      foodPrice: "1,000 for two",
      location: "Deccan Gyamkhana pune",
      distance: "1.4km",
      discount: "Flat 20% OFF",
      review: "2.5*",
      logo: <PiCrownSimpleFill className=" mx-3" />,
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/chains/5/18676755/63904e3ac22468d0346af4a43917a55f_featured_v2.jpg?output-format=webp",
      restaurantName: "Dhaba-Estd 1986 Delhi",
      foodType: "North Indian Birayani",
      foodPrice: "2,500 for two",
      location: "The Pavillion Mall pune",
      distance: "3,2 km",
      discount: "",
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
      discount: "Flat 10% OFF",
      review: "4.5*",
      logo: <PiCrownSimpleFill className=" mx-3" />,
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/7/18602847/9e480d551a2ab71fed31587a981d44a9_featured_v2.jpg",
      restaurantName: "Publick",
      foodType: "North Indian Birayani",
      foodPrice: "3,000 for two",
      location: "Lohegaon pune",
      distance: "8.0 km",
      discount: "Flat 30% OFF",
      review: "4.5*",
      logo: <PiCrownSimpleFill className=" mx-3" />,
    },
  ];

  return (
    <div>
      <h1 className="text-black pl-[360px] text-[30px] p-4">
        Best Food in Pune
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
              <div className=" absolute flex bottom-4 justify-center items-center bg-black space-x-2 text-yellow-600 px-2 rounded-sm">
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

export default Food;
