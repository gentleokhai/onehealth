import React, { useState, useEffect } from "react";
import DashboardLayout from "./dashboard/DashboardLayout";

import { 
  CalendarIcon,
  ChartBarIcon,
  UserGroupIcon,
  InboxIcon,
  CheckCircleIcon,
  BellIcon
} from "@heroicons/react/24/outline";

// Mock data for the dashboard
const statCards = [
  { 
    title: "Total Users", 
    value: "2,453", 
    change: "+12.5%", 
    isPositive: true,
    icon: <UserGroupIcon className="h-6 w-6" />,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
  },
  { 
    title: "Revenue", 
    value: "$45,623", 
    change: "+8.2%", 
    isPositive: true,
    icon: <ChartBarIcon className="h-6 w-6" />,
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
  },
  { 
    title: "Pending Tasks", 
    value: "24", 
    change: "-3.1%", 
    isPositive: true,
    icon: <CheckCircleIcon className="h-6 w-6" />,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300"
  },
  { 
    title: "New Messages", 
    value: "18", 
    change: "+5.4%", 
    isPositive: true,
    icon: <InboxIcon className="h-6 w-6" />,
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300"
  }
];

const recentActivity = [
  {
    id: 1,
    user: "Usha Igyo",
    action: "completed task",
    target: "Website Redesign",
    time: "2 hours ago"
  },
  {
    id: 2,
    user: "Nnaemeka kevin",
    action: "commented on",
    target: "Q1 Marketing Plan",
    time: "4 hours ago"
  },
  {
    id: 3,
    user: "Tor Barnabas",
    action: "uploaded file",
    target: "Financial Report.pdf",
    time: "Yesterday"
  },
  {
    id: 4,
    user: "Okhai Felix",
    action: "created project",
    target: "Mobile App Development",
    time: "3 days ago"
  },
  {
    id: 5,
    user: "Yua igyo",
    action: "approved",
    target: "Budget Proposal",
    time: "3 days ago"
  },
  {
    id: 6,
    user: "Moffat ini",
    action: "shared document with",
    target: "Marketing Team",
    time: "4 days ago"
  },
  {
    id: 7,
    user: "Chukuma Splendid",
    action: "shared classified document with",
    target: "You",
    time: "5 days ago"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Team Meeting",
    date: "Today, 2:00 PM",
    attendees: 5,
    location: "Conference Room A"
  },
  {
    id: 2,
    title: "Client Presentation",
    date: "Tomorrow, 10:00 AM",
    attendees: 3,
    location: "Virtual Meeting"
  },
  {
    id: 3,
    title: "Product Launch",
    date: "March 15, 9:00 AM",
    attendees: 12,
    location: "Main Auditorium"
  },
  {
    id: 4,
    title: "Training Session",
    date: "March 17, 1:00 PM",
    attendees: 8,
    location: "Training Room B"
  }
];

const pendingTasks = [
  {
    id: 1,
    title: "Review marketing materials",
    priority: "High",
    dueDate: "Today",
    assignedTo: "You"
  },
  {
    id: 2,
    title: "Prepare quarterly report",
    priority: "Medium",
    dueDate: "March 12",
    assignedTo: "You"
  },
  {
    id: 3,
    title: "Update product documentation",
    priority: "Low",
    dueDate: "March 15",
    assignedTo: "Igyou"
  },
  {
    id: 4,
    title: "Fix navigation bug in app",
    priority: "High",
    dueDate: "March 11",
    assignedTo: "Adebayo"
  }
];

const notifications = [
  {
    id: 1,
    title: "New comment on your post",
    time: "15 minutes ago",
    isRead: false
  },
  {
    id: 2,
    title: "Your task 'Design homepage' is due soon",
    time: "1 hour ago",
    isRead: false
  },
  {
    id: 3,
    title: "Meeting with Client XYZ rescheduled",
    time: "3 hours ago",
    isRead: true
  },
  {
    id: 4,
    title: "New team member joined",
    time: "Yesterday",
    isRead: true
  }
];

const systemUpdates = [
  {
    id: 1,
    title: "System maintenance scheduled",
    description: "The system will be undergoing maintenance on March 15 from 2AM to 4AM UTC.",
    date: "March 15"
  },
  {
    id: 2,
    title: "New feature: Dark mode",
    description: "Dark mode is now available. Enable it from your nav bar.",
    date: "March 8"
  },
  {
    id: 3,
    title: "Security update",
    description: "Important security patches have been applied to the system.",
    date: "March 5"
  }
];

// Monthly revenue data for chart
const monthlyRevenue = [
  { month: "Jan", revenue: 35000 },
  { month: "Feb", revenue: 42000 },
  { month: "Mar", revenue: 38000 },
  { month: "Apr", revenue: 45000 },
  { month: "May", revenue: 48000 },
  { month: "Jun", revenue: 52000 },
  { month: "Jul", revenue: 58000 },
  { month: "Aug", revenue: 56000 }
];

const Dashboard = () => {
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("tasks");
  
  // Simulate data loading
  useEffect(() => {
    const target = 14392;
    const increment = Math.floor(target / 30);
    let current = 0;
    
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(interval);
        setTotalVisitors(target);
      } else {
        setTotalVisitors(current);
      }
    }, 50);
    
    // Check system dark mode preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
    
    return () => clearInterval(interval);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Priority color mapping
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900';
      case 'Medium':
        return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900';
      case 'Low':
        return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800';
    }
  };

  const unreadNotificationsCount = notifications.filter(n => !n.isRead).length;

  return (
    <DashboardLayout>
      <div className="space-y-6 transition-colors duration-200">
        {/* Header with Dark Mode Toggle */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <BellIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                {unreadNotificationsCount > 0 && (
                  <span className="absolute top-0 right-0 h-5 w-5 flex items-center justify-center text-xs text-white bg-red-500 rounded-full">
                    {unreadNotificationsCount}
                  </span>
                )}
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10 border border-gray-200 dark:border-gray-700">
                  <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                    <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                      Mark all as read
                    </button>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map(notification => (
                      <div key={notification.id} className={`p-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${!notification.isRead ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{notification.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center">
                    <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-200 hover:shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{card.title}</p>
                  <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{card.value}</h3>
                  <div className="flex items-center mt-2">
                    <span className={`text-sm ${card.isPositive ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
                      {card.change}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs ml-1">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full ${card.color}`}>
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visitors Counter */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Total Website Visitors</h2>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              View Details
            </button>
          </div>
          <div className="flex items-center">
            <div className="text-3xl font-bold mr-4 text-gray-900 dark:text-white">
              {totalVisitors.toLocaleString()}
            </div>
            <div className="text-green-500 dark:text-green-400 text-sm font-medium">
              +18.2% from last month
            </div>
          </div>
          <div className="mt-4 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
            <div className="h-full bg-blue-500 dark:bg-blue-600 w-3/4"></div>
          </div>
          <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>0</span>
            <span>Target: 20,000</span>
          </div>
        </div>
        
        {/* Monthly Revenue Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Monthly Revenue</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                This Year
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full">
                Previous Year
              </button>
            </div>
          </div>
          <div className="h-64 relative">
            <div className="absolute bottom-0 inset-x-0 flex justify-between h-60">
              {monthlyRevenue.map((data, index) => (
                <div key={index} className="flex flex-col items-center justify-end flex-1 px-2">
                  <div 
                    className="w-full bg-blue-500 dark:bg-blue-600 rounded-t-sm" 
                    style={{ height: `${(data.revenue / 75000) * 100}%` }}
                  ></div>
                  <span className="text-xs mt-2 text-gray-500 dark:text-gray-400">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>Total Revenue: $642,000</span>
            <span className="text-green-500 dark:text-green-400">+15.8% YoY</span>
          </div>
        </div>
        
        {/* Tasks and Activity Tab Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button 
              className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'tasks' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
              onClick={() => setActiveTab('tasks')}
            >
              Pending Tasks
            </button>
            <button 
              className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'activity' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
              onClick={() => setActiveTab('activity')}
            >
              Recent Activity
            </button>
            <button 
              className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'updates' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
              onClick={() => setActiveTab('updates')}
            >
              System Updates
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'tasks' && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Your Tasks ({pendingTasks.length})</h3>
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    View All Tasks
                  </button>
                </div>
                <div className="space-y-3">
                  {pendingTasks.map(task => (
                    <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <input type="checkbox" className="h-5 w-5 mt-0.5 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{task.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Due: {task.dueDate} • Assigned to: {task.assignedTo}</p>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {activeTab === 'activity' && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {recentActivity.map(activity => (
                    <div key={activity.id} className="flex items-start border-b border-gray-200 dark:border-gray-700 pb-3">
                      <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 mr-3">
                        {activity.user.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium text-gray-900 dark:text-white">{activity.user}</span>
                          <span className="text-gray-600 dark:text-gray-400"> {activity.action} </span>
                          <span className="font-medium text-gray-900 dark:text-white">{activity.target}</span>
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {activeTab === 'updates' && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">System Updates</h3>
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    All Announcements
                  </button>
                </div>
                <div className="space-y-4">
                  {systemUpdates.map(update => (
                    <div key={update.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900 dark:text-white">{update.title}</h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{update.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{update.description}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Team Performance</h2>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                View Details
              </button>
            </div>
            <div className="space-y-4">
              {['Marketing', 'Development', 'Design', 'Sales'].map((team, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{team}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{70 + index * 5}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div 
                      className="h-2 bg-blue-500 dark:bg-blue-600 rounded-full" 
                      style={{ width: `${70 + index * 5}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Upcoming Events */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Events</h2>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                Add Event
              </button>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map(event => (
                <div key={event.id} className="flex items-start border-b border-gray-200 dark:border-gray-700 pb-3">
                  <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-300 mr-3">
                    <CalendarIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-gray-900 dark:text-white">{event.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{event.date}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span className="inline-flex items-center">
                        <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </span>
                    </p>
                    <div className="flex items-center mt-2">
                      <div className="flex -space-x-2">
                        {[...Array(Math.min(3, event.attendees))].map((_, index) => (
                          <div 
                            key={index} 
                            className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-600 border-2 border-white dark:border-gray-800"
                          />
                        ))}
                      </div>
                      {event.attendees > 3 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                          +{event.attendees - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;