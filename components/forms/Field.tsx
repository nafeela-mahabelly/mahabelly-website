import { ReactNode } from 'react'

const base =
  'w-full bg-cream-soft border border-ink/15 text-ink placeholder:text-charcoal-mute/70 font-sans text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-red transition-colors'

export function FieldWrap({ label, htmlFor, required, children }: { label: string; htmlFor: string; required?: boolean; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="font-sans text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
        {label} {required && <span className="text-red">*</span>}
      </label>
      {children}
    </div>
  )
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={base} />
}
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={base} />
}
export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={base} />
}
