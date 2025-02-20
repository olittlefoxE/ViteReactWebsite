/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
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
				fireBlaze: "#FF4500", // Bright orange-red for intense highlights
				fireSpark: "#FF6347", // Lively red-orange for interactive elements
				fireCrimson: "#DC143C", // Deep crimson for bold and dramatic accents
				fireAmber: "#FFBF00", // Bright amber for glowing effects
				fireFlare: "#FF9E00", // Vivid orange for dynamic callouts
				fireCore: "#E65100", // Core orange-red for gradient bases or intense focus areas

				// Forge Grays
				forgeDark: "#212121", // Dark gray background for sections or cards that require emphasis
				forgeAsh: "#424242", // Smoky gray for softer backgrounds or secondary areas
				forgeSmoke: "#757575", // Light smoky gray for dividers, subtle panel backgrounds, or borders
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

				// Additional Accent Colors
				emberGlow: "#FF6F00", // Interactive elements and active states
				emberHeat: "#FF5722", // Warm ember orange for focus elements
				emberAsh: "#A52A2A", // Subtle brown-red for muted highlights
				emberFlame: "#FF6F61", // Soft flame color for secondary accents
				emberSpark: "#FFA07A", // Light and fiery orange for interactive elements

				// Background Variants
				lightBackground: "#FAFAFA", // Soft white, clean and fresh
				lightBackgroundAlt: "#F5F5F5", // Slightly warmer light gray, ideal for alternate sections
				lightBackgroundMuted: "#EEEEEE", // Muted light gray for subtle separation of content
				lightBackgroundShade: "#E0E0E0", // Soft gray for borders or lighter panels
				lightBackgroundContrast: "#FFFFFF", // Pure white for sections needing maximum contrast
				darkBackground: "#121212", // Deep black with a slight warm tone
				darkBackgroundAlt: "#1C1C1C", // A slightly less intense black, good for subtle variations
				darkBackgroundMuted: "#1A1A1A", // Muted dark gray, for panels or less prominent sections
				darkBackgroundShade: "#242424", // Dark gray with a hint of softness, suitable for headers or cards
				darkBackgroundContrast: "#0E0E0E", // Rich, deep black for high contrast elements
			},
			backgroundImage: {
				// Fire-Inspired Gradients
				fireGradientBlaze: "linear-gradient(135deg, #FF4500, #FF9E00, #FFD700)", // Blaze-inspired gradient
				fireGradientSpark: "linear-gradient(135deg, #FF6347, #FFBF00, #FF4500)", // Spark-inspired gradient
				fireGradientCore: "linear-gradient(135deg, #E65100, #FF5722, #FF7043)", // Core fire tones gradient

				// Forge Gradients
				forgeGradient: "linear-gradient(135deg, #212121, #424242, #D32F2F)", // Original forge gradient
				forgeGradientDark: "linear-gradient(135deg, #121212, #1C1C1C, #B71C1C)", // Original dark forge gradient
				forgeGradientSteel:
					"linear-gradient(220deg, #1B1B1B, #333333, #CCCCCC)", // Forge steel tones
				forgeGradientAsh: "linear-gradient(135deg, #424242, #757575, #BDBDBD)", // Forge ash tones
				forgeGradientIron: "linear-gradient(135deg, #212121, #333333, #1B1B1B)", // Forge iron tones
				forgeGradientShadow:
					"linear-gradient(135deg, #1B1B1B, #212121, #121212)", // Subtle shadow gradient

				// Ember-Inspired Gradients
				emberGradient: "radial-gradient(circle, #F44336, #B71C1C, #212121)", // Original ember-inspired radial gradient
				emberGradientFlare:
					"radial-gradient(circle, #FF9E00, #FF5722, #E65100)", // Ember flare
				emberGradientHeat: "radial-gradient(circle, #FF6F61, #A52A2A, #1A0F0F)", // Heat-inspired gradient
				emberGradientGlow: "radial-gradient(circle, #FF7043, #FF5722, #121212)", // Subtle ember glow
			},
		},
	},
	plugins: [],
};
