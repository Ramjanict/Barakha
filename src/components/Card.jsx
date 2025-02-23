import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import bag from "../assets/images/bag.png";
import { FiArrowUpRight } from "react-icons/fi";
const Card = () => {
  return (
    <div className="bg-[#F0EDE6] font-geist flex  flex-col items-center  rounded-2xl relative cursor-pointer group gap-20  p-4 hover:translate-y-[-8px] transition-all duration-500 hover:shadow-[-2px_2px_5px_rgba(0,0,0,.5)]">
      <div className=" w-full flex  justify-between">
        <h2 className="text-[#050505] text-xl">Product Name</h2>
        <span className=" bg-white p-2 rounded-full text-2xl z-10 ">
          <IoMdHeartEmpty />
        </span>
      </div>
      <div className="text-white flex items-center absolute top-1/2 invisible group-hover:visible transition-all z-30">
        <button className="bg-[#050505] px-10 py-2.5 rounded-full font-medium ">
          View Details
        </button>
        <button className="bg-[#050505] rounded-full p-2.5 text-lg ">
          <FiArrowUpRight />
        </button>
      </div>
      <div className="max-w-[384px]">
        <img className="w-full" src={bag} alt="bang" />
      </div>
      <div className="w-full h-full bg-[#26262666] absolute top-0 invisible group-hover:visible transition-all rounded-2xl "></div>
    </div>
  );
};

export default Card;
