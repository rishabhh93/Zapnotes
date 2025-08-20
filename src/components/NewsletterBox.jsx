import React from 'react'

const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <section className="my-16">
      <div className="mx-auto max-w-2xl rounded-2xl border border-amber-200 bg-gradient-to-br from-white/90 via-white/80 to-white/90 p-6 shadow-sm backdrop-blur md:p-8">
        <div className="text-center">
          <p className="text-2xl font-semibold text-amber-900">
            Smart Students Subscribe. Do You?
          </p>
          <p className="mt-3 text-sm text-gray-700">
            Join 10,000+ students and get priority access to trending notes, toppers’ picks, 
            and exclusive deals — straight to your inbox.
          </p>
        </div>

        <form
          onSubmit={onSubmitHandler}
          className="mt-6 flex w-full flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-xl border border-amber-300 bg-white px-4 py-3 pr-10 text-sm text-gray-800 outline-none ring-0 transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              @
            </span>
          </div>
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95 active:opacity-90"
          >
            SUBSCRIBE
          </button>
        </form>

        <p className="mt-3 text-center text-xs text-gray-500">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

export default NewsletterBox
