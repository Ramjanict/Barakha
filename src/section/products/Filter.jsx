import { category } from "@/assets/Data";
import { useState } from "react";

const Filter = ({ sidebar, setSidebar }) => {
  return (
    <div
      className={`h-screen duration-300 ${
        sidebar ? "w-16" : "w-60"
      }  bg-secodColor rounded-md`}
    >
      <h3>ramjan</h3>
    </div>
  );
};

export default Filter;
