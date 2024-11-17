import React, { useState } from "react";

export const ToggleThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`flex h-12 w-12 items-center justify-center rounded-full ${
        isDarkMode
          ? "bg-gray-700 text-yellow-400"
          : "bg-gray-300 text-yellow-600"
      } hover:opacity-80`}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        /* Moon SVG for Dark Mode */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3.5a8.5 8.5 0 007.313 13.588A8.01 8.01 0 0112 21a8.5 8.5 0 010-17z" />
        </svg>
      ) : (
        /* Fixed Sun SVG for Light Mode */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 4a1 1 0 011 1v2a1 1 0 01-2 0V5a1 1 0 011-1zm0 14a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM5.22 5.22a1 1 0 011.42 0l1.42 1.42a1 1 0 01-1.42 1.42L5.22 6.64a1 1 0 010-1.42zM16.94 16.94a1 1 0 011.42 0l1.42 1.42a1 1 0 11-1.42 1.42l-1.42-1.42a1 1 0 010-1.42zM4 12a1 1 0 011-1h2a1 1 0 110 2H5a1 1 0 01-1-1zm12 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM5.22 18.78a1 1 0 011.42 0l1.42-1.42a1 1 0 011.42 1.42L6.64 20.2a1 1 0 01-1.42 0zM16.94 7.06a1 1 0 011.42-1.42l1.42 1.42a1 1 0 01-1.42 1.42l-1.42-1.42zM12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      )}
    </button>
  );
};
