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
// import { LineChart } from "./components/line-chart"
// import { BarChartComponent } from "./components/bar-chart";
// import { CalendarView } from "./components/calendar-view";
// import { RecentActivity } from "./components/recent-activity";
// import { ProductTable } from "./components/product-table";
// import { CategoryOverview } from "./components/category-overview";
import { LineChart } from "../components/LineChart";
import { BarChartComponent } from "../components/BarChartComponent";
import { RecentActivity } from "../components/RecentActivity";
import { ProductTable } from "../components/ProductTable";
import { CategoryOverview } from "../components/CategoryOverview";
import { CalendarView } from "../components/CalendarView";

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-[#fafafa]">
      {/* Sidebar */}
      <div className="w-[215px] bg-white border-r border-[#e4e4e4] flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-[#003366] flex items-center justify-center">
              <img
                src="/placeholder.svg?height=32&width=32"
                width={32}
                height={32}
                alt="Bilinqo Logo"
                className="w-6 h-6"
              />
            </div>
            <span className="text-[#003366] font-bold text-xl">Bilinqo</span>
          </div>
        </div>

        <div className="mt-4 px-4 text-sm text-[#797979]">Menu</div>

        <nav className="flex-1 px-3 mt-2 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-white bg-[#003366] rounded-md">
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2 text-[#333333] hover:bg-[#f4f4f4] rounded-md">
            <Building2 className="w-5 h-5" />
            <span>Venue Management</span>
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2 text-[#333333] hover:bg-[#f4f4f4] rounded-md">
            <BookOpen className="w-5 h-5" />
            <span>Booking & Payments</span>
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2 text-[#333333] hover:bg-[#f4f4f4] rounded-md">
            <PieChart className="w-5 h-5" />
            <span>Reports & Analytics</span>
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2 text-[#333333] hover:bg-[#f4f4f4] rounded-md">
            <ShieldAlert className="w-5 h-5" />
            <span>Dispute & Refunds</span>
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2 text-[#333333] hover:bg-[#f4f4f4] rounded-md">
            <Package className="w-5 h-5" />
            <span>Products</span>
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2 text-[#333333] hover:bg-[#f4f4f4] rounded-md">
            <Settings className="w-5 h-5" />
            <span>Platform Settings</span>
          </button>
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
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-[#797979]">⌘ F</div>
            <div className="relative">
              <button className="text-[#797979]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
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
}
