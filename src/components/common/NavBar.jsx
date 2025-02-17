import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const NavBar = () => {
  // Map button labels to their corresponding routes
  const pageMap = {
    Home: "/",
    Languages: "/languages",
    About: "/about",
    Contact: "/contact",
  };

  const buttonVariants = {
    initial: { x: 0, opacity: 1, rotate: 0 },
    hover: {
      x: 5,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: {
      rotate: [0, 15, -15, 0],
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav className="inline-flex items-center justify-between rounded-md bg-gradient-to-r from-fireBase via-fireCrimson to-fireBlaze px-5 py-3">
      <div className="flex space-x-4">
        {Object.entries(pageMap).map(([label, path]) => (
          <Link to={path} key={label}>
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="rounded-md px-4 py-2 font-semibold transition-all focus:outline-none"
            >
              {label}
            </motion.button>
          </Link>
        ))}
      </div>
    </nav>
  );
};
