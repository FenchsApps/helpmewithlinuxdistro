import type { SVGProps } from 'react';

export const MintLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 18a6 6 0 000-12v12zM12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
  </svg>
);
