'use client'

import { useState } from 'react'
import { Check, Send } from 'lucide-react'
import { FieldWrap, Input, Textarea, Select } from './Field'
import { SITE } from '@/lib/site'

// NOTE FOR CLIENT: static form — composes a prefilled email to connect@mahabelly.com.
// Wire a real form endpoint when your backend is ready.

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const g = (k: string) => (f.get(k) as string) || '—'
    const subject = `Website enquiry — ${g('category')}`
    const body =
      `Name: ${g('name')}%0D%0APhone: ${g('phone')}%0D%0AEmail: ${g('email')}%0D%0ACategory: ${g('category')}%0D%0A%0D%0A${g('message')}`
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="bg-cream-soft border border-leaf/40 rounded-3xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-leaf/10 flex items-center justify-center mx-auto mb-4">
          <Check size={22} className="text-leaf" />
        </div>
        <h3 className="font-display text-2xl font-bold text-ink">Thanks for reaching out.</h3>
        <p className="text-charcoal-soft mt-2">Your email app should have opened with your message. We usually reply within one business day.</p>
        <button onClick={() => setSent(false)} className="btn-outline-ink mt-6">Send another message</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-cream-soft border border-ink/10 rounded-3xl p-6 md:p-8 space-y-5">
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
      <button type="submit" className="btn-red w-full sm:w-auto"><Send size={15} /> Send message</button>
    </form>
  )
}
