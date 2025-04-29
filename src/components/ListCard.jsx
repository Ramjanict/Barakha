import React from "react";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import ScrollTop from "@/common/ScrollTop";

const ListCard = ({ product, id }) => {
  return (
    <Link
      onClick={ScrollTop}
      to={`/products/${id}`}
      className="w-full shadow-[0_0_1px_1px_rgba(0,0,0,.05)] font-geist flex   gap-10 relative cursor-pointer group  hover:translate-y-[-8px] transition-all duration-500 hover:shadow-[-2px_2px_5px_rgba(0,0,0,.5)]  p-4"
    >
      <div className="max-w-[400px] max-h-[400px]">
        <img
          className="object-scale-down w-full h-full "
          src={product?.image[0]}
          alt="product-image"
        />
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="flex justify-between">
          <h2 className="text-[#050505] text-xl">{product?.title}</h2>
          <span className="z-10 p-2 text-2xl bg-white rounded-full ">
            <IoMdHeartEmpty />
          </span>
        </div>
        <div>{product.des}</div>
      </div>

      <div className="w-full h-full bg-[#26262666] absolute top-0 left-0 invisible group-hover:visible transition-all "></div>
    </Link>
  );
};

export default ListCard;
