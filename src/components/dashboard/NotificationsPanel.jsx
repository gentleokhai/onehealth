import React from "react";
import { Activity, Users } from "lucide-react";
import { notificationsData, contactsData } from "../../data/dashboardData";

const NotificationsPanel = ({ darkMode }) => {
  const statusColors = {
    online: "bg-green-500",
    busy: "bg-yellow-500",
    offline: "bg-gray-400"
  };

  return (
    <aside
      className={`hidden lg:block w-72 p-5 ${darkMode ? "bg-gray-800" : "bg-white shadow-md"}`}
    >
      <h3 className="font-semibold mb-4">Notifications</h3>
      <ul className="space-y-3">
        {notificationsData.map((note) => (
          <li
            key={note.title}
            className={`p-3 rounded-lg cursor-pointer relative ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            } ${note.isNew ? (darkMode ? "border-l-2 border-blue-500" : "bg-blue-50 dark:bg-gray-700") : ""}`}
          >
            {note.isNew && (
              <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-blue-500"></span>
            )}
            <span className="text-sm font-medium">{note.title}</span>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{note.time}</p>
          </li>
        ))}
      </ul>
      
      <div className="flex justify-between items-center mt-6 mb-4">
        <h3 className="font-semibold">Contacts</h3>
        <button className="text-blue-500 text-sm">View All</button>
      </div>
      <ul className="space-y-3">
        {contactsData.map((contact) => (
          <li
            key={contact.name}
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white relative">
              {contact.name.charAt(0)}
              <span className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 ${darkMode ? "border-gray-800" : "border-white"} ${statusColors[contact.status]}`}></span>
            </div>
            <div>
              <span className="text-sm">{contact.name}</span>
              <p className="text-xs text-gray-500 capitalize">{contact.status}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={`mt-6 p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-blue-50"}`}>
        <h4 className="font-medium mb-2">Recent Activity</h4>
        <div className="space-y-3">
          <div className="flex gap-2 items-start">
            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
              <Activity size={12} className="text-green-600" />
            </div>
            <div>
              <p className="text-xs">New report submitted</p>
              <p className="text-xs text-gray-500">30 min ago</p>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
              <Users size={12} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs">Meeting with WHO</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NotificationsPanel;