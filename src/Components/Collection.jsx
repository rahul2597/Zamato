import React from "react";
import Items from "./Items";
import { itemData } from "./Data";

const Collection = () => {
  
  return (
    <div className="w-full bg-gray-100 pl-[22.5rem] pb-6">
      <div>
        
        <h2 className="text-[30px] mt-2">Collections</h2>

        <h3 className="text-[20px] mt-8 text-gray-600 font-thin">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Pune, based on trends
        </h3>
        <div className="flex">
          {itemData.slice(0,4).map((item, index) => (
            <Items key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
