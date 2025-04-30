import React from "react";
import Delete from "../assets/images/logo3.png";
const WishDelete = () => {
  return (
    <div className="flex items-center justify-center">
      <button className="text-[#050505] px-10 py-3 rounded-full font-medium  ring-1 ring-[#050505]  hover:text-white hover:bg-[#050505]">
        Clear Closet
      </button>
      <button className="rounded-full p-4 text-xl ring-1 ring-[#050505] ">
        <img className="" src={Delete} alt="" />
      </button>
    </div>
  );
};

export default WishDelete;
