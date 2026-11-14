const ITEMS = [
  ['💰', 'Best Prices in the Valley', 'We beat every major detailer in Salt Lake County — compare and save $30–$70.'],
  ['🚐', 'Fully Mobile', 'Our van carries power and pro equipment. For exterior washes we just need access to your outdoor water spigot.'],
  ['✅', 'No Upfront Payment', 'Pay only when the job is done and you love the result.'],
  ['🌿', 'Eco-Friendly Products', 'Safe for your family, your pets, and your paint.'],
]

export default function TrustBar() {
  return (
    <section className="trustbar" aria-label="Why choose us">
      <div className="container trust-grid">
        {ITEMS.map(([emoji, title, text]) => (
          <div className="trust-item" key={title}>
            <span className="trust-emoji" aria-hidden="true">
              {emoji}
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
