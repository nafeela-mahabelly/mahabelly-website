'use client'

import { useState } from 'react'
import { Check, Send, AlertCircle } from 'lucide-react'
import { FieldWrap, Input, Textarea, Select } from './Field'
import { SITE } from '@/lib/site'

// Submits via Web3Forms — delivers straight to connect@mahabelly.com on every
// device (no email-app dependency). The access key is public by design.
const WEB3FORMS_KEY = 'c0b4016a-ae1d-41a4-8334-93aacdbce0c2'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError(null)

    const fd = new FormData(e.currentTarget)
    fd.append('subject', `Website enquiry - ${(fd.get('category') as string) || 'General'}`)
    fd.append('from_name', 'Mahabelly Website')

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Could not send right now. Please try again, or email us directly.')
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="bg-cream-soft border border-leaf/40 rounded-3xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-leaf/10 flex items-center justify-center mx-auto mb-4">
          <Check size={22} className="text-leaf" />
        </div>
        <h3 className="font-display text-2xl font-bold text-ink">Thanks for reaching out.</h3>
        <p className="text-charcoal-soft mt-2">Your message has been sent. We usually reply within one business day.</p>
        <button onClick={() => setSent(false)} className="btn-outline-ink mt-6">Send another message</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-cream-soft border border-ink/10 rounded-3xl p-6 md:p-8 space-y-5">
      {/* Web3Forms config + spam honeypot */}
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <FieldWrap label="What is this about?" htmlFor="category" required>
        <Select id="category" name="category" required defaultValue="">
          <option value="" disabled>Select a category…</option>
          <option>General enquiry</option>
          <option>Reservation</option>
          <option>Catering</option>
          <option>Feedback</option>
          <option>Press / Media</option>
          <option>Careers</option>
        </Select>
      </FieldWrap>
      <div className="grid sm:grid-cols-2 gap-5">
        <FieldWrap label="Name" htmlFor="cname" required><Input id="cname" name="name" required autoComplete="name" /></FieldWrap>
        <FieldWrap label="Phone" htmlFor="cphone"><Input id="cphone" name="phone" type="tel" autoComplete="tel" /></FieldWrap>
      </div>
      <FieldWrap label="Email" htmlFor="cemail" required><Input id="cemail" name="email" type="email" required autoComplete="email" /></FieldWrap>
      <FieldWrap label="Message" htmlFor="cmessage" required><Textarea id="cmessage" name="message" rows={4} required /></FieldWrap>

      {error && (
        <p className="flex items-start gap-2 text-sm text-red">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{error} You can also email us at{' '}
            <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.
          </span>
        </p>
      )}

      <button type="submit" disabled={sending} className="btn-red w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
        <Send size={15} /> {sending ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
