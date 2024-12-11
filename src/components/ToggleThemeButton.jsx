// ReactWebsite/src/components/ToggleThemeButton.jsx
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
      className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 hover:opacity-80 overflow-hidden"
      aria-label="Toggle Theme"
    >
      {/* Sun Animation */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
          isDarkMode ? "translate-y-[150%]" : "translate-y-0"
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

      {/* Moon Animation */}
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