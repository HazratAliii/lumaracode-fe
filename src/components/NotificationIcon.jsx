const NotificationIcon = ({ icon, count }) => {
  return (
    <div className="relative">
      <span>{icon}</span>
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
        {count}
      </span>
    </div>
  );
};

export default NotificationIcon;
