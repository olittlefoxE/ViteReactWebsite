import React from "react";

export const NavBar = () => {
  const About = "About";
  const Projects = "Projects";
  const Contact = "Contact";
  return (
    <nav className="flex items-center justify-between rounded-md bg-gray-700 px-5 py-3 text-white">
      <div className="flex space-x-4">
        <div to="/about" className="hover:text-gray-300">
          {About}
        </div>
        <div to="/projects" className="hover:text-gray-300">
          {Projects}
        </div>
        <div to="/.components/Contact.jsx" className="hover:text-gray-300">
          {Contact}
        </div>
      </div>
    </nav>
  );
};
