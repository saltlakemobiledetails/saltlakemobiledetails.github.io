import Contact from './components/Contact.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Pricing from './components/Pricing.jsx'
import ServiceArea from './components/ServiceArea.jsx'
import Services from './components/Services.jsx'
import TrustBar from './components/TrustBar.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Pricing />
        <HowItWorks />
        <ServiceArea />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
