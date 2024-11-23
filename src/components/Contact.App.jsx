import React from "react";

export const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex flex-col justify-center items-center p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-8">
          Feel free to reach out to us for collaboration, queries, or feedback!
        </p>

        {/* Contact Details */}
        <div className="space-y-6">
          {/* Robin Contact */}
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              Robin Stiller
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Email:</p>
            <a
              href="mailto:little.fox.e1000@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              little.fox.e1000@gmail.com
            </a>
          </div>

          {/* Dennis Contact */}
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              Dennis Plischke
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Email:</p>
            <a
              href="mailto:dennisplischke755@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              dennisplischke755@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="mt-10 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6">
          Follow Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 bg-red-100 dark:bg-red-900 rounded-lg shadow-lg hover:scale-105 transition transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-red-500 dark:text-red-300"
            >
              <path d="M23.5 6.7c-.3-1.2-1.3-2.2-2.5-2.5C19.3 4 12 4 12 4s-7.3 0-9.9.2C.9 4.5 0 5.5 0 6.7 0 9 0 12 0 12s0 3 .1 5.3c.3 1.2 1.3 2.2 2.5 2.5C4.7 20 12 20 12 20s7.3 0 9.9-.2c1.2-.3 2.2-1.3 2.5-2.5.1-2.3.1-5.3.1-5.3s0-3-.1-5.3zM9.8 15.3V8.7l6.3 3.3-6.3 3.3z" />
            </svg>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              YouTube Channel
            </span>
          </a>

          {/* Discord */}
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg shadow-lg hover:scale-105 transition transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-blue-600 dark:text-blue-400"
            >
              <path d="M20.8 4H3.2A3.2 3.2 0 0 0 0 7.2v9.6A3.2 3.2 0 0 0 3.2 20h17.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 20.8 4zM12 14a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Join our Discord
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};