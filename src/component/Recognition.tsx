import HomepageLink from './HomepageLink'
import certified from '../assets/images/certified-new.png'
import teamwork from '../assets/images/atlaassian-1.png'
import development from '../assets/images/atlaassian-2.png'
import service from '../assets/images/atlaassian-3.png'
import cloud from '../assets/images/atlaassian-4.png'
import emerging from '../assets/images/atlaassian-5.png'

const specializations = [
  {
    prefix: 'iZeno becomes the first official',
    title: 'Atlassian Specialized Partner in Teamwork Foundations in APAC',
    image: teamwork,
    alt: 'Atlassian Specialized Partner in Teamwork Foundations APAC',
    href: '/partners/atlassian',
  },
  {
    prefix: 'iZeno becomes the first official',
    title: 'Atlassian Specialized Partner in Software Development in APAC',
    image: development,
    alt: 'Atlassian Specialized Partner in Software Development APAC',
    href: '/partners/atlassian',
  },
  {
    prefix: 'iZeno becomes the first official',
    title: 'Atlassian Specialized Partner in Service Management in APAC',
    image: service,
    alt: 'Atlassian Specialized Partner in Service Management APAC',
    href: '/partners/atlassian',
  },
  {
    prefix: 'iZeno becomes an official',
    title: 'Atlassian Specialized Partner in Cloud Migration',
    image: cloud,
    alt: 'Atlassian Specialized Partner in Cloud Migration APAC',
    href: '/partners/atlassian',
  },
  {
    prefix: 'iZeno named winner',
    title: 'Atlassian Solution Partner of the Year 2024–2025 in Emerging Markets',
    image: emerging,
    alt: 'Atlassian Solution Partner of the Year 2024-2025 Emerging Markets Winner',
    href: '/partners/atlassian',
  },
]

function Recognition() {
  return (
    <section id="partners" className="bg-[#f4f8fc] py-16 text-[#102d4a]">
      <div className="page-container">
        <div className="reveal-on-scroll mb-8">
          <p className="eyebrow-label">Partner ecosystem</p>
          <h2 className="section-title mt-3">Expertise that works together.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#527089]">
            A Logicalis company, with Atlassian specializations spanning teamwork, software development, service management, cloud migration, and recognized leadership in emerging markets.
          </p>
          <HomepageLink href="/partners" className="mt-4 inline-block text-sm font-medium text-[#084d90] underline underline-offset-4">
            Meet our partners
          </HomepageLink>
        </div>

        {/* Atlassian Specializations & Awards Cards */}
        <div className="reveal-group space-y-4">
          {specializations.map((item) => (
            <div key={item.title} className="flex flex-col-reverse justify-between gap-6 rounded-2xl bg-[#102d4a] p-6 text-white shadow-sm sm:flex-row sm:items-center sm:p-7">
              <div className="max-w-2xl">
                <p className="text-sm font-normal text-slate-300">{item.prefix}</p>
                <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-white sm:text-xl leading-snug">{item.title}</h3>
                <HomepageLink href={item.href} className="mt-4 inline-flex items-center text-sm font-medium text-sky-300 transition-colors hover:text-sky-200 hover:underline underline-offset-4">
                  Learn more <span className="ml-1" aria-hidden="true">→</span>
                </HomepageLink>
              </div>
              <div className="flex shrink-0 items-center justify-start sm:justify-center">
                <img src={item.image} alt={item.alt} loading="lazy" className="h-16 w-auto max-w-32 object-contain sm:h-20" />
              </div>
            </div>
          ))}
        </div>

        {/* Workplace Recognition */}
        <div className="reveal-on-scroll mt-14 border-t border-[#102d4a]/10 pt-10 text-center">
          <h3 className="text-base font-semibold text-[#084d90]">Workplace recognition</h3>
          <div className="mt-6 mx-auto max-w-7xl sm:max-w-5xl">
            <img src={certified} alt="Great Place To Work Certified, Singapore, May 2026 to May 2027" width={1300} height={300} loading="lazy" className="mx-auto w-full rounded-2xl shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recognition
