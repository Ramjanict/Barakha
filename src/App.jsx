import React from "react";
import { Route, Routes } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./section/Navbar/Navbar";
import Footer from "./section/Footer/Footer";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <div className="font-poppin">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
