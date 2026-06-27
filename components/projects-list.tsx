"use client"

import * as React from "react"
import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/icons"

type Project = {
    title: string
    description: string
    tech: string[]
    github?: string
    demo?: string
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
        demo: "https://www.is-gs.com",
        label: "01",
        categories: ["frontend", "backend"]
    },
    {
        title: "omnichannel chatbot router",
        description: "Built custom Python backend middleware routing chatbot flows to messaging platforms (WhatsApp, Instagram, Email) for public relations campaigns of an Indonesian Governor.",
        tech: ["python", "websockets", "REST API", "chatbots"],
        github: "https://github.com/jordydydy/omnichannel",
        label: "02",
        categories: ["backend"]
    },
    {
        title: "dify RPA automation agent",
        description: "Configured intelligent robotic process automation (RPA) workflows and customer chatbot support agents utilizing Dify.ai node orchestrations.",
        tech: ["dify.ai", "RPA", "conversational AI", "automations"],
        label: "03",
        categories: ["backend", "infra"]
    },
    // {
    //     title: "academic database system",
    //     description: "A placeholder for a relational database project focused on advanced normalizations, transactional isolation, and query query optimizations.",
    //     tech: ["postgresql", "sql server", "database optimization"],
    //     label: "04",
    //     categories: ["backend"],
    //     isPlaceholder: true,
    //     statusLabel: "academic project"
    // },
    // {
    //     title: "data analytics workflow",
    //     description: "A placeholder representing automated data modeling workflows engineered for cleaning, aggregating, and graphing tabular records.",
    //     tech: ["python", "pandas", "numpy", "jupyter"],
    //     label: "05",
    //     categories: ["backend"],
    //     isPlaceholder: true,
    //     statusLabel: "certification project"
    // },
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
            <div className="flex flex-wrap gap-2.5 font-mono text-[10px]">
                {(["all", "frontend", "backend", "infra"] as FilterCategory[]).map((cat) => {
                    const isActive = filter === cat
                    return (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-3.5 py-1 rounded-full border cursor-pointer transition-all duration-250 ${isActive
                                    ? "btn-gel border-transparent text-white font-semibold"
                                    : "border-white/25 dark:border-white/10 bg-white/20 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-955 hover:dark:text-zinc-200 hover:bg-white/40 hover:dark:bg-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                                }`}
                        >
                            {cat}
                        </button>
                    )
                })}
            </div>

            {/* Projects Grid */}
            <div className="grid gap-6 md:grid-cols-2">
                {filteredProjects.map((project) => (
                    <div
                        key={project.title}
                        className="liquid-glass liquid-glass-hover glass-glossy group relative transition-all duration-300 flex flex-col justify-between font-mono overflow-hidden"
                    >
                        <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between border-b border-white/15 dark:border-white/5 pb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-zinc-455 dark:text-zinc-500">{project.label} {"//"}</span>
                                    <h3 className="text-sm font-bold text-zinc-955 dark:text-white group-hover:text-primary transition-colors tracking-tight">
                                        {project.title}
                                    </h3>
                                </div>
                                {project.isPlaceholder && (
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-medium bg-white/35 dark:bg-white/5 text-zinc-600 dark:text-zinc-450 border border-white/20 dark:border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]">
                                        <span>{project.statusLabel}</span>
                                    </span>
                                )}
                            </div>

                            <p className="text-[11px] text-zinc-650 dark:text-zinc-400 leading-relaxed font-sans min-h-12.5">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5">
                                {project.tech.map((t, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-0.5 rounded-full border border-white/20 dark:border-white/5 bg-white/25 dark:bg-white/5 text-[9px] text-zinc-650 dark:text-zinc-400 group-hover:border-white/30 dark:group-hover:border-white/10 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {(project.github || project.demo) && (
                            <div className="border-t border-white/15 dark:border-white/5 bg-white/15 dark:bg-zinc-950/20 p-4 px-6 flex items-center justify-between text-xs">
                                {project.github ? (
                                    <a
                                        id={`project-git-${project.title.replace(/\s+/g, '-')}`}
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-[10px] text-zinc-550 dark:text-zinc-500 hover:text-primary transition-colors"
                                    >
                                        <GithubIcon className="h-3 w-3 text-zinc-455 group-hover:text-primary" />
                                        <span>[github]</span>
                                    </a>
                                ) : (
                                    <div />
                                )}
                                {project.demo && (
                                    <a
                                        id={`project-live-${project.title.replace(/\s+/g, '-')}`}
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-[10px] text-zinc-650 dark:text-zinc-400 hover:text-primary transition-colors font-semibold"
                                    >
                                        <span>[live demo]</span>
                                        <ArrowUpRight className="h-3 w-3 text-primary" />
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
