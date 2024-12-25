import React, { useState, useEffect } from "react";
// hero
import { AnimationPanel } from "./components/hero/AnimationPanel.jsx";
import { IntroTitle } from "./components/hero/IntroTitle.jsx";
// components present in every page (common)
import { Footer } from "./components/common/Footer.jsx";
import { NavBar } from "./components/common/NavBar.jsx";
import { ProjectsPanel } from "./components/common/ProjectsPanel.jsx";
import { ToggleThemeButton } from "./components/common/ToggleThemeButton.jsx";
// pages from the navbar
import { AboutPage } from "./pages/AboutPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { ProgrammingLanguagesPage } from "./pages/ProgrammingLanguagesPage.jsx";
import { DynamicProjectsPage } from "./pages/DynamicProjectsPage.jsx"; // Dynamic page for handling the preview of projects on projects panel
// data
import { ProjectsPanelData } from "./data/ProjectsPanelData.js";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [projectName, setProjectName] = useState(null);

  // Handle page routing
  useEffect(() => {
    const path = window.location.pathname.replace("/", "") || "home";
    if (path.startsWith("projects/")) {
      const project = path.replace("projects/", "");
      setProjectName(project);
      setCurrentPage("projectPage");
    } else {
      setCurrentPage(path);
      setProjectName(null);
    }
  }, []);

  const navigateTo = (page) => {
    if (page.startsWith("projects/")) {
      const project = page.replace("projects/", "");
      setCurrentPage("projectPage");
      setProjectName(project);
      window.history.pushState(null, "", `/${page}`);
    } else {
      setCurrentPage(page);
      setProjectName(null);
      window.history.pushState(null, "", `/${page}`);
    }
  };

  return (
    <div id="content-below" className="flex flex-col">
      {/* Hero Section with Animation and Title */}
      <section className="relative h-screen">
        <AnimationPanel />
        <div className="absolute inset-0 flex items-center justify-center">
          <IntroTitle />
        </div>
      </section>

      {/* Sticky Navigation Bar */}
      <section className="z-1 sticky top-0 bg-gradient-to-r from-forgeDark via-forgeAsh to-forgeGrayAsh py-5 shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <NavBar navigateTo={navigateTo} />
          <div className="rounded-md bg-gradient-to-r from-fireBase via-fireCrimson to-fireBlaze p-2">
            <ToggleThemeButton />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === "home" && (
          <div className="col-span-2 flex flex-col bg-gradient-to-b from-lightBackground via-lightBackgroundMuted to-lightBackgroundShade dark:from-darkBackground dark:via-darkBackgroundMuted dark:to-darkBackgroundShade">
            <section className="py-10">
              <div className="mx-auto mt-3 max-w-screen-lg">
                <h1 className="font-Exo mb-6 text-center text-4xl font-bold">
                  Projects
                </h1>
                <div className="flex flex-wrap justify-between gap-6">
                  {ProjectsPanelData.map((project, index) => (
                    <div
                      key={index}
                      className="relative w-full sm:w-1/2 md:w-1/3"
                    >
                      <ProjectsPanel {...project} navigateTo={navigateTo} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}
        {currentPage === "contact" && <ContactPage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "projectPage" && projectName && (
          <DynamicProjectsPage projectName={projectName} />
        )}
        {currentPage === "languages" && <ProgrammingLanguagesPage />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
