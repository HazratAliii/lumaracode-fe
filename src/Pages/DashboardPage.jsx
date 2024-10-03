import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainDashboard from "../components/MainDashboard";

// Main component for the Dashboard page
const DashboardPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1">
        <Header />
        <MainDashboard />
      </div>
    </div>
  );
};

// Sidebar component
// const Sidebar = () => {
//   return (
//     <div className="w-64 bg-white shadow-md">
//       <div className="p-6">
//         <h1 className="text-2xl font-bold text-gray-700">
//           Foody<span className="text-green-500">.</span>
//         </h1>
//       </div>
//       <nav className="mt-8">
//         <SidebarItem label="Dashboard" icon="🏠" active />
//         <SidebarItem label="Order List" icon="📋" />
//         <SidebarItem label="Analytics" icon="📊" />
//         <SidebarItem label="Foods" icon="🍔" />
//         <SidebarItem label="Calendar" icon="📅" />
//         <SidebarItem label="Chat" icon="💬" />
//         <SidebarItem label="Wallet" icon="💼" />
//       </nav>
//     </div>
//   );
// };

// Sidebar item
// const SidebarItem = ({ label, icon, active }) => {
//   return (
//     <a
//       href="#"
//       className={`flex items-center p-4 text-gray-700 ${
//         active ? "bg-green-100 text-green-600" : "hover:bg-gray-100"
//       } transition-colors duration-150`}
//     >
//       <span className="mr-2">{icon}</span>
//       {label}
//     </a>
//   );
// };

// Header component
// const Header = () => {
//   return (
//     <header className="flex items-center justify-between p-6 bg-gray-50 border-b">
//       <input
//         type="text"
//         placeholder="Search here"
//         className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:border-green-400"
//       />

//       <div className="flex items-center space-x-4">
//         <NotificationIcon icon="🔔" count={21} />
//         <NotificationIcon icon="💬" count={53} />
//         <div className="flex items-center space-x-2">
//           <img
//             className="w-8 h-8 rounded-full"
//             src="https://randomuser.me/api/portraits/women/44.jpg"
//             alt="User"
//           />
//           <span>Sara Hike</span>
//         </div>
//       </div>
//     </header>
//   );
// };

// Notification Icon with count
// const NotificationIcon = ({ icon, count }) => {
//   return (
//     <div className="relative">
//       <span>{icon}</span>
//       <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
//         {count}
//       </span>
//     </div>
//   );
// };

// Main dashboard with metrics
// const MainDashboard = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold">Good Morning!</h2>
//       <p className="text-gray-600">Hi, Sara. Welcome back!</p>

//       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <MetricCard title="Total Orders" value={75} change={4} icon="📜" />
//         <MetricCard title="Total Delivered" value={357} change={4} icon="📦" />
//         <MetricCard title="Total Canceled" value={65} change={-25} icon="❌" />
//         <MetricCard
//           title="Total Revenue"
//           value={`$128`}
//           change={-12}
//           icon="💰"
//         />
//       </div>
//     </div>
//   );
// };

// Card for each metric
// const MetricCard = ({ title, value, change, icon }) => {
//   const isPositive = change >= 0;
//   const changeColor = isPositive ? "text-green-500" : "text-red-500";

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <div className="flex items-center space-x-3">
//         <div className="text-4xl">{icon}</div>
//         <div>
//           <h4 className="text-lg font-semibold">{title}</h4>
//           <p className="text-2xl font-bold">{value}</p>
//           <p className={`text-sm ${changeColor}`}>
//             {isPositive ? "▲" : "▼"} {Math.abs(change)}% (30 days)
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

export default DashboardPage;
