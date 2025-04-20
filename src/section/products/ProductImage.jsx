import img from "../../assets/images/sunflower-oil.jpg";

const ProductImage = ({ product }) => {
  return (
    <div className="">
      <img
        className="rounded-lg ring-1 ring-gray-200"
        src={product?.image[0]}
        alt=""
      />
    </div>
  );
};

export default ProductImage;
