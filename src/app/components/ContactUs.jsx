import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/logo2.png"

const ContactUs = () => {
  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] p-10 flex flex-col gap-10 phone:p-3  phone:pt-10'>

      {/* Header Section */}
      <div className='flex flex-col items-start gap-3  '>
        <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] phone:text-lg'>Let’s Build the Future Together</h1>
        <hr className="w-32 h-0.5 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] border-0 rounded" />

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
              className='w-56 h-56  object-cover'
            />
            <h1 className='text-2xl md:text-3xl font-semibold'>Innonsh Technologies</h1>
          </div>
          <form className='w-full flex flex-col items-center gap-3'>
            <input className='w-full p-4 md:p-5 border border-[#e4e4e4] rounded-lg bg-transparent outline-none text-sm md:text-base' placeholder='Your Name' />
            <input className='w-full p-4 md:p-5 border border-[#e4e4e4] rounded-lg bg-transparent outline-none text-sm md:text-base' placeholder='Your Email' />
            <input className='w-full p-4 md:p-5 border border-[#e4e4e4] rounded-lg bg-transparent outline-none text-sm md:text-base' placeholder='Your Message' />
            <input
              type="submit"
              value="Submit"
              className="w-full p-4 md:p-5 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] text-white rounded-lg cursor-pointer hover:from-[#7a4bdc] hover:to-[#6539b3] transition"
            />
          </form>
        </div>

        {/* Subscribe Form */}
        <div className='w-1/2 h-[250px] bg-white bg-opacity-40 border border-[#e4e4e4] rounded-lg p-5 flex flex-col items-start justify-between phone:w-full'>
          <h1 className='text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] phone:text-sm'>Subscribe for Industry Insights</h1>
          <form className='w-full flex flex-col items-center gap-3'>
            <input type='email' className='w-full p-4 md:p-5 border border-[#e4e4e4] rounded-lg bg-transparent outline-none text-sm md:text-base' placeholder='Your Email' />
            <input
              type="submit"
              value="Subscribe"
              className="w-full p-4 md:p-5 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] text-white rounded-lg cursor-pointer hover:from-[#7a4bdc] hover:to-[#6539b3] transition"
            />
          </form>
        </div>
      </div>

    </div>
  )
}

export default ContactUs;
