
"use client";

import { useSearchParams } from "next/navigation";
import { calculateScores, Distro, questions } from "@/lib/quiz-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Bar, CartesianGrid } from "recharts";
import { Globe, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useSettings } from "@/contexts/SettingsContext";
import { DistroIcon } from "@/components/icons/DistroIcon";

export default function ResultsComponent() {
  const searchParams = useSearchParams();
  const { animationsEnabled, language } = useSettings();

  const answers: { [key: string]: number } = {};
  questions.forEach(q => {
    const answer = searchParams.get(q.id);
    answers[q.id] = answer ? parseInt(answer, 10) : 50;
  });

  const results = calculateScores(answers);
  const topResult = results[0];
  const chartData = results.slice(0, 5).map(r => ({ name: r.name, score: r.score })).reverse();

  const t = (key: string, distro: Distro | null = null, index: number | null = null) => {
    const translations: any = {
      en: {
        title: "Your Top Match:",
        subtitle: "Based on your answers, here are the distributions we recommend for you.",
        scoreboard_title: "Your Distribution Scoreboard",
        scoreboard_desc: "A comparison of your top 5 matches.",
        top_match: "Top Match",
        match: `Match #${index !== null ? index + 1 : ''}`,
        visit_website: "Visit Website",
        quiz_again: "Take the Quiz Again"
      },
      ru: {
        title: "Ваше лучшее совпадение:",
        subtitle: "Основываясь на ваших ответах, вот дистрибутивы, которые мы вам рекомендуем.",
        scoreboard_title: "Ваша таблица результатов по дистрибутивам",
        scoreboard_desc: "Сравнение 5 лучших совпадений.",
        top_match: "Лучшее совпадение",
        match: `Совпадение №${index !== null ? index + 1 : ''}`,
        visit_website: "Посетить веб-сайт",
        quiz_again: "Пройти викторину еще раз"
      }
    };
    if (distro) {
        return distro.translations[language].description || distro.description;
    }
    return translations[language][key] || key;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">{t('title')} {topResult.name}</h1>
        <p className="text-lg text-muted-foreground mt-2">{t('subtitle')}</p>
      </div>

      <Card className="bg-gradient-to-br from-card to-secondary/50">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">{t('scoreboard_title')}</CardTitle>
          <CardDescription>{t('scoreboard_desc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData} layout="vertical" margin={{ left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis type="category" dataKey="name" stroke="hsl(var(--foreground))" axisLine={false} tickLine={false} width={80} />
              <Tooltip
                cursor={{ fill: 'hsl(var(--accent) / 0.5)' }}
                contentStyle={{
                  background: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                }}
              />
              <Bar dataKey="score" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} animationDuration={animationsEnabled ? 1000 : 0} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-1">
        {results.map((distro, index) => (
          <Card key={distro.id} className={index === 0 ? "border-primary border-2 shadow-lg" : ""}>
            <CardHeader className="flex flex-row items-start gap-4">
               <DistroIcon distroId={distro.id} className="h-12 w-12" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl font-headline">{distro.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{distro.score}%</div>
                </div>
                <CardDescription className="mt-2">{t('description', distro)}</CardDescription>
              </div>
            </CardHeader>
            <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                    {index === 0 && <span className="font-bold text-primary">{t('top_match')}</span>}
                    {index > 0 && <span>{t('match', null, index)}</span>}
                </div>
                <a href={distro.website} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                        {t('visit_website')} <Globe className="ml-2 h-4 w-4"/>
                    </Button>
                </a>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link href="/quiz">
            <Button>
                <RefreshCw className="mr-2"/>
                {t('quiz_again')}
            </Button>
        </Link>
      </div>
    </div>
  );
}
