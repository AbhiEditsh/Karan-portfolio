import { socialLinks } from "@/lib/Constant";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import NextImage from "./NextImage";

const Intro = () => {
  return (
    <div className="flex flex-col gap-4 text-gray-600 dark:text-neutral-400">
      <div className="flex items-center gap-4">
        <NextImage
          src="/pk.jpg"
          className="rounded-full"
          height={120}
          width={120}
          alt="logo"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Hey, I'm Developer Karan</h1>
          <span>Software Engineer | Flutter Developer</span>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              >
                {<link.icon height={20} width={20} />}
              </a>
            ))}
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <hr />
      <p className="flex flex-col gap-4 text-justify">
        <div>
          <ul className="pl-5 list-disc">
            <li>
              4+ years of experience working as a Flutter developer with
              expertise in iOS and Android platforms.
            </li>
            <li>
              Always enhance knowledge in programming, as well as modern
              technologies and methods of development.
            </li>
            <li>
              Architecture-oriented, follow best practices to create scalable
              and mature products.
            </li>
            <li>
              Strong organizational, problem-solving, and analytical thinking.
            </li>
            <li>Fast learner who keeps abreast of the latest technologies.</li>
            <li>
              Well-versed in using XCode, Android Studio, and Visual Studio
              Code.
            </li>
            <li>
              Record of excellent service, minimizing complaints by timely
              follow-up on queries.
            </li>
            <li>
              A hands-on, proactive professional who can initiate change and
              implement effective programs.
            </li>
            <li>Excellent communication and team management skills.</li>
            <li>
              Responsible for building, deploying, debugging, and maintaining
              Android applications for Google Play.
            </li>
            <li>
              Responsible for the development of all application components.
            </li>
            <li>
              Tested the application on multiple Android targets and debugged
              the issues that were found.
            </li>
            <li>
              Responsible for designing distinctive screens for tablet
              optimization and a cleaner layout.
            </li>
            <li>
              Tested applications on multiple devices to ensure compatibility
              standards.
            </li>
            <li>
              Testing the full application to ensure it is fully bug-free before
              generating the build for the client.
            </li>
          </ul>
        </div>      
      </p>
    </div>
  );
};

export default Intro;
