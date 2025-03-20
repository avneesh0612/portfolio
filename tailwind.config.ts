import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        geomanist: ["Geomanist", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          hover: "#2563EB",
        },
        accent: {
          first: "#F59E0B",
          second: "#10B981",
          third: "#EC4899",
        },
        background: {
          light: "#fafafa",
          dark: "#0a0a0a",
        },
        foreground: {
          light: "#0a0a0a",
          dark: "#ededed",
        },
        neutral: {
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
