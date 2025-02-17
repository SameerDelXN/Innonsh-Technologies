import React from 'react'
import Image from 'next/image'
import Company1Logo from "../../../public/Reviews/company1.png"
import Company2Logo from "../../../public/Reviews/company2.png"
import Company3Logo from "../../../public/Reviews/company3.png"
const Reviews = () => {
  return (
    <div className='w-full min-h-[87vh]  bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] p-10 flex flex-col items-start justify-evenly phone:p-3 phone:gap-10 phone:pt-10 '>
        <div className='flex flex-col items-start gap-3'>
          <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] phone:text-lg'>Helping Businesses Scale Faster & Smarter</h1>
          <hr className="w-32 h-0.5 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] border-0 rounded" />

        </div>
        <div className='w-full flex items-center justify-evenly phone:flex-col phone:gap-3'>
          <div className='w-1/4 h-96 bg-white bg-opacity-40 border border-[#e4e4e4] flex flex-col items-center justify-center gap-3 p-5 phone:w-full'>
            <Image
              src={Company1Logo}
              width={1920}
              height={1080}
              className='w-40 h-40 object-contain  phone:w-28 '
            />
            <h1 className='text-center font-semibold'>“Innonsh Technologies helped us automate our operations seamlessly, leading to improved efficiency and customer satisfaction.”</h1>
            <p className='w-full text-end text-sm opacity-45'>-CTO,LogoIpsum</p>
          </div>
          <div className='w-1/4 h-96 bg-white bg-opacity-40 border border-[#e4e4e4] flex flex-col items-center justify-center gap-3 p-5 phone:w-full'>
          <Image
              src={Company2Logo}
              width={1920}
              height={1080}
              className='w-40 h-40 object-contain phone:w-28'
            />
            <h1 className='text-center font-semibold'>“Moving to Innonsh’s cloud platform revolutionized our customer experience and reduced downtime significantly.”</h1>
            <p className='w-full text-end text-sm opacity-45'>-CEO,LogoIpsum</p>
          </div>
          <div className='w-1/4 h-96 bg-white bg-opacity-40 border border-[#e4e4e4] flex flex-col items-center justify-center gap-3 p-5 phone:w-full'>
          <Image
              src={Company3Logo}
              width={1920}
              height={1080}
              className='w-40 h-40 object-contain phone:w-28'
            />
            <h1 className='text-center font-semibold'>“Innonsh’s AI chatbot transformed our customer service, improving retention and reducing workload.”</h1>
            <p className='w-full text-end text-sm opacity-45'>-CMO,LogoIpsum</p>
          </div>
        </div>
    </div>
  )
}

export default Reviews