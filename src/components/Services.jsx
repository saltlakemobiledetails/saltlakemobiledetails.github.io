import { IconCheck, IconInterior, IconPlan } from '../art.jsx'
import { SERVICES } from '../data.js'
import CallCta from './CallCta.jsx'

const ICONS = {
  interior: IconInterior,
  plan: IconPlan,
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
                <CallCta className="btn btn-primary" reveal>
                  Book This Package
                </CallCta>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
