import FirstCard from "../assets/FirstCard.png";
import SecondCard from "../assets/SecondCard.png";
import ThirdCard from "../assets/ThirdCard.png";

const MainDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Good Morning!</h2>
      <p className="text-gray-600">Hi, Sara. Welcome back!</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* <MetricCard title="Total Orders" value={75} change={4} icon="📜" />
        <MetricCard title="Total Delivered" value={357} change={4} icon="📦" />
        <MetricCard title="Total Canceled" value={65} change={-25} icon="❌" />
        <MetricCard
          title="Total Revenue"
          value={`$128`}
          change={-12}
          icon="💰"
        /> */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3">
            <img src={FirstCard} alt="" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3">
            <img src={SecondCard} alt="" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3">
            <img src={ThirdCard} alt="" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3">
            <img src={FirstCard} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
