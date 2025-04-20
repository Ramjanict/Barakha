import CommonContainer from "@/common/CommonContainer";
import ProductContent from "@/section/products/ProductContent";
import ProductImage from "@/section/products/ProductImage";
import ProductSlider from "@/section/products/ProductSlider";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "@/store/AppStore";
const ProductDetails = () => {
  const { data } = products();
  const { id } = useParams();

  const product = useMemo(() => {
    return data?.find((item) => item.id === Number(id));
  }, [id]);

  if (!product) {
    return (
      <CommonContainer>
        <div className="py-10 text-center text-red-500">Product not found.</div>
      </CommonContainer>
    );
  }

  const [activeImage, setActiveImage] = useState(0);
  const handleActiveImage = (index) => {
    setActiveImage(index);
  };
  return (
    <CommonContainer>
      <div className="flex flex-col w-full gap-5 py-10 md:flex-row md:gap-10">
        <div className="flex flex-col items-center justify-center w-full gap-10 md:w-1/2">
          <ProductImage activeImage={activeImage} product={product} />
          <ProductSlider
            handleActiveImage={handleActiveImage}
            product={product}
          />
        </div>
        <div className="w-full md:w-1/2">
          <ProductContent product={product} />
        </div>
      </div>
    </CommonContainer>
  );
};

export default ProductDetails;
