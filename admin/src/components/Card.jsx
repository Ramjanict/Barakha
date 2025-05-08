import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";
const Card = ({ product, id }) => {
  return (
    <Link
      onClick={ScrollTop}
      to={`/products/${id}`}
      className=" shadow-[0_0_1px_1px_rgba(0,0,0,.05)] font-geist flex  flex-col items-center  rounded-2xl relative cursor-pointer group gap-20  p-4 hover:translate-y-[-8px] transition-all duration-500 hover:shadow-[-2px_2px_5px_rgba(0,0,0,.5)]"
    >
      <div className="flex justify-between w-full ">
        <h2 className="text-[#050505] text-xl">{product?.title}</h2>
        <span className="z-10 p-2 text-2xl bg-white rounded-full ">
          <IoMdHeartEmpty />
        </span>
      </div>
      <div className="max-w-[384px]">
        <img className="w-full" src={product?.image[0]} alt="product-image" />
      </div>
      <div className="w-full h-full bg-[#26262666] absolute top-0 invisible group-hover:visible transition-all rounded-2xl "></div>
    </Link>
  );
};

export default Card;
