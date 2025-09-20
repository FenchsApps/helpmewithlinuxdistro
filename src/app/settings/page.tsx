
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Paintbrush } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useSettings } from "@/contexts/SettingsContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SettingsPage() {
  const { animationsEnabled, setAnimationsEnabled, language, setLanguage } = useSettings();
  const [isMounted, setIsMounted] = useState(false);
  const [primaryHue, setPrimaryHue] = useState(47);

  useEffect(() => {
    setIsMounted(true);
    const root = document.documentElement;
    const primary = getComputedStyle(root).getPropertyValue('--primary').trim();
    
    if (primary) {
        setPrimaryHue(parseInt(primary.split(' ')[0], 10));
    }
  }, []);

  useEffect(() => {
    if(isMounted) {
        const root = document.documentElement;
        
        root.style.setProperty('--primary', `${primaryHue} 100% 70%`);
        root.style.setProperty('--ring', `${primaryHue} 100% 70%`);
    }
  }, [primaryHue, isMounted]);

  const resetTheme = () => {
    setPrimaryHue(47);
  }

  if (!isMounted) {
    return null; 
  }

  const t = (key: string) => {
    const translations: any = {
      en: {
        title: "Settings",
        animations: "Enable Animations",
        animations_desc: "Enable subtle animations and transitions throughout the site.",
        language: "Language",
        theme: "Customize Theme",
        theme_desc: "Adjust the accent color to personalize your experience.",
        primary_color: "Primary Color (Hue)",
        reset: "Reset to Defaults",
        preview: "Preview",
        preview_card_title: "Example Card",
        preview_card_desc: "This is how components will look with your new theme.",
        preview_primary_button: "Primary Button",
        preview_secondary_button: "Secondary",
        general_settings: "General"
      },
      ru: {
        title: "Настройки",
        animations: "Включить анимации",
        animations_desc: "Включить плавные анимации и переходы на сайте.",
        language: "Язык",
        theme: "Настроить тему",
        theme_desc: "Настройте цвет акцента, чтобы персонализировать свой опыт.",
        primary_color: "Основной цвет (оттенок)",
        reset: "Сбросить по умолчанию",
        preview: "Предпросмотр",
        preview_card_title: "Пример карточки",
        preview_card_desc: "Так будут выглядеть компоненты с вашей новой темой.",
        preview_primary_button: "Основная кнопка",
        preview_secondary_button: "Вторичная",
        general_settings: "Общие"
      }
    };
    return translations[language][key] || key;
  };


  return (
    <div className="max-w-2xl mx-auto space-y-8">
       <h1 className="text-4xl font-headline font-bold">{t('title')}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{t('general_settings')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="animations-mode" className="flex flex-col space-y-1">
              <span>{t('animations')}</span>
              <span className="font-normal leading-snug text-muted-foreground">
                {t('animations_desc')}
              </span>
            </Label>
            <Switch
              id="animations-mode"
              checked={animationsEnabled}
              onCheckedChange={setAnimationsEnabled}
              aria-label="Toggle animations"
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="language-select" className="flex flex-col space-y-1">
              <span>{t('language')}</span>
            </Label>
            <Select value={language} onValueChange={(value) => setLanguage(value as 'en' | 'ru')}>
                <SelectTrigger id="language-select" className="w-[180px]">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ru">Русский</SelectItem>
                </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">{t('theme')}</CardTitle>
          <CardDescription>
            {t('theme_desc')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <Label htmlFor="primary-color">{t('primary_color')}</Label>
            <Slider
              id="primary-color"
              value={[primaryHue]}
              onValueChange={(value) => setPrimaryHue(value[0])}
              min={0}
              max={360}
              step={1}
            />
            <div
              className="w-full h-8 rounded-md"
              style={{ backgroundColor: `hsl(${primaryHue}, 100%, 70%)` }}
            />
          </div>

          <Button onClick={resetTheme}>
            <Paintbrush className="mr-2" />
            {t('reset')}
          </Button>

        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h3 className="text-xl font-headline">{t('preview')}</h3>
        <Card>
            <CardHeader>
                <CardTitle>{t('preview_card_title')}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <p>{t('preview_card_desc')}</p>
                <div className="flex gap-4">
                    <Button>{t('preview_primary_button')}</Button>
                    <Button variant="secondary">{t('preview_secondary_button')}</Button>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
