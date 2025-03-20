"use client";

import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch by ensuring component only renders after mounting
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;
  
  const isCurrentlyDark = theme === "dark";
  const label = isCurrentlyDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme(isCurrentlyDark ? "light" : "dark")}
        className="relative rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark transition-all duration-200"
        aria-label={label}
        title={label}
        role="switch"
        aria-checked={isCurrentlyDark}
      >
        <div className="relative w-5 h-5">
          <Sun className="absolute inset-0 h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </div>
        <span className="sr-only">{label}</span>
      </button>
    </div>
  );
}
