import CommonContainer from "@/common/CommonContainer";
import Menu from "@/components/ui/Menu";
import SideMenu from "@/section/Navbar/SideMenu";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logofinal.png";
import { FaWhatsapp } from "react-icons/fa";
import Searchbar from "./Searchbar";
import Night from "./Night";

const Header = () => {
  const [stricky, setStricky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStricky(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={
        stricky ? "fixed shadow-xl z-50 w-full top-0 bg-white py-3" : "py-8"
      }
    >
      <CommonContainer>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2 ">
            <SideMenu />
            <Link to="/">
              <img className="pb-2 max-w-40" src={logo} alt="" />
            </Link>
          </div>
          <Menu />
          <div className="flex items-center gap-2 sm:gap-4 ">
            <div className=" lg:hidden">
              <Searchbar />
            </div>
            <div className="flex items-center gap-[1px] px-4 py-2 text-white rounded-full cursor-pointer bg-mainColor">
              <span className="text-xl">
                <FaWhatsapp />
              </span>
              <p className="hidden font-bold sm:block"> +8801775907562</p>
            </div>
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};

export default Header;
