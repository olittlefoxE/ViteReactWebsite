import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const About = "About";
  const Projects = "Projects";
  const Contact = "Contact";
  return (
    <nav className="flex items-center justify-between rounded-md bg-gray-700 px-5 py-3 text-white">
      <div className="flex space-x-4">
        <Link to="/about" className="hover:text-gray-300">
          {About}
        </Link>
        <Link to="/projects" className="hover:text-gray-300">
          {Projects}
        </Link>
        <Link to="/contact" className="hover:text-gray-300">
          {Contact}
        </Link>
      </div>
    </nav>
  );
};
