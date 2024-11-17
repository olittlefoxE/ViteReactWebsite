import React from "react";

export const Panel = () => {
  const PanelHeading = "Panel Title";
  const PanelContent =
    "Panel Content goes here. This is a very long content to test the panel's responsiveness. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel tristique ligula, non bibendum";
  return (
    <div className="container">
      <div className="rounded-md border bg-gray-50 p-5 shadow-md dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {PanelHeading}
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{PanelContent}</p>
      </div>
    </div>
  );
};
