import { Home, Settings, User, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen py-2 bg-white w-60">
      <nav className="flex flex-col gap-2 ">
        <SidebarItem icon={<Home size={20} />} label="Home" />
        <SidebarItem icon={<User size={20} />} label="Profile" />
        <SidebarItem icon={<Settings size={20} />} label="Settings" />
        <SidebarItem icon={<LogOut size={20} />} label="Logout" />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-2 p-2 transition-colors rounded cursor-pointer hover:bg-gray-100">
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default Sidebar;
