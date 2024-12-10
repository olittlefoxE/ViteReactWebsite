// Importing React and necessary hooks
import React, { useState, useEffect } from "react";

// Importing components and data
import { HeroTitle } from "./components/HeroTitle.jsx";
import { AnimatedPanel } from "./components/AnimatedPanel.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { ToggleThemeButton } from "./components/ToggleThemeButton.jsx";
import { ProjectsPanel } from "./components/ProjectsPanel.jsx";
import { Footer } from "./components/Footer.jsx";
import { ProjectsPanelData } from "./components/ProjectsPanelData.js";

// Importing pages
import { ProgrammingLanguages } from "./pages/ProgrammingLanguages.jsx";
import { ProjectPage } from "./pages/template.ProjectsPage.jsx";
import { Contact } from "./pages/Contact.jsx";
import { About } from "./pages/About.jsx";

// Main App component
const App = () => {
  // State to manage the currently displayed page
  const [currentPage, setCurrentPage] = useState("home");

  // State to manage the name of a specific project (used for individual project pages)
  const [projectName, setProjectName] = useState(null);

  // Effect to handle page loading based on the URL path
  useEffect(() => {
    const path = window.location.pathname.replace("/", "") || "home";

    // Check if the URL path points to a project-specific page
    if (path.startsWith("projects/")) {
      const project = path.replace("projects/", ""); // Extract project name
      setProjectName(project);
      setCurrentPage("projectPage"); // Set the page to project-specific
    } else {
      setCurrentPage(path); // Set the page to the specific route
      setProjectName(null); // Reset project name for non-project pages
    }
  }, []);

  // Function to navigate between pages
  const navigateTo = (page) => {
    if (page.startsWith("projects/")) {
      // Handle navigation to a project-specific page
      const project = page.replace("projects/", ""); // Extract project name
      setCurrentPage("projectPage"); // Set the page to project-specific
      setProjectName(project); // Set the project name in state
      window.history.pushState(null, "", `/${page}`); // Update browser history
    } else {
      // Handle navigation to other pages
      setCurrentPage(page);
      setProjectName(null); // Reset project name
      window.history.pushState(null, "", `/${page}`); // Update browser history
    }
  };

  return (
    <div className="flex min-h-screen flex-col dark:bg-gray-700">
      {/* Animated Panel Section */}
      <section className="relative">
        <AnimatedPanel />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <HeroTitle />
        </div>
      </section>

      {/* Navigation Bar */}
      <section className="sticky top-0 z-10 py-4 bg-gray-400 shadow-md dark:bg-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <div className="rounded-lg bg-white/70 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <NavBar navigateTo={navigateTo} /> {/* Pass navigation function to NavBar */}
          </div>
          <div className="rounded-lg bg-white/70 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <ToggleThemeButton /> {/* Button to toggle dark/light mode */}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="flex-grow relative overflow-hidden">
        {currentPage === "home" && ( // Render homepage content
          <div className="flex min-h-screen flex-col dark:bg-gray-700">
            <div className="flex-grow relative py-10">
              <section className="relative py-10">
                <div className="mx-auto max-w-screen-lg px-4">
                  <div className="flex flex-wrap justify-between gap-6">
                    {/* Render project panels */}
                    {ProjectsPanelData.map((project, index) => (
                      <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
                      >
                        <ProjectsPanel
                          {...project}
                          setCurrentPage={navigateTo} // Pass navigation function to ProjectsPanel
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Render other pages based on the current page state */}
        {currentPage === "contact" && <Contact />}
        {currentPage === "about" && <About />}
        {currentPage === "languages" && <ProgrammingLanguages />}

        {/* Render project-specific page */}
        {currentPage === "projectPage" && projectName && (
          <ProjectPage projectName={projectName} />
        )}
      </main>

      {/* Footer Section */}
      <div className="my-3">
        <Footer />
      </div>
    </div>
  );
};

export default App;


