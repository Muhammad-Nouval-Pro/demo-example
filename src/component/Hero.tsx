import HomepageLink from './HomepageLink'
import heroLarge from '../assets/images/optimized/hero-nav-1920.webp'
import heroSmall from '../assets/images/optimized/hero-nav-960.webp'

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#edf4fb] pt-32 pb-16 md:pt-40 md:pb-20">
      <img src={heroLarge} srcSet={`${heroSmall} 960w, ${heroLarge} 1920w`} sizes="100vw" alt="" fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover object-right" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-[#f5f8fc]/95 via-[#f5f8fc]/85 to-white/20 sm:to-white/10" />
      <div className="page-container">
        <p className="eyebrow-label animate-hero-1">Your AI Partner of Choice</p>
        <h1 className="mt-5 max-w-3xl text-3xl leading-[1.12] font-semibold tracking-tight text-[#102d4a] sm:text-5xl lg:text-6xl animate-hero-2">
          Turn AI ambition<br className="hidden sm:inline" /> into <span className="text-[#084d90]">business results.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-[#39546c] sm:text-lg animate-hero-3">
          Connect AI, data, and cloud to the way your business works. Bring your next idea to life with iZeno’s enterprise technology and delivery expertise.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 animate-hero-4">
          <HomepageLink href="/contact-us" className="button-primary w-full sm:w-auto text-center">Talk to an AI expert</HomepageLink>
          <HomepageLink href="/solutions" className="button-secondary w-full sm:w-auto text-center">Explore solutions</HomepageLink>
        </div>
        <p className="mt-7 text-xs font-medium text-[#39546c] animate-hero-5">
          A Logicalis company • Enterprise integration • Regional delivery
        </p>
      </div>
    </section>
  )
}
export default Hero

