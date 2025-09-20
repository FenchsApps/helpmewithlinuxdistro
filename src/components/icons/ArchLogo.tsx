import type { SVGProps } from 'react';

export const ArchLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L6 8.5V15.5L12 22L18 15.5V8.5L12 2Z" />
    <path d="M12 2V22" />
    <path d="M18 8.5L6 15.5" />
    <path d="M6 8.5L18 15.5" />
  </svg>
);
