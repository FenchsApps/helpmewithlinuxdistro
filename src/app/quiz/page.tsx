
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions, Question } from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, ArrowRight, BarChart } from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";
import { cn } from "@/lib/utils";

export default function QuizPage() {
  const router = useRouter();
  const { animationsEnabled, language } = useSettings();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const t = (key: 'text' | 'description' | 'low_label' | 'high_label' | 'question_of' | 'back' | 'next' | 'see_results', question: Question | null = null) => {
    const translations: any = {
      en: {
        question_of: `Question ${currentQuestionIndex} of ${questions.length - 1}`,
        back: "Back",
        next: "Next",
        see_results: "See Results",
      },
      ru: {
        question_of: `Вопрос ${currentQuestionIndex} из ${questions.length - 1}`,
        back: "Назад",
        next: "Далее",
        see_results: "Показать результаты",
      }
    };

    if (question && (key === 'text' || key === 'description' || key === 'low_label' || key === 'high_label')) {
      return question.translations[language][key] || question[key as keyof Question];
    }
    
    return translations[language][key] || key;
  };


  const currentQuestion: Question = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / (questions.length - 1)) * 100;
  const currentAnswer = answers[currentQuestion.id] ?? 50;

  const handleAnimation = (callback: () => void) => {
    if (animationsEnabled) {
      setIsAnimating(true);
      setTimeout(() => {
        callback();
        setIsAnimating(false);
      }, 150);
    } else {
      callback();
    }
  };

  const handleNext = () => {
    handleAnimation(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        const query = new URLSearchParams();
        Object.entries(answers).forEach(([key, value]) => {
          query.append(key, value.toString());
        });
        questions.forEach(q => {
          if (answers[q.id] === undefined) {
            query.append(q.id, '50');
          }
        });
        router.push(`/results?${query.toString()}`);
      }
    });
  };

  const handleBack = () => {
    handleAnimation(() => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    });
  };

  const handleSliderChange = (value: number[]) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: value[0],
    });
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-8">
      <div>
        <Progress value={progress} className="w-full" />
        <p className="text-sm text-muted-foreground mt-2 text-center">
          {t('question_of')}
        </p>
      </div>

      <Card
        className={cn(
          "transition-opacity duration-150",
          isAnimating ? "opacity-0" : "opacity-100"
        )}
      >
        <CardHeader>
          <CardTitle className="text-2xl font-headline">{t('text', currentQuestion)}</CardTitle>
          <CardDescription>{t('description', currentQuestion)}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Slider
            value={[currentAnswer]}
            onValueChange={handleSliderChange}
            min={0}
            max={100}
            step={1}
            aria-label={t('text', currentQuestion)}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{t('low_label', currentQuestion)}</span>
            <span>{t('high_label', currentQuestion)}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleBack} disabled={currentQuestionIndex === 0}>
            <ArrowLeft className="mr-2" />
            {t('back')}
          </Button>
          {currentQuestionIndex < questions.length - 1 ? (
            <Button onClick={handleNext}>
              {t('next')}
              <ArrowRight className="ml-2" />
            </Button>
          ) : (
            <Button onClick={handleNext}>
              {t('see_results')}
              <BarChart className="ml-2" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
