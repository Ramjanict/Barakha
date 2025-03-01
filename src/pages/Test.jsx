import Bento from "@/components/Bento";
import CommonContainer from "@/components/common/CommonContainer";
import { useCounter } from "@/store/AppStore";
import React from "react";

const Test = () => {
 const { count,inc,des,getCurrent,reset}=useCounter()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 ">
      <p className="text-5xl font-bold text-gray-800">count:{count}</p>
      <div className="flex items-center gap-10">
        <button onClick={inc} className="px-8 py-4 text-xl text-white bg-black rounded-md ">inc</button>
        <button onClick={des} className="px-8 py-4 text-xl text-white bg-black rounded-md ">des</button>
        <button onClick={reset} className="px-8 py-4 text-xl text-white bg-black rounded-md ">reset</button>
        <button onClick={()=>{ console.log("get",getCurrent())}} className="px-8 py-4 text-xl text-white bg-black rounded-md ">Current</button>
      </div>
    </div>
  );
};

export default Test;
