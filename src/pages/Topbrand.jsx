import React from "react";

const Topbrand = () => {
  const Brand = [
    {
      Brandname: "McDonald's",
      Brandimg:
        "https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611377090.png",
      time: "26 min",
      bgcolor: "",
    },
    {
      Brandname: "Burger King",
      Brandimg:
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188299.png",
      time: "41 min",
      bgcolor: "",
      Border: "0.1px ",
    },
    {
      Brandname: "KFC",
      Brandimg:
        "https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215152.png",
      time: "33 min",
    },
    {
      Brandname: "Rolls Mania",
      Brandimg:
        "https://b.zmtcdn.com/data/brand_creatives/logos/5a27a3f43344ecdb49c575d0284ebc40_1629438578.png",
      time: "32 min",
    },
    {
      Brandname: "Irani Cafe",
      Brandimg:
        "https://b.zmtcdn.com/data/brand_creatives/logos/05a2c24a8de3f8fe07fc46a07fdbba99_1611576819.png",
      time: "40 min",
    },
    {
      Brandname: "Subway",
      Brandimg:
        "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471832.png",
      time: "38 min",
    },
  ];
  return (
    <div className=" pl-[22.3rem] ">
      <h2 className="text-black text-[2rem] py-6"> Top brands for you</h2>
      <div className=" flex mt2 space-x-8 p-4">
        {Brand.map((item, index) => (
          <div className="flex flex-col justify-center items-center ">
            <img
              className="h-[9.3rem] w-[9.3rem] object-cover rounded-full "
              src={item.Brandimg}
              alt=""
            />
            <h4 className="text-normal text-lg"> {item.Brandname}</h4>
            <h6 className="text-sm ">{item.time}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbrand;
