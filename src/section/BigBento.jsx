import React from "react";
import { IoMdHeart } from "react-icons/io";
import card from "../assets/images/card1.jpg";
const BigBento = () => {
  return (
    <div className="h-full bg-white font-geist flex  flex-col items-center  rounded-2xl relative cursor-pointer group gap-5 sm:gap-20 p-4 ">
      <div className="flex justify-between items-center  w-full ">
        <div className="text-[#050505] text-xl font-Geist">
          <h2 className="text-2xl">Product Name</h2>
          <h2 className="font-extrabold text-2xl">$150.00</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="z-10 p-2 text-2xl ring-1 ring-[#050505] text-[#C62828]  rounded-full">
            <IoMdHeart />
          </span>
          <div className="w-10 h-10 ">
            <img
              className="w-full h-full rounded-full ring-1 ring-[#050505] p-2"
              src={card}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="">
        <img className="w-full h-full " src={card} alt="bang" />
      </div>
    </div>
  );
};

export default BigBento;
