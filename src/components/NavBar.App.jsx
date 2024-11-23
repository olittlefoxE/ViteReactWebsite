import React from "react";

export const NavBar = ({ navigateTo }) => {
  return (
    <nav className="flex items-center justify-between rounded-md bg-gray-700 px-5 py-3 text-white">
      <div className="flex space-x-4">
        <button
          onClick={() => navigateTo("home")}
          className="hover:text-gray-300 focus:outline-none"
        >
          Home
        </button>
        <button
          onClick={() => navigateTo("about")}
          className="hover:text-gray-300 focus:outline-none"
        >
          About
        </button>
        <button
          onClick={() => navigateTo("contact")}
          className="hover:text-gray-300 focus:outline-none"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};