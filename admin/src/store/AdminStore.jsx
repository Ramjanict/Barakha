import { create } from "zustand";
import { productList } from "@/assets/Data";

export const products = create()((set, get) => ({
  data: productList,

  handleSelectCategory: (category) => {
    set({ selectedCategory: category, selectedTitle: null });
  },

  handleSelectTitle: (title) => {
    set({ selectedTitle: title, selectedCategory: null });
  },
}));
