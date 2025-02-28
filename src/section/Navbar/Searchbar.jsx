"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="cursor-pointer">
      <Sheet>
        <SheetTrigger asChild>
          <span className="p-0">
            <FaSearch />
          </span>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle className="py-2">You can search here...</SheetTitle>
          </SheetHeader>

          <form className="w-full">
            <label htmlFor="search"></label>
            <input
              className="w-full p-4 rounded-full outline "
              id="search"
              placeholder=" Search here ... "
              type="search"
            />
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default Searchbar;
