import React from "react";
import { Footer } from "./components/App-Footer.jsx";
import { Header } from "./components/App-Header.jsx";
import { NavBar } from "./components/App-Navbar.jsx";
import { ToggleThemeButton } from "./components/App-ToggleThemeButton.jsx";
import { Panel } from "./components/App-Panel__Body.jsx";
import { AnimatedPanel } from "./components/App-Panel__Aninmation.jsx";

const App = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <div className="flex min-h-screen items-center justify-center dark:bg-gray-900">
        <AnimatedPanel />
      </div>
      <Header />
      <NavBar />
      <ToggleThemeButton />
      <main className="container flex flex-grow py-10">
        <Panel
          title="Features"
          content="Here are some features of our website."
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
