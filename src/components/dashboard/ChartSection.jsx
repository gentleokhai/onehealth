import React from "react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { reportsData, deviceData, COLORS } from "../../data/dashboardData";

const ChartSection = ({ darkMode }) => {
  const chartColors = {
    light: { axis: "#374151", tooltip: "#fff" },
    dark: { axis: "#fff", tooltip: "#1f2937" },
  };

  return (
    <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
        <h3 className="mb-4 font-semibold">Total Reports</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={reportsData}>
            <XAxis
              dataKey="name"
              stroke={darkMode ? chartColors.dark.axis : chartColors.light.axis}
            />
            <YAxis
              stroke={darkMode ? chartColors.dark.axis : chartColors.light.axis}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: darkMode ? chartColors.dark.tooltip : chartColors.light.tooltip,
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#8884d8"
              name="Current Year"
              strokeWidth={2}
              dot={{ stroke: '#8884d8', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="lastYear"
              stroke="#82ca9d"
              name="Last Year"
              strokeWidth={2}
              dot={{ stroke: '#82ca9d', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
        <h3 className="mb-4 font-semibold">Reports by Device</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col justify-center">
            {deviceData.map((entry, index) => (
              <div key={entry.name} className="flex items-center mb-3">
                <div 
                  className="w-4 h-4 rounded-sm mr-2" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span className="text-sm">{entry.name}</span>
                <span className="ml-auto font-medium">{entry.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;