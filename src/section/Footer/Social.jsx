import {
  FaFacebookMessenger,
  FaInstagramSquare,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import logo from "../../assets/images/footerlogo.png";

const Social = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="max-w-40">
        <img className="object-scale-down " src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2 ">
        <div>
          <FaWhatsapp />
        </div>
        <div>
          <FaFacebookMessenger />
        </div>
        <div>
          <FaInstagramSquare />
        </div>
        <div>
          <FaYoutube />
        </div>
        <div>
          <CgMail />
        </div>
      </div>
    </div>
  );
};

export default Social;
