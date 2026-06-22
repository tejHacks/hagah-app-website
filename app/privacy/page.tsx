import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Hagah',
  description: 'How Hagah collects, uses, and protects your information.',
}

const sections = [
  {
    title: 'Information We Collect',
    body: [
      'Hagah is designed to respect your privacy. You can use the core features of the app — reading daily scriptures, meditating, and viewing declarations — without creating an account.',
      'If you choose to contact us or submit feedback, we collect the name, email address, and message you provide so that we can respond. If you create an optional account, we store your email and basic profile information to sync your preferences across devices.',
    ],
  },
  {
    title: 'How We Use Your Information',
    body: [
      'We use the information you provide to operate and improve the app, respond to your feedback and support requests, and deliver the daily content you have chosen to receive.',
      'We do not sell your personal information, and we do not use it for advertising.',
    ],
  },
  {
    title: 'Data Storage and Security',
    body: [
      'Any personal information is stored using industry-standard security measures, including encryption in transit. We limit access to your data to what is necessary to operate the service.',
      'No method of transmission or storage is completely secure, but we work to protect your information using reasonable safeguards.',
    ],
  },
  {
    title: 'Permissions',
    body: [
      'Hagah may request limited device permissions (such as notifications) so it can deliver daily scripture reminders. You can disable these permissions at any time in your device settings.',
    ],
  },
  {
    title: 'Third-Party Services',
    body: [
      'We may use trusted third-party services for analytics and infrastructure. These providers only process data as needed to deliver their services and are bound by their own privacy commitments.',
    ],
  },
  {
    title: 'Children\u2019s Privacy',
    body: [
      'Hagah is intended for a general audience. We do not knowingly collect personal information from children without appropriate consent.',
    ],
  },
  {
    title: 'Your Rights',
    body: [
      'You may request access to, correction of, or deletion of your personal information at any time by contacting us through the Feedback page.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. When we do, we will revise the date below and, where appropriate, notify you within the app.',
    ],
  },
  {
    title: 'Contact Us',
    body: [
      'If you have any questions about this Privacy Policy or how your information is handled, please reach out through the Contact & Feedback page.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
      <header>
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Privacy Policy</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-balance text-foreground md:text-5xl">
          Your privacy matters to us
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: January 2025</p>
      </header>

      <div className="mt-12 space-y-10">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-serif text-2xl font-semibold text-foreground">{s.title}</h2>
            <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
