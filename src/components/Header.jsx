import NotificationIcon from "./NotificationIcon";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/signup");
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://lumaracode-api.vercel.app/api/v1/dashboard",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUser({ name: response.data.name, image: response.data.image });
        } catch (err) {
          alert(err);
        }
      };
      fetchData();
    }
  }, [navigate]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <header className="flex items-center justify-between p-6 bg-gray-50 border-b">
      <input
        type="text"
        placeholder="Search here"
        className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:border-green-400"
      />

      <div className="flex items-center space-x-4">
        <NotificationIcon icon="🔔" count={21} />
        <NotificationIcon icon="💬" count={53} />
        <div className="flex items-center space-x-2">
          <img
            className="w-8 h-8 rounded-full"
            src={
              user.image || "https://randomuser.me/api/portraits/women/44.jpg"
            }
            alt="User"
          />
          <span>{user.name || "Guest"}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
