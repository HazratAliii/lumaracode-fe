import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GoogleCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Get the token from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      // Store the token in localStorage or any state management
      localStorage.setItem("authToken", token);
      // Redirect to the dashboard
      navigate("/dashboard");
    } else {
      console.error("No token found in the URL");
      // Optionally, handle the error (e.g., navigate to login page)
      navigate("/signup");
    }
  }, [navigate]);

  return <div>Loading...</div>; // Show a loading message while processing
}

export default GoogleCallback;
