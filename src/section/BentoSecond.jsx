import React from "react";
import Bento from "./Bento.jsx";

const BentoSecond = () => {
  const list = new Array(3).fill(null);
  return (
    <div className="w-full flex  flex-col sm:flex-row  items-center justify-between  gap-6">
      {list.map((item, i) => (
        <Bento key={i} />
      ))}
    </div>
  );
};

export default BentoSecond;
