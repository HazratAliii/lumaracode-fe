import NotificationIcon from "./NotificationIcon";

const Header = () => {
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
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
          />
          <span>Sara Hike</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
