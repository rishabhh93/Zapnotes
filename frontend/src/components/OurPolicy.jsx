import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Quality Assurance</p>
        <p className=' text-gray-400'>All notes are student-rated and reviewed for clarity, accuracy, and exam readiness.</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Instant Access</p>
        <p className=' text-gray-400'>Your notes are available for download immediately after purchase — no delays.</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Support That Gets You</p>
        <p className=' text-gray-400'>Questions or issues? We're here 24/7 to make sure your learning never stops.</p>
      </div>

    </div>
  )
}

export default OurPolicy
