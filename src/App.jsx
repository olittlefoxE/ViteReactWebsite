import React from "react";
import { Footer } from "./components/Footer.App.jsx";
import { Header } from "./components/Header.App.jsx";
import { NavBar } from "./components/NavBar.App.jsx";
import { ToggleThemeButton } from "./components/ToggleThemeButton.App.jsx";
import { Panel } from "./components/Panel.App.jsx";
import { AnimatedPanel } from "./components/AnimatedPanel.App.jsx";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./components/Contact";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col dark:bg-gray-900">
      {/* Static Animated Panel Section */}
      <main className="flex flex-grow items-center justify-center dark:bg-gray-900">
        <AnimatedPanel />
      </main>

      {/* Header, NavBar, and Toggle Button Section */}
      <section className="relative bg-gray-100 py-4 dark:bg-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <div className="rounded-lg bg-white/70 px-3 py-2 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <Header />
          </div>
          <div className="rounded-lg bg-white/70 px-3 py-2 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <NavBar />
          </div>
          <div className="rounded-lg bg-white/70 px-3 py-2 shadow-md backdrop-blur-sm dark:bg-gray-900/70">
            <ToggleThemeButton />
          </div>
        </div>
      </section>

      {/* Panel Section (Scrollable) */}
      <section className="relative py-10">
        <div className="flex space-x-5 overflow-x-auto px-4">
          {Array.from({ length: 15 }).map((_, idx) => (
            <Panel key={idx} />
          ))}
        </div>
      </section>

      {/* Dynamic Routes Section */}
      <section className="relative py-10">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex space-x-5 overflow-x-auto px-4">
                {Array.from({ length: 15 }).map((_, idx) => (
                  <Panel key={idx} />
                ))}
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>

      {/* Footer Section */}
      <section className="relative bg-gray-100 py-4 dark:bg-gray-800">
        <Footer />
      </section>
    </div>
  );
};

export default App;