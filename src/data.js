export const BUSINESS = {
  name: 'Salt Lake Mobile Detailing',
  owner: 'Logan',
  phone: '(509) 359-0917',
  phoneHref: 'tel:+15093590917',
  email: 'saltlake.mobiledetails@gmail.com',
  area: 'Salt Lake City & all of Salt Lake County',
  hours: 'Mon–Sat, 8am–7pm',
}

export const SERVICES = [
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
    { service: 'Interior Detail', prices: ['$149', '$169', '$189'], compare: 'Others charge $197–$237' },
    { service: 'Maintenance Plan (monthly)', prices: ['$99', '$109', '$119'], compare: 'Others charge $150+' },
  ],
}

export const ADDONS = [
  { name: 'Pet Hair Removal', price: '$35' },
  { name: 'Seat Shampoo', price: '$40' },
  { name: 'Floor Shampoo', price: '$40' },
  { name: 'Odor Elimination', price: '$45' },
  { name: 'Leather Conditioning', price: '$30' },
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
    a: "Yes! We bring our own power and professional equipment to your home, office, or anywhere in Salt Lake County. You don't need to provide anything — not even water. Just access to your vehicle.",
  },
  {
    q: 'How much does mobile car detailing cost in Salt Lake City?',
    a: "Our interior details start at $149 for sedans, and maintenance plan visits start at $99. Larger vehicles like SUVs and trucks cost slightly more. We're consistently $30–$70 less than other detailers in the valley.",
  },
  {
    q: 'How long does a detail take?',
    a: 'Interior details take 1.5–2.5 hours depending on vehicle size and condition. Maintenance plan visits are usually quicker once your car is on a regular schedule.',
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
    a: 'Absolutely. Pet hair removal and odor elimination are available as add-ons to any interior detail.',
  },
  {
    q: 'What if it rains or snows?',
    a: "No problem — we can work in your garage, or we'll happily reschedule at no charge. Utah weather doesn't slow us down.",
  },
]
