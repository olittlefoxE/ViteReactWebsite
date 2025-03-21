import { useEffect, useState } from "react";

const FINAL_TITLE = "Robin's & Dennis' Code Forge";
const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";

const IntroTitle = () => {
  const [displayText, setDisplayText] = useState(FINAL_TITLE.split(""));

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
      <h1 className="bg-gradient-to-r from-gray-800 via-red-600 to-orange-500 bg-clip-text font-[Blacksmith] text-5xl font-extrabold text-transparent drop-shadow-xl">
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
