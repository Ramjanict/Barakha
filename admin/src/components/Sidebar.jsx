import { TbWaveSawTool } from "react-icons/tb";
import { RiBuilding2Line } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
import { LuBoxes } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

const sidebarMenu = [
  { label: "overview", path: "/", icon: TbWaveSawTool },
  { label: "sales", path: "/", icon: IoStatsChart },
  { label: "products", path: "/", icon: LuBoxes },
  { label: "offices", path: "/", icon: RiBuilding2Line },
  { label: "test", path: "/", icon: RiBuilding2Line },
  { label: "logout", path: "/", icon: MdLogout },
];

const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="flex flex-col h-screen py-2 bg-white w-60">
      <nav className="flex flex-col gap-4 ">
        {sidebarMenu.map((item, i) => (
          <div
            onClick={() => setActiveTab(item.label)}
            className="flex items-center gap-1 px-4 py-1 cursor-pointer hover:bg-gray-50"
          >
            <span className="text-2xl">{<item.icon />}</span>
            <p className="capitalize ">{item.label}</p>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
