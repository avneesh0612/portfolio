import { socialLinks } from "@/data";
import Image from "next/image";
import type { FC } from "react";

export const Contact: FC = () => {
  return (
    <section className="py-8 sm:py-12 text-white" id="contact">
      <h2 className="text-4xl sm:text-4xl font-light text-center mb-8 sm:mb-8 px-4">
        Get in Touch
      </h2>

      <div className="flex justify-center flex-wrap gap-4 sm:gap-6 px-4 mb-6 sm:mb-8">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <Image
              src={social.icon}
              alt={social.name}
              className="w-6 h-6 sm:w-8 sm:h-8"
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
    </section>
  );
};
