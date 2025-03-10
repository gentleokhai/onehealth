import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import NotificationsPanel from "./NotificationsPanel";
import Modal from "../ui/Modal";
import StatsCards from "./StatsCards";
import ChartSection from "./ChartSection";
import RecentReportsTable from "./RecentReportTable";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("darkMode");
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return saved ? JSON.parse(saved) : prefersDark;
    }
    return false;
  });
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeNav, setActiveNav] = useState("Overview");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    
    if (!token) {
      // Redirect to login if no token is found
      navigate("/login");
      return;
    }
    
    try {
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      // If there's an error parsing the user data, log out
      handleLogout();
    }
    
    setIsLoading(false);
  }, [navigate]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Handle window resize to show sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    // Clear user data and token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
    // Redirect to login page
    navigate("/login");
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isSidebarOpen && !event.target.closest('.sidebar')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isSidebarOpen]);

  // Toggle notifications panel
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Check if activeNav is Overview to conditionally show dashboard components
  const isDashboardOverview = activeNav === "Overview";

  return (
    <div className={`flex h-screen overflow-hidden ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      {/* Sidebar */}
      <Sidebar 
        darkMode={darkMode}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        setShowLogoutModal={setShowLogoutModal}
        user={user}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          user={user}
          toggleNotifications={toggleNotifications}
        />
        
        <div className="flex-1 overflow-y-auto p-6">
          {isDashboardOverview ? (
            <>
              <StatsCards darkMode={darkMode} />
              <ChartSection darkMode={darkMode} />
              <RecentReportsTable darkMode={darkMode} />
            </>
          ) : (
            children
          )}
        </div>
      </div>
      
      {/* Right Panel */}
      <NotificationsPanel 
        darkMode={darkMode} 
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
      />
      
      {/* Logout Modal */}
      <Modal 
        title="Confirm Logout" 
        isOpen={showLogoutModal} 
        onClose={() => setShowLogoutModal(false)}
        darkMode={darkMode}
      >
        <p className="mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setShowLogoutModal(false)}
            className={`px-4 py-2 rounded ${
              darkMode 
                ? "bg-gray-700 hover:bg-gray-600" 
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DashboardLayout;