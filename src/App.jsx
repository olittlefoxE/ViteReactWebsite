import React from 'react';
import { Footer } from "./components/App-Footer.jsx";
import { Header } from "./components/App-Header.jsx";
import { NavBar } from "./components/App-Navbar.jsx";
import { ToggleThemeButton } from "./components/App-ToggleThemeButton.jsx";
import { Panel } from "./components/App-Panel__Body.jsx";
import { AnimatedPanel } from "./components/App-Panel__Aninmation.jsx";

const App = () => {
  return (
		<div className="min-h-screen flex flex-col dark:bg-gray-900">
			<div className="dark:bg-gray-900 min-h-screen flex items-center justify-center">
      	<AnimatedPanel 
        	title="Boid Animation"
        	content="A mesmerizing flocking simulation powered by Boid algorithm and rendered on canvas."
      	/>
      </div>
			<Header />
      <NavBar />
			<ToggleThemeButton />
      <main className="flex flex-grow py-10 container ">
        <Panel title="Features" content="Here are some features of our website." />
      </main>
      <Footer />
		</div>
  );
};

export default App;

