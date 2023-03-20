import React from "react";
import logo from "../../assets/sausage.png";

export default function NavBar() {
  return (
    <nav className="bg-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">Meaty Mail</span>
            <img
              className="block lg:hidden h-8 w-auto ml-4"
              src={logo}
              alt="Meaty Mail"
            />
            <img
              className="hidden lg:block h-8 w-auto ml-4"
              src={logo}
              alt="Meaty Mail"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-white border hover:border-white hover:bg-gray-800 hover:text-white text-gray-800 font-semibold py-2 px-4 rounded-lg mr-2 transition ease-in-out duration-300">
                Log In
              </button>
              <button className="bg-gray-800 border hover:bg-white hover:text-gray-800 hover:border-black text-white font-semibold py-2 px-4 rounded-lg transition ease-in-out duration-300">
                Log Out
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button className="p-2 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
