import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Fetch user data from localStorage (set on login)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login"); // Redirect to login if no user data found
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-teal-600 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-4">
            <button
              className={`w-full text-left ${activeTab === "overview" ? "font-bold" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
          </li>
          <li className="mb-4">
            <button
              className={`w-full text-left ${activeTab === "profile" ? "font-bold" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              Profile
            </button>
          </li>
          <li className="mb-4">
            <button
              className={`w-full text-left ${activeTab === "orders" ? "font-bold" : ""}`}
              onClick={() => setActiveTab("orders")}
            >
              Orders
            </button>
          </li>
          <li className="mb-4">
            <button
              className={`w-full text-left ${activeTab === "settings" ? "font-bold" : ""}`}
              onClick={() => setActiveTab("settings")}
            >
              Settings
            </button>
          </li>
          <li className="mt-6">
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 py-2 rounded-lg text-center hover:bg-red-600"
            >
              Logout
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4 text-teal-700">
          Welcome, {user.firstName} {user.lastName}!
        </h1>
        <p className="text-gray-600">
          You're logged in as a {user.designation} in {user.location}.
        </p>

        {/* Content Area */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Overview</h2>
              <p>Here’s a summary of your recent activities.</p>
            </div>
          )}

          {activeTab === "profile" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Your Profile</h2>
              <p>
                <strong>Name:</strong> {user.firstName} {user.lastName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Designation:</strong> {user.designation}
              </p>
              <p>
                <strong>Location:</strong> {user.location}
              </p>
            </div>
          )}

          {activeTab === "orders" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Your Orders</h2>
              <p>No recent orders yet.</p>
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Settings</h2>
              <p>Update your preferences here.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
