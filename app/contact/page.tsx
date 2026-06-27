import type { Metadata } from "next"
import { Mail, MapPin, MessageSquare } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
    title: "contact | jordy",
    description: "Get in touch with Jordy. Send a message, find contact details, and connect on social platforms.",
}

export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 py-12 px-4 animate-in fade-in duration-300">
            <div className="space-y-3 font-mono">
                <h1 className="text-3xl font-extralight text-zinc-950 dark:text-white font-sans tracking-tight">contact</h1>
                <p className="text-xs text-zinc-550 dark:text-zinc-405 max-w-md">
                    Reach out directly or send a message via the inbox.
                </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8 font-mono">
                {/* Contact Info */}
                <div className="md:col-span-2 space-y-6">
                    <div className="liquid-glass glass-glossy p-6 space-y-6">
                        <h2 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-primary" />
                            <span>channels</span>
                        </h2>

                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 dark:border-white/5 bg-white/20 dark:bg-white/5 text-primary shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]">
                                    <Mail className="h-3.5 w-3.5" />
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[9px] uppercase tracking-wider text-zinc-450 dark:text-zinc-500 block">email</span>
                                    <a href="mailto:djordyfernando07@gmail.com" className="text-xs text-zinc-700 dark:text-zinc-300 hover:text-primary transition-colors">
                                        djordyfernando07@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 dark:border-white/5 bg-white/20 dark:bg-white/5 text-primary shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]">
                                    <MapPin className="h-3.5 w-3.5" />
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[9px] uppercase tracking-wider text-zinc-450 dark:text-zinc-500 block">location</span>
                                    <span className="text-xs text-zinc-700 dark:text-zinc-300">
                                        jakarta, indonesia
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="h-[1px] bg-white/10 dark:bg-white/5" />

                        <div className="space-y-3">
                            <span className="text-[9px] uppercase tracking-wider text-zinc-450 dark:text-zinc-500 block">social index</span>
                            <div className="flex gap-2">
                                <a
                                    id="contact-git"
                                    href="https://github.com/jordydydy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 dark:border-white/5 bg-white/20 dark:bg-white/5 text-zinc-500 hover:text-primary hover:border-primary/55 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                                    title="GitHub"
                                >
                                    <GithubIcon className="h-3.5 w-3.5" />
                                </a>
                                <a
                                    id="contact-linkedin"
                                    href="https://www.linkedin.com/in/djordyfernando/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 dark:border-white/5 bg-white/20 dark:bg-white/5 text-zinc-500 hover:text-primary hover:border-primary/55 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                                    title="LinkedIn"
                                >
                                    <LinkedinIcon className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="md:col-span-3">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
