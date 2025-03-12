import fallbackLogo from "../../assets/images/404.png";
import PropTypes from "prop-types";

const ProgrammingLanguagesPanel = ({ language }) => {
  const { name, logo, founders, year, background, relatedLanguages, website } =
    language;

  return (
    <div className="max-w-6xl rounded-lg border border-forgeGrayWarm bg-gradient-to-bl from-forgeGraySoft via-forgeSmoke to-fireGlow p-6 text-forgeGrayAsh shadow-md transition-shadow hover:shadow-lg dark:border-forgeGrayDeep dark:from-forgeGrayAsh dark:via-forgeAsh dark:to-fireBase">
      {/* Top section: Logo and name */}
      <div className="mb-4 flex items-center">
        <img
          src={logo || fallbackLogo} // Fallback for missing logos
          alt={`${name} logo`}
          className="mr-4 h-12 w-12 rounded-full border border-forgeGrayWarm object-contain dark:border-forgeGrayDeep"
          style={{ backgroundColor: "lightgray" }}
          loading="lazy" // Optimizing for performance
        />
        <h2 className="text-2xl font-bold text-forgeGrayAsh dark:text-forgeGrayLight">
          {name}
        </h2>
      </div>

      {/* Founding details */}
      <div className="mb-4 text-forgeGrayAsh dark:text-forgeGrayLight">
        <p>
          <strong>Founders:</strong>{" "}
          {founders?.length ? founders.join(", ") : "Unknown"}
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
      {relatedLanguages?.length > 0 && (
        <div className="text-forgeGrayAsh dark:text-forgeGrayLight">
          <h3 className="mb-2 text-lg font-semibold">Related Languages</h3>
          <ul className="list-disc pl-5">
            {relatedLanguages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Official Website Button */}
      {website && (
        <div className="mt-4">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded bg-forgeGradientSteel px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Visit Official Website
          </a>
        </div>
      )}
    </div>
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
