
"use client";

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSettings } from '@/contexts/SettingsContext';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-linux');
  const { language } = useSettings();

  const t = (key: string) => {
    const translations: any = {
      en: {
        title: "Find Your Perfect Linux Distro",
        subtitle: "Tired of distro-hopping? Answer a few simple questions, and our algorithm will match you with the Linux distribution that fits you best.",
        start_quiz: "Start the Quiz"
      },
      ru: {
        title: "Найдите свой идеальный дистрибутив Linux",
        subtitle: "Устали от перебора дистрибутивов? Ответьте на несколько простых вопросов, и наш алгоритм подберет для вас наиболее подходящий дистрибутив Linux.",
        start_quiz: "Начать викторину"
      }
    };
    return translations[language][key] || key;
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold font-headline mt-8 mb-4">
        {t('title')}
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        {t('subtitle')}
      </p>
      <div className="mb-8">
        <Link href="/quiz">
          <Button size="lg">
            {t('start_quiz')}
            <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
      <div className="w-full max-w-lg rounded-lg overflow-hidden">
        <Image
          src={heroImage?.imageUrl ?? "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"}
          alt={heroImage?.description ?? "Tux, the Linux penguin mascot"}
          width={400}
          height={400}
          className="object-contain w-full"
          data-ai-hint="tux linux penguin"
          priority
        />
      </div>
    </div>
  );
}
