import { category } from "@/assets/Data";
import { useState } from "react";

const Filter = ({ sidebar, setSidebar }) => {
  return (
    <div
      className={` transition-all duration-300  ${
        sidebar ? "w-16" : "w-60"
      }  bg-white shadow-[0px_0px_1px_1px_rgba(0,0,0,0.05)] rounded-md`}
    >
      <div className={`flex flex-col ${sidebar && "items-center"} gap-4`}>
        {category.map((item, i) => (
          <div className="flex gap-1 cursor-pointer">
            <div className="text-3xl transition-all hover:text-mainColor">
              {item.icon}
            </div>
            <span className={`${sidebar && " transition-all  hidden"} `}>
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
