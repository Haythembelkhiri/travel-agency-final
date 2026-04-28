const testimonials = [
  {
    text: 'NAGYvar transformed our anniversary trip into something out of a dream. Every moment was perfectly orchestrated without ever feeling scripted.',
    author: 'Isabelle M.',
    location: 'Paris, France',
    initial: 'I',
  },
  {
    text: 'I\'ve traveled with many agencies over the years. None come close to the level of attention and genuine care that NAGYvar brings to every detail.',
    author: 'James K.',
    location: 'London, UK',
    initial: 'J',
  },
  {
    text: 'The Kyoto experience they crafted was simply unforgettable. Private temple access at dawn, sake tasting with a master — I keep telling everyone.',
    author: 'Amara O.',
    location: 'Lagos, Nigeria',
    initial: 'A',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="section-tag" style={{ justifyContent: 'center' }}>What Travelers Say</div>
      <h2 className="section-title">
        Stories of <em>Wonder</em>
      </h2>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.author} className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.initial}</div>
              <div>
                <div className="author-name">{t.author}</div>
                <div className="author-location">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
