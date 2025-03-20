import { personalData } from "@/data";
import type { FC } from "react";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-center shadow-sm mx-auto"
      role="contentinfo"
      aria-label="Site footer"
    >
      <p className="text-neutral-600 dark:text-neutral-400 text-sm py-4">
        © {currentYear} {personalData.name}. All rights reserved.
      </p>
    </footer>
  );
};
