import {
  FaFacebookMessenger,
  FaInstagramSquare,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import logo from "../../assets/images/footerlogo.png";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="max-w-40">
        <img className="" src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2 ">
        <Link className="p-1 text-xl text-white rounded-md bg-mainColor">
          <FaWhatsapp />
        </Link>
        <div className="p-1 text-xl text-white rounded-md bg-custom-gradient">
          <FaFacebookMessenger />
        </div>
        <div className="p-1 text-xl text-white rounded-md bg-mainColor">
          <FaInstagramSquare />
        </div>
        <div className="p-1 text-xl text-white rounded-md bg-mainColor">
          <FaYoutube />
        </div>
        <div className="p-1 text-xl text-white rounded-md bg-mainColor">
          <CgMail />
        </div>
      </div>
    </div>
  );
};

export default Social;
