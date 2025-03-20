import React from "react";

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 460 269"
    fill="var(--icon-color)"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 269L459.239 55.6309L210.543 145.063L134.239 0L0 269ZM200.652 230.27V237.312H254.348L240.217 209.144L200.652 230.27ZM130 87.3194L90.4347 183.089L163.913 153.513L130 87.3194Z"
      fill="var(--icon-color)"
    />
  </svg>
);

export default Logo;
