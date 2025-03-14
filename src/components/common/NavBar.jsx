import ToggleThemeButton from "./ToggleThemeButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const controls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
        controls.start({ y: 0, opacity: 1 });
      } else {
        setIsSticky(false);
        controls.start({ y: -100, opacity: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <>
      {/* This div ensures content starts BELOW the navbar when it's fixed */}
      <div className={`${isSticky ? "h-[80px]" : "h-0"}`} />

      <motion.nav
        animate={controls}
        initial={{ y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className={`w-full bg-gradient-to-r from-forgeAsh via-forgeSmoke to-fireGlow py-4 shadow-md dark:from-forgeDark dark:via-forgeGrayDark dark:to-emberAsh
        fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4">
          <div className="flex space-x-4">
            <button onClick={() => navigate("/home")}>Home</button>
            <button onClick={() => navigate("/about")}>About</button>
            <button onClick={() => navigate("/contact")}>Contact</button>
            <button onClick={() => navigate("/languages")}>Languages</button>
          </div>
          <div className="rounded-md bg-gradient-to-r from-fireBase via-fireCrimson to-fireBlaze p-2">
            <ToggleThemeButton />
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default NavBar;
