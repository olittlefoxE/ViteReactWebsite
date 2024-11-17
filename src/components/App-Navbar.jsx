import React from "react";

export const NavBar = () => {
  const About = "About";
  const Projects = "Projects";
  const Contact = "Contact";
  return (
    <nav className="sticky flex items-center justify-between bg-gray-700 px-5 py-3 text-white">
      <div className="flex space-x-4">
        <a href /*="#"*/ className="hover:text-gray-300">
          {About}
        </a>
        <a href /*="#"*/ className="hover:text-gray-300">
          {Projects}
        </a>
        <a href /*="#"*/ className="hover:text-gray-300">
          {Contact}
        </a>
      </div>
    </nav>
  );
};
