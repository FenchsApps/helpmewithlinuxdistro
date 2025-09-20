
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

type Contributor = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
};

function ContributorsSkeleton() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                    <Skeleton className="h-20 w-20 rounded-full" />
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-3 w-20" />
                </div>
            ))}
        </div>
    )
}

export default function CreditsPage() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getContributors() {
      try {
        setIsLoading(true);
        setError(null);
        // Fetch contributors from the GitHub API.
        const res = await fetch('https://api.github.com/repos/FenchsApps/helpmewithlinuxdistro/contributors');

        if (!res.ok) {
          throw new Error(`Failed to fetch contributors: ${res.status} ${res.statusText}`);
        }
        
        const data = await res.json();
        setContributors(data);
      } catch (error: any) {
        // Catch any other errors (e.g., network issues).
        console.error('Error fetching contributors from GitHub API:', error);
        setError(error.message || 'An unknown error occurred.');
      } finally {
        setIsLoading(false);
      }
    }

    getContributors();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Credits</h1>
        <p className="text-lg text-muted-foreground mt-2">
          This project is made possible by the following amazing contributors.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contributors</CardTitle>
          <CardDescription>A huge thank you to everyone who has contributed to the project!</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <ContributorsSkeleton />
          ) : error || contributors.length === 0 ? (
            <div className="text-center text-muted-foreground py-8 flex flex-col items-center justify-center">
              <Github className="mx-auto h-12 w-12 mb-4" />
              <p className="font-semibold">Could not load contributor information.</p>
              <p className="text-sm mt-1">
                There might be an issue with the GitHub API. Please check the{' '}
                <Link href="https://github.com/FenchsApps/helpmewithlinuxdistro/contributors" className="underline hover:text-primary" target='_blank'>
                  GitHub repository
                </Link> directly.
              </p>
              {error && <p className="text-xs text-destructive mt-2">{error}</p>}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {contributors.map((contributor) => (
                <Link key={contributor.id} href={contributor.html_url} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="flex flex-col items-center gap-2 text-center p-2 rounded-lg transition-colors hover:bg-accent">
                    <Avatar className="h-20 w-20 transition-transform group-hover:scale-105">
                      <AvatarImage src={contributor.avatar_url} alt={contributor.login} />
                      <AvatarFallback>{contributor.login.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <p className="font-medium text-sm group-hover:text-primary">{contributor.login}</p>
                    <p className="text-xs text-muted-foreground">{contributor.contributions} contributions</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
