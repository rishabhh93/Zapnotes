import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    // Wrap the entire component in a div with the beige background color
    <div className='bg-[#EAE7DD]'>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>ZapNotes is a full-featured note-taking and productivity platform built using the MERN stack, designed to help users seamlessly create, organize, and manage their notes. The application integrates Cloudinary for high-performance media storage, enabling efficient upload, secure access, and on-demand retrieval of both text and image-based notes.</p>
             
              <b className='text-gray-800'>Our Mission</b>
              <p>At ZapNotes, our mission is to simplify the way people capture and organize their thoughts by offering a fast, intuitive, and reliable digital workspace. We aim to empower students, professionals, and creatives with a seamless note-taking experience that combines powerful features, real-time syncing, and secure access — helping them stay focused, productive, and always in control of their ideas</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We thoughtfully design and rigorously test every feature to ensure a smooth, secure, and bug-free note-taking experience tailored to our users' productivity needs.
.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With an intuitive interface and real-time syncing, ZapNotes makes it effortless to capture, organize, and access your notes anytime, anywhere — across all devices.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team is committed to providing timely assistance and listening to user feedback to continuously improve the platform — ensuring your productivity is never interrupted.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About