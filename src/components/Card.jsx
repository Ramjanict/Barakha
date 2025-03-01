import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import card1 from "../assets/images/5.png";
import { FiArrowUpRight } from "react-icons/fi";
const Card = () => {
  return (
    <div className="bg-[#F0EDE6] font-geist flex  flex-col items-center  rounded-2xl relative cursor-pointer group gap-20  p-4 hover:translate-y-[-8px] transition-all duration-500 hover:shadow-[-2px_2px_5px_rgba(0,0,0,.5)]">
      <div className="flex justify-between w-full ">
        <h2 className="text-[#050505] text-xl">Product Name</h2>
        <span className="z-10 p-2 text-2xl bg-white rounded-full ">
          <IoMdHeartEmpty />
        </span>
      </div>
      <div className="absolute z-30 flex items-center invisible text-white transition-all top-1/2 group-hover:visible">
        <button className="bg-[#050505] px-10 py-2.5 rounded-full font-medium ">
          View Details
        </button>
        <button className="bg-[#050505] rounded-full p-2.5 text-lg ">
          <FiArrowUpRight />
        </button>
      </div>
      <div className="max-w-[384px]">
        <img className="w-full" src={card1} alt="bang" />
      </div>
      <div className="w-full h-full bg-[#26262666] absolute top-0 invisible group-hover:visible transition-all rounded-2xl "></div>
    </div>
  );
};

export default Card;
