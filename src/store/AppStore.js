import { create } from "zustand";

export const countStore = create((set) => {
  count: 0;
  IncreaseCount: () =>
    set((state) => {
      count: state.count + 1;
    });
  IncreaseCount: () =>
    set((state) => {
      count: state.count - 1;
    });
  Reset: () => set({ count: 0 });
});
