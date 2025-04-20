import CommonHeader from "@/common/CommonHeader";
import React from "react";

const ProductContent = ({ product }) => {
  return (
    <div className="">
      <CommonHeader>{product?.title}</CommonHeader>

      <h2>
        Description :<span>{product?.des}</span>
      </h2>
    </div>
  );
};

export default ProductContent;
