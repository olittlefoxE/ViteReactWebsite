import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DynamicProjectsPage = () => {
  const { projectName } = useParams();
  const [ProjectComponent, setProjectComponent] = useState(null);
  const [error, setError] = useState(null); // Add state for errors

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadProject = async () => {
      try {
        // Normalize the project name by removing spaces and capitalizing
        const formattedProjectName = projectName.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
          index === 0 ? match.toUpperCase() : match.toLowerCase()
        );

        // Attempt to dynamically import the project component based on the formatted name
        const module = await import(`../components/projects/${formattedProjectName}.jsx`);
        setProjectComponent(() => module.default);
      } catch (err) {
        console.error(`Error loading project ${projectName}:`, err);
        setError(`Could not load the project: ${projectName}`);
      }
    };

    loadProject();
  }, [projectName]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-forgeGradientAsh dark:bg-forgeGradientIron">
      <Suspense
        fallback={
          <div className="text-center text-forgeDark dark:text-forgeGrayBase">
            <p>Loading {projectName}...</p>
          </div>
        }
      >
        {ProjectComponent ? (
          <ProjectComponent />
        ) : (
          // Display error message if project fails to load
          <div className="text-center text-forgeDark dark:text-forgeGrayBase">
            {error ? <p>{error}</p> : <p>Loading...</p>}
          </div>
        )}
      </Suspense>
    </div>
  );
};
