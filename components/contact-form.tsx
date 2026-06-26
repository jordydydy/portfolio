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
      <div className="rounded border border-zinc-200 dark:border-zinc-900 bg-zinc-100/30 dark:bg-zinc-950/20 p-8 space-y-5 text-center flex flex-col items-center justify-center animate-in fade-in duration-300">
        <CheckCircle2 className="h-8 w-8 text-emerald-500" />
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">message dispatched</h3>
          <p className="text-[11px] text-zinc-500 max-w-xs leading-relaxed">
            Your inquiry was received. I will get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="inline-flex h-8 items-center gap-1.5 rounded border border-zinc-200 dark:border-zinc-800 bg-transparent px-3 text-xs font-mono font-medium text-zinc-550 dark:text-zinc-400 hover:text-zinc-900 hover:dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors cursor-pointer"
        >
          <RefreshCw className="h-3 w-3" />
          <span>send another</span>
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded border border-zinc-200 dark:border-zinc-900 bg-zinc-100/30 dark:bg-zinc-950/20 p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="text-[10px] text-zinc-455 dark:text-zinc-505 uppercase tracking-wider">
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
            className="bg-white dark:bg-black/50 border-zinc-200 dark:border-zinc-900 rounded h-9 px-3 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus-visible:border-zinc-400 dark:focus-visible:border-zinc-700 focus-visible:ring-0 disabled:opacity-50"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="text-[10px] text-zinc-455 dark:text-zinc-505 uppercase tracking-wider">
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
            className="bg-white dark:bg-black/50 border-zinc-200 dark:border-zinc-900 rounded h-9 px-3 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus-visible:border-zinc-400 dark:focus-visible:border-zinc-700 focus-visible:ring-0 disabled:opacity-50"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-subject" className="text-[10px] text-zinc-455 dark:text-zinc-505 uppercase tracking-wider">
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
          className="bg-white dark:bg-black/50 border-zinc-200 dark:border-zinc-900 rounded h-9 px-3 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus-visible:border-zinc-400 dark:focus-visible:border-zinc-700 focus-visible:ring-0 disabled:opacity-50"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-[10px] text-zinc-455 dark:text-zinc-505 uppercase tracking-wider">
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
          className="min-h-[100px] w-full rounded border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black/50 px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus-visible:border-zinc-400 dark:focus-visible:border-zinc-700 focus-visible:ring-0 outline-none transition-colors disabled:opacity-50"
        />
      </div>

      <button
        type="submit"
        id="contact-submit"
        disabled={status === "submitting"}
        className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200 px-4 text-xs font-mono font-medium transition-colors cursor-pointer disabled:opacity-50"
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
