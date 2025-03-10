// Sample data for charts
export const reportsData = [
    { name: "Jan", current: 10000, lastYear: 8000 },
    { name: "Feb", current: 15000, lastYear: 12000 },
    { name: "Mar", current: 18000, lastYear: 16000 },
    { name: "Apr", current: 22000, lastYear: 20000 },
    { name: "May", current: 20000, lastYear: 17000 },
    { name: "Jun", current: 25000, lastYear: 22000 },
  ];
  
  export const deviceData = [
    { name: "Mobile", value: 65 },
    { name: "Desktop", value: 25 },
    { name: "Tablet", value: 10 },
  ];
  
  export const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  
  export const statsData = [
    { title: "Reports Uploaded", value: 8547, growth: 12.5, icon: "FileText" },
    { title: "Visits", value: 12625, growth: 8.2, icon: "Users" },
    { title: "New Reports", value: 1352, growth: 4.7, icon: "Activity" },
    { title: "Live Reporters", value: 213, growth: 2.1, icon: "Bell" },
  ];
  
  export const notificationsData = [
    { title: "Yellow Fever in Kano", time: "2 hours ago", isNew: true },
    { title: "Report reviewed by Dr. Adams", time: "5 hours ago", isNew: true },
    { title: "Ebola outbreak containment update", time: "Yesterday", isNew: false },
    { title: "Weekly report due", time: "2 days ago", isNew: false },
  ];
  
  export const contactsData = [
    { name: "Dr. Dele", status: "online" },
    { name: "Dr. Irowa", status: "busy" },
    { name: "Vet. Dr. Ikpoba", status: "offline" },
    { name: "Dr. Sarah Johnson", status: "online" },
  ];
  
  export const reportsTableData = [
    { id: "RPT-001", title: "Malaria Outbreak", location: "Lagos", status: "Critical", date: "Mar 8, 2025" },
    { id: "RPT-002", title: "Cholera Cases", location: "Abuja", status: "Monitoring", date: "Mar 7, 2025" },
    { id: "RPT-003", title: "Immunization Campaign", location: "Kano", status: "Completed", date: "Mar 5, 2025" },
    { id: "RPT-004", title: "COVID-19 Update", location: "Nationwide", status: "Active", date: "Mar 3, 2025" },
  ];
  
  export const statusColors = {
    Critical: "bg-red-100 text-red-700",
    Monitoring: "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
    Active: "bg-blue-100 text-blue-700",
  };
  
  export const navItems = [
    { name: "Overview", icon: "Home" },
    { name: "Reports", icon: "FileText" },
    // { name: "Projects", icon: "Activity" },
    // { name: "Schedule", icon: "Calendar" },
    // { name: "Users", icon: "Users" },
    // { name: "Settings", icon: "Settings" },
  ];