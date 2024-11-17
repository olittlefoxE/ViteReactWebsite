import React from "react";

export const Header = () => {
  const Heading = "Robin's & Dennis' Code Forge";
  const headingDescription = "rd-code-forge.net";
  return (
    <header className="rounded-md bg-gray-800 p-4 text-center text-white">
      <h1 className="text-2xl font-bold">{Heading}</h1>
      <p className="text-sm font-thin">{headingDescription}</p>
    </header>
  );
};
