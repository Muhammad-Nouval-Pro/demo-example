import type { ComponentProps } from 'react'

// Allow anchors and same-project paths only; never allow outgoing URLs.
function HomepageLink({ href, target, onClick, ...props }: ComponentProps<'a'>) {
  const isLocal = Boolean(href && !/[\\\s]/.test(href) && ((href.startsWith('#') && href.length > 1) || (href.startsWith('/') && !href.startsWith('//'))))

  return (
    <a
      {...props}
      href={isLocal ? href : undefined}
      target={isLocal ? target : undefined}
      role="link"
      aria-disabled={isLocal ? undefined : true}
      onClick={(event) => {
        if (!isLocal) event.preventDefault()
        onClick?.(event)
      }}
    />
  )
}

export default HomepageLink
