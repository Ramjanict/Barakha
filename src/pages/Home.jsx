import Card from "@/components/Card";
import CommonContainer from "@/components/common/CommonContainer";
import Slider from "@/components/Slider";
import React from "react";
import image from "../assets/images/5.png";
const list = new Array(20).fill(null);
const Home = () => {
  return (
    <div className="py-5 ">
      <CommonContainer>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {list.map((item) => (
            <Card />
          ))}
        </div>
      </CommonContainer>

      <img className="rounded-full" src={image} alt="" />
    </div>
  );
};

export default Home;
