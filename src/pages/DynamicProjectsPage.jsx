import { Suspense, lazy, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const DynamicProjectsPage = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectName]);

  const ProjectComponent = lazy(() =>
    import(`../components/projects/${projectName}.jsx`)
      .catch((error) => {
        console.error(`Error loading project ${projectName}:`, error);
        navigate('/home'); // redirect to home page on error
        return {
          default: () => null
        };
      })
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-forgeGradientAsh dark:bg-forgeGradientIron">
      <Suspense
        fallback={
          <div className="text-center text-forgeDark dark:text-forgeGrayBase">
            <p>Loading {projectName}...</p>
          </div>
        }
      >
        <ProjectComponent />
      </Suspense>
    </div>
  );
};
