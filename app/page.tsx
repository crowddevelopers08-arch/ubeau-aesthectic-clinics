import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import Approach from '@/components/Approach'
import Protocols from '@/components/Protocols'
import WhyChoose from '@/components/WhyChoose'
import TechGrid from '@/components/TechGrid'
import Results from '@/components/Results'
import VideoCarousel from '@/components/VideoCarousel'
import Journey from '@/components/Journey'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
         <Results />
        <VideoCarousel />
        <Approach />
        <Protocols />
        <WhyChoose />
        <TechGrid />
       
        <Journey />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
