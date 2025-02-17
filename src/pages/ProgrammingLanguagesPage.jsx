import { useState } from "react";
import sortedProgrammingLanguagesData from "../data/ProgrammingLanguagesData.js";
import { ProgrammingLanguagesPanel } from "../components/common/ProgrammingLanguagesPanel.jsx";

export const ProgrammingLanguagesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("alphabetical");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  const filteredLanguages = sortedProgrammingLanguagesData
    .filter((language) =>
      language.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortOption === "alphabetical") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "year") {
        return a.year - b.year;
      }
      return 0;
    });

  const handleOptionClick = (option) => {
    setSortOption(option); // Update the sorting option
    setDropdownOpen(false); // Close the dropdown immediately after selection
  };

  const toggleDropdown = () => {
    setDropdownOpen(true); // Open the dropdown
    setTimeout(() => {
      setDropdownOpen(false); // Automatically close it after 2 seconds
    }, 2000);
  };

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
            filteredLanguages.map((language, index) => (
              <ProgrammingLanguagesPanel key={index} language={language} />
            ))
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
