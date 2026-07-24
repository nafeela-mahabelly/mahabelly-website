'use client'

import { useState } from 'react'
import { Check, MessageCircle } from 'lucide-react'
import { FieldWrap, Input, Textarea, Select } from './Field'
import { SITE, LINKS, waLink } from '@/lib/site'

// NOTE FOR CLIENT: this static form composes a prefilled WhatsApp / email
// message from the entered details. Replace `LINKS.cateringEnquiry` and/or
// wire a real form endpoint when your backend is ready.

export default function CateringForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const g = (k: string) => (f.get(k) as string) || '—'
    const msg =
      `New catering enquiry from the website:%0A%0A` +
      `Name: ${g('name')}%0A` +
      `Phone/WhatsApp: ${g('phone')}%0A` +
      `Email: ${g('email')}%0A` +
      `Event date: ${g('date')}%0A` +
      `Event type: ${g('type')}%0A` +
      `Location: ${g('location')}%0A` +
      `Guests: ${g('guests')}%0A` +
      `Preference: ${g('pref')}%0A` +
      `Service style: ${g('service')}%0A` +
      `Budget p.p.: ${g('budget')}%0A` +
      `Notes: ${g('notes')}`
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  if (sent) {
    return (
      <div className="bg-cream-soft border border-leaf/40 rounded-3xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-leaf/10 flex items-center justify-center mx-auto mb-4">
          <Check size={22} className="text-leaf" />
        </div>
        <h3 className="font-display text-2xl font-bold text-ink">Thank you.</h3>
        <p className="text-charcoal-soft mt-2">Our catering team will contact you within one business day.</p>
        <p className="text-xs text-charcoal-mute mt-4">
          A WhatsApp message opened with your details — send it to reach us instantly, or call{' '}
          <a href={`tel:${SITE.phoneRaw}`} className="text-red hover:underline">{SITE.phone}</a>.
        </p>
        <button onClick={() => setSent(false)} className="btn-outline-ink mt-6">Send another enquiry</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-cream-soft border border-ink/10 rounded-3xl p-6 md:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <FieldWrap label="Name" htmlFor="name" required><Input id="name" name="name" required autoComplete="name" /></FieldWrap>
        <FieldWrap label="Phone / WhatsApp" htmlFor="phone" required><Input id="phone" name="phone" type="tel" required autoComplete="tel" /></FieldWrap>
        <FieldWrap label="Email" htmlFor="email"><Input id="email" name="email" type="email" autoComplete="email" /></FieldWrap>
        <FieldWrap label="Event date" htmlFor="date"><Input id="date" name="date" type="date" /></FieldWrap>
        <FieldWrap label="Event type" htmlFor="type">
          <Select id="type" name="type" defaultValue="">
            <option value="" disabled>Select…</option>
            <option>Home gathering</option>
            <option>Corporate meal</option>
            <option>Wedding</option>
            <option>Festive Sadhya</option>
            <option>Live counters</option>
            <option>Large event</option>
          </Select>
        </FieldWrap>
        <FieldWrap label="Event location" htmlFor="location"><Input id="location" name="location" placeholder="Area / city" /></FieldWrap>
        <FieldWrap label="Expected guests" htmlFor="guests"><Input id="guests" name="guests" type="number" min="1" placeholder="e.g. 50" /></FieldWrap>
        <FieldWrap label="Preference" htmlFor="pref">
          <Select id="pref" name="pref" defaultValue="">
            <option value="" disabled>Select…</option>
            <option>Vegetarian</option>
            <option>Non-vegetarian</option>
            <option>Both</option>
          </Select>
        </FieldWrap>
        <FieldWrap label="Service style" htmlFor="service">
          <Select id="service" name="service" defaultValue="">
            <option value="" disabled>Select…</option>
            <option>Buffet</option>
            <option>Banana-leaf Sadhya</option>
            <option>Live counters</option>
            <option>Packed / delivery</option>
            <option>Not sure yet</option>
          </Select>
        </FieldWrap>
        <FieldWrap label="Budget per person" htmlFor="budget"><Input id="budget" name="budget" placeholder="Approx. ₹" /></FieldWrap>
      </div>
      <FieldWrap label="Additional requirements" htmlFor="notes"><Textarea id="notes" name="notes" rows={3} /></FieldWrap>

      <label className="flex items-start gap-2.5 text-sm text-charcoal-soft cursor-pointer">
        <input type="checkbox" required className="mt-1 accent-red" />
        <span>I consent to being contacted by Mahabelly about this enquiry.</span>
      </label>

      <button type="submit" className="btn-red w-full sm:w-auto">
        <MessageCircle size={15} /> Send catering enquiry
      </button>
      <p className="text-xs text-charcoal-mute">We typically respond within one business day.</p>
    </form>
  )
}
