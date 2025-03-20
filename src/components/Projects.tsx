import { projects } from "@/data";
import type { FC } from "react";
import { GithubIcon, VisitIcon } from "./Icons";

export const Projects: FC = () => {
  return (
    <section className="py-12 px-6 md:py-12 mt-8" id="projects">
      <h2 className="text-4xl font-light text-center mb-6 md:mb-8">Projects</h2>
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-8 px-4 md:px-0 pt-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="block border-l-4 border-neutral-700 pl-4 md:pl-4 hover:border-neutral-900 dark:hover:border-neutral-300 transition-all duration-200"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 w-[90%] md:w-full">
              <h3 className="text-xl md:text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h3>
              <span className="text-neutral-400 text-xs md:text-sm">
                {project.timeline}
              </span>
            </div>
            <p className="text-neutral-500 text-base md:text-lg">
              {project.description}
            </p>
            <div className="mt-2 text-xs md:text-sm text-neutral-400 flex space-x-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition flex items-center gap-1"
              >
                Live{" "}
                <VisitIcon className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition flex items-center gap-1"
              >
                GitHub{" "}
                <GithubIcon className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
