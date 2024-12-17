// ReactWebsite/src/components/ProjectsPanel.jsx
import React from "react";
import PropTypes from "prop-types";

export const ProjectsPanel = ({
  name,
  languages,
  dependencies,
  usesAI,
  isFrontend,
  githubLink,
  author,
  navigateTo,
}) => {
  const navigateToProjectPage = () => {
    if (isFrontend) {
      // Trigger navigation via `navigateTo` to project-specific pages
      navigateTo(`projects/${name}`);
    }
  };

  return (
    <div className="relative min-h-[250px] overflow-hidden rounded-lg border-[1px] border-gray-300 bg-gray-100 p-4 shadow-md transition-shadow hover:shadow-xl dark:border-gray-400 dark:bg-gray-800">
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
        {name}
      </h3>

      <div className="mt-2 flex flex-wrap gap-2">
        {languages.map((lang, index) => (
          <span
            key={index}
            className="inline-block max-w-full rounded-md bg-blue-100 px-2 py-1 text-xs leading-none text-blue-800 dark:bg-blue-800 dark:text-blue-200"
          >
            {lang}
          </span>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {dependencies.map((dep, index) => (
          <span
            key={index}
            className="inline-block max-w-full truncate rounded-md bg-green-100 px-2 py-1 text-xs leading-none text-green-800 dark:bg-green-800 dark:text-green-200"
          >
            {dep}
          </span>
        ))}
        {usesAI && (
          <span className="inline-block truncate rounded-md bg-red-100 px-2 py-1 text-xs leading-none text-red-800 dark:bg-red-800 dark:text-red-200">
            AI Used
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[140px] rounded bg-neutral-700 px-3 py-2 text-center text-sm font-medium text-white shadow-md transition-opacity hover:bg-neutral-700/85"
        >
          View on GitHub
        </a>
        {isFrontend && (
          <button
            onClick={navigateToProjectPage}
            className="w-[140px] rounded bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white shadow-md transition-opacity hover:bg-blue-600/85"
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

// props
ProjectsPanel.propTypes = {
  name: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  dependencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  usesAI: PropTypes.bool.isRequired,
  isFrontend: PropTypes.bool.isRequired,
  githubLink: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
};
