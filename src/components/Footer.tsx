import { personalData } from "@/data";
import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="w-full py-6 bg-black text-white text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} {personalData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
