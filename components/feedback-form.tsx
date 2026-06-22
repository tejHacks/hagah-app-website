'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { submitFeedback, type FeedbackState } from '@/app/contact/actions'

const types = [
  { value: 'feature', label: 'Feature Request' },
  { value: 'bug', label: 'Report a Bug' },
  { value: 'testimony', label: 'Share a Testimony' },
]

const initialState: FeedbackState = { ok: false, message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  )
}

export function FeedbackForm() {
  const [state, formAction] = useActionState(submitFeedback, initialState)
  const [type, setType] = useState('feature')
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!state.message) return
    if (state.ok) {
      toast.success(state.message)
      formRef.current?.reset()
      setType('feature')
    } else {
      toast.error(state.message)
    }
  }, [state])

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <input type="hidden" name="type" value={type} />

      <div className="space-y-3">
        <Label>What would you like to share?</Label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {types.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setType(t.value)}
              aria-pressed={type === t.value}
              className={
                'rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ' +
                (type === t.value
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/40')
              }
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us about your idea, the issue you found, or what God has done through Hagah..."
          required
        />
      </div>

      <SubmitButton />
    </form>
  )
}
