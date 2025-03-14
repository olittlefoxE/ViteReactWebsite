import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import LoadingSpinner from "./components/common/LoadingSpinner";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LanguagesPage = lazy(() => import("./pages/ProgrammingLanguagesPage"));

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home"; // Check if on homepage

  return (
    <div className="flex min-h-screen flex-col">
      {/* Show NavBar only if NOT on the homepage */}
      {!isHomePage && <NavBar />}

      <main className="flex-grow bg-forgeGradientAsh dark:bg-forgeGradientIron">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/languages" element={<LanguagesPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;
