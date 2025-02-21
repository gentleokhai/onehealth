// // // import { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // const Dashboard = () => {
// // //   const navigate = useNavigate();
// // //   const [user, setUser] = useState(null);
// // //   const [activeTab, setActiveTab] = useState("overview");

// // //   useEffect(() => {
// // //     // Fetch user data from localStorage (set on login)
// // //     const storedUser = localStorage.getItem("user");
// // //     if (storedUser) {
// // //       setUser(JSON.parse(storedUser));
// // //     } else {
// // //       navigate("/login"); // Redirect to login if no user data found
// // //     }
// // //   }, [navigate]);

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("token");
// // //     localStorage.removeItem("user");
// // //     navigate("/login");
// // //   };

// // //   if (!user) {
// // //     return <p>Loading...</p>;
// // //   }

// // //   return (
// // //     <div className="flex h-screen bg-gray-100">
// // //       {/* Sidebar */}
// // //       <aside className="w-64 bg-teal-600 text-white p-6 hidden md:block">
// // //         <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
// // //         <ul>
// // //           <li className="mb-4">
// // //             <button
// // //               className={`w-full text-left ${activeTab === "overview" ? "font-bold" : ""}`}
// // //               onClick={() => setActiveTab("overview")}
// // //             >
// // //               Overview
// // //             </button>
// // //           </li>
// // //           <li className="mb-4">
// // //             <button
// // //               className={`w-full text-left ${activeTab === "profile" ? "font-bold" : ""}`}
// // //               onClick={() => setActiveTab("profile")}
// // //             >
// // //               Profile
// // //             </button>
// // //           </li>
// // //           <li className="mb-4">
// // //             <button
// // //               className={`w-full text-left ${activeTab === "orders" ? "font-bold" : ""}`}
// // //               onClick={() => setActiveTab("orders")}
// // //             >
// // //               Orders
// // //             </button>
// // //           </li>
// // //           <li className="mb-4">
// // //             <button
// // //               className={`w-full text-left ${activeTab === "settings" ? "font-bold" : ""}`}
// // //               onClick={() => setActiveTab("settings")}
// // //             >
// // //               Settings
// // //             </button>
// // //           </li>
// // //           <li className="mt-6">
// // //             <button
// // //               onClick={handleLogout}
// // //               className="w-full bg-red-500 py-2 rounded-lg text-center hover:bg-red-600"
// // //             >
// // //               Logout
// // //             </button>
// // //           </li>
// // //         </ul>
// // //       </aside>

// // //       {/* Main Content */}
// // //       <main className="flex-1 p-8">
// // //         <h1 className="text-3xl font-bold mb-4 text-teal-700">
// // //           Welcome, {user.firstName} {user.lastName}!
// // //         </h1>
// // //         <p className="text-gray-600">
// // //           You're logged in as a {user.designation} in {user.location}.
// // //         </p>

// // //         {/* Content Area */}
// // //         <div className="mt-6 bg-white p-6 rounded-lg shadow">
// // //           {activeTab === "overview" && (
// // //             <div>
// // //               <h2 className="text-xl font-bold mb-4">Overview</h2>
// // //               <p>Here’s a summary of your recent activities.</p>
// // //             </div>
// // //           )}

// // //           {activeTab === "profile" && (
// // //             <div>
// // //               <h2 className="text-xl font-bold mb-4">Your Profile</h2>
// // //               <p>
// // //                 <strong>Name:</strong> {user.firstName} {user.lastName}
// // //               </p>
// // //               <p>
// // //                 <strong>Email:</strong> {user.email}
// // //               </p>
// // //               <p>
// // //                 <strong>Designation:</strong> {user.designation}
// // //               </p>
// // //               <p>
// // //                 <strong>Location:</strong> {user.location}
// // //               </p>
// // //             </div>
// // //           )}

// // //           {activeTab === "orders" && (
// // //             <div>
// // //               <h2 className="text-xl font-bold mb-4">Your Orders</h2>
// // //               <p>No recent orders yet.</p>
// // //             </div>
// // //           )}

// // //           {activeTab === "settings" && (
// // //             <div>
// // //               <h2 className="text-xl font-bold mb-4">Settings</h2>
// // //               <p>Update your preferences here.</p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;


// import React, { useState, useEffect } from "react";
// import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { Home, Bell, Search, LogOut, Menu, Sun, Moon } from "lucide-react";

// const reportsData = [
//   { name: "Jan", current: 10000, lastYear: 8000 },
//   { name: "Feb", current: 15000, lastYear: 12000 },
//   { name: "Mar", current: 18000, lastYear: 16000 },
//   { name: "Apr", current: 22000, lastYear: 20000 },
// ];

// const Dashboard = () => {
//   const [darkMode, setDarkMode] = useState(false);
  
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("darkMode");
//     if (savedTheme) setDarkMode(JSON.parse(savedTheme));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//     document.documentElement.classList.toggle("dark", darkMode);
//   }, [darkMode]);

//   return (
//     <div className={`flex h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
//       {/* Sidebar */}
//       <aside className={`w-64 p-5 flex flex-col ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
//         <h1 className="text-2xl font-bold">DOHS</h1>
//         <nav className="mt-6">
//           <ul className="space-y-2">
//             <li className="flex items-center gap-2 font-semibold text-blue-500"><Home size={18} /> Overview</li>
//             <li>Report Generation</li>
//             <li>Projects</li>
//             <li>Epidemic Reports</li>
//             <li className="flex items-center gap-2 text-red-500 cursor-pointer"><LogOut size={18} /> Log Out</li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <header className={`flex justify-between items-center p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
//           <div className="flex items-center gap-4">
//             <Menu size={24} className="cursor-pointer" />
//             <h2 className="text-lg font-semibold">Dashboard / Default</h2>
//           </div>
//           <div className="flex items-center gap-4">
//             <Search size={20} />
//             <Bell size={20} />
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Consult Online</button>
//             <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full">
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           </div>
//         </header>

//         {/* Stats */}
//         <section className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
//           {["Reports Uploaded", "Visits", "New Reports", "Live Reporters"].map((title, index) => (
//             <div key={index} className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
//               <p>{title}</p>
//               <h3 className="text-2xl font-bold">{Math.floor(Math.random() * 10000)}</h3>
//               <p className="text-sm text-green-500">+{(Math.random() * 10).toFixed(2)}%</p>
//             </div>
//           ))}
//         </section>

//         {/* Charts */}
//         <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
//             <h3>Total Reports</h3>
//             <ResponsiveContainer width="100%" height={200}>
//               <LineChart data={reportsData}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="current" stroke="#8884d8" />
//                 <Line type="monotone" dataKey="lastYear" stroke="#82ca9d" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState, useEffect } from "react";
// import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { Home, Bell, Search, LogOut, Menu, Sun, Moon } from "lucide-react";

// const reportsData = [
//   { name: "Jan", current: 10000, lastYear: 8000 },
//   { name: "Feb", current: 15000, lastYear: 12000 },
//   { name: "Mar", current: 18000, lastYear: 16000 },
//   { name: "Apr", current: 22000, lastYear: 20000 },
// ];

// const Dashboard = () => {
//   const [darkMode, setDarkMode] = useState(false);
  
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("darkMode");
//     if (savedTheme !== null) {
//       const isDark = JSON.parse(savedTheme);
//       setDarkMode(isDark);
//       if (isDark) {
//         document.documentElement.classList.add("dark");
//       } else {
//         document.documentElement.classList.remove("dark");
//       }
//     }
//   }, []);
  
//   useEffect(() => {
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);
  

//   return (
//     <div className={`flex h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
//       {/* Sidebar */}
//       <aside className={`w-64 p-5 flex flex-col ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
//         <h1 className="text-2xl font-bold">DOHS</h1>
//         <nav className="mt-6">
//           <ul className="space-y-2">
//             <li className="flex items-center gap-2 font-semibold text-blue-500"><Home size={18} /> Overview</li>
//             <li>Report Generation</li>
//             <li>Projects</li>
//             <li>Epidemic Reports</li>
//             <li className="flex items-center gap-2 text-red-500 cursor-pointer"><LogOut size={18} /> Log Out</li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {/* Top Bar */}
//         <header className={`flex justify-between items-center p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
//           <div className="flex items-center gap-4">
//             <Menu size={24} className="cursor-pointer" />
//             <h2 className="text-lg font-semibold">Dashboard / Default</h2>
//           </div>
//           <div className="flex items-center gap-4">
//             <Search size={20} />
//             <Bell size={20} />
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Consult Online</button>
//             <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full">
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           </div>
//         </header>

//         {/* Stats */}
//         <section className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
//           {["Reports Uploaded", "Visits", "New Reports", "Live Reporters"].map((title, index) => (
//             <div key={index} className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
//               <p>{title}</p>
//               <h3 className="text-2xl font-bold">{Math.floor(Math.random() * 10000)}</h3>
//               <p className="text-sm text-green-500">+{(Math.random() * 10).toFixed(2)}%</p>
//             </div>
//           ))}
//         </section>

//         {/* Charts */}
//         <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
//             <h3>Total Reports</h3>
//             <ResponsiveContainer width="100%" height={200}>
//               <LineChart data={reportsData}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="current" stroke="#8884d8" />
//                 <Line type="monotone" dataKey="lastYear" stroke="#82ca9d" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
//             <h3>Reports by Device</h3>
//             <ResponsiveContainer width="100%" height={200}>
//               <BarChart data={reportsData}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="current" fill="#82ca9d" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </section>
//       </main>

//       {/* Right Panel */}
//       <aside className={`w-72 p-5 ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
//         <h3 className="font-semibold">Notifications</h3>
//         <ul className="mt-2 text-sm space-y-2">
//           <li>Alert: Yellow Fever in Kano</li>
//           <li>Report reviewed by Dr. Dele</li>
//           <li>Ebola outbreak in Lagos</li>
//         </ul>
        
//         <h3 className="mt-6 font-semibold">Contacts</h3>
//         <ul className="mt-2 text-sm space-y-2">
//           <li>Dr. Dele</li>
//           <li>Dr. Irowa</li>
//           <li>Vet. Dr. Ikpoba</li>
//         </ul>
//       </aside>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Home, Bell, Search, LogOut, Menu, Sun, Moon, X } from "lucide-react";

const reportsData = [
  { name: "Jan", current: 10000, lastYear: 8000 },
  { name: "Feb", current: 15000, lastYear: 12000 },
  { name: "Mar", current: 18000, lastYear: 16000 },
  { name: "Apr", current: 22000, lastYear: 20000 },
];

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [activeNav, setActiveNav] = useState("Overview");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const navItems = [
    { name: "Overview", icon: Home },
    "Report Generation",
    "Projects",
    "Epidemic Reports",
  ];

  const chartColors = {
    light: { axis: "#374151", tooltip: "#fff" },
    dark: { axis: "#fff", tooltip: "#1f2937" },
  };

  return (
    <div className={`flex h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      {/* Sidebar */}
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
        <nav className="mt-6">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li
                key={typeof item === "string" ? item : item.name}
                className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer ${
                  activeNav === (typeof item === "string" ? item : item.name)
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => typeof item !== "string" && setActiveNav(item.name)}
              >
                {typeof item !== "string" && (
                  <item.icon size={18} className="min-w-[18px]" />
                )}
                {typeof item === "string" ? item : item.name}
              </li>
            ))}
            <li
              className="flex items-center gap-2 p-2 rounded-lg cursor-pointer text-red-500 hover:bg-red-50 dark:hover:bg-gray-700"
              onClick={() => setShowLogoutModal(true)}
            >
              <LogOut size={18} />
              Log Out
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Top Bar */}
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
            <h2 className="text-lg font-semibold">Dashboard / Default</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className={`relative ${isSearchOpen ? "w-48" : "w-8"}`}>
              <Search
                size={20}
                className="absolute left-2 top-2 cursor-pointer"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-8 pr-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-700"
                />
              )}
            </div>
            <Bell size={20} className="cursor-pointer" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Consult Online
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer"></div>
          </div>
        </header>

        {/* Stats */}
        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Reports Uploaded", "Visits", "New Reports", "Live Reporters"].map((title) => (
            <div
              key={title}
              className={`p-4 rounded-lg transition-transform hover:scale-105 ${
                darkMode ? "bg-gray-800" : "bg-white shadow-md"
              }`}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
              <h3 className="text-2xl font-bold my-2">{Math.floor(Math.random() * 10000)}</h3>
              <p className="text-sm text-green-500">
                +{(Math.random() * 10).toFixed(2)}%
              </p>
            </div>
          ))}
        </section>

        {/* Charts */}
        <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
            <h3 className="mb-4">Total Reports</h3>
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
                />
                <Line
                  type="monotone"
                  dataKey="lastYear"
                  stroke="#82ca9d"
                  name="Last Year"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}>
            <h3 className="mb-4">Reports by Device</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={reportsData}>
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
                <Bar dataKey="current" fill="#82ca9d" name="Current Reports" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>

      {/* Right Panel */}
      <aside
        className={`hidden lg:block w-72 p-5 ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}
      >
        <h3 className="font-semibold mb-4">Notifications</h3>
        <ul className="space-y-3">
          {["Yellow Fever in Kano", "Report reviewed", "Ebola outbreak"].map((note) => (
            <li
              key={note}
              className={`p-3 rounded-lg cursor-pointer ${
                darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              <span className="text-sm">{note}</span>
              <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
            </li>
          ))}
        </ul>
        
        <h3 className="mt-6 font-semibold mb-4">Contacts</h3>
        <ul className="space-y-3">
          {["Dr. Dele", "Dr. Irowa", "Vet. Dr. Ikpoba"].map((contact) => (
            <li
              key={contact}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
                darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              <div className="h-8 w-8 rounded-full bg-blue-500"></div>
              <span className="text-sm">{contact}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <h3 className="text-lg font-semibold mb-4">Confirm Logout</h3>
            <p className="mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                onClick={() => {
                  // Add logout logic here
                  setShowLogoutModal(false);
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;