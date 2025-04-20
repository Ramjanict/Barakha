import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductSlider = ({ product }) => {
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
            <CarouselItem key={index} className=" basis-1/4">
              <div className="p-1 ">
                <img
                  className="w-20 h-20 rounded-lg cursor-pointer ring-1 ring-gray-200 "
                  src={item}
                  alt=""
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductSlider;
