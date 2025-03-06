import React from "react";
import { IoMdHeart } from "react-icons/io";
import card from "../assets/images/card1.jpg";
import image1 from "../assets/images/Elachi.png";

const BigBento = () => {
  return (
    <div className="relative flex flex-col items-center h-full gap-5 p-4 cursor-pointer bg-gray-50 font-geist rounded-2xl group sm:gap-20 ">
      <div className="flex items-center justify-between w-full ">
        <div className="text-[#050505] text-xl font-Geist">
          <h2 className="text-2xl">Product Name</h2>
          <h2 className="text-2xl font-extrabold">$150.00</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="z-10 p-2 text-2xl ring-1 ring-[#050505] text-[#C62828]  rounded-full">
            <IoMdHeart />
          </span>
          <div className="w-10 h-10 bg-gray-50">
            <img
              className="w-full h-full rounded-full ring-1 ring-[#050505] p-2"
              src={card}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" bg-gray-50 max-h-72">
        <img className="w-full h-full " src={image1} alt="bang" />
      </div>
    </div>
  );
};

export default BigBento;
