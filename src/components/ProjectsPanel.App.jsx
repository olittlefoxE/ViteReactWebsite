import React from "react";

export const ProjectsPanel = ({ tags, isAIUsed, dependencies, logoSrc, repoLink, authors }) => {
  return (
    <div className="bg-gray-200 dark:bg-slate-600 rounded-2xl shadow-md flex flex-col justify-between p-4 w-full aspect-square max-w-xs mx-auto">
      {/* Top Section */}
      <div className="flex items-start space-x-2">
        <img
          src={logoSrc}
          alt="Project Logo"
          className="w-10 h-10 object-contain rounded-md"
        />
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {isAIUsed && (
            <span className="bg-green-200 text-green-800 px-2 py-1 rounded-md text-xs font-medium">
              AI Used
            </span>
          )}
          {dependencies.map((dep, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 px-2 py-1 rounded-md text-xs font-medium"
            >
              {dep}
            </span>
          ))}
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex-grow flex items-center justify-center">
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-semibold transition-colors"
        >
          View Repository
        </a>
      </div>

      {/* Bottom Section */}
      <div className="text-right">
        <span className="text-gray-600 dark:text-gray-400 text-sm font-light">
          Authors: {authors.join(" & ")}
        </span>
      </div>
    </div>
  );
};




