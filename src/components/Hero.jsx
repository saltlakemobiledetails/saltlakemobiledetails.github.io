import { HeroArt, IconCheck } from '../art.jsx'
import { BUSINESS } from '../data.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Mobile Car Detailing · Salt Lake City, UT</p>
          <h1>
            Showroom-Quality Detailing, <span className="accent">Delivered to Your Driveway</span>
          </h1>
          <p className="lede">
            Professional interior &amp; exterior car detailing at your home or office — anywhere in{' '}
            {BUSINESS.area}. Lower prices than anyone in the valley, with no upfront payment.
          </p>
          <ul className="hero-points">
            <li>
              <IconCheck /> Full details from <strong>$179</strong> — others charge $247+
            </li>
            <li>
              <IconCheck /> We bring our own power &amp; pro equipment
            </li>
            <li>
              <IconCheck /> Exterior washes use your outdoor spigot
            </li>
            <li>
              <IconCheck /> 100% satisfaction guarantee
            </li>
          </ul>
          <div className="hero-ctas">
            <a href={BUSINESS.phoneHref} className="btn btn-primary btn-lg">
              Call {BUSINESS.phone}
            </a>
            <a href="#pricing" className="btn btn-ghost btn-lg">
              See Pricing
            </a>
          </div>
        </div>
        <HeroArt />
      </div>
    </section>
  )
}
