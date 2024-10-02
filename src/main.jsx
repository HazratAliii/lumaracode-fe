import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import SignupPage from "./Pages/SignupPage.jsx";
import "./index.css";
import DashboardPage from "./Pages/DashboardPage.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <SignupPage />
    {/* <DashboardPage /> */}
  </StrictMode>
);
