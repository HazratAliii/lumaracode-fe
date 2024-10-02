import React from "react";
import Google_symbol from "../assets/google_symbol.svg.png";
import Flower from "../assets/Flower.png";
const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left section: Sign-up form */}
      <div className="md:w-1/2 flex items-center justify-center bg-white">
        <div className="p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4">Join the green movement</h1>
          <p className="text-gray-600 mb-8">Sign up for free</p>

          {/* Google Button */}
          <button className="flex items-center justify-center w-full py-3 mb-4 border rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white border-gray-300 hover:bg-gray-50">
            <img
              src={Google_symbol}
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          <div className="flex items-center my-4">
            <span className="border-b w-full"></span>
            <span className="px-3 text-gray-500">or</span>
            <span className="border-b w-full"></span>
          </div>

          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="brian@example.com"
            />
          </div>

          {/* Continue with email */}
          <button className="w-full bg-[#719331] text-white py-3 rounded-md hover:bg-green-700">
            Continue with email
          </button>

          {/* Footer Text */}
          <p className="text-gray-400 text-xs text-center mt-4">
            By clicking "Continue with Google / email" you agree to our User
            Terms of Services and Privacy Policy
          </p>
        </div>
      </div>

      {/* Right section: Illustration */}
      <div className="md:w-1/2 hidden md:flex items-end justify-end bg-[#FFF1E8]">
        <img src={Flower} alt="Illustration" className="w-4/5 h-auto" />
      </div>
    </div>
  );
};

export default SignupPage;
