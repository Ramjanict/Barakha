import React from "react";

const CommonHeader = ({ children, Class }) => {
  return <h2 className={`text-[22px] ${Class}`}>{children}</h2>;
};

export default CommonHeader;
