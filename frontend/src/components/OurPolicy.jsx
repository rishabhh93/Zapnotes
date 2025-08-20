import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className="py-16 relative">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-gradient-to-tr from-yellow-800/10 via-amber-700/10 to-orange-700/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-gradient-to-tr from-amber-800/10 via-yellow-700/10 to-orange-700/10 blur-3xl" />
      </div>

      {/* Policies grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center text-gray-800">
        {[
          {
            icon: assets.exchange_icon,
            title: "Quality Assurance",
            desc: "All notes are student-rated and reviewed for clarity, accuracy, and exam readiness."
          },
          {
            icon: assets.quality_icon,
            title: "Instant Access",
            desc: "Your notes are available for download immediately after purchase — no delays."
          },
          {
            icon: assets.support_img,
            title: "Support That Gets You",
            desc: "Questions or issues? We're here 24/7 to make sure your learning never stops."
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-amber-200 bg-gradient-to-br from-white/90 via-white/80 to-white/90 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-amber-200 bg-amber-50">
              <img src={item.icon} className="w-8" alt={item.title} />
            </div>
            <p className="font-semibold text-amber-900">{item.title}</p>
            <p className="mt-2 text-sm text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Tagline */}
      <div className="mt-10 flex justify-center">
        <span className="rounded-full border border-amber-300 bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 px-3 py-1 text-xs font-medium text-amber-800">
          Student-first policies
        </span>
      </div>
    </div>
  )
}

export default OurPolicy
