import React from "react";

const CommonContainer = ({ children, Class }) => {
  return (
    <div className={`w-full max-w-[1520px] px-4 md:px-16 mx-auto ${Class}`}>
      {children}
    </div>
  );
};

export default CommonContainer;
