import React from "react";

export const ContactPage = () => {
  return (
    // Entire Page
    <div className="mt-0 flex min-h-screen flex-col items-center justify-center overflow-visible pt-0 font-RobotoSlab">
      {/* Contact Us Section */}
      <div className="w-full max-w-lg rounded-lg border border-forgeGrayWarm bg-gradient-to-tl from-emberSpark via-emberHeat to-forgeGrayDark p-8 text-forgeGrayAsh shadow-xl dark:border-forgeGrayDeep dark:text-forgeGrayLight">
        <h1 className="mb-6 text-center text-4xl font-extrabold">Contact Us</h1>
        <p className="mb-8 text-center">
          Feel free to reach out to us for collaboration, queries, or feedback!
        </p>

        <div className="rounded-lg bg-gradient-to-tl from-forgeDark from-20% via-forgeGrayDark via-60% to-forgeSmoke to-90% p-4 shadow-md">
          <h2 className="text-lg font-semibold">Robin Stiller</h2>
          <div className="flex flex-row">
            <p className="text-fireBase">Email:</p>
            <a
              href="mailto:little.fox.e1000@gmail.com"
              className="ml-1 text-fireCore"
            >
              little.fox.e1000@gmail.com
            </a>
          </div>
        </div>
        {/* Dennis Contact */}
        <div className="mt-6 rounded-lg bg-gradient-to-tl from-forgeDark from-20% via-forgeGrayDark via-60% to-forgeSmoke to-90% p-4 shadow-md">
          <h2 className="text-lg font-semibold">Dennis Plischke</h2>
          <div className="flex flex-row">
            <p className="text-fireBase">Email:</p>
            <a
              href="mailto:dennisplischke755@gmail.com"
              className="ml-1 text-fireCore"
            >
              dennisplischke755@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="mt-10 w-full max-w-lg rounded-lg border border-forgeGrayWarm bg-gradient-to-tl from-emberSpark via-emberHeat to-forgeGrayDark p-8 text-forgeGrayAsh shadow-xl dark:border-forgeGrayDeep dark:text-forgeGrayLight">
        <h1 className="mb-6 text-center text-3xl font-bold">Follow Us</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* littlefoxE's YouTube */}
          <a
            href="https://www.youtube.com/@little_fox_E"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-shrink-0 transform items-center space-x-4 rounded-lg bg-gradient-to-tl from-forgeAsh via-forgeSmoke via-40% to-fireAccent to-70% p-4 shadow-lg transition hover:scale-105"
          >
            <img
              src="./assets/icons/youtube.svg"
              alt="YouTube Logo"
              className="max-h-8 max-w-8 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 461.001 461.001"
            />
            <span className="text-sm font-semibold">littlefoxE's YouTube</span>
          </a>

          {/* MinecraftLetsPlay's YouTube */}
          <a
            href="https://www.youtube.com/@minecraftletsplay2912"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-shrink-0 transform items-center space-x-4 rounded-lg bg-gradient-to-tl from-forgeAsh via-forgeSmoke via-40% to-fireAccent to-70% p-4 shadow-lg transition hover:scale-105"
          >
            <img
              src="./assets/icons/youtube.svg"
              alt="YouTube Logo"
              className="max-h-8 max-w-8 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 461.001 461.001"
            />
            <span className="text-sm font-semibold">
              MinecraftLetsPlay's YouTube
            </span>
          </a>

          {/* littlefoxE's GitHub*/}
          <a
            href="https://github.com/olittlefoxE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-shrink-0 transform items-center space-x-4 rounded-lg bg-gradient-to-br from-forgeDark via-forgeAsh to-forgeSmoke p-4 shadow-lg transition hover:scale-105"
          >
            <img
              src="./assets/icons/github.svg"
              alt="Github Logo"
              className="max-h-8 max-w-8 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 461.001 461.001"
            />
            <span className="text-sm font-semibold">olittlefoxE's GitHub</span>
          </a>

          {/* MinecraftLetsPlay's GitHub */}
          <a
            href="https://github.com/MinecraftLetsPlay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-shrink-0 transform items-center space-x-4 rounded-lg bg-gradient-to-br from-forgeDark via-forgeAsh to-forgeSmoke p-4 shadow-lg transition hover:scale-105"
          >
            <img
              src="./assets/icons/github.svg"
              alt="Github Logo"
              className="max-h-8 max-w-8 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 461.001 461.001"
            />
            <span className="text-sm font-semibold">
              Minecraftletsplay's GitHub
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
