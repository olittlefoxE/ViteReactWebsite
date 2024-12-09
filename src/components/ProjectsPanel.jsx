import React from "react";

export const ProjectsPanel = ({
  tags,
  isAIUsed,
  dependencies,
  logoSrc,
  repoLink,
  authors,
  setCurrentPage,
  isFrontendProject,
  frontendPage,
}) => {
  const handleFrontendNavigation = () => {
    if (isFrontendProject && frontendPage) {
      setCurrentPage(frontendPage);
    }
  };

  return (
    <div className="bg-gray-200 dark:bg-slate-600 rounded-2xl shadow-md flex flex-col justify-between p-4 w-full aspect-square max-w-xs mx-auto">
      <div className="flex items-start space-x-2">
        <img src={logoSrc} alt="Project Logo" className="w-10 h-10 object-contain rounded-md" />
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded-md text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center">
        {isFrontendProject ? (
          <button
            onClick={handleFrontendNavigation}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Open Project
          </button>
        ) : (
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            View Repository
          </a>
        )}
      </div>

      <div className="text-right">
        <span className="text-sm font-light">Authors: {authors.join(" & ")}</span>
      </div>
    </div>
  );
};




