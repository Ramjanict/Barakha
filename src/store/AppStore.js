import { create } from "zustand";
import { productList } from "@/assets/Data";

export const products = create()((set) => ({
  data: productList,
}));
