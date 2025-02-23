import React from "react";

const CommonParagraph = ({ children, Class }) => {
  return <p className={`text-sm ${Class}`}>{children}</p>;
};

export default CommonParagraph;
