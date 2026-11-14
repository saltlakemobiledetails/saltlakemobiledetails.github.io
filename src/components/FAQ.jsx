import { FAQS } from '../data.js'

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container faq-container">
        <p className="eyebrow center">FAQ</p>
        <h2 className="center">Frequently Asked Questions</h2>
        <div className="faq-list">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="faq-item">
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
