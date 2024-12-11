// ReactWebsite/src/pages/DynamicProjectsPage.jsx
import React, { Suspense, lazy } from "react";

export const ProjectPage = ({ projectName }) => {
  if (!projectName || typeof projectName !== "string") {
    console.error("Invalid project name:", projectName);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Error</h1>
        <p className="mt-4 text-lg text-gray-600">Invalid project name.</p>
      </div>
    );
  }

  let ProjectComponent;

  try {
    ProjectComponent = lazy(() => import(`../components/projects/${projectName}`));
    console.log(`Loading project: ${projectName}`); // Debug log
  } catch (error) {
    console.error("Failed to load project:", error);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Error</h1>
        <p className="mt-4 text-lg text-gray-600">Project not found: {projectName}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Suspense fallback={<p>Loading {projectName}...</p>}>
        <ProjectComponent />
      </Suspense>
    </div>
  );
};
