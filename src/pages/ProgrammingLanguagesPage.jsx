import React from "react";
import ProgrammingLanguagesData from "../data/ProgrammingLanguagesData.js";
import { ProgrammingLanguagesPanel } from "./common/ProgrammingLanguagesPanel.jsx";

export const ProgrammingLanguagesPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto">
        <h1 className="font-Exo mb-10 mt-10 text-center text-4xl font-extrabold">
          Programming Languages
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ProgrammingLanguagesData.map((language, index) => (
            <ProgrammingLanguagesPanel key={index} language={language} />
          ))}
        </div>
      </div>
    </div>
  );
};
