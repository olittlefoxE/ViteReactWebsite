import { useState, useMemo, useCallback, Suspense, lazy } from "react";
import sortedProgrammingLanguagesData from "../data/ProgrammingLanguagesData.js";
import LoadingSpinner from "../components/common/LoadingSpinner";

// Lazy load the ProgrammingLanguagesPanel for better performance
const ProgrammingLanguagesPanel = lazy(() =>
  import("../components/common/ProgrammingLanguagesPanel")
);

const ProgrammingLanguagesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("alphabetical");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // useMemo to optimize filtering and sorting logic
  const filteredLanguages = useMemo(() => {
    return sortedProgrammingLanguagesData
      .filter((language) =>
        language.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOption === "alphabetical") {
          return a.name.localeCompare(b.name);
        } else if (sortOption === "year") {
          return a.year - b.year;
        }
        return 0;
      });
  }, [searchQuery, sortOption]);

  // Memoized functions to prevent unnecessary re-renders
  const handleOptionClick = useCallback((option) => {
    setSortOption(option);
    setDropdownOpen(false);
  }, []);

  const toggleDropdown = useCallback(() => {
    setDropdownOpen(true);
    setTimeout(() => {
      setDropdownOpen(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto max-w-6xl">
        <h1 className="font-Exo mb-12 mt-24 text-center text-4xl font-extrabold text-forgeDark underline underline-offset-4 dark:text-forgeGrayBase">
          Programming Languages
        </h1>

        <div className="mb-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <input
            type="text"
            placeholder="Search programming languages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md rounded-md border border-gray-300 px-4 py-2 focus:border-forgeDark focus:outline-none focus:ring-1 focus:ring-forgeDark dark:border-forgeSmoke dark:bg-forgeAsh dark:focus:ring-forgeGrayLight"
          />

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm focus:outline-none dark:border-forgeSmoke dark:bg-forgeAsh dark:text-forgeGrayLight"
            >
              Sort by: {sortOption === "alphabetical" ? "Alphabetical" : "Year"}
            </button>

            {dropdownOpen && (
              <div className="absolute z-50 mt-2 w-40 rounded-md border border-gray-300 bg-white shadow-lg dark:border-forgeSmoke dark:bg-forgeAsh">
                <ul className="py-1">
                  <li
                    onClick={() => handleOptionClick("alphabetical")}
                    className={`cursor-pointer px-4 py-2 hover:bg-forgeGraySoft dark:text-forgeGrayLight dark:hover:bg-forgeDark ${
                      sortOption === "alphabetical" ? "font-bold" : ""
                    }`}
                  >
                    Alphabetical
                  </li>
                  <li
                    onClick={() => handleOptionClick("year")}
                    className={`cursor-pointer px-4 py-2 text-forgeDark hover:bg-forgeGraySoft dark:text-forgeGrayLight dark:hover:bg-forgeDark ${
                      sortOption === "year" ? "font-bold" : ""
                    }`}
                  >
                    Year
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gridAutoRows: "1fr" }}
        >
          {filteredLanguages.length > 0 ? (
            <Suspense fallback={<LoadingSpinner />}>
              {filteredLanguages.map((language, index) => (
                <ProgrammingLanguagesPanel key={index} language={language} />
              ))}
            </Suspense>
          ) : (
            <p className="text-center text-forgeDark dark:text-forgeGrayLight">
              No programming languages found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgrammingLanguagesPage;
