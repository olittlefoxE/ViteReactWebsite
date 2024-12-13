// ReactWebsite/src/pages/DynamicProjectsPage.jsx
import React, { Suspense, lazy } from "react";

export const ProjectPage = ({ projectName }) => {
  if (!projectName || typeof projectName !== "string") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Error</h1>
        <p className="mt-4 text-lg text-gray-600">Invalid project name.</p>
      </div>
    );
  }

  try {
    const ProjectComponent = lazy(() =>
      import(`../components/projects/${projectName}`).catch(() => {
        throw new Error(`Component "${projectName}" not found.`);
      })
    );

    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Suspense fallback={<p>Loading {projectName}...</p>}>
          <ProjectComponent />
        </Suspense>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Error</h1>
        <p className="mt-4 text-lg text-gray-600">Project not found: {projectName}</p>
      </div>
    );
  }
};

