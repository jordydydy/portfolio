"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import avatarImg from "@/public/avatar.jpg"
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
        <Sidebar className="border-r border-white/25 dark:border-white/10 bg-white/25 dark:bg-zinc-950/25 backdrop-blur-xl transition-all duration-200">
            <SidebarHeader className="border-b border-white/20 dark:border-white/10 p-4 bg-transparent">
                <div className="flex items-center gap-3">
                    <div className="relative h-7 w-7 overflow-hidden rounded-full border border-white/30 dark:border-white/10 bg-white/30 dark:bg-zinc-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]">
                        <Image
                            src={avatarImg}
                            alt="Djordy Fernando Avatar"
                            width={28}
                            height={28}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-mono font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">djordy.dev</span>
                        <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">it consultant</span>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="p-2 bg-transparent">
                <SidebarGroup>
                    <SidebarGroupLabel className="px-2 text-[10px] font-mono uppercase tracking-widest text-zinc-450 dark:text-zinc-500">
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
                                            className={`relative flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-mono transition-all duration-200 ${isActive
                                                    ? "bg-white/40 dark:bg-white/10 text-primary font-semibold shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] border border-white/20 dark:border-white/5"
                                                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 hover:dark:text-zinc-200 hover:bg-white/25 hover:dark:bg-white/5"
                                                }`}
                                        >
                                            <Link href={item.url}>
                                                <item.icon className={`h-3.5 w-3.5 ${isActive ? "text-primary" : "text-zinc-450 dark:text-zinc-550"}`} />
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

            <SidebarFooter className="border-t border-white/20 dark:border-white/10 p-3 bg-transparent">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                        <a
                            id="sidebar-git"
                            href="https://github.com/jordydydy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-500 hover:bg-white/40 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors shadow-xs"
                            title="GitHub"
                        >
                            <GithubIcon className="h-3.5 w-3.5" />
                        </a>
                        <a
                            id="sidebar-linkedin"
                            href="https://linkedin.com/in/djordyfernando"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-500 hover:bg-white/40 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors shadow-xs"
                            title="LinkedIn"
                        >
                            <LinkedinIcon className="h-3.5 w-3.5" />
                        </a>
                    </div>
                    <p className="text-[9px] font-mono text-zinc-450 dark:text-zinc-500 pl-1">
                        © {new Date().getFullYear()} djordy
                    </p>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
