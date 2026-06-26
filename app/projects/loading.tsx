import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectsLoading() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-12 px-4 font-mono">
      {/* Title section skeleton */}
      <div className="space-y-3">
        <Skeleton className="h-9 w-32 bg-zinc-200/50 dark:bg-zinc-900/50" />
        <Skeleton className="h-4 w-72 bg-zinc-200/50 dark:bg-zinc-900/50" />
      </div>

      {/* Grid skeleton */}
      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="border border-zinc-200 dark:border-zinc-900 rounded p-6 space-y-4 bg-zinc-100/10 dark:bg-zinc-950/10">
            <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-900/60 pb-3">
              <Skeleton className="h-4 w-24 bg-zinc-200/50 dark:bg-zinc-900/50" />
              <Skeleton className="h-3 w-6 bg-zinc-200/50 dark:bg-zinc-900/50" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-3 w-full bg-zinc-200/50 dark:bg-zinc-900/50" />
              <Skeleton className="h-3 w-5/6 bg-zinc-200/50 dark:bg-zinc-900/50" />
            </div>
            <div className="flex gap-1.5 pt-2">
              <Skeleton className="h-4 w-12 bg-zinc-200/50 dark:bg-zinc-900/50" />
              <Skeleton className="h-4 w-16 bg-zinc-200/50 dark:bg-zinc-900/50" />
              <Skeleton className="h-4 w-14 bg-zinc-200/50 dark:bg-zinc-900/50" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
