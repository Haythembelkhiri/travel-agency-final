export default function Featured() {
  return (
    <section className="featured" id="featured">
      <div className="featured-image">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80"
          alt="Swiss Alps Journey"
        />
        <div className="featured-badge">✦ Editor's Pick</div>
      </div>

      <div className="featured-content">
        <div className="featured-rating">
          {'★★★★★'.split('').map((s, i) => (
            <span key={i} className="star">{s}</span>
          ))}
        </div>

        <h2 className="section-title featured-title">
          Swiss Alps<br />
          <em>Grand Tour</em>
        </h2>

        <p className="featured-desc">
          Journey through the crown of Europe — from Zürich's art scene to the crystalline waters of Lake Geneva,
          with private access to Matterhorn's summit station and a night under the stars in a Michelin-starred mountain refuge.
        </p>

        <div className="featured-details">
          <div>
            <div className="detail-label">Duration</div>
            <div className="detail-value">14 Days</div>
          </div>
          <div>
            <div className="detail-label">Starting From</div>
            <div className="detail-value">$8,900</div>
          </div>
          <div>
            <div className="detail-label">Group Size</div>
            <div className="detail-value">Max 6</div>
          </div>
          <div>
            <div className="detail-label">Best Season</div>
            <div className="detail-value">Jun — Sep</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="#contact" className="btn-primary">Book This Journey</a>
          <a href="#contact" className="btn-ghost">Learn More →</a>
        </div>
      </div>
    </section>
  )
}
