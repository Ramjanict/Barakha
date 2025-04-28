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
  
    let filteredData = data;
    if (selectedCategory&&!selectedTitle) {
      filteredData = filteredData.filter(
        (product) =>(product.category)?.toLowerCase() === selectedCategory?.toLowerCase()
      );
    }
    if (selectedTitle) {
      filteredData = filteredData.filter(
        (product) => (product.title)?.toLowerCase() === selectedTitle?.toLowerCase()
      );
    }
    return filteredData;
  },
  
}));
