import React from "react";
import bag from "../assets/images/bag.png";
import { IoMdHeart } from "react-icons/io";
import cart from "../assets/images/logo.jpeg";
const Bento = () => {
  return (
    <div className="w-full h-full  bg-[#F0EDE6] font-geist flex  flex-col items-center  rounded-2xl relative cursor-pointer group   p-4 ">
      <div className="flex justify-between items-center  w-full ">
        <div className="text-[#050505] text-xl font-Geist">
          <h2>Product Name</h2>
          <p className="font-semibold">$150.00</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="z-10 p-2 text-2xl ring-1 ring-[#050505] rounded-full">
            <IoMdHeart />
          </span>
          <div className="w-10 h-10 ">
            <img
              className="w-full h-full rounded-full ring-1 ring-[#050505] p-2"
              src={cart}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="">
        <img className="w-full" src={bag} alt="bang" />
      </div>
    </div>
  );
};

export default Bento;
