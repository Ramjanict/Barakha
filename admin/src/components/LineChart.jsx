import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function LineChart() {
  // Chart data - simulating the line chart in the image
  const data = [
    { name: "Jan", value: 180 },
    { name: "", value: 200 },
    { name: "", value: 150 },
    { name: "", value: 190 },
    { name: "", value: 170 },
    { name: "", value: 200 },
    { name: "", value: 180 },
    { name: "", value: 210 },
    { name: "Feb", value: 190 },
    { name: "", value: 200 },
    { name: "", value: 220 },
    { name: "Mar", value: 250 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={data}
        margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="rgba(255, 255, 255, 0.1)"
          vertical={false}
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "rgba(255, 255, 255, 0.7)", fontSize: 10 }}
        />
        <YAxis
          domain={[100, 300]}
          ticks={[100, 150, 200, 250, 300]}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "rgba(255, 255, 255, 0.7)", fontSize: 10 }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#003366",
            borderColor: "#4a90e2",
            borderRadius: "4px",
          }}
          labelStyle={{ color: "white" }}
          itemStyle={{ color: "white" }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#4a90e2"
          strokeWidth={2}
          dot={{ stroke: "#4a90e2", strokeWidth: 2, fill: "white", r: 3 }}
          activeDot={{ stroke: "#4a90e2", strokeWidth: 2, fill: "white", r: 4 }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}
