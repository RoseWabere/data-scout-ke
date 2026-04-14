import Hero from '@/components/sections/Hero'
import Solutions from '@/components/sections/Solutions'
import CaseStudies from '@/components/sections/CaseStudies'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import TrustBar from '@/components/TrustBar'
import Testimonials from '@/components/Testimonials'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Solutions />
      <CaseStudies />
      <Testimonials />
      <About />
      <Contact />
      {/* <StickyCTA /> */}
    </>
  )
}
