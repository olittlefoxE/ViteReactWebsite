// ReactWebsite/src/components/HeroTitle.jsx
import React from "react";

export const HeroTitle = () => {
  const Heading = "Robin's & Dennis' Code Forge";
  const headingDescription = "rd-code-forge.net";

  return (
    <header className="drop-shadow-neutral-500 z-10 text-center drop-shadow-lg">
      <h1 className="text-4xl font-bold text-white drop-shadow-md">
        {Heading}
      </h1>
      <p className="text-lg font-light text-gray-200">{headingDescription}</p>
    </header>
  );
};
