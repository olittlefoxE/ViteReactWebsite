// ReactWebsite/src/components/NavBar.jsx
import React from "react";
import { motion } from "framer-motion";

export const NavBar = ({ navigateTo }) => {
  const buttonVariants = {
    initial: { x: 0, opacity: 1, rotate: 0 },
    hover: { 
      x: 5, 
      color: "#e0e0e0", 
      opacity: 1, 
      transition: { type: "spring", stiffness: 300, damping: 15 } 
    },
    tap: { 
      rotate: [0, 15, -15, 0], 
      scale: 0.9, 
      transition: { duration: 0.3 } 
    },
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
            style={{ color: "inherit" }}
          >
            {label}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};




