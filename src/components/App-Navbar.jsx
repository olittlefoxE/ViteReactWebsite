import React from 'react';

export const NavBar = () => {
  return (
    <nav className="sticky bg-gray-700 text-white flex justify-between items-center py-3 px-5">
      <div className="flex space-x-4">
        <a href/*="#"*/ className="hover:text-gray-300">Home</a>
        <a href/*="#"*/ className="hover:text-gray-300">About</a>
        <a href/*="#"*/ className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
};

