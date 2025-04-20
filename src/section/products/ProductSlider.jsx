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
                className="p-1 "
              >
                <img
                  className="w-20 h-20 rounded-lg cursor-pointer lg:w-20 lg:h-20 ring-1 ring-gray-200"
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
