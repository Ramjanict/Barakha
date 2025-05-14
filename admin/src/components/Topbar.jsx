import { FiSearch } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";
import man from "../assets/images/user.avif";

const Topbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 border-b border-[#e4e4e4]">
        <div className="relative w-[70%]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-md border border-[#e4e4e4] focus:outline-none focus:ring-1 focus:ring-[#4a90e2]"
          />
          <div className="absolute left-3 top-2.5 text-[#797979]">
            <span>
              <FiSearch />
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="text-[#797979]">
              <FaRegBell />
            </span>
          </div>

          <div className="w-10 h-10 ">
            <img className="w-full h-full rounded-full" src={man} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
