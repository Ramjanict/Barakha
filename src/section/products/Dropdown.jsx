import React from "react";

const Dropdown = ({ list }) => {
  return (
    <div className="p-2 ml-4 border-l border-gray-200 ">
      {list.map((list) => (
        <p className="cursor-pointer transition-all  hover:bg-[#F4F4F5] py-1 px-2 rounded-md ">
          {list}
        </p>
      ))}
    </div>
  );
};

export default Dropdown;
