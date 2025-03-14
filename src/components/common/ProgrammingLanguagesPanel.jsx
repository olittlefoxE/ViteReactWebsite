import fallbackLogo from "../../assets/images/404.png";
import PropTypes from "prop-types";
import { Suspense, useMemo, useCallback } from "react";
import LoadingSpinner from "../common/LoadingSpinner"; // Ensure correct path

const ProgrammingLanguagesPanel = ({ language }) => {
  const { name, logo, founders, year, background, relatedLanguages, website } =
    language;

  // Memoize derived data to prevent unnecessary recalculations
  const foundersText = useMemo(
    () => (founders?.length ? founders.join(", ") : "Unknown"),
    [founders]
  );

  const relatedLanguagesList = useMemo(
    () =>
      relatedLanguages?.length > 0 ? (
        <div className="text-forgeGrayAsh dark:text-forgeGrayLight">
          <h3 className="mb-2 text-lg font-semibold">Related Languages</h3>
          <ul className="list-disc pl-5">
            {relatedLanguages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
      ) : null,
    [relatedLanguages]
  );

  // Memoized function to handle button click
  const handleWebsiteClick = useCallback(() => {
    window.open(website, "_blank", "noopener,noreferrer");
  }, [website]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="max-w-6xl rounded-lg border border-forgeGrayWarm bg-gradient-to-bl from-forgeGraySoft via-forgeSmoke to-fireGlow p-6 text-forgeGrayAsh shadow-md transition-shadow hover:shadow-lg dark:border-forgeGrayDeep dark:from-forgeGrayAsh dark:via-forgeAsh dark:to-fireBase">
        {/* Top section: Logo and name */}
        <div className="mb-4 flex items-center">
          <img
            src={logo || fallbackLogo}
            alt={`${name} logo`}
            className="mr-4 h-12 w-12 rounded-full border border-forgeGrayWarm object-contain dark:border-forgeGrayDeep"
            style={{ backgroundColor: "lightgray" }}
            loading="lazy" // Optimized for performance
          />
          <h2 className="text-2xl font-bold text-forgeGrayAsh dark:text-forgeGrayLight">
            {name}
          </h2>
        </div>

        {/* Founding details */}
        <div className="mb-4 text-forgeGrayAsh dark:text-forgeGrayLight">
          <p>
            <strong>Founders:</strong> {foundersText}
          </p>
          <p>
            <strong>Year:</strong> {year}
          </p>
        </div>

        {/* Background info */}
        {background && (
          <div className="mb-4 text-forgeGrayAsh dark:text-forgeGrayLight">
            <h3 className="mb-2 text-lg font-semibold">Background</h3>
            <p>{background}</p>
          </div>
        )}

        {/* Related languages */}
        {relatedLanguagesList}

        {/* Official Website Button */}
        {website && (
          <div className="mt-4">
            <button
              onClick={handleWebsiteClick}
              className="inline-block rounded bg-forgeGradientSteel px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Visit Official Website
            </button>
          </div>
        )}
      </div>
    </Suspense>
  );
};

ProgrammingLanguagesPanel.propTypes = {
  language: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string,
    founders: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    background: PropTypes.string,
    relatedLanguages: PropTypes.arrayOf(PropTypes.string),
    website: PropTypes.string,
  }).isRequired,
};

export default ProgrammingLanguagesPanel;
