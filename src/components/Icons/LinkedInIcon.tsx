import React from "react";

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="var(--icon-color)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6v0zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z"
    />
  </svg>
);
