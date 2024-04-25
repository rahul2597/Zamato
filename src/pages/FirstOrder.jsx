import React from "react";

const FirstOrder = () => {
  const firstorder = [
    {
      foodimg:
        "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
      foodname: "Biryani",
    },
    {
      foodimg:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      foodname: "Pizza",
    },
    {
      foodimg:
        "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
      foodname: "Thali",
    },
    {
      foodimg:
        "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
      foodname: "Burger",
    },
    {
      foodimg:
        "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      foodname: "Chicken",
    },
    {
      foodimg:
        "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
      foodname: "Cake",
    },
  ];
  return (
    <div className=" h-[21 rem] items-center pl-[22.5rem] bg-slate-100 p-4 ">
      <h1 className="text-[2rem] text-black font-normal">
        Inspiration for your first order
      </h1>
      <div className="  flex space-x-8 p-4 py-6">
        {firstorder.map((item, index) => (
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-[9.8rem] w-[9.8rem] rounded-full p-4 pt-4 "
              src={item.foodimg}
              alt=""
            />
            <h3 className="text-[1.2rem] font-normal p-2">{item.foodname}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstOrder;
