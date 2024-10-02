import React from "react";
import Subtract from "./assets/Subtract.png";
import HeroImg from "./assets/HeroImg.png";
import Airbnb from "./assets/Airbnb.png";
import Google from "./assets/Google.png";
import Fedex from "./assets/FedEx.png";
import Microsoft from "./assets/Microsoft.png";
import Amazon from "./assets/Amazon.png";
import Card from "./assets/Card.png";
import Like from "./assets/Like.png";

const App = () => {
  return (
    <div className="font-sans bg-[#F4F5FC]">
      {/* Navigation Bar */}
      <nav className="flex justify-around items-center tp-5">
        <div className="text-2xl font-bold text-purple-700">
          <img src={Subtract} alt="lumaracode" />
        </div>
        <div className="space-x-8">
          <a href="#" className="text-[#3B52CF] hover:text[#3B52CF]">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text[#3B52CF]">
            Projects
          </a>
          <a href="#" className="text-gray-700 hover:text[#3B52CF]">
            Services
          </a>
        </div>
        <button className="px-4 py-2 bg-[#3B52CF] text-white rounded-md">
          Contact Us
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex justify-around items-center bg-[#F4F5FC] p-16">
        <div className="space-y-6 max-w-lg">
          <h1 className="text-5xl font-bold text-#292E47">
            Empower Your Business With Stunning Design!
          </h1>
          <p className="text-[#6B708D]">
            Lumaracode is a digital design and development studio. We design and
            develop astonishing websites and mobile apps.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-[#3B52CF] text-white rounded-md">
              Get in touch
            </button>
            <a href="#" className="text-[#6B708D] hover:underline">
              See our work
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-120 h-120 rounded-full object-cover"
            src={HeroImg}
            alt="Person"
          />
          <div className="absolute top-8 left-8 bg-white p-4 rounded-lg shadow-md">
            <p className="text-gray-700 ml-5">Choose your card</p>
            <img src={Card} alt="" />
            {/* <div className="bg-purple-600 text-white p-2 rounded-md mt-2">
              <p className="text-center">2130</p>
            </div> */}
            <p className="text-3xl text-center">. . .</p>
          </div>
          <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-md">
            <div className="text-center">
              <img src={Like} alt="" className="mx-auto" />
            </div>
            <p className="text-gray-700">Project has been accepted</p>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-8 bg-[#F4F5FC]">
        <div className="flex justify-around">
          <img className="h-8 w-24" src={Airbnb} alt="Airbnb" />
          <img className="h-8 w-24" src={Google} alt="Google" />
          <img className="h-8 w-28" src={Microsoft} alt="Microsoft" />
          <img className="h-8 w-24" src={Fedex} alt="FedEx" />
          <img className="h-8 w-24" src={Amazon} alt="Amazon" />
        </div>
      </section>
    </div>
  );
};

export default App;
