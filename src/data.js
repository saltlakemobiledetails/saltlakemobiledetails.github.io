export const BUSINESS = {
  name: 'Salt Lake Mobile Detailing',
  phone: '(801) 555-0123', // TODO: replace with your real business number
  phoneHref: 'tel:+18015550123',
  email: 'hello@saltlakemobiledetailing.com', // TODO: replace with your real email
  area: 'Salt Lake City & all of Salt Lake County',
  hours: 'Mon–Sat, 8am–7pm',
}

export const SERVICES = [
  {
    id: 'exterior',
    name: 'Exterior Hand Wash',
    price: 'From $45',
    blurb:
      'A showroom shine without leaving your driveway. Foam bath, gentle hand wash, wheel & tire deep clean, tire shine, streak-free windows, and a protective spray wax.',
    features: [
      'Pre-rinse & foam bath',
      'Two-bucket hand wash',
      'Wheel & tire deep clean + shine',
      'Streak-free exterior windows',
      'Spray wax protection (3–6 months)',
    ],
    note: 'Requires access to an outdoor water spigot (standard garden hose connection).',
  },
  {
    id: 'interior',
    name: 'Interior Detail',
    price: 'From $149',
    blurb:
      'A complete interior reset. We deep vacuum, steam clean, remove light stains, and sanitize every surface from dashboard to trunk.',
    features: [
      'Deep vacuum — carpets, mats & crevices',
      'Steam cleaning & light stain removal',
      'Dash, console & cupholder detail',
      'Door jambs & trim',
      'Interior windows + trunk cleaning',
    ],
  },
  {
    id: 'full',
    name: 'Full Detail',
    price: 'From $179',
    blurb:
      'Our most popular package — the complete interior detail plus the full exterior hand wash. Your car will look, feel, and smell like new.',
    features: [
      'Everything in Interior Detail',
      'Everything in Exterior Hand Wash',
      'Trim restoration',
      'Best value — save $15 vs. booking separately',
    ],
    note: 'Requires access to an outdoor water spigot (standard garden hose connection).',
    popular: true,
  },
  {
    id: 'plan',
    name: 'Maintenance Plan',
    price: 'From $99/visit',
    blurb:
      'Keep your car consistently clean with scheduled monthly or bi-monthly visits at our lowest rates. Cancel anytime — no contracts.',
    features: [
      'Monthly or bi-monthly visits',
      'Priority scheduling',
      'Locked-in member pricing',
      'No contracts, cancel anytime',
    ],
  },
]

export const PRICING = {
  sizes: ['Sedan / Coupe', 'SUV (2-row)', 'Large SUV / Truck (3-row)'],
  rows: [
    { service: 'Exterior Hand Wash', prices: ['$45', '$45', '$45'], compare: 'Others charge $50+' },
    { service: 'Interior Detail', prices: ['$149', '$169', '$189'], compare: 'Others charge $197–$237' },
    { service: 'Full Detail', prices: ['$179', '$199', '$219'], compare: 'Others charge $247–$287' },
    { service: 'Maintenance Plan (monthly)', prices: ['$99', '$109', '$119'], compare: 'Others charge $150+' },
  ],
}

export const ADDONS = [
  { name: 'Pet Hair Removal', price: '$35' },
  { name: 'Seat Shampoo', price: '$40' },
  { name: 'Floor Shampoo', price: '$40' },
  { name: 'Odor Elimination', price: '$45' },
  { name: 'Leather Conditioning', price: '$30' },
  { name: 'Headlight Restoration', price: '$50' },
  { name: 'Engine Bay Cleaning', price: '$40' },
  { name: 'Clay Bar & Wax', price: '$60' },
]

export const CITIES = [
  'Salt Lake City',
  'West Valley City',
  'West Jordan',
  'Sandy',
  'South Jordan',
  'Murray',
  'Millcreek',
  'Taylorsville',
  'Draper',
  'Riverton',
  'Herriman',
  'Holladay',
  'Cottonwood Heights',
  'Midvale',
  'Kearns',
  'Magna',
]

export const FAQS = [
  {
    q: 'Do you really come to my home?',
    a: "Yes! We bring our own power and professional equipment to your home, office, or anywhere in Salt Lake County. For exterior washes and full details we just need access to an outdoor water spigot — interior details require nothing at all.",
  },
  {
    q: 'Do I need to provide water?',
    a: 'Only for services that include an exterior wash. We connect to a standard outdoor spigot (garden hose faucet) at your home or office. Interior-only details need no water hookup.',
  },
  {
    q: 'How much does mobile car detailing cost in Salt Lake City?',
    a: "Our exterior hand wash is $45, interior details start at $149, and full details start at $179 for sedans. Larger vehicles like SUVs and trucks cost slightly more. We're consistently $30–$70 less than other detailers in the valley.",
  },
  {
    q: 'How long does a detail take?',
    a: 'An exterior wash takes about 45 minutes. Interior details take 1.5–2.5 hours, and full details take 2–3.5 hours depending on vehicle size and condition.',
  },
  {
    q: 'Do I need to pay upfront?',
    a: "No upfront payment required. You pay when the job is done and you're happy with the result. We accept cash, card, and Venmo.",
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Salt Lake City and all of Salt Lake County, including West Valley City, West Jordan, Sandy, South Jordan, Murray, Millcreek, Taylorsville, Draper, Riverton, Herriman, Holladay, Cottonwood Heights, Midvale, Kearns, and Magna.',
  },
  {
    q: 'Can you remove pet hair and odors?',
    a: 'Absolutely. Pet hair removal and odor elimination are available as add-ons to any interior or full detail.',
  },
  {
    q: 'What if it rains or snows?',
    a: "No problem — we can work in your garage, or we'll happily reschedule at no charge. Utah weather doesn't slow us down.",
  },
]
