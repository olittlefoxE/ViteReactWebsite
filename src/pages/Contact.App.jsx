import React from "react";

export const Contact = () => {
  return (
    <div className="min-h-screen dark:gray-800 flex flex-col justify-center items-center p-6">
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
            <div className="flex flex-row">
              <p className="text-gray-600 dark:text-gray-400">Email:</p>
              <a
                href="mailto:little.fox.e1000@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
              >
                little.fox.e1000@gmail.com
              </a>
            </div>
          </div>

          {/* Dennis Contact */}
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              Dennis Plischke
            </h2>
            <div className="flex flex-row">
              <p className="text-gray-600 dark:text-gray-400">Email:</p>
              <a
                href="mailto:dennisplischke755@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
              >
                dennisplischke755@gmail.com
              </a>
            </div> 
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
            href="https://www.youtube.com/@minecraftletsplay2912"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 bg-red-100 dark:bg-red-700 rounded-lg shadow-lg hover:scale-105 transition transform"
          >
            <svg className="w-10 h-10" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461.001 461.001">
              <g>
	              <path fill="#F61C0D" d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
              </g>
            </svg>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Youtube
            </span>
          </a>

          {/* Discord */}
          <a
            href="https://discord.gg/tssKYweM3h"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg shadow-lg hover:scale-105 transition transform"
          >
            <svg className="h-10 w-10" viewBox="0 0 512 512" fill="#5865f2" aria-label="Discord" role="img" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <rect width="512" height="512" rx="15%" fill="#ffffff"/>
              <path d="m386 137c-24-11-49.5-19-76.3-23.7c-.5 0-1 0-1.2.6c-3.3 5.9-7 13.5-9.5 19.5c-29-4.3-57.5-4.3-85.7 0c-2.6-6.2-6.3-13.7-10-19.5c-.3-.4-.7-.7-1.2-.6c-23 4.6-52.4 13-76 23.7c-.2 0-.4.2-.5.4c-49 73-62 143-55 213c0 .3.2.7.5 1c32 23.6 63 38 93.6 47.3c.5 0 1 0 1.3-.4c7.2-9.8 13.6-20.2 19.2-31.2c.3-.6 0-1.4-.7-1.6c-10-4-20-8.6-29.3-14c-.7-.4-.8-1.5 0-2c2-1.5 4-3 5.8-4.5c.3-.3.8-.3 1.2-.2c61.4 28 128 28 188 0c.4-.2.9-.1 1.2.1c1.9 1.6 3.8 3.1 5.8 4.6c.7.5.6 1.6 0 2c-9.3 5.5-19 10-29.3 14c-.7.3-1 1-.6 1.7c5.6 11 12.1 21.3 19 31c.3.4.8.6 1.3.4c30.6-9.5 61.7-23.8 93.8-47.3c.3-.2.5-.5.5-1c7.8-80.9-13.1-151-55.4-213c0-.2-.3-.4-.5-.4Zm-192 171c-19 0-34-17-34-38c0-21 15-38 34-38c19 0 34 17 34 38c0 21-15 38-34 38zm125 0c-19 0-34-17-34-38c0-21 15-38 34-38c19 0 34 17 34 38c0 21-15 38-34 38z" fill="#5865f2"/>
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
