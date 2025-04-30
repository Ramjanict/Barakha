import React, { useState } from "react";

import Topbar from "./Topbar";
import Breadcrumbs from "./Breadcrumbs";
import Header from "./Header";
const Navbar = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumbs />
    </>
  );
};

export default Navbar;
