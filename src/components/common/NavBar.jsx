import ToggleThemeButton from "./ToggleThemeButton";
import PropTypes from "prop-types";

export const NavBar = ({ navigateTo }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-forgeAsh via-forgeSmoke to-fireGlow py-[20px] shadow-md dark:from-forgeDark dark:via-forgeGrayDark dark:to-emberAsh">
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4">
        <div className="flex space-x-4">
          <button onClick={() => navigateTo("/home")}>Home</button>
          <button onClick={() => navigateTo("/about")}>About</button>
          <button onClick={() => navigateTo("/contact")}>Contact</button>
          <button onClick={() => navigateTo("/languages")}>Languages</button>
        </div>
        <div className="rounded-md bg-gradient-to-r from-fireBase via-fireCrimson to-fireBlaze p-2">
          <ToggleThemeButton />
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export default NavBar;
