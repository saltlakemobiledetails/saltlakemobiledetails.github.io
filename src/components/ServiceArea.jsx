import { MapArt } from '../art.jsx'
import { CITIES } from '../data.js'

export default function ServiceArea() {
  return (
    <section id="service-area" className="section section-alt">
      <div className="container area-inner">
        <div>
          <p className="eyebrow">Service Area</p>
          <h2>Serving Salt Lake City &amp; All of Salt Lake County</h2>
          <p className="section-lede">
            From downtown Salt Lake City to Herriman, our mobile detailing vans cover the entire
            valley. If you&apos;re nearby but outside this list, call us — we can usually make it
            work.
          </p>
          <ul className="city-grid">
            {CITIES.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <MapArt />
      </div>
    </section>
  )
}
