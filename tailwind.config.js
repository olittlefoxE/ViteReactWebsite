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
      colors: {
        // Fire Colors
        fireBase: "#D32F2F", // Primary buttons and call-to-actions
        fireGlow: "#FF5722", // Hover and active states
        fireAccent: "#FF7043", // Highlights and subtle accents

        // Forge Grays (for Gradients, Backgrounds, and Borders)
        forgeDark: "#212121", // Dark gray background for sections or cards that require emphasis. Adds depth and focus, ideal for the forge theme.
        forgeAsh: "#424242", // Smoky gray for softer backgrounds or secondary areas like sidebars or footer elements. Creates a muted environment.
        forgeSmoke: "#757575", // Light smoky gray for dividers, subtle panel backgrounds, or borders to add structure without overwhelming other elements.
        forgeGrayLight: "#F5F5F5", // Very light gray, ideal as a background starting point
        forgeGrayBase: "#E0E0E0", // Light gray, perfect for subtle highlights or panels
        forgeGraySoft: "#BDBDBD", // Soft medium gray for gradient midpoints or subtle borders
        forgeGrayWarm: "#9E9E9E", // Warm medium gray for more depth in gradients or neutral panels
        forgeGrayDeep: "#757575", // Deep gray for borders, dividers, or secondary panels
        forgeGrayDark: "#424242", // Dark smoky gray for card backgrounds or secondary areas
        forgeGrayAsh: "#212121", // Very dark gray, close to black, for headers or dark backgrounds

        // Ingot Colors
        ingotMolten: "#F44336", // Headers and highlighted sections
        ingotDeep: "#B71C1C", // Cards and prominent panels
        ingotLight: "#FF8A65", // Subtle highlights and buttons

        // Accent Colors
        emberGlow: "#FF6F00", // Interactive elements and active states
        forgeSteel: "#607D8B", // Neutral tones for borders and navigation bars

        // Backgrounds
        lightBackground: "#FAFAFA", // (Soft white, clean and fresh)
        lightBackgroundAlt: "#F5F5F5", // (Slightly warmer light gray, ideal for alternate sections)
        lightBackgroundMuted: "#EEEEEE", // (Muted light gray for subtle separation of content)
        lightBackgroundShade: "#E0E0E0", // (Soft gray for borders or lighter panels)
        lightBackgroundContrast: "#FFFFFF", // (Pure white for sections needing maximum contrast)
        darkBackground: "#121212", // (Deep black with a slight warm tone)
        darkBackgroundAlt: "#1C1C1C", // (A slightly less intense black, good for subtle variations)
        darkBackgroundMuted: "#1A1A1A", // (Muted dark gray, for panels or less prominent sections)
        darkBackgroundShade: "#242424", // (Dark gray with a hint of softness, suitable for headers or cards)
        darkBackgroundContrast: "#0E0E0E", // (Rich, deep black for high contrast elements)
        // Text
        lightText: "#F9FAFB", // Light text for dark backgrounds
        darkText: "#101010", // Dark text for light backgrounds

        // Hover and Focus States
        hoverFireGlow: "#FF7043", // Hover states for buttons
        hoverIngotLight: "#FF8A65", // Hover effects for panels
        focusFire: "#FF5722", // Focus states for inputs and buttons
      },
      backgroundImage: {
        forgeGradient: "linear-gradient(135deg, #212121, #424242, #D32F2F)", // Forge gradient
        forgeGradientDark: "linear-gradient(135deg, #121212, #1C1C1C, #B71C1C)", // Dark forge gradient
        emberGradient: "radial-gradient(circle, #F44336, #B71C1C, #212121)", // Ember-inspired radial gradient
      },
    },
  },
  plugins: [],
};
