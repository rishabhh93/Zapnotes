import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className="relative">
      {/* Prestige background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-10 h-80 w-80 rounded-full bg-gradient-to-tr from-amber-900/30 via-yellow-700/20 to-amber-600/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-gradient-to-tr from-yellow-800/30 via-amber-700/20 to-orange-800/20 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="pt-16 md:pt-24 text-center">
        <div className="inline-block rounded-full border border-amber-200 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-100 px-4 py-1 text-xs font-medium tracking-wide text-amber-800 shadow-sm">
          Built with MERN • Cloudinary powered
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
          About{' '}
          <span className="bg-gradient-to-r from-yellow-700 via-amber-600 to-orange-700 bg-clip-text text-transparent">
            ZapNotes
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-700 md:text-base">
          A fast, intuitive and reliable workspace to capture, organize and access your ideas anywhere.
        </p>
      </section>

      {/* About / Mission */}
      <section className="my-12 grid items-center gap-10 md:my-16 md:grid-cols-2">
        <div className="order-2 md:order-1 space-y-6 text-gray-700 md:pr-6">
          <p>
            ZapNotes is a full-featured note-taking and productivity platform built on the MERN stack. We integrate
            Cloudinary for high-performance media storage, enabling efficient upload, secure access, and on-demand
            retrieval of text and image-based notes.
          </p>
          <div>
            <h3 className="text-lg font-semibold text-amber-800">Our Mission</h3>
            <p className="mt-2">
              We simplify how people capture and organize thoughts by offering a seamless note-taking experience with
              powerful features, real-time syncing, and secure access—so students, professionals, and creatives stay
              focused and in control.
            </p>
          </div>
        </div>

        {/* Image Card */}
        <div className="order-1 md:order-2">
          <div className="group relative mx-auto w-full max-w-[520px] overflow-hidden rounded-2xl border border-amber-100 bg-gradient-to-br from-white/90 via-white/80 to-white/90 p-2 shadow-md backdrop-blur">
            <img
              src={assets.about}
              alt="About ZapNotes"
              className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            {/* warm shine */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -inset-x-40 -top-1/2 h-full rotate-12 bg-gradient-to-r from-transparent via-yellow-200/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="md:my-20">
        <div className="text-center">
          <Title text1={'WHY'} text2={'CHOOSE US'} />
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-700">
            Thoughtful craftsmanship, effortless experience, and support that actually helps.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Quality Assurance',
              desc:
                'We rigorously design and test every feature to ensure a smooth, secure, and bug-free note-taking experience tailored for productivity.',
            },
            {
              title: 'Convenience',
              desc:
                'An intuitive interface with real-time syncing makes it effortless to capture, organize, and access your notes across devices.',
            },
            {
              title: 'Exceptional Support',
              desc:
                'We listen closely and respond quickly—continuous improvements keep your workflow moving without interruptions.',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-amber-200 bg-gradient-to-br from-white/90 via-white/80 to-white/90 p-6 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="absolute -top-3 left-6 rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-medium tracking-wide text-amber-800 shadow-sm">
                Feature
              </div>
              <h4 className="mt-1 text-base font-semibold text-amber-900">{card.title}</h4>
              <p className="mt-2 text-sm text-gray-700">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="my-16 flex flex-col items-center justify-center gap-4 rounded-2xl border border-amber-300 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-100 p-8 text-center shadow-sm md:my-24">
        <h3 className="text-2xl font-bold md:text-3xl">Ready to supercharge your notes?</h3>
        <p className="max-w-2xl text-sm text-gray-700">
          Join thousands boosting productivity with a clean, fast, and secure note-taking flow.
        </p>
        <a
          href="/signup"
          className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:opacity-95 active:opacity-90"
        >
          Get Started
        </a>
      </section>

      <NewsletterBox />
    </div>
  )
}

export default About
