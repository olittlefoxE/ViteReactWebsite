import React from "react";

export const ProgrammingLanguagesPage = ({ language }) => {
  const { name, logo, founders, year, background, relatedLanguages, website } =
    language;

  return (
    <div className="rounded-lg border-[1px] border-gray-300 bg-white p-6 text-gray-800 shadow-md transition-shadow hover:shadow-xl dark:border-gray-400 dark:bg-gray-800 dark:text-gray-200">
      {/* Top section: Logo and name */}
      <div className="mb-4 flex items-center">
        <img
          src={logo}
          alt={`${name} logo`}
          className="mr-4 h-12 w-12 rounded-full border border-gray-300 dark:border-gray-700"
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
        <h3 className="mb-2 text-lg font-semibold">Background</h3>
        <p>{background}</p>
      </div>

      {/* Related languages */}
      {relatedLanguages && relatedLanguages.length > 0 && (
        <div>
          <h3 className="mb-2 text-lg font-semibold">Related Languages</h3>
          <ul className="list-inside list-disc">
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
            className="inline-block rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 hover:opacity-95"
          >
            Visit Official Website
          </a>
        )}
      </div>
    </div>
  );
};
