import React from "react";

const CommonSeparator = ({ children, Class }) => {
  return <div className={`py-6 ${Class}`}>{children}</div>;
};

export default CommonSeparator;
