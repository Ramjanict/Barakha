import logo from "../../assets/images/footerlogo.png";
const DasHeader = () => {
  return (
    <header className="flex items-center justify-between w-full h-20 bg-[#1C2431] text-white px-4 ">
      <div>
        <img className=" max-w-20" src={logo} alt="logo" />
        <h1 className="text-lg font-bold ">Barakha Enterprise Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-sm">Admin</span>
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary">
          <span className="text-xs">Baraka</span>
        </div>
      </div>
    </header>
  );
};

export default DasHeader;
