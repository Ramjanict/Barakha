import { useState } from "react";
import AdminLoginForm from "../components/AdminLoginForm";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Overview from "./Overview";
import Products from "./Products";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Simulate auth token check — replace with actual auth logic
  const token = true;

  if (token) {
    return <AdminLoginForm />;
  }

  return (
    <div className="flex h-screen bg-[#fafafa]">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex-1 p-6 overflow-auto">
        <Topbar />

        <div className="py-6">
          <h1 className="text-2xl font-bold text-[#333333]">Admin Dashboard</h1>
        </div>

        {activeTab === "overview" && <Overview />}
        {activeTab === "products" && <Products />}
      </div>
    </div>
  );
};

export default AdminDashboard;
