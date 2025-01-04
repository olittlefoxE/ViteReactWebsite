import React from "react";
import sortedProgrammingLanguagesData from "../data/ProgrammingLanguagesData.js";
import { ProgrammingLanguagesPanel } from "../components/common/ProgrammingLanguagesPanel.jsx";

export const ProgrammingLanguagesPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto max-w-6xl">
        <h1 className="font-Exo mb-12 mt-24 text-center text-4xl font-extrabold text-forgeDark underline underline-offset-4 dark:text-forgeGrayBase">
          Programming Languages
        </h1>

        <div
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            gridAutoRows: "1fr", // Ensures all grid items have uniform height
          }}
        >
          {sortedProgrammingLanguagesData.map((language, index) => (
            <ProgrammingLanguagesPanel key={index} language={language} />
          ))}
        </div>
      </div>
    </div>
  );
};

