import HomepageLink from './HomepageLink'
import smallImage3 from '../assets/images/optimized/insight-3-480.webp'
import smallImage2 from '../assets/images/optimized/insight-2-480.webp'
import smallImage1 from '../assets/images/optimized/insight-1-480.webp'
import insight1 from '../assets/images/optimized/insight-1-800.webp'
import insight2 from '../assets/images/optimized/insight-2-800.webp'
import insight3 from '../assets/images/optimized/insight-3-800.webp'

const insights = [
  {
    title: 'iZeno Earns 2026 Great Place To Work Certification™',
    date: 'August 10, 2026',
    dateTime: '2026-08-10',
    image: insight1,
    smallImage: smallImage1,
    href: '/insights/great-place-to-work-2026',
  },
  {
    title: 'iZeno Partners with Glean to Bring Work AI Capabilities to Enterprises Across Southeast Asia',
    date: 'June 29, 2026',
    dateTime: '2026-06-29',
    image: insight2,
    smallImage: smallImage2,
    href: '/insights/glean-partnership',
  },
  {
    title: 'iZeno Receives Atlassian Partner of the Year 2026: Marketing Innovator',
    date: 'May 25, 2026',
    dateTime: '2026-05-25',
    image: insight3,
    smallImage: smallImage3,
    href: '/insights/atlassian-partner-of-the-year-2026',
  },
]

function LatestInsights() {
  return (
    <section id="blog" aria-labelledby="insights-title" className="relative isolate overflow-hidden bg-linear-to-b from-[#f5faff] to-[#e9f2fb] px-6 py-16 sm:py-16 lg:py-18">
      <div aria-hidden="true" className="pointer-events-none absolute top-24 -right-16 -z-10 size-96 rounded-full bg-sky-200/50 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-0 -z-10 size-96 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="mx-auto max-w-7xl min-[721px]:px-8">
        <h2 id="insights-title" className="reveal-on-scroll mb-9 text-left text-3xl font-semibold tracking-tight text-[#102d4a] sm:mb-10 sm:text-4xl">Latest Insights</h2>
        <div className="reveal-group grid gap-x-5 gap-y-6 md:grid-cols-3 lg:gap-x-7">
          {insights.map((insight) => (
            <article key={insight.dateTime} className="grid grid-rows-[auto_1fr_auto_auto] gap-y-6 overflow-hidden rounded-3xl border border-white/80 bg-white/85 pb-6 shadow-[0_8px_28px_rgba(16,45,74,0.05)] hover:shadow-xl transition-shadow duration-300 md:row-span-4 md:grid-rows-subgrid motion-reduce:transform-none motion-reduce:transition-none">
              <HomepageLink href={insight.href} aria-label={`Read more: ${insight.title}`} className="group block overflow-hidden focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#084d90]">
                <img
                  src={insight.image}
                  srcSet={`${insight.smallImage} 480w, ${insight.image} 800w`}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  alt=""
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover object-[center_35%] transition-transform duration-500 ease-out group-hover:scale-105 group-focus-within:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                />
              </HomepageLink>
              <h3 className="px-6 text-lg leading-relaxed font-semibold tracking-tight text-[#102d4a]">
                <HomepageLink href={insight.href} className="transition-colors hover:text-[#084d90] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#084d90]">{insight.title}</HomepageLink>
              </h3>
              <time dateTime={insight.dateTime} className="px-6 text-sm leading-relaxed text-[#527089]">{insight.date}</time>
              <HomepageLink
                href={insight.href}
                aria-label={`Read more: ${insight.title}`}
                className="mx-6 inline-flex min-h-10 items-center justify-center justify-self-start rounded-full border border-white/80 bg-[#084d90] px-5 py-2 text-xs font-medium text-white shadow-[0_2px_8px_rgba(16,45,74,0.06)] backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#084d90] focus-visible:bg-white focus-visible:text-[#084d90] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#084d90] motion-reduce:transition-none"
              >
                Read more
              </HomepageLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestInsights
