import ProjectsPanel from "../components/common/ProjectsPanel";
import ProjectsPanelData from "../data/ProjectsPanelData";

export const ProjectsContent = () => {
  return (
    <section className="py-10">
      <div className="containers min-h-4xl mx-auto max-w-5xl">
        <h1 className="font-Exo mb-12 mt-24 text-center text-4xl font-extrabold text-forgeDark underline underline-offset-4 dark:text-forgeGrayBase">
          Projects
        </h1>
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gridAutoRows: "1fr" }}
        >
          {ProjectsPanelData.map((project, index) => (
            <div key={index} className="flex justify-center">
              <ProjectsPanel {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsContent;
