import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-forgeAsh via-forgeSmoke to-fireGlow pb-4 pt-4 font-Poppins text-forgeGrayBase dark:from-forgeDark dark:via-forgeGrayDark dark:to-emberAsh">
      <div className="container mx-auto px-4">
        {/* Decorative line */}
        <div className="mb-4 border-t border-forgeSmoke"></div>

        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Logo/Brand Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Robin & Dennis' Code Forge</h2>
          </div>

          {/* Copyright Section */}
          <div>
            <p className="text-center text-sm md:text-right">
              &copy; 2024 Robin Stiller and Dennis Plischke. All rights
              reserved.
              <br />
              Unauthorized use, duplication, or redistribution of this content,
              in whole or in part, is strictly prohibited without prior written
              permission.
            </p>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-4 border-t border-forgeSmoke"></div>
      </div>
    </footer>
  );
};
