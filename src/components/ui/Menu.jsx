import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <NavLink>Home</NavLink>
      <NavLink>About Us</NavLink>
      <NavLink>Products</NavLink>
      <NavLink>Career</NavLink>
      <NavLink>Contact</NavLink>
      <NavLink>Inquire now </NavLink>
    </>
  );
};

export default Menu;
