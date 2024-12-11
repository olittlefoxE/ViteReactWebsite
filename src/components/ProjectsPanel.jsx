// ReactWebsite/src/components/ProjectsPanel.jsx
import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";

// Dynamic project loader
const loadProjectComponent = (name) => {
  try {
    console.log("Attempting to load:", name); // Debug log
    return lazy(() => import(`./projects/${name}`));
  } catch (error) {
    console.error(`Error loading project component "${name}":`, error);
    return null;
  }
};

export const ProjectsPanel = ({
  name,
  languages,
  dependencies,
  usesAI,
  isFrontend,
  githubLink,
  author,
  setCurrentPage,
}) => {
  const navigateToProjectPage = () => {
    if (isFrontend) {
      const ProjectComponent = loadProjectComponent(name);

      if (ProjectComponent) {
        console.log("Navigating to project:", name); // Debug log
        setCurrentPage(
          <div className="flex flex-col items-center justify-center min-h-screen">
            <Suspense fallback={<p>Loading {name}...</p>}>
              <ProjectComponent />
            </Suspense>
          </div>
        );
      } else {
        console.error(`Failed to load project: ${name}`);
        setCurrentPage(
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">Error</h1>
            <p className="mt-4 text-lg text-gray-600">
              Failed to load project: {name}
            </p>
          </div>
        );
      }
    }
  };

  return (
    <div className="relative rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:bg-gray-800">
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
        {name}
      </h3>

      <div className="mt-2 flex flex-wrap gap-2">
        {languages.map((lang, index) => (
          <span
            key={index}
            className="inline-block rounded-md bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-800 dark:text-blue-200"
          >
            {lang}
          </span>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {dependencies.map((dep, index) => (
          <span
            key={index}
            className="inline-block rounded-md bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-800 dark:text-green-200"
          >
            {dep}
          </span>
        ))}
        {usesAI && (
          <span className="inline-block rounded-md bg-red-100 px-2 py-1 text-xs text-red-800 dark:bg-red-800 dark:text-red-200">
            AI Used
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-gray-700 px-3 py-2 text-sm font-medium text-white shadow-md hover:bg-gray-800"
        >
          View on GitHub
        </a>
        {isFrontend && (
          <button
            onClick={navigateToProjectPage}
            className="rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-md hover:bg-blue-700"
          >
            View Project
          </button>
        )}
      </div>

      <hr className="my-4 border-t border-gray-300 dark:border-gray-700" />

      <p className="text-right text-xs text-gray-400 dark:text-gray-500">
        By: {author}
      </p>
    </div>
  );
};

ProjectsPanel.propTypes = {
  name: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  dependencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  usesAI: PropTypes.bool.isRequired,
  isFrontend: PropTypes.bool.isRequired,
  githubLink: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
