import React, { useState } from "react";
import { Header } from "./components/Header.App.jsx";
import { AnimatedPanel } from "./components/AnimatedPanel.App.jsx";
import { NavBar } from "./components/NavBar.App.jsx";
import { ToggleThemeButton } from "./components/ToggleThemeButton.App.jsx";
import { Panel } from "./components/Panel.App.jsx";
import { Footer } from "./components/Footer.App.jsx";
import { Contact } from "./components/Contact.App.jsx"

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
        {currentPage === "about" && (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold">About Us</h1>
            <p className="text-gray-600 mt-4 text-center">
              Welcome to Robin & Dennis' Code Forge!
              <br></br>
              <br></br>
              This website is a project of mine, olittlefoxE aka Robin stiller and Minecraftletsplay aka Dennis Plischke.
              <br></br>
              <br></br>
              (olittlefoxE) For my part, i am a student
              <br></br>
              <br></br>
              (Minecraftletsplay) I am a student at a technical high-school with focus an computer science and my hobby is programming (Mainly in C#)
              <br></br>
              <br></br>
              Our website is a project designed to help us deepen our knowledge of HTML, CSS and React and also how to set up, run and maintain a webiste.
              <br></br>
              <br></br>
              Through this Project, we aim to showcase our programming skills by presenting various projects we've created in different programming languages.
              <br></br>
              You have the ability to hover over any Programming language and see a description of what that langage is, for what it is used and when and who developed it.
              <br></br>
              By clicking on it, you will be presented with our projects written in this laguage (if existing).
              <br></br>
              <br></br>
              So overall its just a hobby project and our first professional public website!
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;