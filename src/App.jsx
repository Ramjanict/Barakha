import React from "react";
import { Route, Routes } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Test from "./pages/Test";

const App = () => {
  return (
    <div className="font-poppin">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
