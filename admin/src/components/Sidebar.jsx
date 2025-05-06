import { TbWaveSawTool } from "react-icons/tb";
import { RiBuilding2Line } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
import { LuBoxes } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

const sidebarMenu = [
  { label: "Overview", path: "/", icon: TbWaveSawTool },
  { label: "Sales", path: "/", icon: IoStatsChart },
  { label: "Products", path: "/", icon: LuBoxes },
  { label: "Offices", path: "/", icon: RiBuilding2Line },
  { label: "Logout", path: "/", icon: MdLogout },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen py-2 bg-white w-60">
      <nav className="flex flex-col gap-4 ">
        {sidebarMenu.map((item, i) => (
          <div className="flex items-center gap-1 px-4 py-1 cursor-pointer hover:bg-gray-50">
            <span className="text-2xl">{<item.icon />}</span>
            <p>{item.label}</p>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
