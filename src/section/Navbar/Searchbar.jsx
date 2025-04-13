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
import logo from "../../assets/images/logofinal.png";
import CommonContainer from "@/common/CommonContainer";

const Searchbar = () => {
  return (
    <div className="w-4 px-0 cursor-pointer">
      <Sheet className="">
        <SheetTrigger asChild>
          <div className="transition-all hover:text-mainColor hover:scale-101">
            <FaSearch />
          </div>
        </SheetTrigger>
        <CommonContainer>
          <SheetContent className="flex flex-col gap-4 md:px-16 " side="top">
            <SheetHeader>
              <SheetTitle className="py-">
                <img className=" max-w-40" src={logo} alt="logo" />
              </SheetTitle>
            </SheetHeader>

            <form className="w-full">
              <label className="flex items-center gap-1 pl-2 shadow-[0px_0px_5px_1px_rgba(0,0,0,.1)]">
                <input
                  className="w-full outline-none "
                  placeholder="Search here ... "
                  type="search"
                />
                <span className="p-4 text-xl text-white cursor-pointer bg-mainColor">
                  <FaSearch />
                </span>
              </label>
            </form>
          </SheetContent>
        </CommonContainer>
      </Sheet>
    </div>
  );
};
export default Searchbar;
