import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import SignupPage from "./Pages/SignupPage.jsx";
import "./index.css";
import DashboardPage from "./Pages/DashboardPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GoogleCallback from "./Pages/GoogleCallback.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/auth/google/callback",
    element: <GoogleCallback />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
