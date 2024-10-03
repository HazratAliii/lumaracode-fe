import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import SignupPage from "./Pages/SignupPage.jsx";
import "./index.css";
import DashboardPage from "./Pages/DashboardPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <App />
  // <SignupPage />
  // <DashboardPage />
  // </StrictMode>
  <RouterProvider router={router} />
);
