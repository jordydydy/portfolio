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
        <header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b border-border bg-background/85 backdrop-blur-md px-6">
            <div className="flex items-center gap-3">
                <SidebarTrigger className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors rounded-full" />
                <div className="h-3.5 w-[1px] bg-border" />
                <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                    <span className="hover:text-foreground cursor-default">jordy.dev</span>
                    <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
                    <span className="text-foreground font-semibold">{getPageTitle()}</span>
                </div>
            </div>

            <div className="flex items-center gap-2.5">
                <button
                    onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
                    className="hidden sm:inline-flex h-8 items-center gap-1.5 rounded-full border border-border bg-secondary px-3.5 text-[10px] font-mono text-muted-foreground hover:bg-muted hover:border-foreground/30 hover:text-foreground transition-all cursor-pointer"
                >
                    <span>search</span>
                    <kbd className="bg-background px-1 py-0.5 rounded border border-border text-[8px] tracking-tight">⌘K</kbd>
                </button>

                {mounted && (
                    <button
                        id="theme-toggle"
                        onClick={toggleTheme}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground transition-all cursor-pointer"
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
                    className="inline-flex h-8 items-center justify-center gap-2 rounded-full border border-border bg-secondary px-4 text-xs font-mono text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200"
                >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>github</span>
                </a>
            </div>
        </header>
    )
}
