import { Skeleton } from "@/components/ui/skeleton"

export default function ContactLoading() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-12 px-4 font-mono">
      {/* Title section skeleton */}
      <div className="space-y-3">
        <Skeleton className="h-9 w-28 bg-zinc-200/50 dark:bg-zinc-900/50" />
        <Skeleton className="h-4 w-72 bg-zinc-200/50 dark:bg-zinc-900/50" />
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Info box skeleton */}
        <div className="md:col-span-2 rounded border border-zinc-200 dark:border-zinc-900 p-6 space-y-6 bg-zinc-100/10 dark:bg-zinc-950/10 h-64">
          <Skeleton className="h-4 w-20 bg-zinc-200/50 dark:bg-zinc-900/50" />
          <div className="space-y-4 pt-2">
            <div className="flex gap-3">
              <Skeleton className="h-8 w-8 bg-zinc-200/50 dark:bg-zinc-900/50" />
              <div className="space-y-1.5 flex-1">
                <Skeleton className="h-3 w-12 bg-zinc-200/50 dark:bg-zinc-900/50" />
                <Skeleton className="h-3 w-32 bg-zinc-200/50 dark:bg-zinc-900/50" />
              </div>
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-8 w-8 bg-zinc-200/50 dark:bg-zinc-900/50" />
              <div className="space-y-1.5 flex-1">
                <Skeleton className="h-3 w-16 bg-zinc-200/50 dark:bg-zinc-900/50" />
                <Skeleton className="h-3 w-24 bg-zinc-200/50 dark:bg-zinc-900/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Form skeleton */}
        <div className="md:col-span-3 rounded border border-zinc-200 dark:border-zinc-900 p-6 space-y-4 bg-zinc-100/10 dark:bg-zinc-950/10">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Skeleton className="h-3 w-12 bg-zinc-200/50 dark:bg-zinc-900/50" />
              <Skeleton className="h-9 w-full bg-zinc-200/50 dark:bg-zinc-900/50" />
            </div>
            <div className="space-y-1.5">
              <Skeleton className="h-3 w-12 bg-zinc-200/50 dark:bg-zinc-900/50" />
              <Skeleton className="h-9 w-full bg-zinc-200/50 dark:bg-zinc-900/50" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Skeleton className="h-3 w-16 bg-zinc-200/50 dark:bg-zinc-900/50" />
            <Skeleton className="h-9 w-full bg-zinc-200/50 dark:bg-zinc-900/50" />
          </div>
          <div className="space-y-1.5">
            <Skeleton className="h-3 w-16 bg-zinc-200/50 dark:bg-zinc-900/50" />
            <Skeleton className="h-20 w-full bg-zinc-200/50 dark:bg-zinc-900/50" />
          </div>
          <Skeleton className="h-9 w-full bg-zinc-200/50 dark:bg-zinc-900/50" />
        </div>
      </div>
    </div>
  )
}
