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
    extend: {
      fontFamily: {
        // define font families
        Roboto: ["Roboto", "sans-serif"],
        FiraSans: ["Fira Sans", "sans-serif"],
        FiraMono: ["Fira Mono", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        RobotoSlab: ["Roboto Slab", "sans-serif"],
      },
    },
  },
  plugins: [],
};
