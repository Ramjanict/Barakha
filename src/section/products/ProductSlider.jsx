import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "../../assets/images/green-mung-beans.webp";
import img2 from "../../assets/images/kidney-beans.webp";
import img3 from "../../assets/images/cardamom.png";
import img4 from "../../assets/images/black-pepper.jpg";
const sliderList = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img2 },
  { id: 6, img: img1 },
];

const ProductSlider = () => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {sliderList.map((item, index) => (
            <CarouselItem key={index} className=" basis-1/4">
              <div className="p-1 ">
                <img
                  className="w-20 h-20 rounded-lg cursor-pointer ring-1 ring-gray-200 "
                  src={item.img}
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
