import Navigation          from '@/components/Navigation'
import Hero                from '@/components/Hero'
import BrandStory          from '@/components/BrandStory'
import Menu               from '@/components/Menu'
import SignatureExperiences from '@/components/SignatureExperiences'
import WhyMahabelly        from '@/components/WhyMahabelly'
import Locations           from '@/components/Locations'
import OurBrands           from '@/components/OurBrands'
import Gallery             from '@/components/Gallery'
import InstagramFeed       from '@/components/InstagramFeed'
import Testimonials        from '@/components/Testimonials'
import CallToAction        from '@/components/CallToAction'
import Footer              from '@/components/Footer'
import WhatsAppButton      from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <BrandStory />
      <Menu />
      <SignatureExperiences />
      <WhyMahabelly />
      <Locations />
      <OurBrands />
      <Gallery />
      <InstagramFeed />
      <Testimonials />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
