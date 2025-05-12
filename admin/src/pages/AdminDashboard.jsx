import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  MoreHorizontal,
  Package,
  PieChart,
  Settings,
  ShieldAlert,
} from "lucide-react";
import logo from "../assets/images/logofinal.png";
import { LineChart } from "../components/LineChart";
import { BarChartComponent } from "../components/BarChartComponent";
import { RecentActivity } from "../components/RecentActivity";
import { ProductTable } from "../components/ProductTable";
import { CategoryOverview } from "../components/CategoryOverview";
import { CalendarView } from "../components/CalendarView";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";

const sidebarList = [
  { label: "Dashboard", icon: <LayoutDashboard /> },
  { label: "Venue Management", icon: <Building2 /> },
  { label: "Booking & Payments", icon: <BookOpen /> },
  { label: "Reports & Analytics", icon: <PieChart /> },
  { label: "Dispute & Refunds", icon: <ShieldAlert /> },
  { label: "Products", icon: <Package /> },
  { label: "Platform Settings", icon: <Settings /> },
];

const AdminDashboard = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-[#fafafa]">
      {/* Sidebar */}
      <div className="w-[240px] bg-white border-r border-[#e4e4e4] flex flex-col">
        <div className="p-6">
          <div className=" max-w-34">
            <img src={logo} className="" />
          </div>
        </div>

        {/* <div className="mt-4 px-4 text-sm text-[#797979]">Menu</div> */}
        <nav className="flex-1 px-3 mt-2 space-y-1">
          {sidebarList.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
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

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-4 border-b border-[#e4e4e4]">
          <div className="relative w-[300px]">
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
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#333333]">
              Admin Dashboard
            </h1>
            <div className="flex items-center mt-2">
              <div className="flex -space-x-2">
                <Avatar className="w-8 h-8 border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>E</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>+12</AvatarFallback>
                </Avatar>
              </div>
              <span className="ml-2 text-sm text-[#797979]">
                Elena, Marcus, Priya +12 others
              </span>
            </div>
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="border-b border-[#e4e4e4] w-full justify-start mb-6 bg-transparent">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:border-b-2 data-[state=active]:border-[#003366] data-[state=active]:text-[#003366] rounded-none px-6 py-2"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="reports"
                className="data-[state=active]:border-b-2 data-[state=active]:border-[#003366] data-[state=active]:text-[#003366] rounded-none px-6 py-2"
              >
                Reports
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="data-[state=active]:border-b-2 data-[state=active]:border-[#003366] data-[state=active]:text-[#003366] rounded-none px-6 py-2"
              >
                Settings
              </TabsTrigger>
              <TabsTrigger
                value="products"
                className="data-[state=active]:border-b-2 data-[state=active]:border-[#003366] data-[state=active]:text-[#003366] rounded-none px-6 py-2"
              >
                Products
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div>
                <h2 className="text-lg font-semibold text-[#333333] mb-4">
                  Key Metrics
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="border border-[#e4e4e4] shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-[#797979]">
                        Total Users
                      </CardTitle>
                      <MoreHorizontal className="h-4 w-4 text-[#797979]" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">5,432</div>
                      <div className="text-xs text-[#34c759] mt-1">
                        +10% this month
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-[#e4e4e4] shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-[#797979]">
                        Active Venues
                      </CardTitle>
                      <MoreHorizontal className="h-4 w-4 text-[#797979]" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,234</div>
                      <div className="text-xs text-[#34c759] mt-1">
                        +5% this month
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-[#e4e4e4] shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-[#797979]">
                        Monthly Revenue
                      </CardTitle>
                      <MoreHorizontal className="h-4 w-4 text-[#797979]" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$123,456</div>
                      <div className="text-xs text-[#34c759] mt-1">
                        +15% this month
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-[#e4e4e4] shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-[#797979]">
                        Pending Approvals
                      </CardTitle>
                      <MoreHorizontal className="h-4 w-4 text-[#797979]" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">78</div>
                      <div className="text-xs text-[#ff3b30] mt-1">
                        -2% this month
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-[#333333] mb-4">
                  Booking Trends & Revenue Insights
                </h2>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <Card className="border border-[#e4e4e4] shadow-sm bg-[#003366] text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">
                        Bookings
                      </CardTitle>
                      <MoreHorizontal className="w-4 h-4" />
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end gap-2">
                        <div className="text-2xl font-bold">2,345</div>
                        <div className="text-xs text-[#34c759] mb-1">
                          +8% this month
                        </div>
                      </div>
                      <div className="h-[200px] mt-4">
                        <LineChart />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-[#e4e4e4] shadow-sm bg-[#003366] text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">
                        Earnings
                      </CardTitle>
                      <MoreHorizontal className="w-4 h-4" />
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end gap-2">
                        <div className="text-2xl font-bold">7.7k</div>
                        <div className="text-xs text-[#34c759] mb-1">
                          +2.1% last mo
                        </div>
                      </div>
                      <div className="h-[200px] mt-4">
                        <BarChartComponent />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
                <Card className="border border-[#e4e4e4] shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-sm font-medium text-[#797979]">
                        Recent Activity
                      </CardTitle>
                      <span className="bg-[#f2f1ff] text-[#615e83] text-xs px-1.5 py-0.5 rounded-full">
                        7
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <RecentActivity />
                  </CardContent>
                </Card>

                <Card className="border border-[#e4e4e4] shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <button className="p-1 rounded-full hover:bg-[#f4f4f4]">
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <CardTitle className="text-sm font-medium text-[#797979]">
                          November 2022
                        </CardTitle>
                        <button className="p-1 rounded-full hover:bg-[#f4f4f4]">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                      <Calendar className="h-4 w-4 text-[#797979]" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CalendarView />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reports">
              <div className="flex items-center justify-center h-[400px] text-[#797979]">
                Reports content will appear here
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="flex items-center justify-center h-[400px] text-[#797979]">
                Settings content will appear here
              </div>
            </TabsContent>

            <TabsContent value="products">
              <div className="space-y-8">
                <div>
                  <h2 className="text-lg font-semibold text-[#333333] mb-4">
                    Product Categories
                  </h2>
                  <CategoryOverview />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-[#333333] mb-4">
                    Product Management
                  </h2>
                  <ProductTable />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
