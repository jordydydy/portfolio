"use client"

import * as React from "react"
import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/icons"

type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
  label: string
  categories: ("frontend" | "backend" | "infra")[]
  isPlaceholder?: boolean
  statusLabel?: string
}

const projects: Project[] = [
  {
    title: "isgs corporate web portal",
    description: "Developed the complete front-end and back-end Company Profile portal for PT Indonesia Global Solusindo. Implemented responsive layout architectures and structural forms.",
    tech: ["next.js", "react", "tailwind", "node.js"],
    github: "https://github.com",
    demo: "https://www.is-gs.com",
    label: "01",
    categories: ["frontend", "backend"]
  },
  {
    title: "omnichannel chatbot router",
    description: "Built custom Python backend middleware routing chatbot flows to messaging platforms (WhatsApp, Instagram, Email) for public relations campaigns of an Indonesian Governor.",
    tech: ["python", "websockets", "REST API", "chatbots"],
    github: "https://github.com",
    demo: "https://github.com",
    label: "02",
    categories: ["backend"]
  },
  {
    title: "dify RPA automation agent",
    description: "Configured intelligent robotic process automation (RPA) workflows and customer chatbot support agents utilizing Dify.ai node orchestrations.",
    tech: ["dify.ai", "RPA", "conversational AI", "automations"],
    github: "https://github.com",
    demo: "https://github.com",
    label: "03",
    categories: ["backend", "infra"]
  },
  {
    title: "academic database system",
    description: "A placeholder for a relational database project focused on advanced normalizations, transactional isolation, and query query optimizations.",
    tech: ["postgresql", "sql server", "database optimization"],
    github: "https://github.com",
    demo: "https://github.com",
    label: "04",
    categories: ["backend"],
    isPlaceholder: true,
    statusLabel: "academic project"
  },
  {
    title: "data analytics workflow",
    description: "A placeholder representing automated data modeling workflows engineered for cleaning, aggregating, and graphing tabular records.",
    tech: ["python", "pandas", "numpy", "jupyter"],
    github: "https://github.com",
    demo: "https://github.com",
    label: "05",
    categories: ["backend"],
    isPlaceholder: true,
    statusLabel: "certification project"
  },
]

type FilterCategory = "all" | "frontend" | "backend" | "infra"

export function ProjectsList() {
  const [filter, setFilter] = React.useState<FilterCategory>("all")

  const filteredProjects = React.useMemo(() => {
    if (filter === "all") return projects
    return projects.filter(p => p.categories.includes(filter))
  }, [filter])

  return (
    <div className="space-y-8">
      {/* Category Filter Controls */}
      <div className="flex flex-wrap gap-2 font-mono text-[10px]">
        {(["all", "frontend", "backend", "infra"] as FilterCategory[]).map((cat) => {
          const isActive = filter === cat
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                isActive
                  ? "border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-950 font-bold"
                  : "border-zinc-200 dark:border-zinc-900 bg-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 hover:dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900/50"
              }`}
            >
              [{cat}]
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <div 
            key={project.title} 
            className="group relative rounded border border-zinc-200 dark:border-zinc-900 bg-zinc-100/30 dark:bg-zinc-950/20 hover:border-zinc-300 dark:hover:border-zinc-800 hover:bg-zinc-200/20 dark:hover:bg-zinc-900/10 transition-all duration-200 flex flex-col justify-between font-mono"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-250 dark:border-zinc-900/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-600">{project.label} {"//"}</span>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-950 group-hover:dark:text-white transition-colors">
                    {project.title}
                  </h3>
                </div>
                {project.isPlaceholder && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-medium bg-zinc-200/50 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
                    <span>{project.statusLabel}</span>
                  </span>
                )}
              </div>

              <p className="text-[11px] text-zinc-550 dark:text-zinc-500 leading-relaxed font-sans min-h-[50px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.tech.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-900 bg-zinc-200/20 dark:bg-zinc-900/20 text-[9px] text-zinc-650 dark:text-zinc-400 group-hover:border-zinc-300 dark:group-hover:border-zinc-800 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-zinc-200 dark:border-zinc-900/60 bg-zinc-200/30 dark:bg-zinc-950/40 p-4 px-6 flex items-center justify-between text-xs">
              <a
                id={`project-git-${project.title.replace(/\s+/g, '-')}`}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 hover:dark:text-zinc-300 transition-colors"
              >
                <GithubIcon className="h-3 w-3" />
                <span>[github]</span>
              </a>
              <a
                id={`project-live-${project.title.replace(/\s+/g, '-')}`}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] text-zinc-600 dark:text-zinc-450 hover:text-zinc-900 hover:dark:text-zinc-250 transition-colors"
              >
                <span>[live demo]</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
