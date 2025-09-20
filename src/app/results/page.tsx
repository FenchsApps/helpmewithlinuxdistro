import { Suspense } from 'react';
import ResultsComponent from './ResultsComponent';
import { Skeleton } from '@/components/ui/skeleton';

function ResultsSkeleton() {
  return (
    <div className="flex flex-col gap-8">
       <Skeleton className="h-10 w-1/2 mx-auto" />
       <Skeleton className="h-64 w-full" />
       <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-lg" />
        ))}
       </div>
    </div>
  )
}

export default function ResultsPage() {
    return (
        <Suspense fallback={<ResultsSkeleton />}>
            <ResultsComponent />
        </Suspense>
    );
}
