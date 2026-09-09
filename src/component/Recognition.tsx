import HomepageLink from './HomepageLink'
import certified from '../assets/images/certified-new.png'
import teamwork from '../assets/images/atlaassian-1.png'
import development from '../assets/images/atlaassian-2.png'
import service from '../assets/images/atlaassian-3.png'
import cloud from '../assets/images/atlaassian-4.png'
import emerging from '../assets/images/atlaassian-5.png'

const specializations = [
  { title: 'Teamwork Foundations', image: teamwork, description: 'The first official Atlassian Specialized Partner in Teamwork Foundations in APAC.' },
  { title: 'Software Development', image: development, description: 'The first official Atlassian Specialized Partner in Software Development in APAC.' },
  { title: 'Service Management', image: service, description: 'The first official Atlassian Specialized Partner in Service Management in APAC.' },
  { title: 'Cloud Migration', image: cloud, description: 'An official Atlassian Specialized Partner in Cloud Migration in APAC.' },
]

function Recognition() {
  return (
    <section id="partners" className="bg-[#f4f8fc] py-14 text-[#102d4a]">
      <div className="page-container">
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
          <div className="reveal-on-scroll"><p className="eyebrow-label">Partner ecosystem</p><h2 className="section-title mt-4">Expertise that<br />works together.</h2><p className="mt-5 text-sm leading-7 text-[#527089]">A Logicalis company, with Atlassian specializations spanning teamwork, software development, service management, and cloud migration.</p><HomepageLink href="/partners" className="mt-5 inline-block text-sm font-medium text-[#084d90] underline underline-offset-4">Meet our partners</HomepageLink></div>
          <div className="reveal-group grid grid-cols-2 gap-5 sm:grid-cols-4">{specializations.map((item) => <div key={item.title} className="text-center"><img src={item.image} alt={`Atlassian ${item.title} specialization APAC`} width={250} height={250} loading="lazy" className="mx-auto w-24 object-contain" /><p className="mt-3 text-xs leading-5 text-[#39546c]">{item.title}</p></div>)}</div>
        </div>
        <div className="reveal-on-scroll mt-10 border-t border-[#102d4a]/10 pt-6">
          <h3 className="text-sm font-semibold text-[#084d90]">Awards and workplace recognition</h3>
          <div className="mt-6 grid items-center gap-8 sm:grid-cols-[1fr_140px]">
            <img src={certified} alt="Great Place To Work Certified, Singapore, May 2026 to May 2027" width={1300} height={300} loading="lazy" className="w-full rounded-xl shadow-xs" />
            <div className="flex justify-center sm:block">
              <img src={emerging} alt="Atlassian Emerging Markets Partner of the Year 2024–2025 winner" width={250} height={250} loading="lazy" className="w-28" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Recognition
