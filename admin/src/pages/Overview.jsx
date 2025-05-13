import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { LineChart } from "../components/LineChart";
import { BarChartComponent } from "../components/BarChartComponent";
import { RecentActivity } from "../components/RecentActivity";
import { CalendarView } from "../components/CalendarView";

const Overview = () => {
  return (
    <>
      <div>
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
                <CardTitle className="text-sm font-medium">Bookings</CardTitle>
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
                <CardTitle className="text-sm font-medium">Earnings</CardTitle>
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
      </div>
    </>
  );
};

export default Overview;
