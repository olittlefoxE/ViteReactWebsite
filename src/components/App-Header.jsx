import React from "react";

export const Header = () => {
  const Heading = "My Website";
  return (
    <header className="bg-gray-800 py-4 text-center text-white">
      <h1 className="text-2xl font-bold">{Heading}</h1>
    </header>
  );
};
