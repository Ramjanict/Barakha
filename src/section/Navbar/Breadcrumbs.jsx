import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import CommonContainer from "@/components/common/CommonContainer";

const Breadcrumbs = () => {
  return (
    <div className="bg-secodColor ">
      <CommonContainer>
        <div className="py-2 flex items-center gap-[1px]">
          <p className="cursor-default ">Home</p>
          <span className="pt-1 text-textColor">
            <MdOutlineArrowRightAlt />
          </span>
          <p className="cursor-pointer ">Shop</p>
        </div>
      </CommonContainer>
    </div>
  );
};

export default Breadcrumbs;
