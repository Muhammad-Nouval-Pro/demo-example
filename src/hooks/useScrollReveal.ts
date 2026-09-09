import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-group')

    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [])
}
