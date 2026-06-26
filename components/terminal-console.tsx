"use client"

import * as React from "react"
import { useTheme } from "@/components/theme-provider"

type HistoryItem = {
  type: "input" | "output" | "error"
  text: string
}

export function TerminalConsole() {
  const { setTheme } = useTheme()
  const [input, setInput] = React.useState("")
  const [history, setHistory] = React.useState<HistoryItem[]>([
    { type: "output", text: "djordy.dev [Version 1.0.0]" },
    { type: "output", text: "Type 'help' to view available directory commands." },
    { type: "output", text: "" },
  ])
  const bodyRef = React.useRef<HTMLDivElement>(null)

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase()
    const parts = trimmed.split(" ")
    const command = parts[0]
    const arg = parts[1]

    const newHistory = [...history, { type: "input" as const, text: `visitor@djordy.dev:~$ ${cmdStr}` }]

    if (!command) {
      setHistory(newHistory)
      return
    }

    switch (command) {
      case "help":
        newHistory.push({
          type: "output",
          text: "Available commands:\n  help        - Show this guide\n  about       - Display biography profile\n  projects    - List repositories\n  skills      - Show technical index categories\n  theme <t>   - Change theme: 'light' or 'dark'\n  clear       - Wipe terminal screen lines",
        })
        break
      case "about":
        newHistory.push({
          type: "output",
          text: "Djordy Fernando // IT Technical Consultant\n-----------------------------------------\nIT Technical Consultant at PT Indonesia Global Solusindo (ISGS) & Computer Science Student at BINUS University. Specializes in database systems, conversational AI agent integration, RPA automations, and backend pipelines. Lives in Jakarta, Indonesia.",
        })
        break
      case "projects":
        newHistory.push({
          type: "output",
          text: "Projects found in index:\n  - isgs-web   : PT Indonesia Global Solusindo corporate site\n  - omnichannel: Python-based chatbot integration middleware\n  - dify-rpa   : Intelligent workflow automation agents",
        })
        break
      case "skills":
        newHistory.push({
          type: "output",
          text: "Technical categories:\n  - Languages   : Python, SQL, TypeScript, HTML/CSS\n  - Databases   : PostgreSQL, Microsoft SQL Server, MongoDB, SQLite\n  - AI & RPA    : Dify.ai, Azure AI, pandas, numpy\n  - Frameworks  : React, Next.js, Node.js, Express",
        })
        break
      case "theme":
        if (arg === "light" || arg === "dark") {
          setTheme(arg)
          newHistory.push({ type: "output", text: `Theme successfully set to ${arg}.` })
        } else {
          newHistory.push({ type: "error", text: "Error: Invalid theme argument. Use 'theme light' or 'theme dark'." })
        }
        break
      case "clear":
        setHistory([])
        setInput("")
        return
      default:
        newHistory.push({
          type: "error",
          text: `Command not found: '${command}'. Type 'help' for directories index.`,
        })
    }

    setHistory(newHistory)
    setInput("")
  }

  React.useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [history])

  return (
    <div className="rounded border border-zinc-200 dark:border-zinc-900 bg-zinc-100/40 dark:bg-zinc-950/40 font-mono text-[11px] overflow-hidden shadow-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-200 dark:border-zinc-900 bg-zinc-200/20 dark:bg-zinc-950/50">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
        </div>
        <span className="text-[10px] text-zinc-400 dark:text-zinc-500">guest@djordy: ~</span>
        <div className="w-10" />
      </div>

      {/* Terminal Body */}
      <div 
        ref={bodyRef}
        className="p-4 h-56 overflow-y-auto space-y-2 text-zinc-700 dark:text-zinc-305 bg-white/40 dark:bg-black/20"
      >
        {history.map((item, i) => (
          <div key={i} className="whitespace-pre-wrap leading-relaxed">
            {item.type === "input" && (
              <span className="text-zinc-900 dark:text-zinc-100 font-semibold">{item.text}</span>
            )}
            {item.type === "output" && (
              <span className="text-zinc-500 dark:text-zinc-400">{item.text}</span>
            )}
            {item.type === "error" && (
              <span className="text-red-500/80 dark:text-red-400/70">{item.text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Input Prompter */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleCommand(input)
        }}
        className="flex items-center gap-2 px-4 py-2 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-200/10 dark:bg-zinc-950/20"
      >
        <span className="text-zinc-900 dark:text-zinc-205 font-semibold shrink-0">visitor@djordy.dev:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent text-zinc-900 dark:text-zinc-100 outline-none placeholder:text-zinc-400"
          placeholder="type help..."
          autoComplete="off"
          autoCapitalize="off"
        />
      </form>
    </div>
  )
}
