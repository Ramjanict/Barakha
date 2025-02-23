import React, { useState } from "react";
import logo from "../../assets/images/logo.jpeg";
import { IoPersonSharp } from "react-icons/io5";
import CommonContainer from "../common/CommonContainer";
import { Link } from "react-router-dom";

import SideMenu from "./SideMenu";
import Menu from "./Menu";
const Navbar = () => {
  return (
    <div className=" bg-[#265C4B]  text-white ">
      <CommonContainer>
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <img className="w-12 h-12 rounded-full" src={logo} alt="" />
          </Link>

          <ul className=" hidden sm:flex items-center gap-4 text-[##304254] text-lg font-medium">
            <Menu />
          </ul>

          <div className="flex items-center gap-2">
            <SideMenu />
            <div className=" text-xl text-white cursor-pointer bg-green-700 p-2 rounded-full">
              <IoPersonSharp />
            </div>
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};

export default Navbar;
