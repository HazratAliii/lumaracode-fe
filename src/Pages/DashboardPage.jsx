import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainDashboard from "../components/MainDashboard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Main component for the Dashboard page
const DashboardPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/");
    }
  }, []);
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

export default DashboardPage;
