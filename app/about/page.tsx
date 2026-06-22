import type { Metadata } from 'next'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About — Hagah',
  description:
    'The vision behind Hagah: helping believers meditate on the Word of God and draw daily strength from Scripture.',
}

const values = [
  {
    title: 'Rooted in Scripture',
    desc: 'Every verse and declaration is drawn directly from the Word of God, so what you meditate on is always true.',
  },
  {
    title: 'Built for daily rhythm',
    desc: 'Hagah is designed to fit into your morning and evening, making meditation a sustainable habit rather than a burden.',
  },
  {
    title: 'Empowering, not performative',
    desc: 'We believe declarations should build faith and identity, helping you agree with what God already says about you.',
  },
]

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
      <header className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Our Vision</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-balance text-foreground md:text-5xl">
          Meditate on the Word, day and night
        </h1>
      </header>

      <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>
          Hagah was born from a simple conviction: the Word of God is meant to be lived with, not
          just read once and set aside. In Hebrew,{' '}
          <span className="font-serif italic text-primary">hagah</span> describes a deep, continual
          meditation &mdash; to murmur, to ponder, to chew on Scripture until it shapes the way we
          think and speak.
        </p>
        <p>
          In a world full of noise, it is easy to let our minds be filled with everything except
          the truth. Hagah exists to make it effortless to return to the Word each day, to dwell on
          it, and to speak it over your own life. We pair daily scriptures with positive,
          faith-filled declarations so that what you believe and what you confess line up with the
          promises of God.
        </p>
        <p>
          Our prayer is that Hagah becomes a quiet companion in your walk of faith &mdash;
          strengthening you in seasons of difficulty, encouraging you when you feel weak, and
          reminding you daily of who God says you are.
        </p>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-1">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-serif text-xl font-semibold text-foreground">{v.title}</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-card px-6 py-12 text-center">
        <p className="font-serif text-2xl italic leading-relaxed text-primary/90">
          {'\u201C'}Blessed is the one whose delight is in the law of the Lord, and who meditates on
          it day and night.{'\u201D'}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">Psalm 1:1-2</p>
        <Button size="lg" className="mt-8 gap-2" render={<Link href="/download" />}>
          <Download className="size-4" />
          Download Hagah
        </Button>
      </div>
    </main>
  )
}
