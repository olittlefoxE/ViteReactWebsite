// ReactWebsite/src/components/HeroTitle.jsx
import React from "react";

export const HeroTitle = () => {
  const Heading = "Robin's & Dennis' Code Forge";
  const headingDescription = "rd-code-forge.net";

  return (
    <header className="z-10 text-center drop-shadow-lg">
      <h1 className="text-fireBase font-RobotoSlab text-4xl font-bold drop-shadow-md">
        {Heading}
      </h1>
      <p className="text-fireGlow font-FiraSans text-lg font-light">
        {headingDescription}
      </p>
    </header>
  );
};
