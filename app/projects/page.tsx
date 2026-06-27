import type { Metadata } from "next"
import { ProjectsList } from "@/components/projects-list"

export const metadata: Metadata = {
  title: "projects | jordy",
  description: "Explore Jordy's technical projects, repositories, and products.",
}

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-12 px-4 animate-in fade-in duration-300">
      <div className="space-y-3 font-mono">
        <h1 className="text-3xl font-extralight text-zinc-950 dark:text-white font-sans tracking-tight">projects</h1>
        <p className="text-xs text-zinc-550 dark:text-zinc-400 max-w-md">
          A list of backend platforms, frontend systems, and developer tooling.
        </p>
      </div>

      <ProjectsList />
    </div>
  )
}
