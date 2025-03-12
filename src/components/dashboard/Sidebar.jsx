import React from "react";
import { LogOut, X, ChevronRight } from "lucide-react";
import { navItems } from "../../data/dashboardData";
import * as LucideIcons from "lucide-react";

const Sidebar = ({ darkMode, isSidebarOpen, setIsSidebarOpen, activeNav, setActiveNav, setShowLogoutModal, user }) => {
  // Format user name for display
  const getUserInitials = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
    } else if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return "U";
  };

  const getUserDisplayName = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`;
    } else if (user?.email) {
      return user.email;
    }
    return "User";
  };

  const getUserRole = () => {
    return user?.role || "User";
  };

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      
      <aside
        className={`fixed md:relative z-20 h-screen w-64 p-5 flex flex-col transform transition-transform duration-200 ease-in-out ${
          darkMode ? "bg-gray-800" : "bg-white shadow-md"
        } ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">DOHS</h1>
          <X
            className="md:hidden cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        
        <div className="mt-8 flex flex-col items-center mb-6">
          <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl">
            {getUserInitials()}
          </div>
          <h3 className="mt-2 font-medium">{getUserDisplayName()}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{getUserRole()}</p>
        </div>
        
        <nav className="mt-4 flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const IconComponent = LucideIcons[item.icon];
              return (
                <li
                  key={item.name}
                  className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors ${
                    activeNav === item.name
                      ? darkMode 
                        ? "bg-blue-600 text-white" 
                        : "bg-blue-100 text-blue-600"
                      : darkMode 
                        ? "hover:bg-gray-700" 
                        : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveNav(item.name)}
                >
                  {IconComponent && <IconComponent size={18} className="min-w-[18px]" />}
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="mt-auto">
          <div 
            className={`p-3 mb-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-blue-50"}`}
          >
            <p className="text-sm font-medium">Need help?</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Contact support</p>
            <a href="/contact">
            <button className="mt-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-lg flex items-center">
              Support <ChevronRight size={14} />
            </button>
            </a>
          </div>
          
          <button
            className="flex items-center w-full gap-2 p-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-gray-700"
            onClick={() => setShowLogoutModal(true)}
          >
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;