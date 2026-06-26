"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
    Home,
    FolderGit2,
    Briefcase,
    Mail
} from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const navItems = [
    {
        title: "about",
        url: "/",
        icon: Home,
    },
    {
        title: "projects",
        url: "/projects",
        icon: FolderGit2,
    },
    {
        title: "experience",
        url: "/experience",
        icon: Briefcase,
    },
    {
        title: "contact",
        url: "/contact",
        icon: Mail,
    },
]

export function AppSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar className="border-r border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-black transition-colors duration-200">
            <SidebarHeader className="border-b border-zinc-200 dark:border-zinc-900 p-4 bg-zinc-50 dark:bg-black">
                <div className="flex items-center gap-3">
                    <div className="relative h-7 w-7 overflow-hidden rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                        <Image
                            src="/avatar.jpg"
                            alt="Djordy Fernando Avatar"
                            width={28}
                            height={28}
                            className="h-full w-full object-cover grayscale contrast-110"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-mono font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">djordy.dev</span>
                        <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">it consultant</span>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="p-2 bg-zinc-50 dark:bg-black">
                <SidebarGroup>
                    <SidebarGroupLabel className="px-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                        index
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="mt-1.5">
                        <SidebarMenu>
                            {navItems.map((item) => {
                                const isActive = pathname === item.url
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                            className={`relative flex items-center gap-2.5 rounded px-2.5 py-1.5 text-xs font-mono transition-all ${isActive
                                                    ? "bg-zinc-200 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-100 font-semibold"
                                                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 hover:dark:text-zinc-200 hover:bg-zinc-200/40 hover:dark:bg-zinc-900/40"
                                                }`}
                                        >
                                            <Link href={item.url}>
                                                <item.icon className={`h-3.5 w-3.5 ${isActive ? "text-zinc-950 dark:text-zinc-100" : "text-zinc-400 dark:text-zinc-650"}`} />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-zinc-200 dark:border-zinc-900 p-3 bg-zinc-50 dark:bg-black">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <a
                            id="sidebar-git"
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-7 w-7 items-center justify-center rounded text-zinc-500 hover:bg-zinc-200/50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                            title="GitHub"
                        >
                            <GithubIcon className="h-3.5 w-3.5" />
                        </a>
                        <a
                            id="sidebar-linkedin"
                            href="https://linkedin.com/in/djordyfernando"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-7 w-7 items-center justify-center rounded text-zinc-500 hover:bg-zinc-200/50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                            title="LinkedIn"
                        >
                            <LinkedinIcon className="h-3.5 w-3.5" />
                        </a>
                    </div>
                    <p className="text-[9px] font-mono text-zinc-400 dark:text-zinc-600 pl-1">
                        © {new Date().getFullYear()} djordy
                    </p>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
