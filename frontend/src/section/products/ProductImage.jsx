const ProductImage = ({
  product,
  activeImage,
  zoomImage,
  handleZoomImage,
  handleLeaveImageZoom,
  zoomImageCooridinate,
}) => {
  return (
    <div className="relative w-[320px] sm:w-[100%] sm:h-[600px] p-2 sm:p-0">
      <img
        onMouseMove={handleZoomImage}
        onMouseLeave={handleLeaveImageZoom}
        src={product?.image[activeImage]}
        alt=""
        className="object-scale-down w-full h-full transition-all rounded-lg mix-blend-multiply cursor-zoom-in ring-1 ring-gray-200"
      />

      {zoomImage && (
        <div className="  rounded-lg  absolute  w-[300px] h-[300px] lg:w-96 lg:h-96 bg-gray-50 p-1 top-0 -right-[410px]  overflow-hidden">
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
