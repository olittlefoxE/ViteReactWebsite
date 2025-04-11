import ToggleThemeButton from "./ToggleThemeButton";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * @description Navigation bar component for the website, providing links to different sections and a theme toggle button.
 * @param {HTMLNavElement} nav - The navigation element containing the links and theme toggle button.
 * @param {Hook} useNavigate - Hook from react-router-dom for programmatic navigation.
 * @param {Hook} useLocation - Hook from react-router-dom to get the current location object.
 * @param {Function} motion - Animation library for React, used to create smooth transitions and animations.
 * @param {Function} ToggleThemeButton - Component for toggling the website's theme between light and dark modes.
 * @param {string} location.pathname - The current URL path, used to determine if we are on the home page.
 * @param {Function} navigate - Function to programmatically navigate to different routes.
 * @param {string} isHomePage - Boolean indicating if the current page is the home page.
 * @param {Function} map - Function to iterate over an array and render buttons for each section.
 * @returns {JSX.Element} <NavBar /> - The rendered navigation bar component.
 */

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we are on the home page
  const isHomePage = location.pathname === "/home";

  return (
    // Navigation bar with gradient background and subtle animations
    <nav
      className={`w-screen bg-gradient-to-r from-forgeAsh via-forgeSmoke to-fireGlow py-4 shadow-md dark:from-forgeDark dark:via-forgeGrayDark dark:to-emberAsh overflow-hidden
        ${
          isHomePage ? "relative" : "fixed top-0 left-0 z-50"
        } transition-all duration-300 ease-in-out`}
    >
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4">
        {/* Subtle Animated Buttons with Forge Colors */}
        <div className="flex space-x-4">
          {["Home", "About", "Contact", "Languages"].map((label) => (
            <motion.button
              key={label}
              onClick={() => navigate(`/${label.toLowerCase()}`)}
              whileHover={{ scale: 1.05, opacity: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="rounded-md px-6 py-4 text-white transition-colors duration-300 
                         bg-gradient-to-r from-forgeAsh to-forgeGrayDark hover:from-fireBase hover:to-fireGlow"
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Toggle Theme Button with Animation */}
        <motion.div
          whileHover={{ scale: 1.05, opacity: 0.9 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="rounded-md bg-gradient-to-r from-fireBase via-fireCrimson to-fireBlaze p-2"
        >
          <ToggleThemeButton />
        </motion.div>
      </div>
    </nav>
  );
};

export default NavBar;
