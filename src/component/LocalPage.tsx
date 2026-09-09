import logo from '../assets/images/izenologo.png'
import HomepageLink from './HomepageLink'

function LocalPage() {
  const segment = window.location.pathname.split('/').filter(Boolean).at(-1) ?? ''
  const title = segment.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
  return (
    <div className="min-h-svh bg-[#f4f8fc] text-[#102d4a]">
      <header className="page-container py-6"><HomepageLink href="/" aria-label="iZeno homepage"><img src={logo} alt="iZeno" className="w-28" /></HomepageLink></header>
      <main className="page-container py-20">
        <p className="eyebrow-label">Homepage preview</p>
        <h1 className="section-title mt-5">{title}</h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-[#527089]">This page is not available in the current preview. Explore the homepage to learn more.</p>
        <HomepageLink href="/" className="button-primary mt-8">Back to homepage</HomepageLink>
      </main>
    </div>
  )
}

export default LocalPage
