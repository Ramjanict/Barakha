import Bento from "@/components/Bento";
import CommonContainer from "@/components/common/CommonContainer";
import { countStore } from "@/store/AppStore";
import React from "react";

const Test = () => {
  const count = countStore((state) => console.log("state", state.count));
  return (
    <div>
      <p>count:0</p>
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
