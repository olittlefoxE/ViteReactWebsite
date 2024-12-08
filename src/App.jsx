import React, { useState, useEffect } from "react";
import { Header } from "./components/Header.App.jsx";
import { AnimatedPanel } from "./components/AnimatedPanel.App.jsx";
import { NavBar } from "./components/NavBar.App.jsx";
import { ToggleThemeButton } from "./components/ToggleThemeButton.App.jsx";
import { ProjectsPanel } from "./components/ProjectsPanel.App.jsx";
import { Footer } from "./components/Footer.App.jsx";
import { Contact } from "./pages/Contact.App.jsx";
import { About } from "./pages/About.App.jsx";
import { ProgrammingLanguages } from "./pages/ProgrammingLanguages.App.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const path = window.location.pathname.replace("/", "") || "home";
    setCurrentPage(path);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.history.pushState(null, "", `/${page}`);
  };

  // Data for multiple projects
  const projectData = [
    {
      tags: ["React", "JavaScript", "AI"],
      isAIUsed: true,
      dependencies: ["Framer Motion", "TailwindCSS"],
      logoSrc: "/path/to/logo1.png",
      repoLink: "https://github.com/example/repo1",
      authors: ["John Doe"]
    },
    {
      tags: ["Vue", "TypeScript", "Machine Learning"],
      isAIUsed: false,
      dependencies: ["Vuex", "Vuetify"],
      logoSrc: "/path/to/logo2.png",
      repoLink: "https://github.com/example/repo2",
      authors: ["Jane Smith"]
    },
    {
      tags: ["Angular", "CSS", "AI"],
      isAIUsed: true,
      dependencies: ["RxJS", "Angular Material"],
      logoSrc: "/path/to/logo3.png",
      repoLink: "https://github.com/example/repo3",
      authors: ["Alice Johnson", "Bob Brown"]
    },
    {
      tags: ["Node.js", "Express", "Database"],
      isAIUsed: false,
      dependencies: ["MongoDB", "Mongoose"],
      logoSrc: "/path/to/logo4.png",
      repoLink: "https://github.com/example/repo4",
      authors: ["Carlos Black"]
    },
    {
      tags: ["Next.js", "React", "GraphQL"],
      isAIUsed: true,
      dependencies: ["Apollo Client", "GraphQL"],
      logoSrc: "/path/to/logo5.png",
      repoLink: "https://github.com/example/repo5",
      authors: ["Lily Green"]
    },
    // Add more projects here as needed...
  ];

  return (
    <div className="flex min-h-screen flex-col dark:bg-gray-700">
      {/* Animated Panel Section */}
      <section className="relative">
        <AnimatedPanel />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Header />
        </div>
      </section>

      {/* Navigation Bar */}
      <section className="sticky top-0 z-10 py-4 bg-gray-400 shadow-md dark:bg-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <div className="rounded-lg bg-white/70 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <NavBar navigateTo={navigateTo} />
          </div>
          <div className="rounded-lg bg-white/70 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <ToggleThemeButton />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <main className="flex-grow relative overflow-hidden">
        {currentPage === "home" && (
          <div className="flex min-h-screen flex-col dark:bg-gray-700">
            <div className="flex-grow relative py-10">
              <section className="relative py-10">
                <div className="mx-auto max-w-screen-lg px-4">
                  <div className="flex flex-wrap justify-between gap-6">
                    {/* Map through projectData array and render ProjectsPanel for each project */}
                    {projectData.map((project, index) => (
                      <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
                      >
                        <ProjectsPanel {...project} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Other Pages */}
        {currentPage === "contact" && <Contact />}
        {currentPage === "about" && <About />}
        {currentPage === "languages" && <ProgrammingLanguages />}
      </main>

      {/* Footer */}
      <div className="my-3">
        <Footer />
      </div>
    </div>
  );
};

export default App;
