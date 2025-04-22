import {
  FaFacebookMessenger,
  FaInstagramSquare,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import logo from "../../assets/images/footerlogo.png";
import { Link } from "react-router-dom";
import Icons from "@/common/Icons";

const Social = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="max-w-40">
        <img className="" src={logo} alt="logo" />
      </div>
      <Icons />
    </div>
  );
};

export default Social;
