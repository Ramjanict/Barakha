import {
  BookOpen,
  Building2,
  LayoutDashboard,
  LogOut,
  Package,
  PieChart,
  Settings,
  ShieldAlert,
} from "lucide-react";
import logo from "../assets/images/logofinal.png";
import { useState } from "react";
const sidebarList = [
  { label: "Dashboard", tab: "overview", icon: <LayoutDashboard /> },
  { label: "Venue Management", tab: "overview", icon: <Building2 /> },
  { label: "Booking & Payments", tab: "overview", icon: <BookOpen /> },
  { label: "Reports & Analytics", tab: "overview", icon: <PieChart /> },
  { label: "Dispute & Refunds", tab: "overview", icon: <ShieldAlert /> },
  { label: "Products", tab: "products", icon: <Package /> },
  { label: "Platform Settings", tab: "overview", icon: <Settings /> },
];
const Sidebar = ({ setActiveTab }) => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="w-[240px] bg-white border-r border-[#e4e4e4] flex flex-col">
      <div className="p-6">
        <div className=" max-w-34">
          <img src={logo} className="" />
        </div>
      </div>

      <nav className="flex-1 px-3 mt-2 space-y-1">
        {sidebarList.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setActive(item.label);
              setActiveTab(item.tab);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
                ${
                  active === item.label
                    ? "  font-semibold bg-[#003366] text-white"
                    : " bg-white text-[#003366] "
                }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-4 border-t border-[#e4e4e4]">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-[#ff3b30] hover:bg-[#f4f4f4] rounded-md">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
