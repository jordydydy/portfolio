"use client"

import * as React from "react"
import { Send, CheckCircle2, RefreshCw } from "lucide-react"
import { Input } from "@/components/ui/input"

export function ContactForm() {
    const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle")
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("submitting")

        // Mock an API request delay (1.5 seconds)
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
    }

    if (status === "success") {
        return (
            <div className="liquid-glass glass-glossy p-8 space-y-5 text-center flex flex-col items-center justify-center animate-in fade-in duration-300">
                <CheckCircle2 className="h-8 w-8 text-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <div className="space-y-2">
                    <h3 className="text-sm font-bold text-zinc-950 dark:text-white tracking-tight">message dispatched</h3>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400 max-w-xs leading-relaxed font-sans">
                        Your inquiry was received. I will get back to you within 24 hours.
                    </p>
                </div>
                <button
                    onClick={() => setStatus("idle")}
                    className="inline-flex h-8 items-center gap-1.5 px-4 text-xs font-mono font-medium transition-all btn-gel-graphite"
                >
                    <RefreshCw className="h-3 w-3" />
                    <span>send another</span>
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="liquid-glass glass-glossy p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-[10px] text-zinc-450 dark:text-zinc-500 uppercase tracking-wider font-semibold">
                        name
                    </label>
                    <Input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="john doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === "submitting"}
                        className="bg-white/10 dark:bg-black/35 border-white/20 dark:border-white/10 rounded-lg h-9 px-3 text-xs text-zinc-955 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus-visible:border-primary/50 dark:focus-visible:border-primary/50 focus-visible:ring-1 focus-visible:ring-primary/30 disabled:opacity-50 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] transition-all"
                    />
                </div>
                <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-[10px] text-zinc-450 dark:text-zinc-500 uppercase tracking-wider font-semibold">
                        email
                    </label>
                    <Input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === "submitting"}
                        className="bg-white/10 dark:bg-black/35 border-white/20 dark:border-white/10 rounded-lg h-9 px-3 text-xs text-zinc-955 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus-visible:border-primary/50 dark:focus-visible:border-primary/50 focus-visible:ring-1 focus-visible:ring-primary/30 disabled:opacity-50 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] transition-all"
                    />
                </div>
            </div>

            <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-[10px] text-zinc-450 dark:text-zinc-500 uppercase tracking-wider font-semibold">
                    subject
                </label>
                <Input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="project inquiry / roles"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={status === "submitting"}
                    className="bg-white/10 dark:bg-black/35 border-white/20 dark:border-white/10 rounded-lg h-9 px-3 text-xs text-zinc-955 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus-visible:border-primary/50 dark:focus-visible:border-primary/50 focus-visible:ring-1 focus-visible:ring-primary/30 disabled:opacity-50 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] transition-all"
                />
            </div>

            <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-[10px] text-zinc-450 dark:text-zinc-500 uppercase tracking-wider font-semibold">
                    message
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="hello jordy, i'd like to discuss..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === "submitting"}
                    className="min-h-[100px] w-full rounded-lg border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/35 px-3 py-2 text-xs text-zinc-955 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-650 focus-visible:border-primary/50 dark:focus-visible:border-primary/50 focus-visible:ring-1 focus-visible:ring-primary/30 outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] transition-all disabled:opacity-50"
                />
            </div>

            <button
                type="submit"
                id="contact-submit"
                disabled={status === "submitting"}
                className="inline-flex h-9 w-full items-center justify-center gap-1.5 px-4 text-xs font-mono font-medium transition-all btn-gel disabled:opacity-50"
            >
                {status === "submitting" ? (
                    <>
                        <span>sending...</span>
                        <RefreshCw className="h-3 w-3 animate-spin" />
                    </>
                ) : (
                    <>
                        <span>send message</span>
                        <Send className="h-3 w-3" />
                    </>
                )}
            </button>
        </form>
    )
}
