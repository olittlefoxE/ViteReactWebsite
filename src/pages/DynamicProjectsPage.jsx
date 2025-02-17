import { Suspense, lazy } from "react";
import PropTypes from 'prop-types';

DynamicProjectsPage.propTypes = {
  projectName: PropTypes.string.isRequired
};

export const DynamicProjectsPage = ({ projectName }) => {
  if (!projectName || typeof projectName !== "string") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Error</h1>
        <p className="mt-4 text-lg text-gray-600">Invalid project name.</p>
      </div>
    );
  }

  // Use lazy() with error handling inside the import() itself
  const ProjectComponent = lazy(() =>
    import(`../components/projects/${projectName}`).catch(() => {
      // Handle the error by returning a fallback component or a specific message
      return { default: () => <div>Component &quot{projectName}&quot not found.</div> };
    }),
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Suspense fallback={<p>Loading {projectName}...</p>}>
        <ProjectComponent />
      </Suspense>
    </div>
  );
};
