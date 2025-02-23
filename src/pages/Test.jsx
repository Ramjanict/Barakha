import Bento from "@/components/Bento";
import CommonContainer from "@/components/common/CommonContainer";
import React from "react";

const Test = () => {
  return (
    <CommonContainer>
      <div className="w-full  grid  grid-cols-2     place-content-stretch gap-4">
        <div className="bg-red-500 row-span-2 ">
          <Bento />
        </div>
        <div className="grid gap-4 ">
          <Bento />
          <Bento />
        </div>
      </div>
    </CommonContainer>
  );
};

export default Test;
