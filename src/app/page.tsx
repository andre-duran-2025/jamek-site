import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Benefits from '@/components/sections/Benefits'
import ServicesPreview from '@/components/sections/ServicesPreview'
import SoftwareHighlight from '@/components/sections/SoftwareHighlight'
import CasesPreview from '@/components/sections/CasesPreview'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ServicesPreview />
        <SoftwareHighlight />
        <CasesPreview />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}