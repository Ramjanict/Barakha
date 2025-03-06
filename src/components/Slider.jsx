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
        <div className="w-full h-[420px] gap-x-10 flex ">
          <div className="w-full lg:w-[65%] h-full rounded-md display ">
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
