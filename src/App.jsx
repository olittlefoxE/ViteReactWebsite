import React, { useState, useEffect } from "react";
// ./src/components/*.jsx
import { HeroTitle } from "./components/HeroTitle.jsx";
import { AnimatedPanel } from "./components/AnimatedPanel.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { ToggleThemeButton } from "./components/ToggleThemeButton.jsx";
import { ProjectsPanel } from "./components/ProjectsPanel.jsx";
import { Footer } from "./components/Footer.jsx";
import { ProjectsPanelData } from "./components/ProjectsPanelData.js";
// ./src/pages/*.{jsx,js}
import { ProgrammingLanguages } from "./pages/ProgrammingLanguages.jsx";
import { ProjectPage } from "./pages/template.ProjectsPage.jsx";
import { Contact } from "./pages/Contact.jsx";
import { About } from "./pages/About.jsx";

// Main App component
const App = () => {
  // State to manage the current page of the application
  const [currentPage, setCurrentPage] = useState("home");
  // State to store the project name when navigating to a project-specific page
  const [projectName, setProjectName] = useState(null);

  // useEffect hook to detect changes in the URL and update the page accordingly
  useEffect(() => {
    // Get the current pathname from the URL (without the leading slash)
    const path = window.location.pathname.replace("/", "") || "home";

    // Check if the URL starts with "projects/" to handle project-specific pages
    if (path.startsWith("projects/")) {
      const project = path.replace("projects/", ""); // Extract project name
      setProjectName(project); // Store the project name in state
      setCurrentPage("projectPage"); // Set the current page to the project page
    } else {
      setCurrentPage(path); // Set the current page based on the path
      setProjectName(null); // Reset project name if not on a project page
    }
  }, []);

  // Function to navigate between different pages of the app
  const navigateTo = (page) => {
    // Check if the navigation is to a project page
    if (page.startsWith("projects/")) {
      const project = page.replace("projects/", ""); // Extract project name from URL
      setCurrentPage("projectPage"); // Set the page to project page
      setProjectName(project); // Set the project name
      window.history.pushState(null, "", `/${page}`); // Update the URL in the browser
    } else {
      setCurrentPage(page); // Set the current page
      setProjectName(null); // Reset project name for non-project pages
      window.history.pushState(null, "", `/${page}`); // Update the URL in the browser
    }
  };

  return (
    <div className="flex min-h-screen flex-col dark:bg-gray-700">
      {/* Animated Panel Section */}
      <section className="relative">
        <AnimatedPanel /> {/* Display animated panel */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <HeroTitle /> {/* Display the Hero title */}
        </div>
      </section>

      {/* Navigation Bar Section */}
      <section className="sticky top-0 z-10 py-4 bg-gray-400 shadow-md dark:bg-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <div className="rounded-lg bg-white/70 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <NavBar navigateTo={navigateTo} /> {/* Navigation bar */}
          </div>
          <div className="rounded-lg bg-white/70 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <ToggleThemeButton /> {/* Theme toggle button */}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="flex-grow relative overflow-hidden">
        {/* Home Page Section */}
        {currentPage === "home" && (
          <div className="flex min-h-screen flex-col dark:bg-gray-700">
            <div className="flex-grow relative py-10">
              <section className="relative py-10">
                <div className="mx-auto max-w-screen-lg px-4">
                  <div className="flex flex-wrap justify-between gap-6">
                    {/* Render the project panels dynamically from the ProjectsPanelData */}
                    {ProjectsPanelData.map((project, index) => (
                      <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
                      >
                        <ProjectsPanel {...project} setCurrentPage={navigateTo} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Contact Page */}
        {currentPage === "contact" && <Contact />}

        {/* About Page */}
        {currentPage === "about" && <About />}

        {/* Programming Languages Page */}
        {currentPage === "languages" && <ProgrammingLanguages />}

        {/* Project-specific page */}
        {currentPage === "projectPage" && projectName && (
          <ProjectPage projectName={projectName} /> // Render the project page with the project name
        )}
      </main>

      {/* Footer Section */}
      <div className="my-3">
        <Footer /> {/* Display the footer */}
      </div>
    </div>
  );
};

export default App;



