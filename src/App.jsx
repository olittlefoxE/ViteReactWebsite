import React, { useState } from "react";
import { Header } from "./components/Header.App.jsx";
import { AnimatedPanel } from "./components/AnimatedPanel.App.jsx";
import { NavBar } from "./components/NavBar.App.jsx";
import { ToggleThemeButton } from "./components/ToggleThemeButton.App.jsx";
import { Panel } from "./components/Panel.App.jsx";
import { Footer } from "./components/Footer.App.jsx";
import { Contact } from "./pages/Contact.App.jsx";
import { About } from "./pages/About.App.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // Function to handle page changes
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex min-h-screen flex-col dark:bg-gray-900">
      {/* Animated Panel Section */}
      <section className="relative">
        <AnimatedPanel />
        {/* Title Overlapping Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Header />
        </div>
      </section>

      {/* Navigation Bar and Toggle Button */}
      <header className="sticky top-0 z-10 bg-gray-100 py-4 shadow-md dark:bg-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <div className="rounded-lg bg-white/70 px-3 py-2 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <NavBar navigateTo={navigateTo} />
          </div>
          <div className="rounded-lg bg-white/70 px-3 py-2 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <ToggleThemeButton />
          </div>
        </div>
      </header>

      {/* Conditional Page Rendering */}
      <main className="flex-grow relative">
        {currentPage === "home" && (
          <>
            {/* Dynamic Panels Section */}
            <section className="relative py-10">
              <div className="flex space-x-5 overflow-x-auto px-4">
                {Array.from({ length: 15 }).map((_, idx) => (
                  <Panel key={idx} />
                ))}
              </div>
            </section>
          </>
        )}
        {currentPage === "contact" && <Contact />}
        {currentPage === "about" && <About />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;