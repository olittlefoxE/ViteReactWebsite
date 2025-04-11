import { useEffect, useState } from "react";
import { activateForgeEffect } from "./ashAnimation";

/**
 * @description IntroTitle component that displays a title with a forge effect.
 * @param {Hook} - Hook to manage state for the displayed text and activation status.
 * @param {Hook} - Hook to perform side effects in function components.
 * @param {Function} activateForgeEffect - Function to activate the forge effect.
 * @param {string} FINAL_TITLE - The final title to be displayed.
 * @param {string} CHARACTERS - The characters used for the scrambling effect.
 * @param {Function} setDisplayText - Function to update the displayed text.
 * @param {Function} setCanActivate - Function to update the activation status.
 * @param {Function} handleForgeClick - Function to handle the click event on the title.
 * @param {Function} scrambleEffect - Function to apply the scrambling effect to each character.
 * @param {Function} setTimeout - Function to set a timer for the activation cooldown.
 * @param {Function} clearTimeout - Function to clear the timer.
 * @param {Function} setInterval - Function to set a timer for the scrambling effect.
 * @param {Function} clearInterval - Function to clear the timer.
 * @param {Function} FINAL_TITLE.split - Function to split the final title into characters.
 * @returns {JSX.Element} <IntroTitle /> - The rendered intro title component.
 */

const FINAL_TITLE = "Robin's & Dennis' Code Forge";
const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";

const IntroTitle = () => {
  const [displayText, setDisplayText] = useState(FINAL_TITLE.split(""));
  const [canActivate, setCanActivate] = useState(true);

  const handleForgeClick = () => {
    if (!canActivate) return;

    activateForgeEffect();
    setCanActivate(false);

    // Abklingzeit von 60 Sekunden
    setTimeout(() => {
      setCanActivate(true);
    }, 60000);
  };

  useEffect(() => {
    let timeouts = [];
    let intervals = [];

    const scrambleEffect = (index, finalChar) => {
      let iterations = 0;
      const interval = setInterval(() => {
        setDisplayText((prevText) => {
          const newText = [...prevText];
          newText[index] =
            CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          return newText;
        });
        iterations++;

        if (iterations > 10) {
          // Stop after 10 cycles
          clearInterval(interval);
          setDisplayText((prevText) => {
            const newText = [...prevText];
            newText[index] = finalChar;
            return newText;
          });
        }
      }, 50 + Math.random() * 50); // Randomized speed for each letter

      intervals.push(interval);
    };

    FINAL_TITLE.split("").forEach((char, i) => {
      if (char !== " ") {
        // Skip spaces
        timeouts.push(setTimeout(() => scrambleEffect(i, char), i * 100)); // Staggered delay
      }
    });

    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <header className="z-10 text-center drop-shadow-lg">
      {/* Forge-inspired Title */}
      <h1
        onClick={handleForgeClick}
        className={`
          bg-gradient-to-r from-gray-800 via-red-600 to-orange-500 
          bg-clip-text font-[Blacksmith] text-5xl font-extrabold 
          text-transparent drop-shadow-xl cursor-pointer 
          transition-all duration-300
          ${!canActivate ? "opacity-75" : "hover:scale-105"}
        `}
      >
        {displayText.map((char, i) => (
          <span key={i} className="inline-block">
            {char}
          </span>
        ))}
      </h1>

      {/* Subtitle with metal-like glow */}
      <p className="mt-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-clip-text text-xl font-semibold text-transparent drop-shadow-md">
        rd-code-forge.net
      </p>

      {/* Decorative SVG: Sparks */}
      <svg
        className="mx-auto mt-2 animate-flicker"
        width="80"
        height="20"
        viewBox="0 0 80 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="3" fill="orange" opacity="0.8" />
        <circle cx="30" cy="5" r="2" fill="red" opacity="0.6" />
        <circle cx="50" cy="15" r="2" fill="yellow" opacity="0.7" />
        <circle cx="70" cy="8" r="3" fill="orange" opacity="0.5" />
      </svg>
    </header>
  );
};

export default IntroTitle;
