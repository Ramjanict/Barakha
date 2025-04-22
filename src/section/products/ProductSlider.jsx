import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductSlider = ({ product, handleActiveImage }) => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {product?.image.map((item, index) => (
            <CarouselItem key={index} className=" basis-1/4 !ml-0">
              <div
                onClick={() => {
                  handleActiveImage(index);
                }}
                onMouseEnter={() => {
                  handleActiveImage(index);
                }}
                className="w-20 h-20 p-1"
              >
                <img
                  className="object-scale-down w-full h-full transition-all rounded-lg cursor-pointer mix-blend-multiply ring-1 ring-gray-200"
                  src={item}
                  alt=""
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden lg:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductSlider;
