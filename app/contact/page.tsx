import type { Metadata } from 'next'
import { Lightbulb, Bug, Heart } from 'lucide-react'
import { FeedbackForm } from '@/components/feedback-form'

export const metadata: Metadata = {
  title: 'Contact & Feedback — Hagah',
  description:
    'Share feature requests, report bugs, or send a testimony. We would love to hear how Hagah is impacting your walk of faith.',
}

const cards = [
  {
    icon: Lightbulb,
    title: 'Feature Requests',
    desc: 'Have an idea that would make Hagah better? We are listening.',
  },
  {
    icon: Bug,
    title: 'Report a Bug',
    desc: 'Something not working right? Let us know so we can fix it.',
  },
  {
    icon: Heart,
    title: 'Share a Testimony',
    desc: 'Tell us how the Word has spoken to you through Hagah.',
  },
]

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
      <header className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Contact {'&'} Feedback
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-balance text-foreground md:text-5xl">
          We would love to hear from you
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
          Your feedback helps us build a better Hagah. Send us a feature request, report a bug, or
          share what God is doing in your life.
        </p>
      </header>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-card p-5 text-center">
            <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <c.icon className="size-5" />
            </div>
            <h2 className="mt-4 font-serif text-lg font-semibold text-foreground">{c.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-10">
        <FeedbackForm />
      </div>
    </main>
  )
}
