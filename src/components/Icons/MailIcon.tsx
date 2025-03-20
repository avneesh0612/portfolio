import React from "react";

export const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    viewBox="0 0 24 24"
  >
    <path
      stroke="var(--icon-color)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    />
    <path
      stroke="var(--icon-color)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M22 6l-10 7L2 6"
    />
  </svg>
);
