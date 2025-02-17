export const IntroTitle = () => {
  const Heading = "Robin's & Dennis' Code Forge";
  const headingDescription = "rd-code-forge.net";

  return (
    <header className="z-10 text-center drop-shadow-lg">
      <h1 className="font-RobotoSlab text-4xl font-bold text-fireBase drop-shadow-md">
        {Heading}
      </h1>
      <p className="font-FiraSans text-lg font-light text-fireGlow">
        {headingDescription}
      </p>
    </header>
  );
};
