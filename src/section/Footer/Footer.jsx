import React from "react";
import CommonContainer from "../../components/common/CommonContainer";
import Social from "./Social";

const Footer = () => {
  return (
    <div className=" text-white bg-[#1C2431] py-4">
      <CommonContainer>
        <div className="flex items-center justify-between ">
          <Social />
          <div>a</div>
          <div>b</div>
          <div>c</div>
        </div>
      </CommonContainer>
    </div>
  );
};

export default Footer;
