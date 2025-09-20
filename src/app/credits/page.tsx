import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import { Github } from 'lucide-react';

// Force dynamic rendering to ensure the data is fetched on every request.
export const dynamic = 'force-dynamic';

type Contributor = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
};

async function getContributors(): Promise<Contributor[]> {
  try {
    // Fetch contributors from the GitHub API.
    // 'no-cache' ensures we always get the latest data.
    const res = await fetch('https://api.github.com/repos/FenchsApps/helpmewithlinuxdistro/contributors', {
      cache: 'no-cache' 
    });

    if (!res.ok) {
      // Log the error for debugging and return an empty array.
      console.error(`Failed to fetch contributors: ${res.status} ${res.statusText}`);
      return [];
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    // Catch any other errors (e.g., network issues).
    console.error('Error fetching contributors from GitHub API:', error);
    return [];
  }
}

export default async function CreditsPage() {
  const contributors = await getContributors();

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
          {contributors && contributors.length > 0 ? (
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
          ) : (
            <div className="text-center text-muted-foreground py-8 flex flex-col items-center justify-center">
              <Github className="mx-auto h-12 w-12 mb-4" />
              <p className="font-semibold">Could not load contributor information.</p>
              <p className="text-sm mt-1">
                There might be an issue with the GitHub API. Please check the{' '}
                <Link href="https://github.com/FenchsApps/helpmewithlinuxdistro/contributors" className="underline hover:text-primary" target='_blank'>
                  GitHub repository
                </Link> directly.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
