import AnimationPanel from "../components/hero/AnimationPanel";
import IntroTitle from "../components/hero/IntroTitle";
import ScrollButton from "../components/hero/ScrollButton";
import ProjectsContent from "./ProjectsContent";
import NavBar from "../components/common/NavBar";

/**
 * @description HomePage component that serves as the main entry point for the application.
 * @returns {JSX.Element} <HomePage /> - The rendered home page component.
 */

const HomePage = () => {
  return (
    <>
      <main className="min-w-screen min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="relative">
          <AnimationPanel />
          <div className="absolute inset-0 flex items-center justify-center">
            <IntroTitle />
          </div>
        </section>

        <section className="relative flex justify-center">
          <ScrollButton targetId="mainContent" />
        </section>

        {/* NavBar placed between AnimationPanel and ProjectsContent */}
        <NavBar />

        {/* Main Content */}
        <section id="mainContent">
          <ProjectsContent />
        </section>
      </main>
    </>
  );
};

export default HomePage;
