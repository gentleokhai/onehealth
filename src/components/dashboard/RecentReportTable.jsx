import React from "react";
import { reportsTableData, statusColors } from "../../data/dashboardData";

const RecentReportsTable = ({ darkMode }) => {
  return (
    <div className={`mt-6 p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Recent Reports</h3>
        <button className="text-blue-500 text-sm">View All</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead>
            <tr className={`text-left ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              <th className="pb-3 font-medium text-sm">ID</th>
              <th className="pb-3 font-medium text-sm">Report Title</th>
              <th className="pb-3 font-medium text-sm">Location</th>
              <th className="pb-3 font-medium text-sm">Status</th>
              <th className="pb-3 font-medium text-sm">Date</th>
              <th className="pb-3 font-medium text-sm">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {reportsTableData.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-3 text-sm">{report.id}</td>
                <td className="py-3 text-sm font-medium">{report.title}</td>
                <td className="py-3 text-sm">{report.location}</td>
                <td className="py-3 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${statusColors[report.status]}`}>
                    {report.status}
                  </span>
                </td>
                <td className="py-3 text-sm">{report.date}</td>
                <td className="py-3 text-sm">
                  <button className="text-blue-500 hover:underline text-sm">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentReportsTable;