import img from "../../assets/images/sunflower-oil.jpg";

const ProductImage = ({ productList }) => {
  return (
    <div className="">
      <img className="rounded-lg ring-1 ring-gray-200" src={img} alt="" />
    </div>
  );
};

export default ProductImage;
