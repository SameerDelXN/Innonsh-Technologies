import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/logo.png"

const ContactUs = () => {
  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] p-10 flex flex-col gap-10 phone:p-3  phone:pt-10'>
      
      {/* Header Section */}
      <div className='flex flex-col items-start gap-3  '>
        <h1 className='text-2xl font-medium text-[#8B5CF6] phone:text-lg'>Let’s Build the Future Together</h1>
        <hr className='w-32 h-0.5 bg-[#8B5CF6]' />
      </div>

      {/* Content Section */}
      <div className='flex items-center justify-evenly gap-3 phone:flex-col'>

        {/* Contact Form */}
        <div className='w-1/2 h-[700px] bg-white bg-opacity-40 border border-[#e4e4e4] rounded-lg p-5 flex flex-col items-center justify-between phone:w-full'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <Image
              src={Logo}
              width={1920}
              height={1080}
              alt='Logo'
              className='w-32 h-32 md:w-56 md:h-56 object-contain'
            />
            <h1 className='text-2xl md:text-3xl font-semibold'>Innonsh Technologies</h1>
          </div>
          <form className='w-full flex flex-col items-center gap-3'>
            <input className='w-full p-4 md:p-5 border border-[#e4e4e4] rounded-lg bg-transparent outline-none text-sm md:text-base' placeholder='Your Name' />
            <input className='w-full p-4 md:p-5 border border-[#e4e4e4] rounded-lg bg-transparent outline-none text-sm md:text-base' placeholder='Your Email' />
            <input className='w-full p-4 md:p-5 border border-[#e4e4e4] rounded-lg bg-transparent outline-none text-sm md:text-base' placeholder='Your Message' />
            <input type='submit' value={"Submit"} className='w-full p-4 md:p-5 bg-[#8B5CF6] text-white rounded-lg cursor-pointer hover:bg-[#7a4bdc] transition' />
          </form>
        </div>

        {/* Subscribe Form */}
        <div className='w-1/2 h-[300px] bg-white bg-opacity-40 border border-[#e4e4e4] rounded-lg p-5 flex flex-col items-start justify-between phone:w-full'>
          <h1 className='text-lg md:text-xl text-[#8B5CF6]'>Subscribe for Industry Insights</h1>
          <form className='w-full flex flex-col items-center gap-3'>
            <input type='email' className='w-full p-4 md:p-5 border border-[#e4e4e4] rounded-lg bg-transparent outline-none text-sm md:text-base' placeholder='Your Email' />
            <input type='submit' value={"Subscribe"} className='w-full p-4 md:p-5 bg-[#8B5CF6] text-white rounded-lg cursor-pointer hover:bg-[#7a4bdc] transition' />
          </form>
        </div>
      </div>

    </div>
  )
}

export default ContactUs;
