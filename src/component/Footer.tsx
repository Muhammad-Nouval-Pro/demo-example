import HomepageLink from './HomepageLink'
import footerLogo from '../assets/images/izenologo.png'
import { companyItems, industryItems, solutionGroups, navigationHref } from './navigationData'

const linkStyle = 'text-sm leading-relaxed text-slate-400 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300'

const socialLinks = [
  { name: 'Facebook', href: '', path: 'M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5A24 24 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v8z' },
  { name: 'LinkedIn', href: '', path: 'M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 9h4v13H2V9Zm7 0h4v2c1-1.5 2.3-2.3 4-2.3 4 0 5 2.5 5 6V22h-4v-7c0-2-.5-3-2-3s-3 1-3 3v7H9V9Z' },
  { name: 'YouTube', href: '', path: 'M21.6 6.2a3 3 0 0 0-2.1-2.1C17.6 3.6 12 3.6 12 3.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1C1.9 8.1 1.9 12 1.9 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM10 16V8l7 4-7 4Z' },
]

function Footer() {
  return (
    <footer className="bg-[#111820] px-6 pt-16 text-white sm:pt-20">
      <div className="mx-auto max-w-7xl min-[721px]:px-8">
        <div className="grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr] lg:gap-10">
          <div>
            <HomepageLink href="#home" aria-label="iZeno home" className="inline-block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">
              <img src={footerLogo} alt="iZeno, a Logicalis company" loading="lazy" className="h-auto w-36 brightness-0 invert" />
            </HomepageLink>
            <p className="mt-5 max-w-64 text-sm leading-7 text-slate-400">Business expertise. Technology that moves you forward.</p>
            <nav aria-label="Social media" className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <HomepageLink key={social.name} href={social.href} rel="noopener noreferrer" aria-label={`iZeno on ${social.name}`} className="flex size-10 items-center justify-center rounded-full border border-white/80 bg-white text-[#111820] transition-colors duration-300 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300 motion-reduce:transition-none">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current"><path d={social.path} fillRule="evenodd" /></svg>
                </HomepageLink>
              ))}
            </nav>
          </div>

          <nav aria-label="Footer solutions">
            <h2 className="mb-6 text-base font-medium">Solutions</h2>
            <ul className="space-y-4">
              {solutionGroups.map((group) => (
                <li key={group.title}>
                  <details className="group">
                    <summary className="cursor-pointer text-sm text-slate-400 transition-colors hover:text-white marker:text-slate-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">{group.title}</summary>
                    <ul className="mt-4 space-y-3 border-l border-white/10 pl-4">
                      {group.items.map((item) => <li key={item.label}><HomepageLink href={navigationHref(item.label)} className={linkStyle}>{item.label}</HomepageLink></li>)}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col items-start gap-4 border-t border-white/10 pt-6">
              <HomepageLink href="#generative-ai" className={linkStyle}>Generative AI</HomepageLink>
              <HomepageLink href="#services" className={linkStyle}>Services</HomepageLink>
            </div>
          </nav>

          <nav aria-label="Footer industry">
            <h2 className="mb-6 text-base font-medium">Industry</h2>
            <ul className="space-y-4">
              {industryItems.map((item) => <li key={item.label}><HomepageLink href={navigationHref(item.label)} className={linkStyle}>{item.label}</HomepageLink></li>)}
            </ul>
          </nav>

          <nav aria-label="Footer about us">
            <h2 className="mb-6 text-base font-medium">About Us</h2>
            <ul className="space-y-4">
              {companyItems.map((item) => <li key={item.label}><HomepageLink href={item.href} className={linkStyle}>{item.label}</HomepageLink></li>)}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-7 sm:flex-row sm:items-center">
          <p className="text-xs leading-relaxed text-slate-400">© {new Date().getFullYear()} iZeno. A Logicalis company. All rights reserved.</p>
          <HomepageLink href="#home" className={linkStyle}>Back to top</HomepageLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
