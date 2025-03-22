import React from "react";

const Dropdown = ({ list }) => {
  return (
    <div className="">
      {list?.map((item, i) => {
        <p key={i}>{item}</p>;
      })}
    </div>
  );
};

export default Dropdown;
