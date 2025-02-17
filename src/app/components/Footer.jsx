"use client"
import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/whiteLogo.png"
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-[#4C24B1] p-10 flex flex-col text-white relative'>
      {/* Top Section */}
      <div className='flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-10 md:gap-0'>
        
        {/* Logo & Social Links */}
        <div className='flex flex-col items-center md:items-start gap-3'>
          <Image src={Logo} width={1920} height={1080} className='w-24 h-24 md:w-32 md:h-32'/>
          <h1 className='text-xl md:text-2xl font-semibold'>Innonsh Technologies</h1>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-lg flex items-center justify-center'><FaInstagram className='text-lg md:text-2xl'/></div>
            <div className='w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-lg flex items-center justify-center'> <FaFacebook className="text-lg md:text-2xl"/></div>
            <div className='w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-lg flex items-center justify-center'><FaLinkedin className="text-lg md:text-2xl"/></div>
            <div className='w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-lg flex items-center justify-center'><FaYoutube className='text-lg md:text-2xl'/></div>
          </div>
        </div>

        {/* Links Section */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10'>
          <div className='flex flex-col items-center md:items-start gap-2'>
            <h1 className='text-lg md:text-xl'>Products</h1>
            <p className='text-sm opacity-90'>Overview</p>
            <p className='text-sm opacity-90'>Features</p>
            <p className='text-sm opacity-90'>Solutions</p>
            <p className='text-sm opacity-90'>Tutorial</p>
            <p className='text-sm opacity-90'>Releases</p>
          </div>
          <div className='flex flex-col items-center md:items-start gap-2'>
            <h1 className='text-lg md:text-xl'>Company</h1>
            <p className='text-sm opacity-90'>About Us</p>
            <p className='text-sm opacity-90'>Careers</p>
            <p className='text-sm opacity-90'>Press</p>
            <p className='text-sm opacity-90'>News</p>
            <p className='text-sm opacity-90'>Contact</p>
          </div>
          <div className='flex flex-col items-center md:items-start gap-2'>
            <h1 className='text-lg md:text-xl'>Resources</h1>
            <p className='text-sm opacity-90'>Blog</p>
            <p className='text-sm opacity-90'>Newsletter</p>
            <p className='text-sm opacity-90'>Events</p>
            <p className='text-sm opacity-90'>Help Center</p>
            <p className='text-sm opacity-90'>Support</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='w-full flex flex-col md:flex-row items-center justify-between text-center md:text-left mt-8'>
        <h1 className="text-sm md:text-base">info@innonshtech.com</h1>
        <h1 className="text-sm md:text-base">2025 - All rights Reserved.</h1>
      </div>

      {/* Divider Line */}
      <hr className='w-5/6 h-0.5 bg-white absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-35'/>
    </div>
  )
}

export default Footer;
