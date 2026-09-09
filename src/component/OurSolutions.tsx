import HomepageLink from './HomepageLink'
import smallImage3 from '../assets/images/optimized/solutions (3)-480.webp'
import smallImage2 from '../assets/images/optimized/solutions (2)-480.webp'
import smallImage1 from '../assets/images/optimized/solutions (1)-480.webp'
import { industryItems, navigationHref } from './navigationData'
import businessImage from '../assets/images/optimized/solutions (1)-800.webp'
import technologyImage from '../assets/images/optimized/solutions (2)-800.webp'
import industryImage from '../assets/images/optimized/solutions (3)-800.webp'

const solutions = [
  {
    title: 'Business Solutions',
    image: businessImage,
    smallImage: smallImage1,
    href: '#business-solutions',
    description: 'Connect processes, customers, and data with CRM, automation, and analytics for more efficient business operations.',
  },
  {
    title: 'Technology Solutions',
    image: technologyImage,
    smallImage: smallImage2,
    href: '#technology-solutions',
    description: 'Build a stronger IT foundation with DevOps, service management, and hybrid cloud to support your business growth.',
  },
  {
    title: 'Industry Solutions',
    image: industryImage,
    smallImage: smallImage3,
    href: '#industry',
    description: 'Meet industry needs with specialized solutions and certified consultants who bring best practices into your operations.',
  },
]

function OurSolutions() {
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="bg-[#f4f8fc] px-6 py-16 text-[#102d4a] sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl min-[721px]:px-8">
        <header className="reveal-on-scroll mb-10 max-w-3xl sm:mb-12">
          <p className="mb-4 text-xs font-medium tracking-widest text-[#084d90] uppercase">Our Solutions</p>
          <h2 id="solutions-title" className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">Solutions Built for<br className="hidden sm:block" /> Business Progress</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#527089]">From business transformation to modern technology and industry expertise, iZeno delivers solutions designed to create measurable impact.</p>
        </header>
        <div className="reveal-group grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <article key={solution.title} className="overflow-hidden rounded-3xl border border-white/80 bg-white/60 shadow-[0_6px_24px_rgba(16,45,74,0.04)] hover:shadow-lg transition-shadow duration-300">
              <div className="group overflow-hidden">
                <img src={solution.image} srcSet={`${solution.smallImage} 480w, ${solution.image} 800w`} sizes="(min-width: 768px) 33vw, 100vw" alt="" loading="lazy" width={1122} height={1402} className="aspect-[16/9] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
              </div>
              <div className="p-6 lg:p-7">
                <h3 className="mb-4 text-xl font-semibold tracking-tight">{solution.title}</h3>
                <p className="min-h-21 text-sm leading-7 text-[#527089]">{solution.description}</p>
                <HomepageLink className="mt-4 inline-block text-sm font-medium text-[#084d90] underline-offset-4 hover:underline" href={solution.href}>Explore {solution.title.toLowerCase()}</HomepageLink>
              </div>
            </article>
          ))}
        </div>
        <div id="industry" className="reveal-on-scroll mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#102d4a]/10 pt-6">
          <h3 className="text-sm font-semibold">Explore by industry</h3>
          {industryItems.map((item) => <HomepageLink key={item.label} href={navigationHref(item.label)} className="text-sm text-[#084d90] underline-offset-4 hover:underline">{item.label}</HomepageLink>)}
        </div>
      </div>
    </section>
  )
}

export default OurSolutions
