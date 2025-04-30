import logo from "../../assets/images/footerlogo.png";
import SocialMedia from "@/common/SocialMedia";

const Social = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="max-w-40">
        <img className="" src={logo} alt="logo" />
      </div>
      <SocialMedia />
    </div>
  );
};

export default Social;
