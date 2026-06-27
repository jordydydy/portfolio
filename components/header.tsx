"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ChevronRight, Sun, Moon } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { useTheme } from "@/components/theme-provider"

export function Header() {
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const getPageTitle = () => {
        switch (pathname) {
            case "/":
                return "about"
            case "/projects":
                return "projects"
            case "/experience":
                return "experience"
            case "/contact":
                return "contact"
            default:
                return "portfolio"
        }
    }

    const toggleTheme = () => {
        // Alternates between dark and light, or handles system appropriately
        if (theme === "dark") {
            setTheme("light")
        } else if (theme === "light") {
            setTheme("system")
        } else {
            // If system, check what theme is active on root
            const isDark = document.documentElement.classList.contains("dark")
            setTheme(isDark ? "light" : "dark")
        }
    }

    return (
        <header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b border-white/20 dark:border-white/10 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-xl px-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <div className="flex items-center gap-3">
                <SidebarTrigger className="h-8 w-8 text-zinc-650 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-white/30 dark:hover:bg-white/10 transition-colors rounded-full" />
                <div className="h-3.5 w-[1px] bg-zinc-200/50 dark:bg-zinc-800/50" />
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-default">jordy.dev</span>
                    <ChevronRight className="h-3 w-3 text-zinc-400 dark:text-zinc-600" />
                    <span className="text-zinc-900 dark:text-zinc-100 font-semibold">{getPageTitle()}</span>
                </div>
            </div>

            <div className="flex items-center gap-2.5">
                <button
                    onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
                    className="hidden sm:inline-flex h-8 items-center gap-1.5 rounded-full border border-white/30 dark:border-white/10 bg-white/20 dark:bg-white/5 px-3.5 text-[10px] font-mono text-zinc-700 dark:text-zinc-300 hover:bg-white/40 dark:hover:bg-white/10 hover:border-white/45 dark:hover:border-white/20 hover:text-zinc-950 dark:hover:text-zinc-100 transition-all cursor-pointer shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                >
                    <span>search</span>
                    <kbd className="bg-white/45 dark:bg-zinc-900/60 px-1 py-0.5 rounded border border-white/40 dark:border-zinc-800 text-[8px] tracking-tight">⌘K</kbd>
                </button>

                {mounted && (
                    <button
                        id="theme-toggle"
                        onClick={toggleTheme}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 dark:border-white/10 bg-white/20 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:bg-white/40 dark:hover:bg-white/10 hover:text-zinc-950 dark:hover:text-zinc-100 transition-all cursor-pointer shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)]"
                        title={`Current: ${theme}. Click to change.`}
                    >
                        {theme === "dark" ? (
                            <Sun className="h-3.5 w-3.5" />
                        ) : theme === "light" ? (
                            <Moon className="h-3.5 w-3.5" />
                        ) : (
                            // System theme icon
                            <div className="relative flex items-center justify-center">
                                <Sun className="h-3.5 w-3.5 scale-100 dark:scale-0 transition-transform duration-200" />
                                <Moon className="h-3.5 w-3.5 absolute scale-0 dark:scale-100 transition-transform duration-200" />
                            </div>
                        )}
                    </button>
                )}

                <a
                    id="header-git"
                    href="https://github.com/jordydydy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 items-center justify-center gap-2 rounded-full border border-white/30 dark:border-white/10 bg-white/20 dark:bg-white/5 px-4 text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:bg-white/40 dark:hover:bg-white/10 hover:text-zinc-950 dark:hover:text-zinc-100 transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)]"
                >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>github</span>
                </a>
            </div>
        </header>
    )
}
