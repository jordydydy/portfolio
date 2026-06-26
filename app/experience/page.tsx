import type { Metadata } from "next"
import { ExperienceList } from "@/components/experience-list"

export const metadata: Metadata = {
  title: "experience | jordy",
  description: "Explore Jordy's professional journey, roles, and milestones.",
}

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-12 px-4 animate-in fade-in duration-300">
      <div className="space-y-3 font-mono">
        <h1 className="text-3xl font-light text-zinc-900 dark:text-white font-sans tracking-tight">experience</h1>
        <p className="text-xs text-zinc-400 dark:text-zinc-500 max-w-md">
          A log of professional roles, tech stacks, and team contributions.
        </p>
      </div>

      <ExperienceList />
    </div>
  )
}
