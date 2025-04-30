import {
  FaFacebookMessenger,
  FaInstagramSquare,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";

const icons = [
  { path: "/whatsapp", label: "whatsapp", icon: FaWhatsapp },
  { path: "/messenger", label: "messenger", icon: FaFacebookMessenger },
  { path: "/instagram", label: "instagram", icon: FaInstagramSquare },
  { path: "/youtube", label: "youtube", icon: FaYoutube },
  { path: "/mail", label: "mail", icon: CgMail },
];

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-2">
      {icons.map((icon, index) => (
        <Link
          title={icon.label}
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

export default SocialMedia;
