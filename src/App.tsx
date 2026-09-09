import './App.css'
import Navbar from './component/Navbar'
import LatestInsights from './component/LatestInsights'
import Hero from './component/Hero'
import Recognition from './component/Recognition'
import OurSolutions from './component/OurSolutions'
import Clients from './component/Clients'
import Footer from './component/Footer'
import LocalPage from './component/LocalPage'
import { AIUseCases, WhyIzeno, CustomerSuccess, Contact } from './component/BusinessProgress'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  if (window.location.pathname !== '/') return <LocalPage />
  return (
    <>
    <a href="#main-content" className="fixed top-2 left-2 z-100 -translate-y-24 rounded bg-white px-4 py-3 text-[#084d90] focus:translate-y-0">Skip to content</a>
      <Navbar />
    <main id="main-content" className="app-shell">
      <Hero />
      <Clients />
      <OurSolutions />
      <AIUseCases />
      <WhyIzeno />
      <CustomerSuccess />
      <Recognition />
      <LatestInsights />
      <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App
