// Hand-crafted SVG clip art used across the site.
// All artwork is inline SVG: crisp at any size, zero network requests, great for performance/SEO.

export function LogoMark({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#0b2545" />
      <path
        d="M14 38c1.5-5 4-9.5 7-11.5 3.5-2.3 15.5-2.3 19 0 3 2 5.5 6.5 7 11.5"
        fill="none"
        stroke="#19c3e6"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <rect x="10" y="37" width="44" height="8" rx="4" fill="#19c3e6" />
      <circle cx="21" cy="46" r="5" fill="#0b2545" stroke="#fff" strokeWidth="2.5" />
      <circle cx="43" cy="46" r="5" fill="#0b2545" stroke="#fff" strokeWidth="2.5" />
      <path d="M46 16l1.6 3.8 3.8 1.6-3.8 1.6L46 26.8l-1.6-3.8-3.8-1.6 3.8-1.6z" fill="#ffd166" />
    </svg>
  )
}

/** Large hero illustration: detailing van pulled up to a sparkling clean car in a driveway. */
export function HeroArt() {
  return (
    <svg
      viewBox="0 0 560 340"
      role="img"
      aria-label="Illustration of a mobile detailing van washing a car in a home driveway"
      className="hero-art"
    >
      {/* sky glow */}
      <circle cx="430" cy="70" r="46" fill="#ffd166" opacity="0.9" />
      <circle cx="430" cy="70" r="60" fill="#ffd166" opacity="0.25" />
      {/* mountains (Wasatch backdrop) */}
      <path d="M0 190 L90 90 L150 160 L220 70 L310 190 Z" fill="#c7d7ee" />
      <path d="M200 190 L290 100 L360 170 L430 110 L560 190 Z" fill="#a9c0e4" />
      <path d="M75 107 L90 90 L107 109 L96 118 L84 114 Z" fill="#fff" />
      <path d="M205 87 L220 70 L237 90 L224 99 L212 95 Z" fill="#fff" />
      {/* ground / driveway */}
      <rect x="0" y="188" width="560" height="152" fill="#e8eef7" />
      <path d="M60 340 L170 188 L390 188 L500 340 Z" fill="#d4deed" />
      {/* house hint */}
      <rect x="18" y="128" width="104" height="62" rx="4" fill="#f4f7fc" stroke="#c7d7ee" strokeWidth="3" />
      <path d="M10 132 L70 92 L130 132 Z" fill="#19c3e6" opacity="0.85" />
      <rect x="40" y="150" width="24" height="40" rx="2" fill="#0b2545" opacity="0.8" />
      <rect x="78" y="150" width="26" height="20" rx="2" fill="#bfe9f5" />
      {/* detailing van */}
      <g>
        <rect x="356" y="128" width="168" height="78" rx="12" fill="#0b2545" />
        <path d="M356 160 h168 v14 h-168 z" fill="#19c3e6" />
        <rect x="372" y="140" width="40" height="26" rx="4" fill="#bfe9f5" />
        <rect x="486" y="140" width="26" height="26" rx="4" fill="#bfe9f5" />
        <text x="438" y="196" fontSize="15" fontWeight="700" fill="#fff" textAnchor="middle" fontFamily="sans-serif">
          MOBILE DETAIL
        </text>
        <circle cx="394" cy="208" r="16" fill="#1b2a41" />
        <circle cx="394" cy="208" r="7" fill="#9fb4cc" />
        <circle cx="486" cy="208" r="16" fill="#1b2a41" />
        <circle cx="486" cy="208" r="7" fill="#9fb4cc" />
      </g>
      {/* clean car */}
      <g>
        <path
          d="M120 236 c8-26 24-44 46-50 30-8 84-8 114 0 22 6 38 24 46 50"
          fill="#19c3e6"
        />
        <path d="M150 206 c10-10 24-16 40-18 l-4 30 h-44 c2-4 5-9 8-12z" fill="#bfe9f5" />
        <path d="M206 188 c16 0 32 2 44 6 l8 24 h-58 z" fill="#bfe9f5" />
        <rect x="100" y="232" width="246" height="34" rx="16" fill="#0e7490" />
        <rect x="100" y="232" width="246" height="12" rx="6" fill="#19c3e6" />
        <circle cx="156" cy="268" r="22" fill="#1b2a41" />
        <circle cx="156" cy="268" r="10" fill="#9fb4cc" />
        <circle cx="290" cy="268" r="22" fill="#1b2a41" />
        <circle cx="290" cy="268" r="10" fill="#9fb4cc" />
        <rect x="336" y="244" width="12" height="8" rx="3" fill="#ffd166" />
      </g>
      {/* suds + water */}
      <circle cx="122" cy="222" r="10" fill="#fff" opacity="0.9" />
      <circle cx="136" cy="212" r="7" fill="#fff" opacity="0.8" />
      <circle cx="116" cy="206" r="5" fill="#fff" opacity="0.7" />
      {/* sparkles */}
      <path d="M226 158 l3.4 8 8 3.4 -8 3.4 -3.4 8 -3.4 -8 -8 -3.4 8 -3.4z" fill="#ffd166" />
      <path d="M330 170 l2.4 5.6 5.6 2.4 -5.6 2.4 -2.4 5.6 -2.4 -5.6 -5.6 -2.4 5.6 -2.4z" fill="#fff" />
      <path d="M180 150 l2 4.8 4.8 2 -4.8 2 -2 4.8 -2 -4.8 -4.8 -2 4.8 -2z" fill="#fff" />
    </svg>
  )
}

/** Service icon: foam + water droplet for exterior wash */
export function IconExterior() {
  return (
    <svg viewBox="0 0 48 48" className="svc-icon" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#e3f6fb" />
      <path d="M24 10c5 6.5 9 11.5 9 16a9 9 0 1 1-18 0c0-4.5 4-9.5 9-16z" fill="#19c3e6" />
      <circle cx="20.5" cy="27" r="2.6" fill="#fff" opacity="0.9" />
      <circle cx="33" cy="13" r="3.4" fill="#bfe9f5" />
      <circle cx="38" cy="19" r="2.2" fill="#bfe9f5" />
    </svg>
  )
}

/** Service icon: car seat + sparkle for interior detail */
export function IconInterior() {
  return (
    <svg viewBox="0 0 48 48" className="svc-icon" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#e3f6fb" />
      <path d="M19 10c-2 0-3.5 1.6-3.5 3.6 0 4.8 1 12.4 1.6 16.4h12c.4 0 2.9-.3 2.9 2.6S29.6 36 29 36H17" fill="none" stroke="#0b2545" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.5 14.5c4 .8 7 3.6 8 8" fill="none" stroke="#19c3e6" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M34 12l1.8 4.2 4.2 1.8-4.2 1.8-1.8 4.2-1.8-4.2-4.2-1.8 4.2-1.8z" fill="#ffd166" />
    </svg>
  )
}

/** Service icon: shield + car for full detail */
export function IconFull() {
  return (
    <svg viewBox="0 0 48 48" className="svc-icon" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#e3f6fb" />
      <path d="M24 8l13 5v10c0 8.5-5.5 14.5-13 17-7.5-2.5-13-8.5-13-17V13z" fill="#0b2545" />
      <path d="M16 27c.8-2.6 2.1-4.9 3.7-6 1.9-1.2 6.7-1.2 8.6 0 1.6 1.1 2.9 3.4 3.7 6" fill="none" stroke="#19c3e6" strokeWidth="2.4" strokeLinecap="round" />
      <rect x="14" y="26.5" width="20" height="4.6" rx="2.3" fill="#19c3e6" />
      <circle cx="19" cy="32" r="2.4" fill="#fff" />
      <circle cx="29" cy="32" r="2.4" fill="#fff" />
    </svg>
  )
}

/** Service icon: calendar + repeat for maintenance plan */
export function IconPlan() {
  return (
    <svg viewBox="0 0 48 48" className="svc-icon" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#e3f6fb" />
      <rect x="12" y="13" width="24" height="23" rx="4" fill="#fff" stroke="#0b2545" strokeWidth="3" />
      <path d="M12 20h24" stroke="#0b2545" strokeWidth="3" />
      <path d="M18 10v6M30 10v6" stroke="#0b2545" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 28a5 5 0 0 1 8.5-2M28.5 31a5 5 0 0 1-8.5-2" fill="none" stroke="#19c3e6" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M28 23.5l1 2.8-2.9.4zM20.5 33.5l-1-2.8 2.9-.4z" fill="#19c3e6" />
    </svg>
  )
}

/** Step icons for "How it works" */
export function IconPhone() {
  return (
    <svg viewBox="0 0 48 48" className="step-icon" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#0b2545" />
      <path
        d="M17 13c1.6-1.2 3.6-.8 4.5.8l1.6 2.8c.8 1.4.4 3.1-.9 4l-1.3 1c1.2 2.8 3.4 5 6.2 6.2l1-1.3c.9-1.3 2.6-1.7 4-.9l2.8 1.6c1.6.9 2 3 .8 4.5-1.9 2.4-5 3.4-7.8 2.2-6-2.4-10.8-7.2-13.2-13.2-1.1-2.8-.1-5.8 2.3-7.7z"
        fill="#19c3e6"
      />
    </svg>
  )
}

export function IconVan() {
  return (
    <svg viewBox="0 0 48 48" className="step-icon" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#0b2545" />
      <rect x="9" y="16" width="23" height="14" rx="3" fill="#19c3e6" />
      <path d="M32 20h5.5l3.5 5v5h-9z" fill="#19c3e6" />
      <rect x="33.5" y="21.5" width="4" height="4" rx="1" fill="#0b2545" />
      <circle cx="16" cy="32" r="3.6" fill="#fff" />
      <circle cx="35" cy="32" r="3.6" fill="#fff" />
    </svg>
  )
}

export function IconSparkleCar() {
  return (
    <svg viewBox="0 0 48 48" className="step-icon" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#0b2545" />
      <path d="M13 26c.9-3 2.4-5.6 4.2-6.8 2.2-1.4 7.4-1.4 9.6 0 1.8 1.2 3.3 3.8 4.2 6.8" fill="none" stroke="#19c3e6" strokeWidth="2.6" strokeLinecap="round" />
      <rect x="10.5" y="25.5" width="23" height="5.4" rx="2.7" fill="#19c3e6" />
      <circle cx="16.5" cy="32" r="2.8" fill="#fff" />
      <circle cx="27.5" cy="32" r="2.8" fill="#fff" />
      <path d="M35 12l1.7 4 4 1.7-4 1.7-1.7 4-1.7-4-4-1.7 4-1.7z" fill="#ffd166" />
    </svg>
  )
}

/** Decorative check mark */
export function IconCheck() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" className="check-icon">
      <circle cx="10" cy="10" r="10" fill="#19c3e6" />
      <path d="M5.5 10.5l3 3 6-6.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Map pin cluster for the service area section */
export function MapArt() {
  return (
    <svg viewBox="0 0 320 240" className="map-art" role="img" aria-label="Stylized map of Salt Lake County service area">
      <rect width="320" height="240" rx="16" fill="#e8f1fb" />
      {/* roads */}
      <path d="M30 200 C90 150 120 150 160 110 S260 60 300 30" stroke="#c7d7ee" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M20 60 C80 90 170 100 300 180" stroke="#c7d7ee" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M150 20 C140 90 170 160 160 220" stroke="#d6e3f3" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* lake */}
      <ellipse cx="52" cy="40" rx="34" ry="20" fill="#bfe9f5" />
      {/* pins */}
      {[
        [160, 96],
        [95, 140],
        [228, 128],
        [185, 180],
        [70, 190],
        [255, 70],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <path d="M0-22c8 0 14 6 14 13.5C14 2 0 14 0 14S-14 2-14-8.5C-14-16-8-22 0-22z" fill={i === 0 ? '#ffd166' : '#19c3e6'} />
          <circle cx="0" cy="-8.5" r="5" fill="#fff" />
        </g>
      ))}
    </svg>
  )
}
