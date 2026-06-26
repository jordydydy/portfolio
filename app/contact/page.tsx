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
        <h1 className="text-3xl font-light text-zinc-900 dark:text-white font-sans tracking-tight">contact</h1>
        <p className="text-xs text-zinc-400 dark:text-zinc-500 max-w-md">
          Reach out directly or send a message via the inbox.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 font-mono">
        {/* Contact Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="rounded border border-zinc-200 dark:border-zinc-900 bg-zinc-100/30 dark:bg-zinc-950/20 p-6 space-y-6">
            <h2 className="text-xs font-semibold text-zinc-800 dark:text-zinc-100 uppercase tracking-wider flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-zinc-550 dark:text-zinc-400" />
              <span>channels</span>
            </h2>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-zinc-200 dark:border-zinc-900 bg-zinc-200/20 dark:bg-zinc-900/20 text-zinc-500 dark:text-zinc-400">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] uppercase tracking-wider text-zinc-400 dark:text-zinc-650 block">email</span>
                  <a href="mailto:jordy@example.com" className="text-xs text-zinc-705 dark:text-zinc-300 hover:text-zinc-950 hover:dark:text-zinc-100 transition-colors">
                    jordy@example.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-zinc-200 dark:border-zinc-900 bg-zinc-200/20 dark:bg-zinc-900/20 text-zinc-500 dark:text-zinc-400">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] uppercase tracking-wider text-zinc-400 dark:text-zinc-650 block">location</span>
                  <span className="text-xs text-zinc-700 dark:text-zinc-300">
                    jakarta, indonesia
                  </span>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-zinc-200 dark:bg-zinc-900" />

            <div className="space-y-3">
              <span className="text-[9px] uppercase tracking-wider text-zinc-450 dark:text-zinc-600 block">social index</span>
              <div className="flex gap-1.5">
                <a
                  id="contact-git"
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded border border-zinc-200 dark:border-zinc-900 bg-zinc-200/20 dark:bg-zinc-900/20 text-zinc-500 hover:text-zinc-900 hover:dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-800 transition-all"
                  title="GitHub"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  id="contact-linkedin"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded border border-zinc-200 dark:border-zinc-900 bg-zinc-200/20 dark:bg-zinc-900/20 text-zinc-500 hover:text-zinc-900 hover:dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-800 transition-all"
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
