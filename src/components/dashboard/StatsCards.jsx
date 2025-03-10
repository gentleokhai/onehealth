import React from "react";
import { statsData } from "../../data/dashboardData";
import * as LucideIcons from "lucide-react";

const StatsCards = ({ darkMode }) => {
  return (
    <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsData.map((stat) => {
        const IconComponent = LucideIcons[stat.icon];
        
        return (
          <div
            key={stat.title}
            className={`p-4 rounded-lg transition-transform hover:scale-102 ${
              darkMode ? "bg-gray-800" : "bg-white shadow-md"
            }`}
          >
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                <h3 className="text-2xl font-bold my-2">{stat.value.toLocaleString()}</h3>
                <p className="text-sm text-green-500 flex items-center gap-1">
                  +{stat.growth}%
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2.5V9.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </p>
              </div>
              <div className={`p-3 rounded-lg ${darkMode ? "bg-gray-700" : "bg-blue-50"}`}>
                {IconComponent && <IconComponent size={24} className="text-blue-500" />}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default StatsCards;