import { useState, useEffect } from "react";
import { AnimationPanel } from "./components/hero/AnimationPanel.jsx";
import { IntroTitle } from "./components/hero/IntroTitle.jsx";
import { Footer } from "./components/common/Footer.jsx";
import { NavBar } from "./components/common/NavBar.jsx";
import { ProjectsPanel } from "./components/common/ProjectsPanel.jsx";
import { ToggleThemeButton } from "./components/common/ToggleThemeButton.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { ProgrammingLanguagesPage } from "./pages/ProgrammingLanguagesPage.jsx";
import { DynamicProjectsPage } from "./pages/DynamicProjectsPage.jsx";
import { ProjectsPanelData } from "./data/ProjectsPanelData.js";
import { ScrollButton } from "./components/hero/ScrollButton.jsx";

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
		<div className="flex flex-col">
			{/* Hero Section with Animation and Title */}
			<section className="relative">
				<AnimationPanel />
				<div className="absolute inset-0 flex items-center justify-center">
					<IntroTitle />
				</div>
			</section>

			{/* Scroll Button to scroll to Projects Section */}
			<div className="relative flex justify-center">
				<ScrollButton targetId="mainContent" />
			</div>

			{/* Sticky Navigation Bar */}
			<div id="mainContent">
				<section className="sticky top-0 z-50 w-full bg-gradient-to-r from-forgeAsh via-forgeSmoke to-fireGlow py-[20px] shadow-md dark:from-forgeDark dark:via-forgeGrayDark dark:to-emberAsh">
					<div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4">
						<NavBar navigateTo={navigateTo} />
						<div className="rounded-md bg-gradient-to-r from-fireBase via-fireCrimson to-fireBlaze p-2">
							<ToggleThemeButton />
						</div>
					</div>
				</section>

				{/* Main Content Area */}
				<div className="min-h-screen bg-forgeGradientAsh dark:bg-forgeGradientIron">
					{currentPage === "home" && (
						<section className="py-10">
							<div className="containers min-h-4xl mx-auto max-w-5xl">
								<h1 className="font-Exo mb-12 mt-24 text-center text-4xl font-extrabold text-forgeDark underline underline-offset-4 dark:text-forgeGrayBase">
									Projects
								</h1>
								<div
									className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
									style={{
										gridAutoRows: "1fr", // Ensures all grid items have uniform height
									}}
								>
									{ProjectsPanelData.map((project, index) => (
										<div key={index} className="flex justify-center">
											<ProjectsPanel {...project} navigateTo={navigateTo} />
										</div>
									))}
								</div>
							</div>
						</section>
					)}
					{currentPage === "contact" && <ContactPage />}
					{currentPage === "about" && <AboutPage />}
					{currentPage === "projectPage" && projectName && (
						<DynamicProjectsPage projectName={projectName} />
					)}
					{currentPage === "languages" && <ProgrammingLanguagesPage />}
				</div>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default App;
