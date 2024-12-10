import React, { Suspense, lazy } from "react";

export const ProjectPage = ({ projectName }) => {
  let ProjectComponent;

  try {
    // Dynamically import the component from the projects folder
    ProjectComponent = lazy(() => 
      import(`../components/projects/${projectName}`)
    );
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
