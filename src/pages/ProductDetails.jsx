import CommonContainer from "@/common/CommonContainer";
import ProductContent from "@/section/products/ProductContent";
import ProductImage from "@/section/products/ProductImage";
import ProductSlider from "@/section/products/ProductSlider";
import { useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "@/store/AppStore";
import SocialMedia from "@/common/SocialMedia";
import RelatedProduct from "@/section/products/RelatedProduct";

const ProductDetails = () => {
  const { data } = products();
  const { id } = useParams();

  const product = useMemo(() => {
    return data?.find((item) => item.id === Number(id));
  }, [id]);
  const Relatedproduct = useMemo(() => {
    return data?.filter((item) => item.id !== Number(id));
  }, [id]);

  console.log("product", product);
  console.log("Relatedproduct", Relatedproduct);
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

  const [zoomImageCooridinate, setZoomImageCooridinate] = useState({
    x: 0,
    y: 0,
  });
  const [zoomImage, setZoomImage] = useState(false);

  const handleZoomImage = useCallback(
    (e) => {
      setZoomImage(true);
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      setZoomImageCooridinate({
        x: x,
        y: y,
      });
    },
    [zoomImageCooridinate]
  );

  const handleLeaveImageZoom = () => {
    setZoomImage(false);
  };
  return (
    <CommonContainer>
      <div className="flex flex-col w-full gap-5 py-10 md:flex-row md:gap-10">
        <div className="flex flex-col items-center justify-center w-full gap-10 md:w-1/2">
          <ProductImage
            zoomImage={zoomImage}
            zoomImageCooridinate={zoomImageCooridinate}
            handleZoomImage={handleZoomImage}
            handleLeaveImageZoom={handleLeaveImageZoom}
            activeImage={activeImage}
            product={product}
          />
          <ProductSlider
            handleActiveImage={handleActiveImage}
            product={product}
          />
        </div>
        <div className="w-full md:w-1/2">
          <ProductContent product={product} />
          <SocialMedia />
        </div>
      </div>
      <div>
        <RelatedProduct Relatedproduct={Relatedproduct} />
      </div>
    </CommonContainer>
  );
};

export default ProductDetails;
