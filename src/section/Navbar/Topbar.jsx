import React from "react";
import en from "../../assets/images/en.png";
import fr from "../../assets/images/fr.png";
import es from "../../assets/images/es.png";
import pt from "../../assets/images/pt.png";
import vi from "../../assets/images/vi.png";
import { FaRegHandPointRight } from "react-icons/fa";
import CommonContainer from "@/common/CommonContainer";
const Topbar = () => {
  return (
    <div className="bg-mainColor ">
      <CommonContainer>
        <div className="flex items-center justify-between py-2 text-white ">
          <div>
            <div className="items-center hidden gap-1 cursor-pointer sm:flex ">
              <span>
                <FaRegHandPointRight />
              </span>
              <p> Click to get free consultation</p>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <img
              className="w-6 cursor-pointer"
              title="ramjan"
              src={en}
              alt="english"
            />
            <img className="w-6 cursor-pointer" src={fr} alt="franch" />
            <img className="w-6 cursor-pointer" src={es} alt="spanish" />
            <img className="w-6 cursor-pointer" src={pt} alt="portogal" />
            <img className="w-6 cursor-pointer" src={vi} alt="vitenames" />
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};

export default Topbar;
