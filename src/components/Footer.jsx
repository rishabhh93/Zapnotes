import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="relative">
      {/* subtle prestige background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-16 -left-24 h-56 w-56 rounded-full bg-gradient-to-tr from-yellow-800/15 via-amber-600/15 to-orange-600/15 blur-3xl" />
        <div className="absolute -bottom-20 -right-24 h-56 w-56 rounded-full bg-gradient-to-tr from-amber-700/15 via-yellow-700/15 to-orange-700/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* top grid */}
        <div className="my-10 mt-40 grid grid-cols-1 gap-10 text-sm sm:grid-cols-[3fr_1fr_1fr] sm:gap-14">
          {/* brand + about */}
          <div>
            <img src={assets.zapnotes} className="mb-5 w-32" alt="" />
            <p className="w-full text-gray-700 md:w-2/3">
              ZapNotes is your go-to platform for accessing high-quality, student-shared notes in seconds. Whether you're preparing for exams, catching up on lectures, or need quick revision material — ZapNotes helps you study smarter, not harder.
              <br /><br />
              Trusted by thousands of students, we bring you curated notes, trending topics, and instant downloads — all in one place.
            </p>
          </div>

          {/* company */}
          <div>
            <p className="mb-5 text-xl font-semibold bg-gradient-to-r from-yellow-800 via-amber-600 to-orange-700 bg-clip-text text-transparent">
              COMPANY
            </p>
            <ul className="flex flex-col gap-2 text-gray-700">
              <li className="transition hover:text-amber-700">Home</li>
              <li className="transition hover:text-amber-700">About us</li>
              <li className="transition hover:text-amber-700">Browse Notes</li>
              <li className="transition hover:text-amber-700">Terms & conditions</li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="mb-5 text-xl font-semibold bg-gradient-to-r from-yellow-800 via-amber-600 to-orange-700 bg-clip-text text-transparent">
              GET IN TOUCH
            </p>
            <ul className="flex flex-col gap-2 text-gray-700">
              <li className="transition hover:text-amber-700">+1-212-456-7890</li>
              <li className="transition hover:text-amber-700">support@zapnotes.com</li>
            </ul>
          </div>
        </div>

        {/* divider + copyright */}
        <div className="pt-2">
          <div className="h-px w-full bg-gradient-to-r from-yellow-800/30 via-amber-600/30 to-orange-700/30" />
          <p className="py-5 text-center text-xs text-gray-500">
            © 2024 ZapNotes - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
