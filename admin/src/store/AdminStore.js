import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { toast } from "react-toastify";

// Secure Axios instance
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BACKEND,
});

export const useAdminStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: "",
      isLoading: false,

      login: async (loginUser) => {
        set({ isLoading: true });
        try {
          const response = await axiosSecure.post("api/admin/login", loginUser);
          const data = response.data;

          if (data?.success) {
            set({ token: data.token });
            toast.success(data.message || "Login successful");
          } else {
            toast.error(data.message || "Login failed");
          }
        } catch (error) {
          console.error("Problem during login:", error);
          toast.error("Something went wrong. Please try again.");
        } finally {
          set({ isLoading: false });
        }
      },

      logout: () => {
        set({ token: "", user: null });
        toast.success("Admin logged out successfully");
      },
    }),
    {
      name: "user", // Local storage key
      partialize: (state) => ({
        token: state.token,
        user: state.user,
      }),
    }
  )
);
