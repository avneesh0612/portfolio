import { socialLinks } from "@/data";
import type { FC } from "react";

export const Contact: FC = () => {
  return (
    <section
      className="py-8 sm:py-12"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="text-4xl sm:text-4xl font-light text-center mb-8 sm:mb-8 px-4"
      >
        Get in Touch
      </h2>

      <div
        className="flex justify-center flex-wrap gap-2 sm:gap-4 px-4 mb-6 sm:mb-8"
        role="list"
        aria-label="Social media links"
      >
        {socialLinks.map(({ link, Icon, name }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark p-2 rounded-md"
            aria-label={`Connect on ${name}`}
            title={`Connect on ${name}`}
            role="listitem"
          >
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-900 dark:text-neutral-100" />
          </a>
        ))}
      </div>
    </section>
  );
};
