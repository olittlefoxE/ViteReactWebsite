import React from "react";

export const ProjectPage = ({ projectName }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">{`Rendering ${projectName}`}</h1>
      <p className="mt-4 text-lg text-gray-600">Details about {projectName}.</p>
    </div>
  );
};
