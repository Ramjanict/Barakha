import { create } from "zustand"
 export const useCounter= create((set,get)=>({
  count:0,
  inc:()=>set((state)=>({count:state.count+1})),
  des:()=>set((state)=>{ return state.count>0 ?{count:state.count-1}:state}),
  reset:()=>set({count:0}),
  getCurrent:()=>get().count
}))


// import { create } from 'zustand'

// const useStore = create((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }))

// function Counter() {
//   const { count, inc } = useStore()
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }