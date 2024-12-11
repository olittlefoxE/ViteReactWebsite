// ReactWebsite/src/components/Footer.jsx
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-400 dark:bg-gray-800 py-6 text-black dark:text-white">
      <div className="container mx-auto px-4">
        {/* Decorative line */}
        <div className="border-t border-gray-300 dark:border-gray-600 mb-4"></div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo/Brand Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Robin & Dennis' Code Forge</h2>
          </div>

          {/* Copyright Section */}
          <div>
            <p className="text-sm text-center md:text-right">
              &copy; 2024 Robin Stiller and Dennis Plischke. All rights reserved.
              <br />
              Unauthorized use, duplication, or redistribution of this content, in whole or in part, is strictly prohibited without prior written permission.
            </p>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="border-t border-gray-300 dark:border-gray-600 mt-4"></div>
      </div>
    </footer>
  );
};

