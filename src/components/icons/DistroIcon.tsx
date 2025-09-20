import Image from 'next/image';
import { distros } from '@/lib/quiz-data';
import { HelpCircle } from 'lucide-react';

interface DistroIconProps {
  distroId: string;
  className?: string;
}

export const DistroIcon = ({ distroId, className }: DistroIconProps) => {
  const distro = distros.find(d => d.id === distroId);

  if (!distro || !distro.website) {
    return <HelpCircle className={className} />;
  }

  const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${distro.website}`;

  return (
    <Image
      src={faviconUrl}
      alt={`${distro.name} logo`}
      width={48}
      height={48}
      className={className}
      unoptimized
    />
  );
};
