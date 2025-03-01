import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "@/section/Navbar/Searchbar";

const Menu = () => {
  return (
    <>
      <div className="items-center justify-between hidden gap-3 text-lg lg:flex ">
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Products</NavLink>
        <NavLink>Career</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink>Inquire now </NavLink>
        <NavLink>Inquire now </NavLink>
        <Searchbar />
      </div>
    </>
  );
};

export default Menu;
