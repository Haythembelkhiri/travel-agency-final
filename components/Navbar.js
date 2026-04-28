import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="logo">
        NAGY<span>var</span>
      </Link>

      <ul className="nav-links">
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#featured">Featured</a></li>
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="nav-cta">Book Now</button>
    </nav>
  )
}
