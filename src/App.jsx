import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./section/Navbar/Navbar";
import Footer from "./section/Footer/Footer";
import Wishlist from "./pages/Wishlist";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Inquire from "./pages/Inquire";
import AppSidebar from "./pages/AppSidebar ";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div className="font-poppin">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/career" element={<AppSidebar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inquire-now" element={<Inquire />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
