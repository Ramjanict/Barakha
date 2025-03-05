import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/images/r1.jpg";
import image2 from "../assets/images/2.webp";
import image3 from "../assets/images/r3.webp";
import image4 from "../assets/images/r4.webp";

const Ramjan = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-5 bg-gray-600">
      <div className="w-full px-4 mx-auto xl:container xl:px-16">
        <div className="flex w-full gap-x-10 ">
          <div className="w-full h-full rounded-md ">
            <Slider {...settings}>
              <div className="relative w-full h-full">
                <img
                  className="w-full h-[420px]  rounded-md"
                  src={image1}
                  alt=""
                />
                <div className=" absolute top-1/2 left-16 transform translate-y-[-50%] space-y-2">
                  <h2 className=" uppercase text-5xl text-[#505050] font-bold">
                    50% off
                  </h2>
                  <p className="text-[#545252] capitalize text-2xl">
                    sleeve party dress
                  </p>
                  <button className="px-4 py-2 text-white capitalize rounded-md ltr hover:bg-left">
                    buy now
                  </button>
                </div>
              </div>
              <div className="relative w-full h-full">
                <img
                  className="w-full h-[420px]  rounded-md"
                  src={image2}
                  alt=""
                />
                <div className=" absolute top-1/2 left-16 transform translate-y-[-50%] space-y-2">
                  <h2 className=" uppercase text-5xl text-[#505050] font-bold">
                    70% off
                  </h2>
                  <p className="text-[#545252] capitalize text-2xl">
                    women clothing
                  </p>
                  <button className="px-4 py-2 text-white capitalize rounded-md ltr hover:bg-left">
                    buy now
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ramjan;
