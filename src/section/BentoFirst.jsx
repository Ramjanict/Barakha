import React from "react";
import BigBento from "./BigBento.jsx";
import Bento from "./Bento.jsx";

const BentoFirst = () => {
  return (
    <div className="flex flex-col justify-center gap-6 sm:flex-row ">
      <div className=" flex-2 rounded-xl">
        <BigBento />
      </div>
      <div className="flex flex-col flex-1 gap-6 ">
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
