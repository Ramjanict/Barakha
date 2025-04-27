import { create } from "zustand";
import { productList } from "@/assets/Data";

export const products = create()((set, get) => ({
  data: productList,
  selectedCategory: null,
  selectedTitle: null,

  handleSelectCategory: (category) => {
    set({ selectedCategory: category, selectedTitle: null });
  },

  handleSelectTitle: (title) => {
    set({ selectedTitle: title });
  },

  filterProducts: () => {
    const data = get().data;
    const selectedCategory = get().selectedCategory;
    const selectedTitle = get().selectedTitle;
    if (data) {
      return data
        .filter((product) =>
          selectedCategory ? product.category === selectedCategory : true
        )
        .filter((product) =>
          product.title.toLowerCase().includes(selectedTitle?.toLowerCase())
        );
    }
  },
}));
