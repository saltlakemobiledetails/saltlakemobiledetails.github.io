import { IconPhone, IconSparkleCar, IconVan } from '../art.jsx'

const STEPS = [
  {
    Icon: IconPhone,
    title: '1. Book in Minutes',
    text: 'Call or text us with your vehicle type and address. We confirm a time that works for you — often same-week.',
  },
  {
    Icon: IconVan,
    title: '2. We Come to You',
    text: 'Our fully equipped van arrives with power and professional products. For exterior washes, we simply hook up to your outdoor water spigot — everything else is on us.',
  },
  {
    Icon: IconSparkleCar,
    title: '3. Drive a Like-New Car',
    text: 'Walk around, inspect every inch, and pay only when you are completely happy. That is our guarantee.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <p className="eyebrow center">How It Works</p>
        <h2 className="center">Three Easy Steps to a Spotless Car</h2>
        <div className="steps-grid">
          {STEPS.map(({ Icon, title, text }) => (
            <div className="step" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
