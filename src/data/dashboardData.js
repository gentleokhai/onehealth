// Sample data for charts
export const reportsData = [
    { name: "Jan", current: 10000, lastYear: 8000 },
    { name: "Feb", current: 15000, lastYear: 12000 },
    { name: "Mar", current: 18000, lastYear: 16000 },
    { name: "Apr", current: 22000, lastYear: 20000 },
    { name: "May", current: 20000, lastYear: 17000 },
    { name: "Jun", current: 25000, lastYear: 22000 },
    { name: "Jul", current: 28000, lastYear: 20000 },
    { name: "Aug", current: 35000, lastYear: 27000 },
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
    { title: "Live streaming began", time: "8 minutes ago", isNew: true },
    { title: "Yellow Fever in Kano", time: "2 hours ago", isNew: true },
    { title: "Ebola outbreak containment update", time: "Yesterday", isNew: false },
    { title: "Weekly report due", time: "2 days ago", isNew: false },
  ];
  
  export const contactsData = [
    { name: "Dr. Dele", status: "online" },
    { name: "Dr. Irowa", status: "busy" },
    { name: "Vet. Dr. Ikpoba", status: "offline" },
    { name: "Vet. Dr. Inuifak", status: "busy" },
    { name: "Vet. Dr. Iyamu", status: "busy" },
    { name: "Dr. Sarah Johnson", status: "online" },
  ];
  
  export const reportsTableData = [
    { id: "RPT-001", title: "Malaria Outbreak", location: "Lagos", status: "Critical", date: "Mar 8, 2025" },
    { id: "RPT-002", title: "Cholera Cases", location: "Abuja", status: "Monitoring", date: "Mar 7, 2025" },
    { id: "RPT-003", title: "Immunization Campaign", location: "Kano", status: "Completed", date: "Mar 5, 2025" },
    { id: "RPT-004", title: "COVID-19 Update", location: "Nationwide", status: "Active", date: "Mar 3, 2025" },
    { id: "RPT-005", title: "Dengue Fever Alert", location: "Port Harcourt", status: "Critical", date: "Mar 2, 2025" },
    { id: "RPT-006", title: "Measles Vaccination Drive", location: "Kaduna", status: "Ongoing", date: "Mar 1, 2025" },
    { id: "RPT-007", title: "Ebola Preparedness", location: "Enugu", status: "Monitoring", date: "Feb 28, 2025" },
    { id: "RPT-008", title: "Typhoid Awareness Campaign", location: "Ibadan", status: "Completed", date: "Feb 25, 2025" },
    { id: "RPT-009", title: "Lassa Fever Containment", location: "Benin City", status: "Active", date: "Feb 20, 2025" },
    { id: "RPT-010", title: "Hepatitis B Screening", location: "Jos", status: "Ongoing", date: "Feb 15, 2025" },
    { id: "RPT-011", title: "Polio Eradication Program", location: "Maiduguri", status: "Completed", date: "Feb 10, 2025" },
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
  ];