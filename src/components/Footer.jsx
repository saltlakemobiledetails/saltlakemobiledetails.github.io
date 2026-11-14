import { LogoMark } from '../art.jsx'
import { BUSINESS, CITIES } from '../data.js'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <LogoMark size={34} />
            <span className="brand-name light">
              Salt Lake <strong>Mobile Detailing</strong>
            </span>
          </div>
          <p>
            Professional mobile car detailing delivered to your home or office across Salt Lake
            County, Utah.
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a> — ask for {BUSINESS.owner}
            <br />
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            <br />
            {BUSINESS.hours}
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <p>
            <a href="#services">Services</a>
            <br />
            <a href="#pricing">Pricing</a>
            <br />
            <a href="#faq">FAQ</a>
            <br />
            <a href="#contact">Book Now</a>
          </p>
        </div>
        <div className="footer-cities">
          <h3>Areas We Serve</h3>
          <p>{CITIES.join(' · ')}</p>
        </div>
      </div>
      <div className="container copyright">
        © {YEAR} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  )
}
