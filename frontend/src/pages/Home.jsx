import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div className="relative">
      {/* subtle prestige page accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-yellow-800/12 via-amber-700/12 to-orange-700/12 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-800/12 via-yellow-700/12 to-orange-700/12 blur-3xl" />
      </div>

      <Hero />
      <div className="mx-auto max-w-6xl px-4">
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <NewsletterBox />
      </div>
    </div>
  )
}

export default Home
