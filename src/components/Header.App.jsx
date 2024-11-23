import React from "react";

export const Header = () => {
  const Heading = "Robin's & Dennis' Code Forge";
  const headingDescription = "rd-code-forge.net";

  return (
    <header className="text-center">
      <h1 className="text-4xl font-bold text-white drop-shadow-md">
        {Heading}
      </h1>
      <p className="text-lg text-gray-200 font-light">{headingDescription}</p>
    </header>
  );
};