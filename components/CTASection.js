import { useState } from 'react'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg" />
      <div className="cta-content">
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          Start Your Journey
        </div>
        <h2 className="cta-title">
          Your Dream Trip<br />
          <em>Awaits You</em>
        </h2>
        <p className="cta-subtitle">
          Subscribe to receive exclusive travel offers, early access to new destinations, and insider guides from NAGYvar.
        </p>

        {submitted ? (
          <p style={{ color: 'var(--gold)', fontSize: '16px', letterSpacing: '0.1em' }}>
            ✦ Welcome aboard. We'll be in touch soon.
          </p>
        ) : (
          <div className="cta-form">
            <input
              className="cta-input"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
            <button className="cta-submit" onClick={handleSubmit}>
              Subscribe
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
