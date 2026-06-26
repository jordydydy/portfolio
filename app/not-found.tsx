import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 font-mono text-center px-4 animate-in fade-in duration-300">
      <h1 className="text-4xl font-light text-zinc-900 dark:text-white font-sans tracking-tight">404 / page not found</h1>
      <p className="text-xs text-zinc-500 max-w-xs">
        The requested path does not exist on this directory index.
      </p>
      <Link 
        href="/"
        className="inline-flex h-9 items-center justify-center rounded bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200 px-4 text-xs font-medium transition-colors"
      >
        return home
      </Link>
    </div>
  )
}
