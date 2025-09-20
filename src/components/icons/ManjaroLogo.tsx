import type { SVGProps } from 'react';

export const ManjaroLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M3 3h7v18H3V3zm9 0h9v7h-9V3zm0 11h9v7h-9v-7z" />
  </svg>
);
