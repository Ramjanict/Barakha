import img from "../../assets/images/sunflower-oil.jpg";

const ProductImage = ({ product, activeImage }) => {
  return (
    <div className="">
      <img
        className="w-full h-full rounded-lg ring-1 ring-gray-200"
        src={product?.image[activeImage]}
        alt=""
      />
    </div>
  );
};

export default ProductImage;
