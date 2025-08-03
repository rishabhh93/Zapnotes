import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact" />
        
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>About Our Platform</p>
          <p className='text-gray-500'>
            We’re an online platform dedicated to making academic content easily accessible and affordable. 
            Our store allows students to browse, upload, and purchase high-quality notes and resources from verified contributors.
          </p>

          <p className='font-semibold text-xl text-gray-600'>Get in Touch</p>
          <p className='text-gray-500'>
            Have questions, feedback, or need support? Reach out to us anytime.
            <br />
            <span className="font-medium text-black">Email:</span> support@zapnotes.io
          </p>

          <p className='font-semibold text-xl text-gray-600'>Careers at ZapNotes</p>
          <p className='text-gray-500'>
            Passionate about education and tech? We're growing! Learn more about open roles and how you can contribute.
          </p>

          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Careers
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
