import Hero from '@/components/home/Hero'
import UtilityStrip from '@/components/home/UtilityStrip'
import StorySection from '@/components/home/StorySection'
import ExploreKerala from '@/components/home/ExploreKerala'
import Experiences from '@/components/home/Experiences'
import CanteenTeaser from '@/components/home/CanteenTeaser'
import SadhyaSection from '@/components/home/SadhyaSection'
import Footprint from '@/components/home/Footprint'
import FeaturedOutlets from '@/components/home/FeaturedOutlets'
import PeopleTeaser from '@/components/home/PeopleTeaser'
import PressStrip from '@/components/home/PressStrip'
import Reviews from '@/components/Reviews'
import CateringTeaser from '@/components/home/CateringTeaser'
import Gallery from '@/components/home/Gallery'
import CTABand from '@/components/layout/CTABand'

export default function HomePage() {
  return (
    <>
      <Hero />
      <UtilityStrip />
      <StorySection />
      <ExploreKerala />
      <Experiences />
      <CanteenTeaser />
      <SadhyaSection />
      <Footprint />
      <FeaturedOutlets />
      <PeopleTeaser />
      <PressStrip />
      <Reviews />
      <CateringTeaser />
      <Gallery />
      <CTABand />
    </>
  )
}
