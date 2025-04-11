import { useNavigate } from "react-router-dom";
import { memo, useCallback } from "react";
import PropTypes from "prop-types";

/**
 * @description ProjectsPanel component
 * @param {Object} props - The properties object.
 * @param {string} props.name - The name of the project.
 * @param {Array<string>} props.languages - An array of programming languages used in the project.
 * @param {Array<string>} props.dependencies - An array of dependencies used in the project.
 * @param {boolean} [props.usesAI=false] - Indicates if the project uses AI.
 * @param {boolean} [props.isFrontend=false] - Indicates if the project is a frontend project.
 * @param {string} props.githubLink - The GitHub link for the project.
 * @param {string} props.author - The author of the project.
 * @param {Function} useNavigate - Hook from react-router-dom for programmatic navigation.
 * @returns {JSX.Element} <ProjectsPanel /> - The rendered projects panel component.
 */

const ProjectsPanel = memo(
  ({
    name,
    languages,
    dependencies,
    usesAI = false,
    isFrontend = false,
    githubLink,
    author,
  }) => {
    const navigate = useNavigate();

    // Memoized navigation function
    const navigateToProjectPage = useCallback(() => {
      if (isFrontend) {
        const projectPath = name
          .toLowerCase()
          .replace(/ /g, "")
          .replace(/\s+/g, "");
        navigate(`/projects/${projectPath}`);
      }
    }, [isFrontend, name, navigate]);

    return (
      <div className="relative h-full w-full rounded-lg border border-forgeGrayWarm bg-gradient-to-bl from-forgeGraySoft via-forgeSmoke to-fireGlow p-4 shadow-md transition-shadow hover:shadow-lg dark:border-forgeGrayDeep dark:from-forgeGrayAsh dark:via-forgeAsh dark:to-fireBase">
        <h1 className="text-xl font-semibold text-forgeGrayAsh underline underline-offset-4 dark:text-forgeGrayLight">
          {name}
        </h1>

        <div className="mt-2 flex flex-wrap gap-2">
          {languages.map((lang, index) => (
            <span
              key={index}
              className="inline-block max-w-full rounded-md bg-blue-300 px-2 py-1 text-xs leading-none text-forgeGrayAsh dark:bg-blue-400"
            >
              {lang}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {dependencies.map((dep, index) => (
            <span
              key={index}
              className="inline-block max-w-full truncate rounded-md bg-green-300 px-2 py-1 text-xs leading-none text-forgeGrayAsh dark:bg-green-400"
            >
              {dep}
            </span>
          ))}
          {usesAI && (
            <span className="inline-block truncate rounded-md bg-red-300 px-2 py-1 text-xs leading-none text-black dark:bg-red-400">
              AI Used
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-center gap-4">
          <button className="w-[140px] transform rounded bg-gradient-to-tr from-forgeDark via-forgeAsh to-forgeGrayAsh px-3 py-2 text-center text-sm font-medium text-white shadow-md transition-transform hover:scale-105">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </button>
          {isFrontend && (
            <button
              onClick={navigateToProjectPage}
              className="w-[140px] transform rounded bg-gradient-to-tr from-fireBase via-fireGlow to-fireCrimson px-3 py-2 text-center text-sm font-medium text-white shadow-md transition-transform hover:scale-105"
            >
              View Project
            </button>
          )}
        </div>

        <hr className="my-4 border-t border-neutral-300 dark:border-neutral-700" />

        <p className="text-right text-xs text-forgeGrayAsh dark:text-forgeGrayLight">
          By: {author}
        </p>
      </div>
    );
  }
);

ProjectsPanel.displayName = "ProjectsPanel";

ProjectsPanel.propTypes = {
  name: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  dependencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  usesAI: PropTypes.bool,
  isFrontend: PropTypes.bool,
  githubLink: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

ProjectsPanel.defaultProps = {
  usesAI: false,
  isFrontend: false,
};

export default ProjectsPanel;
