import {
  FaFacebookMessenger,
  FaInstagramSquare,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";

const icons = [
  { path: "/whatsapp", icon: FaWhatsapp },
  { path: "/messenger", icon: FaFacebookMessenger },
  { path: "/instagram", icon: FaInstagramSquare },
  { path: "/youtube", icon: FaYoutube },
  { path: "/mail", icon: CgMail },
];

const Icons = () => {
  return (
    <div className="flex items-center gap-2">
      {icons.map((icon, index) => (
        <Link
          key={index}
          to={icon.path}
          className="p-1 text-xl text-white rounded-md bg-mainColor"
        >
          <icon.icon />
        </Link>
      ))}
    </div>
  );
};

export default Icons;
