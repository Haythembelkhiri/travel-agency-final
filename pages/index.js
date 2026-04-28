import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import Destinations from '../components/Destinations'
import Services from '../components/Services'
import Featured from '../components/Featured'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>NAGYvar — Luxury Travel Agency</title>
        <meta name="description" content="NAGYvar crafts extraordinary journeys for discerning travelers. Private charters, luxury accommodations, and unforgettable cultural experiences worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Destinations />
        <Services />
        <Featured />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
