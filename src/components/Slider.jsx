import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/images/card1.jpg";
import image2 from "../assets/images/card2.jpg";
import image3 from "../assets/images/card2222.jpg";

import image5 from "../assets/images/card8.jpg";
import image6 from "../assets/images/card89.jpg";
import image7 from "../assets/images/card5541.jpg";
import CommonSeparator from "./common/CommonSeparator";

export const sliderlist = [
  { image: image1 },
  { image: image2 },
  { image: image3 },

  { image: image5 },
  { image: image6 },
  { image: image7 },
];
const Ramjan = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 1000,
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
      <div className="w-full ">
        <Slider {...settings}>
          {sliderlist.map((item, i) => (
            <div className="w-full h-full">
              <img className="w-full " src={item.image} alt="slider" />
            </div>
          ))}
        </Slider>
      </div>
    </CommonSeparator>
  );
};

export default Ramjan;

// import React, { useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import slide1 from "../../assets/images/slide1.jpg";
// import slide2 from "../../assets/images/slide2.jpg";
// const slides = [
//   {
//     id: 1,
//     title: "wellcome to fashion",
//     category: "men fashion",
//     img: slide1,
//     button: "shop now",
//   },
//   {
//     id: 2,
//     title: "wellcome to fashion",
//     category: "women fashion",
//     img: slide2,
//     button: "shop now",
//   },
// ];
// const Slider = () => {
//   const [current, setCurrent] = useState(0);
//   const len = slides.length - 1;

//   const handleSlide = () => {
//     setCurrent(current === len ? 0 : current + 1);
//   };

//   return (
//     <div className="relative overflow-hidden group">
//       <div
//         className="flex items-center transition-all duration-500 ease-in-out "
//         style={{ transform: ` translateX(-${current * 100}vw)` }}
//       >
//         {slides.map((slide, index) => {
//           return (
//             <div key={index} className="relative min-w-full group">
//               <img className="w-full" src={slide.img} alt={slide.title} />
//               <div className="absolute flex flex-col items-center gap-4 px-40 -translate-y-1/2 top-1/2">
//                 <p className="text-[#777777] capitalize tracking-[.4rem] font-bold">
//                   {slide.title}
//                 </p>
//                 <h2 className=" uppercase font-bold text-6xl text-[#222] tracking-widest py-0">
//                   {slide.category}
//                 </h2>
//                 <button className="px-6 py-2 font-medium tracking-wider text-white uppercase transition-all hover:text-black bg-blue hover:bg-white ring-2 ring-transparent hover:ring-blue">
//                   {slide.button}
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="absolute flex items-center justify-between w-full px-32 top-1/2 ">
//         <button
//           className="text-2xl transition-all duration-500 -ml-36 group-hover:ml-0 "
//           onClick={handleSlide}
//         >
//           <IoIosArrowBack />
//         </button>
//         <button
//           onClick={handleSlide}
//           className="text-2xl transition-all duration-500 -mr-36 group-hover:mr-0"
//         >
//           <IoIosArrowForward />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;
