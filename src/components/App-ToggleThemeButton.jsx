import React, { useState } from 'react';

export const ToggleThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-md font-medium 
      ${isDarkMode 
        ? 'bg-gray-600 text-white' 
        : 'bg-gray-200 text-gray-800'} 
        hover:opacity-80`}
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};
