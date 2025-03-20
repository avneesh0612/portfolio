import { personalData } from "@/data";
import type { FC } from "react";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full py-6 bg-background-light dark:bg-background-dark text-neutral-900 dark:text-neutral-100 text-center"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          © {currentYear} {personalData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
