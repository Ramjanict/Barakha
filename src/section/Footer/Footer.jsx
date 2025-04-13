import React from "react";
import CommonContainer from "../../common/CommonContainer";
import Social from "./Social";
import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
const Footer = () => {
  return (
    <div className=" text-white bg-[#1C2431] py-8">
      <CommonContainer>
        <div className="grid w-full grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-4">
          <Social />

          <div>
            <h2 className="text-xl font-bold"> Head Office</h2>
            <div className="flex items-start gap-[1px]">
              <span className="pt-1 text-lg text-mainColor">
                <FaLocationDot />
              </span>
              <p className=""> 138 jurong Gateway Road,Singapore</p>
            </div>
            <div className="flex items-start gap-[1px] ">
              <span className="pt-1 text-lg text-mainColor">
                <CgMail />
              </span>
              <p>head-office@barakha-enterprise.com</p>
            </div>
            <div className="flex items-start gap-[1px]">
              <span className="pt-1 text-lg text-mainColor">
                <LiaPhoneVolumeSolid />
              </span>
              <p>+65-91517201</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold"> Bangladesh Office</h2>
            <div className="flex items-start gap-[1px]">
              <span className="pt-1 text-lg text-mainColor">
                <FaLocationDot />
              </span>
              <p className="">House-1 Block-G/1 Mirpur-2 Bangladesh</p>
            </div>
            <div className="flex items-start gap-[1px]">
              <span className="pt-1 text-lg text-mainColor">
                <CgMail />
              </span>
              <p>BD-office@barakha-enterprise.com</p>
            </div>
            <div className="flex items-start gap-[1px]">
              <span className="pt-1 text-lg text-mainColor">
                <FaPhone />
              </span>
              <p>+880-1982248470</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">Policy</h2>
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
