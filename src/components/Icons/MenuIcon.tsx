import React from "react";

export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 18L20 18"
      stroke="var(--icon-color)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M4 12L20 12"
      stroke="var(--icon-color)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M4 6L20 6"
      stroke="var(--icon-color)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
