import HomepageLink from './HomepageLink'
import { useRef, useState } from 'react'
import logo from '../assets/images/izenologo.png'

import { navigationItems, industryItems, companyItems, solutionGroups, navigationHref } from './navigationData'

function SolutionIcon({ label }: { label: string }) {
  const iconPath = /security|cnapp|governance/i.test(label)
    ? 'M12 3 4 6v5c0 5 8 10 8 10s8-5 8-10V6l-8-3Zm-4 9 3 3 5-6'
    : /customer|teamwork|sales/i.test(label)
      ? 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m8-7a4 4 0 0 1 0 8m5 9v-2a4 4 0 0 0-3-3.87'
      : /cloud|aws/i.test(label)
        ? 'M6 18a4 4 0 0 1-1-7.87A7 7 0 0 1 18.5 8 5 5 0 0 1 0 10H6'
        : /data/i.test(label)
          ? 'M20 6c0 2-16 2-16 0s16-2 16 0Zm-16 0v12c0 3 16 3 16 0V6M4 12c0 3 16 3 16 0'
          : /ai|science/i.test(label)
            ? 'M8 8h8v8H8zM9 3v5m6-5v5M9 16v5m6-5v5M3 9h5m-5 6h5m8-6h5m-5 6h5'
            : /api|code|microservices/i.test(label)
              ? 'm8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18'
              : /migration|modernization|ci\/cd/i.test(label)
                ? 'M4 7h16m-4-4 4 4-4 4M20 17H4m4-4-4 4 4 4'
                : /observability|modeling/i.test(label)
                  ? 'M3 3v18h18M6 15l4-5 4 3 6-8'
                  : /asset|endpoint|virtualization|platform/i.test(label)
                    ? 'M3 4h18v13H3zM8 21h8m-4-4v4'
                    : /sso/i.test(label)
                      ? 'M14 3a7 7 0 0 0-6 10L2 19v3h3l2-2v-2h2l2-2a7 7 0 1 0 3-13Zm2 4h.01'
                      : 'M3 3h6v6H3zM15 15h6v6h-6zM15 3h6v6h-6zM6 9v9h9m-6-12h6';

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={iconPath} />
    </svg>
  )
}

function Navbar() {
  const [openMenu, setOpenMenu] = useState<'Solutions' | 'Industry' | 'Company' | null>(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const solutionsOpen = openMenu === 'Solutions'
  const companyOpen = openMenu === 'Company'
  const industryOpen = openMenu === 'Industry'
  const solutionsButtonRef = useRef<HTMLButtonElement>(null)
  const industryButtonRef = useRef<HTMLButtonElement>(null)
  const companyButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <header
      onMouseLeave={() => setOpenMenu(null)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null)
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          if (mobileNavOpen) setMobileNavOpen(false)
          if (openMenu) {
            const triggerRef = openMenu === 'Solutions' ? solutionsButtonRef : openMenu === 'Industry' ? industryButtonRef : companyButtonRef
            setOpenMenu(null)
            triggerRef.current?.focus()
          }
        }
      }}
      className="fixed inset-x-0 top-0 z-50 p-3 font-sans min-[850px]:px-7 min-[850px]:py-4.5 **:focus-visible:outline-2 **:focus-visible:outline-offset-3 **:focus-visible:outline-[#084d90]">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 rounded-full border border-white/70 bg-[#e4f1fa]/40 py-2 px-4 shadow-[0_8px_32px_rgba(38,85,120,0.12),inset_0_1px_rgba(255,255,255,0.8)] backdrop-blur-xl min-[850px]:h-16 min-[850px]:px-6" aria-label="Main navigation">
        
        {/* Logo */}
        <HomepageLink className="inline-flex shrink-0 items-center" href="#home" aria-label="izeno home">
          <img className="block h-7 w-auto min-[850px]:h-8" src={logo} alt="izeno" />
        </HomepageLink>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 rounded-full border border-white/60 bg-white/30 p-1 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_3px_12px_rgba(38,85,120,0.06)] min-[850px]:flex">
          {navigationItems.map((item) => item === 'Solutions' || item === 'Industry' || item === 'Company' ? (
            <button
              key={item}
              ref={item === 'Solutions' ? solutionsButtonRef : item === 'Industry' ? industryButtonRef : companyButtonRef}
              type="button"
              aria-expanded={openMenu === item}
              aria-controls={`${item.toLowerCase()}-mega-menu`}
              onPointerEnter={(event) => { if (event.pointerType === 'mouse') setOpenMenu(item) }}
              onClick={(event) => setOpenMenu((open) => event.detail === 0 || !window.matchMedia('(hover: hover)').matches ? (open === item ? null : item) : item)}
              className={`inline-flex shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${openMenu === item ? 'bg-white text-[#084d90] shadow-xs' : 'text-[#39546c] hover:bg-white/70 hover:text-[#102d4a]'}`}
            >
              {item === 'Company' ? 'About Us' : item}
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className={`size-3.5 fill-none stroke-current transition-transform duration-300 ${openMenu === item ? 'rotate-180' : 'rotate-0'}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m4 6 4 4 4-4" />
              </svg>
            </button>
          ) : (
            <HomepageLink
              onMouseEnter={() => setOpenMenu(null)}
              className="shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium text-[#39546c] no-underline transition-all duration-200 hover:bg-white/70 hover:text-[#102d4a]"
              href={navigationHref(item)}
              key={item}
            >
              {item}
            </HomepageLink>
          ))}
        </div>

        {/* Action Button & Hamburger Toggle */}
        <div className="flex items-center gap-2">
          <HomepageLink
            className="group hidden min-[850px]:inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full border border-white/50 bg-[#084d90] px-5 text-sm font-semibold text-white shadow-xs transition-all duration-300 hover:bg-[#063b70]"
            href="#contact"
          >
            Get in Touch
            <span aria-hidden="true" className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </HomepageLink>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-expanded={mobileNavOpen}
            aria-label="Toggle navigation menu"
            className="flex size-9 items-center justify-center rounded-full border border-white/60 bg-white/40 text-[#102d4a] transition-colors hover:bg-white min-[850px]:hidden"
          >
            <svg className="size-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              {mobileNavOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-x-3 top-20 z-40 rounded-3xl border border-white/80 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl transition-all duration-300 min-[850px]:hidden max-h-[82vh] overflow-y-auto">
          <div className="flex flex-col divide-y divide-[#102d4a]/10">
            {navigationItems.map((item) => {
              const isMega = item === 'Solutions' || item === 'Industry' || item === 'Company'
              const isOpen = openMenu === item
              return (
                <div key={item} className="py-2.5">
                  {isMega ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setOpenMenu(isOpen ? null : item)}
                        className="flex w-full items-center justify-between py-1 text-base font-semibold text-[#102d4a]"
                      >
                        {item === 'Company' ? 'About Us' : item}
                        <svg className={`size-4 text-[#084d90] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="mt-3 space-y-4 rounded-2xl bg-[#f4f8fc] p-4 border border-[#102d4a]/5">
                          {item === 'Solutions' && solutionGroups.map(g => (
                            <div key={g.title} className="space-y-1.5">
                              <p className="text-xs font-bold text-[#084d90] uppercase tracking-wider">{g.title}</p>
                              <div className="grid gap-1 pl-1">
                                {g.items.map(sub => (
                                  <HomepageLink
                                    key={sub.label}
                                    href={navigationHref(sub.label)}
                                    onClick={() => { setOpenMenu(null); setMobileNavOpen(false); }}
                                    className="flex items-center gap-2 py-1.5 text-xs font-medium text-[#39546c] hover:text-[#084d90]"
                                  >
                                    <span className="size-1.5 rounded-full bg-[#084d90]/40"></span>
                                    {sub.label}
                                  </HomepageLink>
                                ))}
                              </div>
                            </div>
                          ))}
                          {item === 'Industry' && (
                            <div className="grid gap-1">
                              {industryItems.map(ind => (
                                <HomepageLink
                                  key={ind.label}
                                  href={navigationHref(ind.label)}
                                  onClick={() => { setOpenMenu(null); setMobileNavOpen(false); }}
                                  className="flex items-center gap-2.5 py-2 text-xs font-medium text-[#102d4a] hover:text-[#084d90]"
                                >
                                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-[#084d90]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d={ind.icon} />
                                  </svg>
                                  {ind.label}
                                </HomepageLink>
                              ))}
                            </div>
                          )}
                          {item === 'Company' && (
                            <div className="grid gap-1">
                              {companyItems.map(comp => (
                                <HomepageLink
                                  key={comp.label}
                                  href={comp.href}
                                  onClick={() => { setOpenMenu(null); setMobileNavOpen(false); }}
                                  className="flex items-center gap-2.5 py-2 text-xs font-medium text-[#102d4a] hover:text-[#084d90]"
                                >
                                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-[#084d90]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d={comp.icon} />
                                  </svg>
                                  {comp.label}
                                </HomepageLink>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <HomepageLink
                      href={navigationHref(item)}
                      onClick={() => setMobileNavOpen(false)}
                      className="block py-1 text-base font-semibold text-[#102d4a]"
                    >
                      {item}
                    </HomepageLink>
                  )}
                </div>
              )
            })}
          </div>

          {/* Action CTA Button inside Mobile Drawer */}
          <div className="mt-5 pt-3 border-t border-[#102d4a]/10">
            <HomepageLink
              href="#contact"
              onClick={() => setMobileNavOpen(false)}
              className="flex w-full h-11 items-center justify-center rounded-full bg-[#084d90] px-5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#063b70]"
            >
              Get in Touch →
            </HomepageLink>
          </div>
        </div>
      )}

      {/* Desktop Mega Menus */}
      <div
        id="solutions-mega-menu"
        aria-label="Solutions"
        inert={!solutionsOpen}
        aria-hidden={!solutionsOpen}
        className={`hidden min-[850px]:block absolute inset-x-7 top-[calc(100%-18px)] pt-3 transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none ${solutionsOpen ? 'visible translate-y-0 opacity-100' : 'invisible pointer-events-none -translate-y-2 opacity-0'}`}
      >
        <div className="mx-auto grid max-h-[70vh] max-w-7xl grid-cols-5 gap-y-0 overflow-y-auto overscroll-contain rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_50px_rgba(16,45,74,0.16)] backdrop-blur-2xl backdrop-saturate-150">
          {solutionGroups.map((group) => (
            <section key={group.title} className="px-3 border-r border-[#102d4a]/15 last:border-r-0">
              <h2 className="mb-3 text-sm font-semibold text-[#084d90]">{group.title}</h2>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.label} className={item.nested ? 'ml-3' : ''}>
                    <HomepageLink
                      href={navigationHref(item.label)}
                      onClick={() => setOpenMenu(null)}
                      className="group flex items-start gap-2.5 rounded-xl border border-transparent px-2 py-2 text-xs leading-relaxed font-medium text-[#11135d] transition-colors duration-200 hover:border-white/60 hover:bg-white/60 hover:text-[#084d90]"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-white/60 bg-white/40 text-[#084d90] shadow-xs transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:bg-white">
                        <SolutionIcon label={item.label} />
                      </span>
                      <span className="pt-1">{item.label}</span>
                    </HomepageLink>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div
        id="industry-mega-menu"
        aria-label="Industry"
        inert={!industryOpen}
        aria-hidden={!industryOpen}
        className={`hidden min-[850px]:block absolute inset-x-7 top-[calc(100%-18px)] pt-3 transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none ${industryOpen ? 'visible translate-y-0 opacity-100' : 'invisible pointer-events-none -translate-y-2 opacity-0'}`}
      >
        <div className="mx-auto max-h-[70vh] max-w-7xl overflow-y-auto overscroll-contain rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_50px_rgba(16,45,74,0.16)] backdrop-blur-2xl backdrop-saturate-150">
          <ul className="space-y-1">
            {industryItems.map((item) => (
              <li key={item.label}>
                <HomepageLink
                  href={navigationHref(item.label)}
                  onClick={() => setOpenMenu(null)}
                  className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium text-[#11135d] transition-colors duration-200 hover:border-white/60 hover:bg-white/60 hover:text-[#084d90]"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/60 bg-white/40 text-[#084d90] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:bg-white">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </span>
                  {item.label}
                </HomepageLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        id="company-mega-menu"
        aria-label="About Us"
        inert={!companyOpen}
        aria-hidden={!companyOpen}
        className={`hidden min-[850px]:block absolute inset-x-7 top-[calc(100%-18px)] pt-3 transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none ${companyOpen ? 'visible translate-y-0 opacity-100' : 'invisible pointer-events-none -translate-y-2 opacity-0'}`}
      >
        <div className="mx-auto max-h-[70vh] max-w-7xl overflow-y-auto overscroll-contain rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_50px_rgba(16,45,74,0.16)] backdrop-blur-2xl backdrop-saturate-150">
          <ul className="space-y-1">
            {companyItems.map((item) => (
              <li key={item.label}>
                <HomepageLink
                  href={item.href}
                  onClick={() => setOpenMenu(null)}
                  className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium text-[#11135d] transition-colors duration-200 hover:border-white/60 hover:bg-white/60 hover:text-[#084d90]"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/60 bg-white/40 text-[#084d90] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:bg-white">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </span>
                  {item.label}
                </HomepageLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar

