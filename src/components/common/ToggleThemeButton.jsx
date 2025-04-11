import { useCallback, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

/**
 * @description ToggleThemeButton component
 * @param {Hook} useLocalStorage - Custom hook for managing local storage state.
 * @param {string} key - The key for local storage.
 * @param {boolean} initialValue - Initial value for the theme state.
 * @param {Hook} useCallback - Hook to memoize the toggle function.
 * @param {Hook} useEffect - Hook to apply the theme class to the document element.
 * @param {Function} setIsDarkMode - Function to update the theme state.
 * @param {boolean} isDarkMode - Current theme state.
 * @param {Function} toggleTheme - Function to toggle the theme state.
 * @param {Function} document - Global object representing the HTML document.
 * @returns {JSX.Element} <ToggleThemeButton /> - The rendered toggle theme button component.
 */

const ToggleThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("theme", false);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, [setIsDarkMode]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-bl from-forgeGrayBase via-forgeGrayWarm to-forgeGrayDeep dark:bg-gradient-to-bl dark:from-forgeDark dark:via-forgeAsh dark:to-forgeSmoke"
      aria-label="Toggle Theme"
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
          isDarkMode ? "translate-y-[150%]" : "translate-y-0" // Move the sun icon up when dark mode is active
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-600"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="4" />
          <line
            x1="12"
            y1="2"
            x2="12"
            y2="6"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="12"
            y1="18"
            x2="12"
            y2="22"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="2"
            y1="12"
            x2="6"
            y2="12"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="18"
            y1="12"
            x2="22"
            y2="12"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="4.93"
            y1="4.93"
            x2="7.76"
            y2="7.76"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="16.24"
            y1="16.24"
            x2="19.07"
            y2="19.07"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="4.93"
            y1="19.07"
            x2="7.76"
            y2="16.24"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="16.24"
            y1="7.76"
            x2="19.07"
            y2="4.93"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
          isDarkMode ? "translate-y-0" : "translate-y-[-150%]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3.5a8.5 8.5 0 007.313 13.588A8.01 8.01 0 0112 21a8.5 8.5 0 010-17z" />
        </svg>
      </div>
    </button>
  );
};

export default ToggleThemeButton;
