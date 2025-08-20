import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className="mb-6 flex items-center justify-center md:justify-start">
      <div className="inline-flex flex-col items-start">
        <div className="inline-flex items-center gap-2">
          <span className="text-sm tracking-wide uppercase text-amber-700/70">{text1}</span>
          <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 bg-clip-text text-transparent">
            {text2}
          </span>
        </div>
        <span className="mt-2 inline-block h-[3px] w-16 rounded-full bg-gradient-to-r from-yellow-700 via-amber-600 to-orange-600" />
      </div>
    </div>
  )
}

export default Title
