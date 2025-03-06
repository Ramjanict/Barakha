import React from "react";
import { IoMdHeart } from "react-icons/io";

import card from "../assets/images/card2.jpg";
import card1 from "../assets/images/card2222.jpg";
import card5 from "../assets/images/5.png";
const Bento = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-full p-4 cursor-pointer bg-gray-50 font-geist rounded-2xl group ">
      <div className="flex items-center justify-between w-full ">
        <div className="text-[#050505] text-xl font-Geist">
          <h2 className="text-2xl">Product Name</h2>
          <h2 className="text-2xl font-extrabold">$150.00</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="z-10 p-2 text-2xl ring-1 ring-[#050505] text-[#C62828]  rounded-full">
            <IoMdHeart />
          </span>
          <div className="w-10 h-10 ">
            <img
              className="w-full h-full rounded-full ring-1 ring-[#050505] p-2"
              src={card5}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="max-h-64 max-w-64">
        <img className="w-full h-full " src={card5} alt="bang" />
      </div>
    </div>
  );
};

export default Bento;
