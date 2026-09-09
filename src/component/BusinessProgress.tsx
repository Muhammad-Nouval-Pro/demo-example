import HomepageLink from './HomepageLink'
import { useState } from 'react'

const useCases = [
  { title: 'Find knowledge faster', description: 'Help teams discover information across enterprise content with connected search and AI assistance.', detail: 'Start with a focused knowledge domain. Map content sources, access permissions, and the questions your teams need to answer.' },
  { title: 'Simplify everyday workflows', description: 'Explore where AI can assist repetitive work, from service requests to information retrieval.', detail: 'Identify repeatable tasks and the systems behind them. Keep review steps and clear ownership in the workflow.' },
  { title: 'Build on trusted data', description: 'Prepare your data and cloud foundations for AI applications that fit your business.', detail: 'Review data quality, integration, and governance before moving from a proof of concept to wider deployment.' },
]

export function AIUseCases() {
  const [selected, setSelected] = useState(0)
  return (
    <section id="generative-ai" className="bg-white py-16">
      <div className="page-container grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="reveal-on-scroll"><p className="eyebrow-label">Practical applications</p><h2 className="section-title mt-4">AI that fits the<br />way you work.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#527089]">Start with the business problem. Explore an opportunity, understand the foundations, and decide what is worth scaling.</p><HomepageLink href="/solutions/gen-ai" className="mt-6 inline-block text-sm font-medium text-[#084d90] underline underline-offset-4">Discover our AI practice</HomepageLink></div>
        <div className="reveal-on-scroll divide-y divide-[#102d4a]/10 border-y border-[#102d4a]/10">
          {useCases.map((item, index) => <div key={item.title} className="py-5"><h3><button type="button" aria-expanded={selected === index} aria-controls={`use-case-${index}`} onClick={() => setSelected(selected === index ? -1 : index)} className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-[#102d4a]">{item.title}<span aria-hidden="true" className="text-xl font-normal text-[#527089]">{selected === index ? '−' : '+'}</span></button></h3><div id={`use-case-${index}`} hidden={selected !== index} className="pt-4"><p className="text-sm leading-7 text-[#39546c]">{item.description}</p><p className="mt-3 text-sm leading-7 text-[#527089]">{item.detail}</p><HomepageLink className="mt-4 inline-block text-sm font-medium text-[#084d90] hover:underline" href={`#contact`}>Discuss this use case</HomepageLink></div></div>)}
        </div>
      </div>
    </section>
  )
}

export function WhyIzeno() {
  return (
    <section id="services" className="bg-[#f4f8fc] py-16">
      <div className="page-container"><p className="eyebrow-label reveal-on-scroll">Why iZeno</p><h2 className="section-title mt-4 reveal-on-scroll">Beyond the idea.<br />Through to implementation.</h2>
        <div className="reveal-group mt-8 grid gap-8 md:grid-cols-3">
          {[
            ['Enterprise integration', 'Connect new capabilities to the applications and data your teams already use.', 'business-solutions'],
            ['Technology expertise', 'Bring application modernization, data, cloud, and service management together.', 'technology-solutions'],
            ['A regional perspective', 'Work with a Logicalis company with experience serving organizations across Southeast Asia.', 'regional-delivery'],
          ].map(([title, copy, id]) => <article id={id} key={id} className="border-t border-[#102d4a]/15 pt-5"><h3 className="text-lg font-semibold text-[#102d4a]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#527089]">{copy}</p></article>)}
        </div>
        <HomepageLink href="/services" className="reveal-on-scroll mt-7 inline-block text-sm font-medium text-[#084d90] underline underline-offset-4">Explore our services</HomepageLink>
      </div>
    </section>
  )
}

export function CustomerSuccess() {
  return (
    <section id="customer-success" className="bg-white py-16"><div className="page-container">
      <div className="reveal-on-scroll mb-8 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow-label">Customer success</p><h2 className="section-title mt-4">Experience behind the promise.</h2></div><HomepageLink href="/case-studies" className="text-sm font-medium text-[#084d90] underline underline-offset-4">More customer stories</HomepageLink></div>
      <article className="reveal-on-scroll grid overflow-hidden rounded-2xl border border-[#102d4a]/10 md:grid-cols-[1fr_1.3fr]">
        <div className="bg-[#102d4a] p-7 text-white sm:p-9"><p className="text-xs tracking-widest text-sky-200 uppercase">Financial services · CRM</p><h3 className="mt-6 text-3xl font-semibold">KWAP</h3><p className="mt-2 text-sm text-slate-300">Kumpulan Wang Persaraan, Malaysia</p><p className="mt-6 text-xl leading-relaxed">Bringing customer service into one connected system.</p><HomepageLink href="/case-studies/kwap" className="mt-8 inline-block rounded-full border border-white/40 px-5 py-3 text-sm hover:bg-white hover:text-[#102d4a] transition-colors duration-200">Read the customer story</HomepageLink></div>
        <div className="space-y-6 bg-[#f7fafd] p-7 sm:p-9">{[
          ['The challenge', 'KWAP needed a CRM platform that could support its financial services and customer support needs as they evolved.'],
          ['The approach', 'iZeno implemented a centralized CRM, integrated feedback and support systems, and provided training and maintenance.'],
          ['The outcome', 'The published case study reports quicker query handling, consolidated reporting, and improved visibility of service tasks.'],
        ].map(([title, copy]) => <div key={title}><h4 className="text-sm font-semibold text-[#102d4a]">{title}</h4><p className="mt-2 text-sm leading-7 text-[#527089]">{copy}</p></div>)}<p className="text-xs text-[#527089]">Published by iZeno, February 2019. Enterprise delivery case study.</p></div>
      </article>
    </div></section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="bg-[#edf4fb] py-14"><div className="page-container reveal-on-scroll flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><p className="eyebrow-label">Start a conversation</p><h2 className="section-title mt-4">What would progress<br />look like for your business?</h2><p className="mt-4 max-w-xl text-sm leading-7 text-[#527089]">Tell us about your priorities. Let’s discuss where AI and enterprise technology can make a difference.</p></div><HomepageLink href="/contact-us" className="button-primary shrink-0 w-full sm:w-auto text-center">Contact the iZeno team</HomepageLink></div></section>
  )
}

