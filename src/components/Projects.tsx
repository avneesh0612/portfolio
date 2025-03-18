import { projects } from "@/data";
import type { FC } from "react";
import Image from "next/image";

export const Projects: FC = () => {
  return (
    <section className="py-12 px-8 md:py-12" id="projects">
      <h2 className="text-4xl font-light text-white text-center mb-6 md:mb-8">
        Projects
      </h2>
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-8 px-4 md:px-0 pt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-l-4 border-gray-700 pl-4 md:pl-4 hover:border-white transition-all duration-200"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 w-[90%] md:w-full">
              <h3 className="text-xl md:text-2xl font-medium text-white">
                {project.title}
              </h3>
              <span className="text-gray-400 text-xs md:text-sm">
                {project.timeline}
              </span>
            </div>
            <p className="text-gray-500 text-base md:text-lg">
              {project.description}
            </p>
            <div className="mt-2 text-xs md:text-sm text-gray-400 flex space-x-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1"
              >
                Live{" "}
                <Image
                  src="/icons/visit.svg"
                  alt="Visit icon"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1"
              >
                GitHub{" "}
                <Image
                  src="/icons/github.svg"
                  alt="GitHub icon"
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
