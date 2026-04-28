const destinations = [
  {
    country: 'Japan',
    name: 'Kyoto & Tokyo',
    price: 'From $3,200',
    duration: '12 Days',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
  },
  {
    country: 'Greece',
    name: 'Santorini',
    price: 'From $2,400',
    duration: '8 Days',
    img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80',
  },
  {
    country: 'Morocco',
    name: 'Marrakech',
    price: 'From $1,800',
    duration: '7 Days',
    img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80',
  },
  {
    country: 'Maldives',
    name: 'North Malé Atoll',
    price: 'From $5,600',
    duration: '10 Days',
    img: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
  },
  {
    country: 'Peru',
    name: 'Machu Picchu',
    price: 'From $2,900',
    duration: '9 Days',
    img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
  },
]

export default function Destinations() {
  return (
    <section className="section destinations" id="destinations">
      <div className="destinations-header">
        <div>
          <div className="section-tag">Where Will You Go</div>
          <h2 className="section-title">
            Iconic <em>Destinations</em>
          </h2>
          <p className="section-subtitle">
            Hand-picked journeys to the world's most breathtaking places, designed for those who seek the extraordinary.
          </p>
        </div>
        <a href="#contact" className="btn-primary">View All</a>
      </div>

      <div className="destinations-grid">
        {destinations.map((dest, i) => (
          <div key={dest.name} className="dest-card">
            <img src={dest.img} alt={dest.name} loading="lazy" />
            <div className="dest-overlay">
              <div className="dest-country">{dest.country}</div>
              <div className="dest-name">{dest.name}</div>
              <div className="dest-info">
                <span className="dest-price">{dest.price}</span>
                <span className="dest-duration">{dest.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
