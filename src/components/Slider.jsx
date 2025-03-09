import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/images/copper-cathode.jpg";
import image2 from "../assets/images/thermal-coal .avif";
import image3 from "../assets/images/sunflower.jpg";
import image4 from "../assets/images/soya-bean-oil.webp";
import image5 from "../assets/images/cardamom.png";
import image6 from "../assets/images/yellow-maize.jpg";
import image7 from "../assets/images/white-maize.jpg";
import image8 from "../assets/images/green-mung-beans.webp";
import image9 from "../assets/images/red-kidney-beans.jpg";
import image10 from "../assets/images/white-kidney-bean.jpg";
import image11 from "../assets/images/kabuli-chickpeas.jpg";
import image12 from "../assets/images/red-lentils.jpg";
import image13 from "../assets/images/coffee-beans.jpg";
import image14 from "../assets/images/raw-cashew-nuts.avif";
import image15 from "../assets/images/processed-cashew-nuts.webp";
import image16 from "../assets/images/peanuts.webp";
import image17 from "../assets/images/pistachio-nuts.jpg";
import image18 from "../assets/images/almond-nuts.jpg";
import image19 from "../assets/images/cloves.webp";
import image20 from "../assets/images/black-pepper.jpg";
import image21 from "../assets/images/soya-bean.webp";
import image22 from "../assets/images/sesame-seeds.webp";
import image23 from "../assets/images/dry-chili.jpg";
import image24 from "../assets/images/dates.jpg";
import CommonSeparator from "./common/CommonSeparator";

export const sliderlist = [
  { image: image1 },
  { image: image2 },
  { image: image3 },

  { image: image5 },
  { image: image6 },
  { image: image7 },

  { image: image8 },
  { image: image9 },
  { image: image10 },

  { image: image11 },
  { image: image12 },
  { image: image13 },

  { image: image14 },
  { image: image15 },
  { image: image16 },

  { image: image17 },
  { image: image18 },
  { image: image19 },
  { image: image20 },
  { image: image21 },
  { image: image22 },
  { image: image23 },
  { image: image24 },
];
const Ramjan = () => {
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
          {sliderlist.map((item, i) => (
            <div className="w-full bg-white">
              <img
                className=" object-cover w-full  h-[400px]"
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
