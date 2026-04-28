export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />

      <div className="hero-content">
        <div className="hero-tag fade-up fade-up-1">
          Luxury Travel Agency
        </div>

        <h1 className="fade-up fade-up-2">
          Discover<br />
          the World<br />
          <em>in Style</em>
        </h1>

        <p className="fade-up fade-up-3">
          NAGYvar curates extraordinary journeys for discerning travelers.
          From hidden Mediterranean coves to the temples of Southeast Asia —
          every detail, crafted for you.
        </p>

        <div className="hero-actions fade-up fade-up-4">
          <a href="#destinations" className="btn-primary">
            Explore Destinations
          </a>
          <a href="#featured" className="btn-ghost">
            <span>▶</span> Watch Our Story
          </a>
        </div>
      </div>

      <div className="hero-scroll">Scroll</div>
    </section>
  )
}
