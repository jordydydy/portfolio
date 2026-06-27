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
        <Sidebar className="border-r border-sidebar-border bg-sidebar transition-all duration-200">
            <SidebarHeader className="border-b border-sidebar-border p-4 bg-transparent">
                <div className="flex items-center gap-3">
                    <div className="relative h-7 w-7 overflow-hidden rounded-full border border-sidebar-border bg-background">
                        <Image
                            src={avatarImg}
                            alt="Djordy Fernando Avatar"
                            width={28}
                            height={28}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-mono font-semibold tracking-tight text-sidebar-foreground">djordy.dev</span>
                        <span className="text-[10px] font-mono text-muted-foreground">it consultant</span>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="p-2 bg-transparent">
                <SidebarGroup>
                    <SidebarGroupLabel className="px-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">
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
                                                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold border border-sidebar-border/50"
                                                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                                                }`}
                                        >
                                            <Link href={item.url}>
                                                <item.icon className={`h-3.5 w-3.5 ${isActive ? "text-sidebar-accent-foreground" : "text-muted-foreground/80"}`} />
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

            <SidebarFooter className="border-t border-sidebar-border p-3 bg-transparent">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                        <a
                            id="sidebar-git"
                            href="https://github.com/jordydydy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors shadow-xs"
                            title="GitHub"
                        >
                            <GithubIcon className="h-3.5 w-3.5" />
                        </a>
                        <a
                            id="sidebar-linkedin"
                            href="https://linkedin.com/in/djordyfernando"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors shadow-xs"
                            title="LinkedIn"
                        >
                            <LinkedinIcon className="h-3.5 w-3.5" />
                        </a>
                    </div>
                    <p className="text-[9px] font-mono text-muted-foreground/60 pl-1">
                        © {new Date().getFullYear()} djordy
                    </p>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
