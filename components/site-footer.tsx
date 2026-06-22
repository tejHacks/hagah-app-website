import Link from 'next/link'
import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <Image
              src="/hagah-icon.png"
              alt="Hagah app icon"
              width={36}
              height={36}
              className="rounded-lg ring-1 ring-border"
            />
            <span className="font-serif text-xl font-semibold text-primary">Hagah</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Meditate on the Word of God day and night. Speak life over yourself with daily
            scriptures and faith-filled declarations.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-muted-foreground hover:text-primary">
                  Download
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Support</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
          <p className="text-center text-xs text-muted-foreground">
            {'\u00A9'} {new Date().getFullYear()} Hagah. {'\u201C'}Speak Life Over Yourself.
            {'\u201D'}
          </p>
        </div>
      </div>
    </footer>
  )
}
