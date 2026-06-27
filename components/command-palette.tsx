"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Search, Home, FolderGit2, Briefcase, Mail, Sun, Moon, Laptop } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function CommandPalette() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const router = useRouter()
  const { setTheme } = useTheme()

  const items = React.useMemo(() => {
    const list = [
      { id: "nav-about", title: "Go to About", category: "Navigation", icon: Home, action: () => router.push("/") },
      { id: "nav-projects", title: "Go to Projects", category: "Navigation", icon: FolderGit2, action: () => router.push("/projects") },
      { id: "nav-experience", title: "Go to Experience", category: "Navigation", icon: Briefcase, action: () => router.push("/experience") },
      { id: "nav-contact", title: "Go to Contact", category: "Navigation", icon: Mail, action: () => router.push("/contact") },
      { id: "theme-light", title: "Set Theme: Light", category: "Theme", icon: Sun, action: () => setTheme("light") },
      { id: "theme-dark", title: "Set Theme: Dark", category: "Theme", icon: Moon, action: () => setTheme("dark") },
      { id: "theme-system", title: "Set Theme: System", category: "Theme", icon: Laptop, action: () => setTheme("system") },
    ]
    return list.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
  }, [search, router, setTheme])

  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener("open-command-palette", handleOpen)
    return () => window.removeEventListener("open-command-palette", handleOpen)
  }, [])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(open => !open)
      }
      if (!isOpen) return

      if (e.key === "Escape") {
        setIsOpen(false)
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex(i => (i + 1) % items.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex(i => (i - 1 + items.length) % items.length)
      } else if (e.key === "Enter") {
        e.preventDefault()
        if (items[selectedIndex]) {
          items[selectedIndex].action()
          setIsOpen(false)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, items, selectedIndex])

  // Reset index when search changes
  React.useEffect(() => {
    setSelectedIndex(0)
  }, [search])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 font-mono">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-xs" 
        onClick={() => setIsOpen(false)} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg overflow-hidden rounded border border-border bg-popover shadow-2xl flex flex-col max-h-[400px]">
        {/* Input area */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground/60 shrink-0" />
          <input
            type="text"
            placeholder="Search commands... (Esc to exit)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground/60"
            autoFocus
          />
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-1.5 space-y-1">
          {items.length === 0 ? (
            <div className="text-[11px] text-muted-foreground py-6 text-center">
              No commands found.
            </div>
          ) : (
            items.map((item, index) => {
              const isSelected = index === selectedIndex
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.action()
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center justify-between gap-4 rounded px-3 py-2 text-left text-xs transition-colors cursor-pointer ${
                    isSelected 
                      ? "bg-secondary text-foreground font-semibold" 
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <item.icon className="h-3.5 w-3.5 text-muted-foreground/60" />
                    <span>{item.title}</span>
                  </div>
                  <span className="text-[9px] text-muted-foreground uppercase tracking-widest bg-secondary px-1.5 py-0.5 rounded border border-border">
                    {item.category}
                  </span>
                </button>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
