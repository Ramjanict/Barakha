import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonSeparator from "./common/CommonSeparator";
import { productList } from "@/assets/data";

const HomeSlider = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    arrows: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <CommonSeparator>
      <div className="w-full slider">
        <Slider {...settings}>
          {productList.map((item, i) => (
            <div className="w-full bg-white">
              <img
                className=" object-cover w-full  lg:h-[400px]"
                src={item.image}
                alt="slider"
              />
            </div>
          ))}
        </Slider>
      </div>
    </CommonSeparator>
  );
};

export default HomeSlider;

