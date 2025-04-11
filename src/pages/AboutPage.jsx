import React from "react";

/**
 * @description AboutPage component that displays information about the project and the team members.
 * @param {Array} teamMembers - An array of team members with their names, nicknames, and bios.
 * @param {Function} map - Function to iterate over the team members array.
 * @param {Function} Fragment - Function to create a fragment for each team member.
 * @param {Function} key - Function to assign a unique key to each fragment.
 * @returns {JSX.Element} <AboutPage /> - The rendered about page component.
 */

const teamMembers = [
  {
    name: "Robin Stiller",
    nickname: "olittlefoxE",
    bio: "I am currently a student, passionate about learning and honing my programming skills. I'm focused on Front-End-Dev.",
  },
  {
    name: "Dennis Plischke",
    nickname: "Minecraftletsplay",
    bio: "I am a student at a technical high school focusing on computer science, with a passion for programming - primarily in C#.",
  },
];

const AboutPage = () => {
  return (
    <>
      <div className="mx-auto max-w-5xl rounded-lg font-RobotoSlab min-h-screen min-w-screen py-10">
        <h1 className="mb-12 mt-24 text-center text-4xl font-extrabold text-forgeDark underline underline-offset-4 dark:text-forgeGrayBase">
          About Us
        </h1>
        <div className="text-forgeDark dark:text-forgeGrayBase">
          <p className="text-lg leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-forgeDark dark:text-forgeGrayBase">
              Robin & Dennis&apos; Code Forge!
            </span>
            <br />
            <br />
            This website is a collaborative project created by{" "}
            {teamMembers.map((member, index) => (
              <React.Fragment key={index}>
                <span className="font-medium text-forgeDark dark:text-forgeGrayBase">
                  {member.name}
                </span>{" "}
                (aka{" "}
                <em className="text-forgeDark dark:text-forgeGrayBase">
                  {member.nickname}
                </em>
                ){index < teamMembers.length - 1 && " and "}
              </React.Fragment>
            ))}
            .
          </p>
          <div className="mt-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="mb-6 leading-relaxed">
                <strong className="text-forgeGrayDark dark:text-forgeGrayWarm">
                  ({member.name.split(" ")[0]})
                </strong>{" "}
                {member.bio}
              </div>
            ))}
          </div>
          <p className="text-lg leading-relaxed">
            Our goal is to use this website as a platform to deepen our
            knowledge of HTML, CSS, React, and the intricacies of web
            development, including how to set up, run, and maintain a website.
            <br />
            <br />
            Through this project, we aim to showcase our programming skills by
            presenting various projects we&aposve developed in multiple
            programming languages. You can learn about many different languages
            in the &aposLanguages&apos part including info about its Founders
            and year of founding, its purpose and key features and some related
            languages.
            <br />
            Furthermore, you can visit a corresponding website to leran more.
            <br />
            <br />
            This is our first professional public website. It&apos;s a hobby
            project born from our shared interest in programming and web
            development. We hope you enjoy exploring it as much as we enjoyed
            creating it!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
