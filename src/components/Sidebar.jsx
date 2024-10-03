import Orderlist from "../assets/Orderlist.png";
import Analytics from "../assets/Analytics.png";
import Foods from "../assets/Foods.png";
import Calender from "../assets/Calender.png";
import Chat from "../assets/Chat.png";
import Wallet from "../assets/Wallet.png";

const Sidebar = () => {
  //   const arr = [Orderlist, Analytics, Foods, Calender];
  const arr = [
    // { src: , name: "Dashboard" }
    { src: Orderlist, name: "Dashboard" },
    { src: Orderlist, name: "Order list" },

    { src: Analytics, name: "Analytics" },
    { src: Foods, name: "Foods" },
    { src: Calender, name: "Calender" },
    { src: Chat, name: "Chat" },
    { src: Wallet, name: "Wallet" },
  ];
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-700">
          Foody<span className="text-green-500">.</span>
        </h1>
      </div>
      <nav className="mt-8">
        {/* <SidebarItem label="Dashboard" icon="🏠" active />
        <SidebarItem label="Order List" icon="📋" />
        <SidebarItem label="Analytics" icon="📊" />
        <SidebarItem label="Foods" icon="🍔" />
        <SidebarItem label="Calendar" icon="📅" />
        <SidebarItem label="Chat" icon="💬" />
        <SidebarItem label="Wallet" icon="💼" /> */}
        <div>
          {/* <div className="flex justify-center">
            <img src={Orderlist} alt="" />
            <span>Order list</span>
          </div>
          <div>
            <img src={Orderlist} alt="" />
            <span>Analytics</span>
          </div>
          <div>
            <img src={Orderlist} alt="" />
            <span>Foods</span>
          </div>
          <div>
            <img src={Orderlist} alt="" />
            <span>calender</span>
          </div>
          <div>
            <img src={Orderlist} alt="" />
            <span>Chat</span>
          </div>
          <div>
            <img src={Orderlist} alt="" />
            <span>Order list</span>
          </div> */}
          {arr.map((item) => (
            <div className="flex justify-center">
              <div className="w-2/3 flex gap-3 mt-10 ">
                <img src={item.src} alt="" />
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
