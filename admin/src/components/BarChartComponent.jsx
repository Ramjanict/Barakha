import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function BarChartComponent() {
  // Chart data - simulating the bar chart in the image
  const data = [
    { name: "Jan", value: 150 },
    { name: "Feb", value: 200 },
    { name: "Mar", value: 250 },
    { name: "April", value: 300 },
    { name: "May", value: 320 },
    { name: "June", value: 350 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
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
          domain={[0, 400]}
          ticks={[0, 100, 200, 300, 400]}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "rgba(255, 255, 255, 0.7)", fontSize: 10 }}
          tickFormatter={(value) => `${value}k`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#003366",
            borderColor: "#4a90e2",
            borderRadius: "4px",
          }}
          labelStyle={{ color: "white" }}
          itemStyle={{ color: "white" }}
          formatter={(value) => [`${value}k`, "Value"]}
        />
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a90e2" stopOpacity={1} />
            <stop offset="100%" stopColor="#4a90e2" stopOpacity={0.5} />
          </linearGradient>
        </defs>
        <Bar
          dataKey="value"
          fill="url(#barGradient)"
          radius={[4, 4, 0, 0]}
          barSize={30}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
