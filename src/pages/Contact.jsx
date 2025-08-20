import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className="relative">
      {/* Prestige amber background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-900/25 via-yellow-800/20 to-amber-700/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-yellow-900/25 via-amber-800/20 to-orange-700/20 blur-3xl" />
      </div>

      {/* Page container */}
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="pt-10 text-center md:text-left">
          <Title text1={'CONTACT'} text2={'US'} />
        </div>

        {/* Main content */}
        <div className="my-10 mb-24 grid items-start gap-10 md:grid-cols-2">
          {/* Image card */}
          <div className="w-full">
            <div className="overflow-hidden rounded-xl border border-amber-200 bg-white p-2 shadow-sm">
              <img
                className="w-full rounded-lg object-cover"
                src={assets.contact_img}
                alt="Contact"
              />
            </div>
          </div>

          {/* Info column */}
          <div className="flex w-full flex-col gap-6">
            {/* About card */}
            <div className="rounded-xl border border-amber-200 bg-white p-6 shadow-sm">
              <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                About
              </span>
              <p className="mt-3 text-xl font-semibold text-amber-900">About Our Platform</p>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                We’re an online platform dedicated to making academic content easily accessible and affordable.
                Our store allows students to browse, upload, and purchase high-quality notes and resources from
                verified contributors.
              </p>
            </div>

            {/* Contact card */}
            <div className="rounded-xl border border-amber-200 bg-white p-6 shadow-sm">
              <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                Support
              </span>
              <p className="mt-3 text-xl font-semibold text-amber-900">Get in Touch</p>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                Have questions, feedback, or need support? Reach out to us anytime.
                <br />
                <span className="font-medium text-amber-900">Email:</span>{' '}
                <a
                  href="mailto:support@zapnotes.io"
                  className="font-medium text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                >
                  support@zapnotes.io
                </a>
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
                  Fast response
                </span>
                <span className="rounded-full border border-yellow-300 bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-800">
                  Student-first
                </span>
              </div>
            </div>
          </div>
        </div>

        <NewsletterBox />
      </div>
    </div>
  )
}

export default Contact
