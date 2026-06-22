'use server'

export type FeedbackState = {
  ok: boolean
  message: string
}

export async function submitFeedback(
  _prev: FeedbackState,
  formData: FormData,
): Promise<FeedbackState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const type = String(formData.get('type') ?? 'feedback').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { ok: false, message: 'Please fill in your name, email, and message.' }
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailValid) {
    return { ok: false, message: 'Please enter a valid email address.' }
  }

  // Submission received. Connect a database or email service to persist or forward this.
  console.log('[v0] New Hagah feedback:', { name, email, type, message })

  return {
    ok: true,
    message: 'Thank you! Your message has been received. We appreciate you sharing with us.',
  }
}
