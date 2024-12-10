// src/components/ProjectsPanel.jsx
import React from "react";
import PropTypes from "prop-types";

export const ProjectsPanel = ({ 
  name, 
  languages, 
  dependencies, 
  usesAI, 
  isFrontend, 
  githubLink, 
  setCurrentPage 
}) => {
  const navigateToProjectPage = () => {
    if (isFrontend) {
      setCurrentPage(`projects/${name.toLowerCase()}`);
    }
  };

  return (
    <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:bg-gray-800">
      {/* Project Title */}
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{name}</h3>
      
      {/* Tags for Programming Languages */}
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

      {/* Tags for Dependencies and AI */}
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

      {/* Action Buttons */}
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
  setCurrentPage: PropTypes.func.isRequired,
};
