import React from "react";

const CommonHeader = ({ children, Class }) => {
  return <h2 className={`text-[22px] font-bold pb-1 ${Class}`}>{children}</h2>;
};

export default CommonHeader;
