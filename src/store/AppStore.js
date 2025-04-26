import { create } from "zustand";
import { productList } from "@/assets/Data";

export const products = create()((set, get) => ({
  data: productList,
  selectedCategory: null,
  selectedTitle: null,

  handleSelectTitle: (title) => {
    set({ selectedTitle: title });
  },

  handleSelectCategory: (category) => {
    set({ selectedCategory: category });
  },

  filterTitleBased: () => {
    const data = get().data;
    const selectedTitle = get().selectedTitle;
    if (data && selectedTitle) {
      return data.filter((product) =>
        product.title?.toLowerCase()===(selectedTitle?.toLowerCase())
      );
    }
  },
  filterCategoryBased: () => {
    const data = get().data;
    const selectedCategory = get().selectedCategory;
    if (data) {
      return data.filter((product) =>
        product.category
          ?.toLowerCase()
          ===(selectedCategory?.toLowerCase())
      );
    }
  },
}));
