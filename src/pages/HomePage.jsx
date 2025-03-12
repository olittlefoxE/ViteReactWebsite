import AnimationPanel from "../components/hero/AnimationPanel";
import IntroTitle from "../components/hero/IntroTitle";
import ScrollButton from "../components/hero/ScrollButton";
import ProjectsContent from "./ProjectsContent";

const HomePage = () => {
  return (
    <>
      <section className="relative">
        <AnimationPanel />
        <div className="absolute inset-0 flex items-center justify-center">
          <IntroTitle />
        </div>
      </section>

      <div className="relative flex justify-center">
        <ScrollButton targetId="mainContent" />
      </div>

      <div id="mainContent">
        <ProjectsContent />
      </div>
    </>
  );
};

export default HomePage;
