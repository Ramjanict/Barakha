import React from "react";
import CommonContainer from "../../components/common/CommonContainer";
import Social from "./Social";

const Footer = () => {
  return (
    <div className=" text-white bg-[#1C2431] py-4">
      <CommonContainer>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 place-content-center ">
          <Social />
          <div>
            <h2> HEAD OFFICE</h2>
            <p>138 JURONG GATEWAY ROAD,Singapore 600134.</p>
            <p>+Cell: +65-91517201</p>
            <p>head-office@barakha-enterprise.com</p>
          </div>
          <div>
            <h2> HEAD OFFICE</h2>
            <p>138 JURONG GATEWAY ROAD,Singapore 600134.</p>
            <p>+Cell: +65-91517201</p>
            <p>head-office@barakha-enterprise.com</p>
          </div>
          <div>
            <p>Policy</p>
            <p>Order & Payment Policy</p>
            <p>Warranty</p>
            <p>Shipping & Delivery</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};

export default Footer;
