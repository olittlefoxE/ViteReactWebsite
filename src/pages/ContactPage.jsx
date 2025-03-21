import youtubeIcon from "../assets/icons/youtubeIcon.svg";
import githubIcon from "../assets/icons/githubIcon.svg";

const ContactPage = () => {
  return (
    <>
      <div className="flex min-h-screen min-w-screen flex-col items-center justify-center overflow-hidden font-RobotoSlab">
        {/* Contact Us Section */}
        <div className="mt-20 w-full max-w-lg rounded-lg border border-forgeGrayWarm leading-relaxed bg-gradient-to-tl from-emberSpark via-emberHeat to-forgeGrayDark p-8 text-forgeGrayAsh shadow-xl dark:border-forgeGrayDeep dark:text-forgeGrayLight">
          <h1 className="mb-6 text-center text-4xl font-extrabold">
            Contact Us
          </h1>
          <p className="mb-8 text-center">
            Feel free to reach out to us for collaboration, queries, or
            feedback!
          </p>
          <div className="rounded-lg bg-gradient-to-tl from-forgeDark from-20% via-forgeGrayDark via-60% to-forgeSmoke to-90% p-4 shadow-md">
            <h2 className="text-lg font-semibold">Robin Stiller</h2>
            <div className="flex flex-row">
              <p className="text-fireBase">Email:</p>
              <a
                aria-label="Email Robin Stiller"
                aria-hidden="true"
                href="mailto:little.fox.e1000@gmail.com"
                className="ml-1 text-fireCore"
              >
                little.fox.e1000@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-6 rounded-lg bg-gradient-to-tl from-forgeDark from-20% via-forgeGrayDark via-60% to-forgeSmoke to-90% p-4 shadow-md">
            <h2 className="text-lg font-semibold">Dennis Plischke</h2>
            <div className="flex flex-row">
              <p className="text-fireBase">Email:</p>
              <a
                aria-label="Email Dennis Plischke"
                aria-hidden="true"
                href="mailto:dennisplischke755@gmail.com"
                className="ml-1 text-fireCore"
              >
                dennisplischke755@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="mt-10 w-full max-w-lg rounded-lg border border-forgeGrayWarm bg-gradient-to-tl from-emberSpark via-emberHeat to-forgeGrayDark p-8 shadow-xl dark:border-forgeGrayDeep">
          <h1 className="mb-6 text-center text-3xl font-bold">Follow Us</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* littlefoxE's YouTube */}
            <a
              aria-label="littlefoxE's YouTube"
              aria-hidden="true"
              alt="YouTube Logo"
              href="https://www.youtube.com/@little_fox_E"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-shrink-0 transform items-center space-x-4 rounded-lg bg-gradient-to-tl from-forgeAsh via-forgeSmoke via-40% to-fireAccent to-70% p-4 shadow-lg transition hover:scale-105"
            >
              <img
                src={youtubeIcon}
                alt="YouTube Logo"
                className="max-h-8 max-w-8 flex-shrink-0"
              />
              <span className="text-sm font-semibold">
                littlefoxE&apos;s YouTube
              </span>
            </a>

            {/* MinecraftLetsPlay's YouTube */}
            <a
              aria-label="MinecraftLetsPlay's YouTube"
              aria-hidden="true"
              alt="YouTube Logo"
              href="https://www.youtube.com/@minecraftletsplay2912"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-shrink-0 transform items-center space-x-4 rounded-lg bg-gradient-to-tl from-forgeAsh via-forgeSmoke via-40% to-fireAccent to-70% p-4 shadow-lg transition hover:scale-105"
            >
              <img
                src={youtubeIcon}
                alt="YouTube Logo"
                className="max-h-8 max-w-8 flex-shrink-0"
              />
              <span className="text-sm font-semibold">
                MinecraftLetsPlay&apos;s YouTube
              </span>
            </a>

            {/* littlefoxE's GitHub */}
            <a
              aria-label="littlefoxE's GitHub"
              aria-hidden="true"
              alt="GitHub Logo"
              href="https://github.com/olittlefoxE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-shrink-0 transform items-center space-x-4 rounded-lg bg-gradient-to-br from-forgeDark via-forgeAsh to-forgeSmoke p-4 shadow-lg transition hover:scale-105"
            >
              <img
                src={githubIcon}
                alt="GitHub Logo"
                className="max-h-8 max-w-8 flex-shrink-0"
              />
              <span className="text-sm font-semibold text-forgeGrayLight">
                olittlefoxE&apos;s GitHub
              </span>
            </a>

            {/* MinecraftLetsPlay's GitHub */}
            <a
              aria-label="MinecraftLetsPlay's GitHub"
              aria-hidden="true"
              alt="GitHub Logo"
              href="https://github.com/MinecraftLetsPlay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-shrink-0 transform items-center space-x-4 rounded-lg bg-gradient-to-br from-forgeDark via-forgeAsh to-forgeSmoke p-4 shadow-lg transition hover:scale-105"
            >
              <img
                src={githubIcon}
                alt="GitHub Logo"
                className="max-h-8 max-w-8 flex-shrink-0"
              />
              <span className="text-sm font-semibold text-forgeGrayLight">
                Minecraftletsplay&apos;s GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
