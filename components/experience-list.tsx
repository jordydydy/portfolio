"use client"

import * as React from "react"
import { Calendar, ChevronRight, ChevronDown } from "lucide-react"

type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    role: "IT Technical Consultant (Contract)",
    company: "PT. Indonesia Global Solusindo (ISGS)",
    period: "Feb 2026 - Present",
    description: "Provide system integrations consulting and code delivery. Main developer for conversational AI networks and RPA (Robotic Process Automation) modules.",
    highlights: [
      "Designed and coded a custom Python-based Omnichannel middleware connecting chatbots to WhatsApp, Instagram, and Email for Indonesian public campaigns.",
      "Engineered automated workflow actions and chatbot agents using Dify.ai.",
      "Built and maintained the official company profile website frontend and backend channels."
    ],
    skills: ["python", "dify.ai", "next.js", "tailwind", "websockets", "RPA"]
  },
  {
    role: "IT Technical Consultant (Internship)",
    company: "PT. Indonesia Global Solusindo (ISGS)",
    period: "Feb 2025 - Jan 2026",
    description: "On-site internship focusing on technical consultation workflows, API integrations, and database design support.",
    highlights: [
      "Collaborated on software architecture planning and systems integration pipelines.",
      "Utilized SQL databases to query and model client transaction records.",
      "Gained hands-on experience deploying cognitive APIs and Azure Cloud settings."
    ],
    skills: ["python", "sql", "microsoft azure", "REST API", "database design"]
  },
  {
    role: "Member (Seasonal)",
    company: "Bina Nusantara Computer Club (BNCC)",
    period: "Sep 2022 - Aug 2023",
    description: "Remote seasonal member of BINUS University's computer science club. Participated in community web development workshops and team assignments.",
    highlights: [
      "Attended engineering seminars on relational databases and modern web frameworks.",
      "Collaborated on shared project repositories using Git/GitHub code management.",
      "Fostered peer support for computer science programming concepts."
    ],
    skills: ["javascript", "database 101", "git", "web development"]
  }
]

export function ExperienceList() {
  const [expandedIndices, setExpandedIndices] = React.useState<number[]>([0]) // First item expanded by default

  const toggleExpand = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index))
    } else {
      setExpandedIndices([...expandedIndices, index])
    }
  }

  return (
    <div className="relative border-l-2 border-white/20 dark:border-white/10 ml-2 pl-6 space-y-10 py-1 font-mono">
      {experiences.map((exp, i) => {
        const isExpanded = expandedIndices.includes(i)

        return (
          <div key={i} className="relative group">
            {/* Timeline Circle */}
            <div className={`absolute -left-[32px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white dark:bg-zinc-950 border transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)] ${
              isExpanded 
                ? "border-primary bg-primary/20 scale-110 shadow-[0_0_8px_rgba(99,102,241,0.5)]" 
                : "border-white/40 dark:border-white/10 group-hover:border-primary/50 group-hover:scale-105"
            }`} />

            {/* Experience Card */}
            <div 
              onClick={() => toggleExpand(i)}
              className="liquid-glass liquid-glass-hover glass-glossy space-y-4 p-6 cursor-pointer select-none"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-zinc-950 dark:text-white group-hover:text-primary transition-colors tracking-tight">
                      {exp.role}
                    </h3>
                    {isExpanded ? (
                      <ChevronDown className="h-3.5 w-3.5 text-zinc-400" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
                    )}
                  </div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400">
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/25 dark:border-white/10 bg-white/20 dark:bg-white/5 px-2.5 py-0.5 text-[9px] text-zinc-650 dark:text-zinc-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]">
                  <Calendar className="h-3 w-3 text-primary" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {isExpanded && (
                <div className="space-y-4 pt-4 border-t border-white/10 dark:border-white/5 animate-in fade-in duration-250">
                  <p className="text-[11px] text-zinc-650 dark:text-zinc-350 font-sans leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-wider text-primary block font-bold">Deliverables //</span>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                          <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="font-sans text-zinc-650 dark:text-zinc-350 leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-0.5 rounded-full border border-white/20 dark:border-white/5 bg-white/25 dark:bg-white/5 text-[9px] text-zinc-650 dark:text-zinc-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
