import React from "react";
import BigBento from "./BigBento.jsx";
import Bento from "./Bento.jsx";

const BentoFirst = () => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch  justify-center gap-6 ">
      <div className=" flex-1 rounded-xl">
        <BigBento />
      </div>
      <div className=" flex-1 flex flex-col gap-6">
        <div className="rounded-xl">
          <Bento />
        </div>
        <div className=" rounded-xl">
          <Bento />
        </div>
      </div>
    </div>
  );
};

export default BentoFirst;
