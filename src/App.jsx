import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import LoadingSpinner from "./components/common/LoadingSpinner";
import UnitConverter from "./components/projects/UnitConverter";

/**
 * @description App component that serves as the main entry point for the application.
 * @param {Hook} lazy - React function to dynamically import components for better performance.
 * @param {Hook} Suspense - React component for handling loading states.
 * @param {Hook} Routes - React Router component for defining routes.
 * @param {Hook} Route - React Router component for defining individual routes.
 * @param {Hook} Navigate - React Router component for redirecting to a different route.
 * @param {Hook} useLocation - React Router hook for accessing the current location object.
 * @param {Function} Footer - Component to display the footer of the application.
 * @param {Function} NavBar - Component to display the navigation bar of the application.
 * @param {Function} LoadingSpinner - Component to display a loading spinner while data is being fetched.
 * @param {Function} UnitConverter - Component for the unit converter project.
 * @param {Function} TemperatureCalculator - Component for the temperature calculator project.
 * @param {Function} HomePage - Component for the home page of the application.
 * @param {Function} AboutPage - Component for the about page of the application.
 * @param {Function} ContactPage - Component for the contact page of the application.
 * @param {Function} LanguagesPage - Component for the programming languages page of the application.
 * @param {Function} ProjectsContent - Component for the projects content page of the application.
 * @param {Function} ProjectsPanel - Component for the individual project cards.
 * @param {Function} ProgrammingLanguagesPanel - Component for the individual programming language cards.
 * @param {Function} sortedProgrammingLanguagesData - Array of programming languages data sorted by name.
 * @param {Function} ProjectsPanelData - Array of project data to be displayed.
 * @param {Function} ProgrammingLanguagesData - Array of programming languages data to be displayed.
 * @returns {JSX.Element} <App /> - The rendered app component.
 */

// Lazy load components for better performance
const TemperatureCalculator = lazy(() =>
  import("./components/projects/TemperatureCalculator")
);
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LanguagesPage = lazy(() => import("./pages/ProgrammingLanguagesPage"));

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  return (
    <div className="flex min-h-screen flex-col">
      {!isHomePage && <NavBar />}

      <main className="flex-grow bg-forgeGradientAsh dark:bg-forgeGradientIron">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/languages" element={<LanguagesPage />} />
            <Route
              path="/projects/temperaturecalculator"
              element={<TemperatureCalculator />}
            />
            <Route path="/projects/unitconverter" element={<UnitConverter />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;
