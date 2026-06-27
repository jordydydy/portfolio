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
    <div className="liquid-glass glass-glossy overflow-hidden font-mono text-[11px] hover:border-white/35 dark:hover:border-white/15 transition-all duration-300">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/20 dark:border-white/10 bg-white/35 dark:bg-zinc-900/40">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_6px_rgba(255,95,86,0.5)] cursor-pointer hover:opacity-80 transition-opacity" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_6px_rgba(255,189,46,0.5)] cursor-pointer hover:opacity-80 transition-opacity" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_6px_rgba(39,201,63,0.5)] cursor-pointer hover:opacity-80 transition-opacity" />
        </div>
        <span className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400">guest@djordy: ~</span>
        <div className="w-12" />
      </div>

      {/* Terminal Body */}
      <div 
        ref={bodyRef}
        className="p-4 h-56 overflow-y-auto space-y-2 text-zinc-800 dark:text-zinc-200 bg-white/10 dark:bg-black/10 backdrop-blur-md"
      >
        {history.map((item, i) => (
          <div key={i} className="whitespace-pre-wrap leading-relaxed">
            {item.type === "input" && (
              <span className="text-zinc-950 dark:text-white font-bold">{item.text}</span>
            )}
            {item.type === "output" && (
              <span className="text-zinc-600 dark:text-zinc-350">{item.text}</span>
            )}
            {item.type === "error" && (
              <span className="text-red-500 font-semibold">{item.text}</span>
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
        className="flex items-center gap-2 px-4 py-2 border-t border-white/20 dark:border-white/10 bg-white/25 dark:bg-zinc-900/30"
      >
        <span className="text-primary font-bold shrink-0">visitor@djordy.dev:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent text-zinc-950 dark:text-white outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-650"
          placeholder="type help..."
          autoComplete="off"
          autoCapitalize="off"
        />
      </form>
    </div>
  )
}
