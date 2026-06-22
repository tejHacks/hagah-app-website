import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Sparkles, HeartHandshake, Sunrise, Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScreenshotGallery } from '@/components/screenshot-gallery'

const features = [
  {
    icon: BookOpen,
    title: 'Daily Scripture',
    desc: 'Receive a hand-picked verse each day to meditate on, morning and night.',
  },
  {
    icon: Sparkles,
    title: 'Faith Declarations',
    desc: 'Speak life with positive, Scripture-rooted declarations that renew your mind.',
  },
  {
    icon: Sunrise,
    title: 'Guided Meditation',
    desc: 'Quiet your spirit with gentle, focused sessions on the Word of God.',
  },
  {
    icon: HeartHandshake,
    title: 'Daily Strength',
    desc: 'Build a rhythm of devotion that empowers you for whatever the day holds.',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src="/hagah-hero-bg.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center md:px-6 md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
            <Sparkles className="size-3.5" />
            Meditation {'&'} Declaration App
          </span>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl font-semibold leading-tight text-balance text-foreground md:text-7xl">
            Speak Life Over Yourself
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Hagah delivers daily scriptures and positive declarations so you can meditate on the
            Word of God and walk in strength every day.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2" render={<Link href="/download" />}>
              <Download className="size-4" />
              Download APK
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              render={<Link href="/about" />}
            >
              Our Vision
              <ArrowRight className="size-4" />
            </Button>
          </div>
          <p className="mt-12 max-w-md font-serif text-xl italic leading-relaxed text-primary/90">
            {'\u201C'}This Book of the Law shall not depart from your mouth, but you shall meditate
            on it day and night.{'\u201D'}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Joshua 1:8</p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center md:px-6">
        <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Our Mission</h2>
        <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
          The Hebrew word <span className="font-serif italic text-primary">hagah</span> means to
          meditate, to murmur, to ponder the Word of God until it takes root in your heart. Hagah
          was built to help you do exactly that &mdash; turning Scripture into a daily habit that
          strengthens, encourages, and empowers your faith.
        </p>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="mx-auto max-w-5xl px-4 pb-24 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            A quiet place for your soul
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Beautifully simple. Designed to keep your focus on the Word, not the screen.
          </p>
        </div>
        <div className="mt-12">
          <ScreenshotGallery />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-6">
        <div className="rounded-3xl border border-border bg-card px-6 py-14 text-center md:px-12">
          <h2 className="font-serif text-3xl font-semibold text-balance text-foreground md:text-4xl">
            Begin your daily walk with Hagah
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Download the app today and start meditating on the promises of God.
          </p>
          <Button size="lg" className="mt-8 gap-2" render={<Link href="/download" />}>
            <Download className="size-4" />
            Download APK
          </Button>
        </div>
      </section>
    </main>
  )
}
