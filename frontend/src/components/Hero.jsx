import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row rounded-2xl overflow-hidden bg-white shadow-md relative">
      {/* subtle gold/amber background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-gradient-to-tr from-yellow-800/15 via-amber-600/15 to-orange-600/15 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-gradient-to-tr from-amber-700/15 via-yellow-700/15 to-orange-700/15 blur-3xl" />
      </div>

      {/* Left Section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-12 px-6 md:px-10">
        <div className="text-gray-900 w-full max-w-xl">
          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 md:w-12 bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700" />
            <p className="font-medium text-sm md:text-base text-amber-800 tracking-wide">
              OUR BESTSELLERS
            </p>
          </div>

          {/* Heading */}
          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-tight sm:py-4 bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 bg-clip-text text-transparent">
            Trending Study Sets
          </h1>

          {/* CTA */}
          <div className="mt-2 flex items-center gap-4">
            <a
              href="/collection"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-lg hover:scale-105 active:scale-95"
            >
              SHOP NOW
            </a>
            <span className="h-[2px] w-10 md:w-12 bg-gradient-to-r from-yellow-700 via-amber-600 to-orange-600" />
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full sm:w-1/2 relative">
        <img
          className="w-full h-full object-cover"
          src={assets.STUDY}
          alt="Study"
        />
        {/* soft overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
      </div>
    </div>
  )
}

export default Hero
