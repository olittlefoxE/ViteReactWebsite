import React from "react";

export const ProgrammingLanguagesPanel = ({ language }) => {
  const { name, logo, founders, year, background, relatedLanguages, website } = language;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:text-gray-200">
      {/* Top section: Logo and name */}
      <div className="flex items-center mb-4">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-12 h-12 mr-4 rounded-full border border-gray-300 dark:border-gray-700"
        />
        <h2 className="text-2xl font-bold">{name}</h2>
      </div>

      {/* Founding details */}
      <div className="mb-4">
        <p>
          <strong>Founders:</strong> {founders.join(", ")}
        </p>
        <p>
          <strong>Year:</strong> {year}
        </p>
      </div>

      {/* Background info */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Background</h3>
        <p>{background}</p>
      </div>

      {/* Related languages */}
      {relatedLanguages && relatedLanguages.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Related Languages</h3>
          <ul className="list-disc list-inside">
            {relatedLanguages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Official Website Button */}
      <div className="mt-4">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded transition-colors"
          >
            Visit Official Website
          </a>
        )}
      </div>
    </div>
  );
};




