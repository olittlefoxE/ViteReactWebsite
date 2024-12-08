/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/components/*.{js,jsx,ts,tsx}',
    './src/pages/*.{js,jsx,ts,tsx}',
  ],
  darkMode: "class", // Enable dark mode via a class
  theme: {
    extend: {},
  },
  plugins: [
  ],
};
