import Link from "next/link"
import { ArrowRight, Terminal, Award, ExternalLink } from "lucide-react"
import { TerminalConsole } from "@/components/terminal-console"

export default function Home() {
    return (
        <div className="max-w-4xl mx-auto space-y-16 py-12 px-4 animate-in fade-in duration-300">
            {/* Hero Section */}
            <section className="space-y-6">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/25 dark:border-white/10 bg-white/25 dark:bg-white/5 px-3 py-0.5 text-[10px] font-mono text-zinc-600 dark:text-zinc-350 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                        <span>active consultant</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extralight tracking-tight text-zinc-950 dark:text-white font-sans leading-none">
                        Djordy Fernando <span className="text-primary font-mono text-xl md:text-3xl font-medium block md:inline md:ml-2">/ it consultant</span>
                    </h1>

                    <p className="text-sm md:text-base text-zinc-650 dark:text-zinc-300 max-w-2xl font-mono leading-relaxed">
                        IT Technical Consultant at PT Indonesia Global Solusindo (ISGS) & Computer Science Student at BINUS University. Specializing in database systems, conversational AI agent integration, RPA automations, and backend pipelines.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                        id="cta-projects"
                        href="/projects"
                        className="inline-flex h-9 items-center justify-center gap-1.5 px-5 text-xs font-mono font-medium transition-all btn-gel"
                    >
                        <span>view projects</span>
                        <ArrowRight className="h-3 w-3" />
                    </Link>
                    <Link
                        id="cta-contact"
                        href="/contact"
                        className="inline-flex h-9 items-center justify-center gap-1.5 px-5 text-xs font-mono font-medium transition-all btn-gel-graphite"
                    >
                        <span>get in touch</span>
                    </Link>
                </div>
            </section>

            {/* Terminal Emulator */}
            <section className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-450 dark:text-zinc-500 pl-1">interactive directory shell</h2>
                <TerminalConsole />
            </section>

            {/* Overview stats */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono liquid-glass glass-glossy p-6">
                {[
                    { id: "01", number: "BINUS", label: "computer science major" },
                    { id: "02", number: "ISGS", label: "technical consultant role" },
                    { id: "03", number: "AI / RPA", label: "mastery in dify agent tools" },
                    { id: "04", number: "5", label: "industry certifications" },
                ].map((stat, i) => (
                    <div key={i} className="space-y-1 border-l-2 border-primary/40 pl-4">
                        <span className="text-[10px] text-zinc-450 dark:text-zinc-550 block">{stat.id} {"//"}</span>
                        <span className="text-lg font-bold text-zinc-950 dark:text-white block tracking-tight">{stat.number}</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block leading-tight">{stat.label}</span>
                    </div>
                ))}
            </section>

            {/* Core Domains */}
            <section className="space-y-6">
                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-450 dark:text-zinc-500 pl-1">core disciplines</h2>

                <div className="grid md:grid-cols-3 gap-6 font-mono">
                    {[
                        {
                            title: "01 / DATABASE DESIGN",
                            desc: "Primary academic focus at BINUS. Designing highly normalized relational schemas, index layouts, and optimizing SQL query execution."
                        },
                        {
                            title: "02 / CONVERSATIONAL AI",
                            desc: "Orchestrating intelligent chatbots and RPA workflows using Dify tools and custom Python-based omnichannel middleware."
                        },
                        {
                            title: "03 / WEB DEVELOPMENT",
                            desc: "Building clean company portals and administrative dashboards spanning frontend rendering layers and backend service routes."
                        }
                    ].map((domain, i) => (
                        <div key={i} className="liquid-glass liquid-glass-hover glass-glossy p-6 space-y-3">
                            <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">{domain.title}</h3>
                            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">{domain.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certifications index */}
            <section className="space-y-4 font-mono">
                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-450 dark:text-zinc-500 pl-1">licenses & certifications</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { name: "Azure AI Fundamentals", issuer: "Microsoft", url: "https://www.credly.com/badges/02f6e662-4a0e-4ffc-a099-7ffde3ed7b98/linked_in_profile" },
                        { name: "Microsoft Azure AI Fundamentals (AI-900T00-A)", issuer: "GreatNusa", url: "https://drive.google.com/file/d/1YglmARIDG_vDeBX5hmaTv4nxGDyFigA7/view" },
                        { name: "SQL (Basic)", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/f2ed51def221" },
                        { name: "Data Analysis with Python", issuer: "Cognitive Class", url: "https://courses.cognitiveclass.ai/certificates/86b8d41147ce4be3a0dc9b55e3a1849f" },
                        { name: "SQL and Relational Databases 101", issuer: "Cognitive Class", url: "https://courses.cognitiveclass.ai/certificates/0299a191eadf49daaa26d0828c4533f8" },
                    ].map((cert, i) => (
                        <a
                            key={i}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="liquid-glass liquid-glass-hover flex items-center justify-between p-5 cursor-pointer group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 dark:border-white/5 bg-white/20 dark:bg-white/5 text-primary group-hover:bg-primary/20 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]">
                                    <Award className="h-4.5 w-4.5" />
                                </div>
                                <div className="space-y-0.5">
                                    <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 line-clamp-1 tracking-tight">{cert.name}</h4>
                                    <p className="text-[9px] text-zinc-450 dark:text-zinc-500 uppercase tracking-wider">{cert.issuer}</p>
                                </div>
                            </div>
                            <ExternalLink className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-550 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    ))}
                </div>
            </section>

            {/* Tech Stack List */}
            <section className="space-y-4 font-mono">
                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-440 dark:text-zinc-500 pl-1">technical index</h2>

                <div className="liquid-glass p-6 divide-y divide-zinc-200/50 dark:divide-zinc-800/40">
                    {[
                        { cat: "languages", items: ["python", "sql", "typescript", "javascript", "html/css"] },
                        { cat: "databases", items: ["postgresql", "microsoft sql server", "mysql", "sqlite", "splunk", "redis"] },
                        { cat: "ai & automation", items: ["dify.ai (RPA & Chatbots)", "azure AI", "pandas", "numpy"] },
                        { cat: "frameworks", items: ["react", "next.js", "node.js", "express", "tailwind"] }
                    ].map((row, i) => (
                        <div key={i} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <span className="text-[10px] text-zinc-450 dark:text-zinc-500 uppercase tracking-wider">{row.cat}</span>
                            <div className="flex flex-wrap gap-2">
                                {row.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-white/25 dark:border-white/10 bg-white/20 dark:bg-white/5 text-[10px] text-zinc-700 dark:text-zinc-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                                    >
                                        <Terminal className="h-2.5 w-2.5 text-primary" />
                                        <span>{item}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}