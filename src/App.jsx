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

      {/* Projects Panel; Home */}
      <main className="flex-grow relative overflow-hidden">
        {currentPage === "home" && (
          <section className="relative py-10">
            <div className="mx-auto max-w-screen-lg px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 10 }).map((_, idx) => (
                <ProjectsPanel
                  key={idx}
                  tags={["React", "JavaScript", idx % 2 === 0 ? "AI" : "Manual"]}
                  author={`Author ${idx + 1}`}
                  isAIUsed={idx % 2 === 0}
                  dependencies={["Framer Motion", "TailwindCSS"]}
                  logoSrc="/path/to/logo.png"
                  repoLink="https://github.com/example/repo"
                />
              ))}
            </div>
          </section>
        )}
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
