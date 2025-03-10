import React, { useState } from "react";
import { Bell, Search, Menu, Sun, Moon } from "lucide-react";

const Header = ({ darkMode, setDarkMode, isSidebarOpen, setIsSidebarOpen, user }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  return (
    <header
      className={`flex justify-between items-center p-4 rounded-lg ${
        darkMode ? "bg-gray-800" : "bg-white shadow-md"
      }`}
    >
      <div className="flex items-center gap-4">
        <Menu
          size={24}
          className="cursor-pointer md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <h2 className="text-lg font-semibold">Dashboard / Overview</h2>
      </div>
      <div className="flex items-center gap-4">
        <div className={`relative transition-all duration-300 ${isSearchOpen ? "w-48" : "w-8"}`}>
          <Search
            size={20}
            className="absolute left-2 top-2 cursor-pointer"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className={`w-full pl-8 pr-2 py-1 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
              autoFocus
              onBlur={() => setIsSearchOpen(false)}
            />
          )}
        </div>
        {/* <Bell size={20} className="cursor-pointer relative">
          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-xs flex items-center justify-center text-white">3</span>
        </Bell> */}
        <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition-colors hidden sm:block">
          Consult Online
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white cursor-pointer">
          {user?.firstName?.charAt(0) || user?.email?.charAt(0) || "U"}
        </div>
      </div>
    </header>
  );
};

export default Header;