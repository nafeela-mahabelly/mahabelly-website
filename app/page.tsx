import Hero from '@/components/home/Hero'
import UtilityStrip from '@/components/home/UtilityStrip'
import StorySection from '@/components/home/StorySection'
import ExploreKerala from '@/components/home/ExploreKerala'
import Experiences from '@/components/home/Experiences'
import CanteenTeaser from '@/components/home/CanteenTeaser'
import HabibiTeaser from '@/components/home/HabibiTeaser'
import FeaturedOutlets from '@/components/home/FeaturedOutlets'
import Footprint from '@/components/home/Footprint'
import SadhyaSection from '@/components/home/SadhyaSection'
import CateringTeaser from '@/components/home/CateringTeaser'
import PressStrip from '@/components/home/PressStrip'
import Reviews from '@/components/Reviews'
import GoldTeaser from '@/components/home/GoldTeaser'
import Gallery from '@/components/home/Gallery'
import CTABand from '@/components/layout/CTABand'

export default function HomePage() {
  return (
    <>
      <Hero />
      <UtilityStrip />

      {/* Our Story (includes Our People) */}
      <StorySection />
      <ExploreKerala />
      <Experiences />

      {/* Our Brands — Mahabelly Canteen, Mahabelly Habibi + outlets/locations */}
      <CanteenTeaser />
      <HabibiTeaser />
      <FeaturedOutlets />
      <Footprint />

      {/* Mahabelly Gold */}
      <GoldTeaser />

      {/* Events */}
      <SadhyaSection />

      {/* Catering */}
      <CateringTeaser />

      {/* In the News — press + testimonials */}
      <PressStrip />
      <Reviews />

      {/* Gallery */}
      <Gallery />

      <CTABand />
    </>
  )
}
