import React from "react";

export const ProjectsPanel = ({ 
  tags = [], 
  author = "Unknown", 
  logoSrc = "/path/to/logo.png", 
  repoLink = "#", 
  isAIUsed = false, 
  dependencies = [] 
}) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md flex flex-col justify-between p-4 w-full aspect-square">
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <img 
          src={logoSrc} 
          alt="Page Logo" 
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
      <div className="text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400 font-light">
            Author: {author}
          </span>
          <span 
            className={`${
              isAIUsed ? "text-green-500" : "text-red-500"
            } font-medium`}
          >
            {isAIUsed ? "AI Assisted" : "Self-Made"}
          </span>
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-xs mt-1">
          Dependencies: {dependencies.join(", ")}
        </div>
      </div>
    </div>
  );
};




