import { useState } from 'react'
import { LogoMark } from '../art.jsx'
import { BUSINESS } from '../data.js'

const LINKS = [
  ['#services', 'Services'],
  ['#pricing', 'Pricing'],
  ['#how-it-works', 'How It Works'],
  ['#service-area', 'Service Area'],
  ['#faq', 'FAQ'],
  ['#contact', 'Contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label={`${BUSINESS.name} — home`}>
          <LogoMark size={38} />
          <span className="brand-name">
            Salt Lake <strong>Mobile Detailing</strong>
          </span>
        </a>

        <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href={BUSINESS.phoneHref} className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Book Now
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
