import CommonContainer from "@/common/CommonContainer";
import ProductContent from "@/section/products/ProductContent";
import ProductImage from "@/section/products/ProductImage";
import ProductSlider from "@/section/products/ProductSlider";
import { useEffect, useState } from "react";
import { productList } from "../assets/Data";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();

  const product = productList.find((item) => item.id === Number(id));
  console.log("product", product);

  return (
    <CommonContainer>
      <div className="flex flex-col w-full gap-5 py-10 md:flex-row md:gap-10">
        <div className="flex flex-col items-center justify-center w-full gap-10 md:w-1/2">
          <ProductImage product={product} />
          <ProductSlider product={product} />
        </div>
        <div className="w-full md:w-1/2">
          <ProductContent product={product} />
        </div>
      </div>
    </CommonContainer>
  );
};

export default ProductDetails;
