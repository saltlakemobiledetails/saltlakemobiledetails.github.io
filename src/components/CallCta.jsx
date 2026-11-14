import { BUSINESS } from '../data.js'

const isDesktop = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

/**
 * Phone call-to-action.
 * - Touch devices: a tap-to-call link with the normal button hover/press animation.
 * - Desktop (hover-capable): a flat, non-clickable pill that shows who answers and
 *   the number — statically by default, or on hover when `reveal` is set.
 */
export default function CallCta({ className = '', reveal = false, phoneLabel, onClick, children }) {
  const handleClick = (e) => {
    if (isDesktop()) e.preventDefault()
    if (onClick) onClick(e)
  }

  return (
    <a
      href={BUSINESS.phoneHref}
      className={`call-cta ${reveal ? 'call-cta-reveal' : ''} ${className}`}
      onClick={handleClick}
    >
      <span className="cta-label">{children}</span>
      <span className="cta-phone">
        {phoneLabel || `Call ${BUSINESS.owner} · ${BUSINESS.phone}`}
      </span>
    </a>
  )
}
