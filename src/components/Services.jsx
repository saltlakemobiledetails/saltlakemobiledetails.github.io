import { IconCheck, IconInterior, IconPlan } from '../art.jsx'
import { BUSINESS, SERVICES } from '../data.js'

const ICONS = {
  interior: IconInterior,
  plan: IconPlan,
}

const isDesktop = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

/**
 * On touch devices this is a tap-to-call link.
 * On desktop (hover-capable) it is a flat, non-clickable pill that reveals
 * the phone number on hover (see .book-btn rules in index.css).
 */
function BookButton() {
  const handleClick = (e) => {
    if (isDesktop()) e.preventDefault()
  }

  return (
    <a href={BUSINESS.phoneHref} className="btn btn-primary book-btn" onClick={handleClick}>
      <span className="book-label">Book This Package</span>
      <span className="book-phone">Call {BUSINESS.owner} · {BUSINESS.phone}</span>
    </a>
  )
}

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <p className="eyebrow center">Our Services</p>
        <h2 className="center">Professional Detailing Packages</h2>
        <p className="section-lede center">
          Every package is delivered at your location by a trained detailer with professional
          equipment and eco-friendly products.
        </p>

        <div className="services-grid">
          {SERVICES.map((svc) => {
            const Icon = ICONS[svc.id]
            return (
              <article key={svc.id} className={`card service-card ${svc.popular ? 'popular' : ''}`}>
                {svc.popular && <span className="badge">Most Popular</span>}
                <Icon />
                <h3>{svc.name}</h3>
                <p className="price">{svc.price}</p>
                <p className="blurb">{svc.blurb}</p>
                <ul className="feature-list">
                  {svc.features.map((f) => (
                    <li key={f}>
                      <IconCheck /> {f}
                    </li>
                  ))}
                </ul>
                <BookButton />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
