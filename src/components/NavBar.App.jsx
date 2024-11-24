import React from "react";
import { motion } from "framer-motion";

export const NavBar = ({ navigateTo }) => {
  const buttonVariants = {
    initial: { scale: 1, opacity: 1 },
    hover: { scale: 1.1, color: "#e0e0e0", opacity: 1 },
    tap: { scale: 0.95 },
  };

  return (
    <nav className="flex items-center justify-between rounded-md bg-gray-700 px-5 py-3 text-white">
      <div className="flex space-x-4">
        {["Home", "About", "Contact"].map((label) => (
          <motion.button
            key={label}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigateTo(label.toLowerCase())}
            className="px-4 py-2 font-semibold transition-all rounded-md focus:outline-none"
          >
            {label}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

