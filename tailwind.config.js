/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/components/*.{js,jsx}",
    "./src/components/projects/*.{js,jsx}",
    "./src/pages/*.{js,jsx}",
    "./src/App.jsx",
  ],
  darkMode: "class", // Enable dark mode via a class
  theme: {
    extend: {},
  },
  plugins: [
  ],
};
