import Link from 'next/link'
import { Home, BookOpen, MapPin } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center bg-ink text-cream">
      <div className="container-x text-center max-w-xl mx-auto py-24">
        <p className="font-display text-8xl font-black text-red-light">404</p>
        <h1 className="font-display text-3xl md:text-4xl font-bold mt-4">This table isn’t set.</h1>
        <p className="text-cream/65 mt-3">
          The page you’re looking for has moved or never existed. Let’s get you back to something delicious.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link href="/" className="btn-red"><Home size={15} /> Home</Link>
          <Link href="/menu" className="btn-outline"><BookOpen size={15} /> Menu</Link>
          <Link href="/locations" className="btn-outline"><MapPin size={15} /> Locations</Link>
        </div>
      </div>
    </section>
  )
}
