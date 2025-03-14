import ToggleThemeButton from "./ToggleThemeButton";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we are on the home page
  const isHomePage = location.pathname === "/home";

  return (
    <nav
      className={`w-full bg-gradient-to-r from-forgeAsh via-forgeSmoke to-fireGlow py-4 shadow-md dark:from-forgeDark dark:via-forgeGrayDark dark:to-emberAsh
        ${
          isHomePage ? "relative" : "fixed top-0 left-0 z-50"
        } transition-all duration-300 ease-in-out`}
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
    </nav>
  );
};

export default NavBar;
