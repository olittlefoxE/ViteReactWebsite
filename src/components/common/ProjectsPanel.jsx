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
      navigateTo(`projects/${name}`);
    }
  };

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
};
