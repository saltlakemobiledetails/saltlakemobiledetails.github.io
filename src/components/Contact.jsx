import { BUSINESS } from '../data.js'
import CallCta from './CallCta.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container center">
        <p className="eyebrow center light">Ready for a Spotless Car?</p>
        <h2 className="center">Book Your Mobile Detail Today</h2>
        <p className="section-lede center light">
          Free quotes in minutes. No upfront payment. 100% satisfaction guarantee.
        </p>
        <div className="contact-ctas">
          <CallCta
            className="btn btn-primary btn-lg"
            phoneLabel={`📞 ${BUSINESS.owner} answers · ${BUSINESS.phone}`}
          >
            📞 Call or Text {BUSINESS.phone}
          </CallCta>
          <a href={`mailto:${BUSINESS.email}`} className="btn btn-outline-light btn-lg">
            ✉️ {BUSINESS.email}
          </a>
        </div>
        <p className="owner-note">
          Your call goes straight to {BUSINESS.owner}, the owner &amp; operator — no call centers,
          ever.
        </p>
        <p className="hours">Open {BUSINESS.hours} · Serving {BUSINESS.area}</p>
      </div>
    </section>
  )
}
