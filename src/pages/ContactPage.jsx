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
            <svg
              className="max-h-8 max-w-8 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 461.001 461.001"
            >
              <g>
                <path
                  fill="#F61C0D"
                  d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                />
              </g>
            </svg>
            <span className="text-sm font-semibold">littlefoxE's YouTube</span>
          </a>

          {/* MinecraftLetsPlay's YouTube */}
          <a
            href="https://www.youtube.com/@minecraftletsplay2912"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-shrink-0 transform items-center space-x-4 rounded-lg bg-gradient-to-tl from-forgeAsh via-forgeSmoke via-40% to-fireAccent to-70% p-4 shadow-lg transition hover:scale-105"
          >
            <svg
              className="max-h-8 max-w-8 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 461.001 461.001"
            >
              <g>
                <path
                  fill="#F61C0D"
                  d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                />
              </g>
            </svg>
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
            <svg
              className="max-h-8 max-w-8 flex-shrink-0"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.773 8.206 11.363.6.111.793-.261.793-.582v-2.2c-3.338.732-4.042-1.417-4.042-1.417-.546-1.386-1.333-1.755-1.333-1.755-1.091-.747.083-.732.083-.732 1.207.083 1.841 1.241 1.841 1.241 1.072 1.82 2.812 1.297 3.497.992.108-.776.42-1.297.763-1.594-2.665-.307-5.467-1.332-5.467-5.93 0-1.309.467-2.381 1.235-3.221-.123-.307-.534-1.547.117-3.231 0 0 1.005-.325 3.3 1.24.96-.267 1.98-.4 3-.4 1.02 0 2.04.133 3 .4 2.28-1.565 3.285-1.24 3.285-1.24.657 1.684.246 2.924.123 3.231.768.84 1.23 1.912 1.23 3.221 0 4.61-2.807 5.617-5.48 5.91.432.372.82 1.1.82 2.217v3.293c0 .322.187.7.8.578C20.56 22.267 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z" />
            </svg>
            <span className="text-sm font-semibold">olittlefoxE's GitHub</span>
          </a>

          {/* MinecraftLetsPlay's GitHub */}
          <a
            href="https://github.com/MinecraftLetsPlay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-shrink-0 transform items-center space-x-4 rounded-lg bg-gradient-to-br from-forgeDark via-forgeAsh to-forgeSmoke p-4 shadow-lg transition hover:scale-105"
          >
            <svg
              className="max-h-8 max-w-8 flex-shrink-0"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.773 8.206 11.363.6.111.793-.261.793-.582v-2.2c-3.338.732-4.042-1.417-4.042-1.417-.546-1.386-1.333-1.755-1.333-1.755-1.091-.747.083-.732.083-.732 1.207.083 1.841 1.241 1.841 1.241 1.072 1.82 2.812 1.297 3.497.992.108-.776.42-1.297.763-1.594-2.665-.307-5.467-1.332-5.467-5.93 0-1.309.467-2.381 1.235-3.221-.123-.307-.534-1.547.117-3.231 0 0 1.005-.325 3.3 1.24.96-.267 1.98-.4 3-.4 1.02 0 2.04.133 3 .4 2.28-1.565 3.285-1.24 3.285-1.24.657 1.684.246 2.924.123 3.231.768.84 1.23 1.912 1.23 3.221 0 4.61-2.807 5.617-5.48 5.91.432.372.82 1.1.82 2.217v3.293c0 .322.187.7.8.578C20.56 22.267 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z" />
            </svg>
            <span className="text-sm font-semibold">
              Minecraftletsplay's GitHub
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
