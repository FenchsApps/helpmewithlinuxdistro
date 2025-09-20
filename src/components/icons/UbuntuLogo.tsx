import type { SVGProps } from 'react';

export const UbuntuLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="5" r="2" fill="var(--background)" />
    <circle cx="18.36" cy="15.5" r="2" fill="var(--background)" />
    <circle cx="5.64" cy="15.5" r="2" fill="var(--background)" />
    <path fill="var(--background)" d="M12 7a1 1 0 000 2v4a1 1 0 00-2 0 3 3 0 003 3 3 3 0 003-3 1 1 0 00-2 0v-4a1 1 0 000-2z" transform="rotate(60 12 12)"/>
    <path fill="var(--background)" d="M12 7a1 1 0 000 2v4a1 1 0 00-2 0 3 3 0 003 3 3 3 0 003-3 1 1 0 00-2 0v-4a1 1 0 000-2z" transform="rotate(-60 12 12)"/>
  </svg>
);
