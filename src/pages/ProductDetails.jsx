import CommonContainer from "@/common/CommonContainer";
import ProductContent from "@/section/products/ProductContent";
import ProductImage from "@/section/products/ProductImage";
import ProductSlider from "@/section/products/ProductSlider";
import { useState } from "react";

const ProductDetails = () => {
  const [image, setImage] = useState("");
  return (
    <CommonContainer>
      <div className="flex flex-col w-full gap-5 py-10 md:flex-row md:gap-10">
        <div className="flex flex-col items-center justify-center w-full gap-10 md:w-1/2">
          <ProductImage />
          <ProductSlider />
        </div>
        <div className="w-full md:w-1/2">
          <ProductContent />
        </div>
      </div>
    </CommonContainer>
  );
};

export default ProductDetails;
