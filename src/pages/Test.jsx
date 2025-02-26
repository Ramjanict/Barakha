import Bento from "@/components/Bento";
import CommonContainer from "@/components/common/CommonContainer";
import { useCounter } from "@/store/AppStore";
import React from "react";

const Test = () => {
 const { count,inc,des,getCurrent,reset}=useCounter()
  return (
    <div className=" min-h-screen flex flex-col gap-5 items-center justify-center">
      <p className="text-5xl text-gray-800 font-bold">count:{count}</p>
      <div className="flex  items-center gap-10">
        <button onClick={inc} className=" bg-black text-white rounded-md text-xl px-8 py-4">inc</button>
        <button onClick={des} className=" bg-black text-white rounded-md text-xl px-8 py-4">des</button>
        <button onClick={reset} className=" bg-black text-white rounded-md text-xl px-8 py-4">reset</button>
        <button onClick={()=>{ console.log("get",getCurrent())}} className=" bg-black text-white rounded-md text-xl px-8 py-4">Current</button>
      </div>
    </div>
  );
};

export default Test;
// return (
//   <CommonContainer>
//     <div className="w-full  grid  grid-cols-2     place-content-stretch gap-4">
//       <div className="bg-red-500 row-span-2 ">
//         <Bento />
//       </div>
//       <div className="grid gap-4 ">
//         <Bento />
//         <Bento />
//       </div>
//     </div>
//   </CommonContainer>
// );
// export const useCounter= create((set,get)=>({
//   count:0,
//   inc:()=>set((state)=>({count:state.count+1})),
//   des:()=>set((state)=>{ return state.count>0 ?{count:state.count-1}:state}),
//   reset:()=>set({count:0}),
//   getCurrent:()=>get().count
// }))