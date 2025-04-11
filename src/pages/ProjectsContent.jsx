import { memo, useMemo, Suspense, lazy } from "react";
import ProjectsPanelData from "../data/ProjectsPanelData";

/**
 * @description ProjectsContent component that displays a list of projects with lazy loading.
 * @param {Hook} memo - React function to memoize components to prevent unnecessary re-renders.
 * @param {Hook} useMemo - Hook to memoize derived data to prevent unnecessary recalculations.
 * @param {Hook} Suspense - React component for handling loading states.
 * @param {Hook} lazy - React function to dynamically import components for better performance.
 * @param {Function} ProjectsPanelData - Array of project data to be displayed.
 * @param {Function} ProjectsPanel - Component to display individual project cards.
 * @param {Function} ProjectsContent - Component to display the projects content page.
 * @param {Function} ProjectsPanelData.map - Function to iterate over the project data array.
 * @param {Function} index - Function to assign a unique key to each project card.
 * @param {Function} ProjectsPanel - Component to display individual project cards.
 * @param {Function} key - Function to assign a unique key to each project card.
 * @returns {JSX.Element} <ProjectsContent /> - The rendered projects content component.
 */

// Lazy load ProjectsPanel for better performance
const ProjectsPanel = lazy(() => import("../components/common/ProjectsPanel"));

export const ProjectsContent = memo(() => {
  // Memoize mapped elements to prevent unnecessary re-renders
  const projectElements = useMemo(
    () =>
      ProjectsPanelData.map((project, index) => (
        <div key={index} className="flex justify-center">
          <ProjectsPanel {...project} />
        </div>
      )),
    []
  );

  return (
    <>
      <div className="container mb-12 min-h-4xl mx-auto max-w-5xl">
        <h1 className="font-Exo mb-12 mt-24 text-center text-4xl font-extrabold text-forgeDark underline underline-offset-4 dark:text-forgeGrayBase">
          Projects
        </h1>
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gridAutoRows: "1fr" }}
        >
          <Suspense fallback={<p>Loading projects...</p>}>
            {projectElements}
          </Suspense>
        </div>
      </div>
    </>
  );
});

ProjectsContent.displayName = "ProjectsContent";
export default ProjectsContent;
