import { ADDONS, BUSINESS, PRICING } from '../data.js'
import CallCta from './CallCta.jsx'

export default function Pricing() {
  return (
    <section id="pricing" className="section section-alt">
      <div className="container">
        <p className="eyebrow center">Transparent Pricing</p>
        <h2 className="center">Simple Prices. No Surprises. No Upfront Payment.</h2>
        <p className="section-lede center">
          Priced by vehicle size, published right here — and lower than every major detailer in
          Salt Lake County.
        </p>

        <div className="table-wrap">
          <table className="pricing-table">
            <thead>
              <tr>
                <th scope="col">Service</th>
                {PRICING.sizes.map((s) => (
                  <th scope="col" key={s}>
                    {s}
                  </th>
                ))}
                <th scope="col" className="compare-col">
                  Elsewhere
                </th>
              </tr>
            </thead>
            <tbody>
              {PRICING.rows.map((row) => (
                <tr key={row.service}>
                  <th scope="row">{row.service}</th>
                  {row.prices.map((p, i) => (
                    <td key={i} className="price-cell">
                      {p}
                    </td>
                  ))}
                  <td className="compare-col">{row.compare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="center addons-title">Optional Add-Ons</h3>
        <ul className="addons-grid">
          {ADDONS.map((a) => (
            <li key={a.name} className="addon">
              <span>{a.name}</span>
              <strong>{a.price}</strong>
            </li>
          ))}
        </ul>

        <div className="center">
          <CallCta
            className="btn btn-primary btn-lg"
            phoneLabel={`Free quotes — Call ${BUSINESS.owner} · ${BUSINESS.phone}`}
          >
            Get Your Free Quote — {BUSINESS.phone}
          </CallCta>
        </div>
      </div>
    </section>
  )
}
