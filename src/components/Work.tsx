import { work } from "@/data";
import type { FC } from "react";

export const Work: FC = () => {
  return (
    <section className="py-12 px-6 md:py-12 mt-8" id="work">
      <h2 className="text-4xl font-light text-center mb-4 md:mb-8">
        Work Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-8 px-4 md:px-0 pt-6">
        {work.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-l-4 border-neutral-700 pl-4 md:pl-4 hover:border-neutral-900 dark:hover:border-neutral-300 transition-all duration-200"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 w-[90%] md:w-full">
              <h3 className="text-xl md:text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                {item.title}
              </h3>
              <span className="text-neutral-400 text-xs md:text-sm">
                {item.timeline}
              </span>
            </div>
            <p className="text-neutral-500 text-base md:text-lg">{item.role}</p>
            <p className="text-neutral-400 text-xs md:text-sm mt-2">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};
