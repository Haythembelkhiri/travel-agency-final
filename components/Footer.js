import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo">
            NAGY<span style={{ color: 'var(--gold)' }}>var</span>
          </Link>
          <p className="footer-tagline">
            Crafting extraordinary journeys for discerning travelers since 2012. Every destination, a masterpiece.
          </p>
          <div className="social-links">
            <a className="social-link" href="#">𝕏</a>
            <a className="social-link" href="#">in</a>
            <a className="social-link" href="#">ig</a>
            <a className="social-link" href="#">yt</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Destinations</h4>
          <ul className="footer-links">
            <li><a href="#">Europe</a></li>
            <li><a href="#">Asia Pacific</a></li>
            <li><a href="#">Middle East</a></li>
            <li><a href="#">Americas</a></li>
            <li><a href="#">Africa</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#">Private Charters</a></li>
            <li><a href="#">Luxury Hotels</a></li>
            <li><a href="#">Guided Tours</a></li>
            <li><a href="#">Culinary Travel</a></li>
            <li><a href="#">Wellness Retreats</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><a href="#">About NAGYvar</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Press & Media</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 NAGYvar Travel Agency. All rights reserved.</p>
        <p>Privacy Policy · Terms of Service · Cookie Policy</p>
      </div>
    </footer>
  )
}
