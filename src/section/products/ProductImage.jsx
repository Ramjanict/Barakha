import img from "../../assets/images/sunflower-oil.jpg";

const ProductImage = ({
  product,
  activeImage,
  zoomImage,
  handleZoomImage,
  handleLeaveImageZoom,
  zoomImageCooridinate,
}) => {
  return (
    <div className="relative w-[300px] h-[300px] lg:w-96 lg:h-96 ">
      <img
        onMouseMove={handleZoomImage}
        onMouseLeave={handleLeaveImageZoom}
        src={product?.image[activeImage]}
        alt=""
        className="object-scale-down w-full h-full transition-all rounded-lg mix-blend-multiply cursor-crosshair ring-1 ring-gray-200"
      />

      {zoomImage && (
        // hidden lg:block absolute min-w-[500px] min-h-[400px] bg-slate-200 p-1 top-0 -right-[510px] overflow-hidden
        <div className="  rounded-lg  absolute  w-[300px] h-[300px] lg:w-96 lg:h-96 bg-slate-200 p-1 top-0 -right-[410px]  overflow-hidden">
          <div
            className="object-scale-down w-full h-full scale-125 mix-blend-multiply"
            style={{
              backgroundImage: `url(${product?.image[activeImage]})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: `${zoomImageCooridinate.x * 100}% ${
                zoomImageCooridinate.y * 100
              }%`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ProductImage;
