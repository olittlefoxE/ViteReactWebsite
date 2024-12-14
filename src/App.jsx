// ReactWebsite/src/App.jsx
import React, { useState, useEffect } from "react";
// ReactWebsite/src/components/*.jsx
import { HeroTitle } from "./components/HeroTitle.jsx";
import { AnimatedPanel } from "./components/AnimatedPanel.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { ToggleThemeButton } from "./components/ToggleThemeButton.jsx";
import { ProjectsPanel } from "./components/ProjectsPanel.jsx";
import { Footer } from "./components/Footer.jsx";
import { ProjectsPanelData } from "./components/ProjectsPanelData.js";
// ReactWebsite/src/pages/*.{jsx,js}
import { ProgrammingLanguages } from "./pages/ProgrammingLanguages.jsx";
import { ProjectPage } from "./pages/DynamicProjectsPage.jsx";
import { Contact } from "./pages/Contact.jsx";
import { About } from "./pages/About.jsx";

// Main App component
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [projectName, setProjectName] = useState(null);

  // set default page name to /home
  useEffect(() => {
    const path = window.location.pathname.replace("/", "") || "home";

    // set the page url name to /projects/ if the projects button is clicked
    if (path.startsWith("projects/")) {
      const project = path.replace("projects/", "");
      setProjectName(project);
      setCurrentPage("projectPage");
    } else {
      setCurrentPage(path);
      setProjectName(null);
    }
  }, []);
  // set the page url name to /projects/ fallback
  const navigateTo = (page) => {
    if (!page) {
      console.error("Invalid navigation page:", page);
      return;
    }

    if (page.startsWith("projects/")) {
      const project = page.replace("projects/", "");
      setCurrentPage("projectPage");
      setProjectName(project);
      window.history.pushState(null, "", `/${page}`);
    } else {
      const validPages = ["home", "about", "contact", "languages"];
      if (!validPages.includes(page)) {
        console.error("Unknown page:", page);
        setCurrentPage("home");
        return;
      }
      setCurrentPage(page);
      setProjectName(null);
      window.history.pushState(null, "", `/${page}`);
    }
  };

  return (
    <div className="flex flex-col dark:bg-gray-700">
      <section className="relative">
        <AnimatedPanel />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <HeroTitle />
        </div>
      </section>

      <section className="sticky top-0 z-10 bg-gray-400 py-4 shadow-md dark:bg-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <div className="min-h-12 rounded-lg bg-white/70 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <NavBar navigateTo={navigateTo} />
          </div>
          <div className="rounded-lg bg-white/70 p-1 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <ToggleThemeButton />
          </div>
        </div>
      </section>

      <main className="relative flex-grow overflow-hidden">
        {currentPage === "home" && (
          <div className="flex min-h-screen flex-col dark:bg-gray-700">
            <div className="relative flex-grow py-10">
              <section className="relative py-10">
                <div className="mx-auto max-w-screen-lg px-4">
                  {/* Heading */}
                  <h1 className="mb-8 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                    Projects
                  </h1>
                  {/* Projects Panel */}
                  <div className="flex flex-wrap justify-between gap-6">
                    {ProjectsPanelData.map((project, index) => (
                      <div
                        key={index}
                        className="w-full transition-shadow hover:shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
                      >
                        <ProjectsPanel {...project} navigateTo={navigateTo} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
        {/* Navigation */}
        {currentPage === "contact" && <Contact />}
        {currentPage === "about" && <About />}
        {currentPage === "projectPage" && projectName && (
          <ProjectPage projectName={projectName} />
        )}
        {currentPage === "languages" && <ProgrammingLanguages />}
      </main>

      <div className="inline py-3 pb-0">
        <Footer />
      </div>
    </div>
  );
};

export default App;
