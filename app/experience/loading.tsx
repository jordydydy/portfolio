import { Skeleton } from "@/components/ui/skeleton"

export default function ExperienceLoading() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-12 px-4 font-mono">
      {/* Title section skeleton */}
      <div className="space-y-3">
        <Skeleton className="h-9 w-36 bg-zinc-200/50 dark:bg-zinc-900/50" />
        <Skeleton className="h-4 w-80 bg-zinc-200/50 dark:bg-zinc-900/50" />
      </div>

      {/* Timeline skeleton */}
      <div className="relative border-l border-zinc-200 dark:border-zinc-900 ml-2 pl-6 space-y-10 py-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative space-y-4 rounded border border-zinc-200 dark:border-zinc-900 p-6 bg-zinc-100/10 dark:bg-zinc-950/10">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] top-7 h-2 w-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            
            <div className="flex justify-between gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-40 bg-zinc-200/50 dark:bg-zinc-900/50" />
                <Skeleton className="h-3 w-20 bg-zinc-200/50 dark:bg-zinc-900/50" />
              </div>
              <Skeleton className="h-4.5 w-24 bg-zinc-200/50 dark:bg-zinc-900/50" />
            </div>
            
            <div className="space-y-2 pt-2">
              <Skeleton className="h-3 w-full bg-zinc-200/50 dark:bg-zinc-900/50" />
              <Skeleton className="h-3.5 w-5/6 bg-zinc-200/50 dark:bg-zinc-900/50" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
