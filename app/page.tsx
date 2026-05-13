import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import AboutSection from '@/components/AboutSection'
import SegmentsSection from '@/components/SegmentsSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SegmentsSection />
      <StatsBar />
    </main>
  )
}
