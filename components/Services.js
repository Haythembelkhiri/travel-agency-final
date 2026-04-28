const services = [
  {
    icon: '✈',
    title: 'Private Charter Flights',
    desc: 'Fly on your terms with our exclusive private aviation partnerships. No queues, no compromises.',
  },
  {
    icon: '🏨',
    title: 'Luxury Accommodations',
    desc: 'From overwater bungalows to historic palazzos — we access rooms that aren\'t listed anywhere else.',
  },
  {
    icon: '🧭',
    title: 'Expert Local Guides',
    desc: 'Our hand-vetted cultural guides unlock authentic experiences far beyond the tourist trail.',
  },
  {
    icon: '🍽',
    title: 'Culinary Experiences',
    desc: 'Private chef dinners, market tours, and reservations at the world\'s most coveted restaurants.',
  },
  {
    icon: '🤿',
    title: 'Adventure & Wellness',
    desc: 'From deep-sea diving in the Coral Triangle to sunrise yoga in Bali — curated for your spirit.',
  },
  {
    icon: '🎭',
    title: 'Cultural Immersion',
    desc: 'Exclusive backstage access to festivals, galleries, and traditions most visitors never witness.',
  },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div style={{ maxWidth: '600px' }}>
        <div className="section-tag">What We Offer</div>
        <h2 className="section-title">
          Travel <em>Redefined</em>
        </h2>
        <p className="section-subtitle">
          Every NAGYvar journey is built from scratch. We don't sell packages — we craft personal masterpieces.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
