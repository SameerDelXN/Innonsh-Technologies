import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-full h-auto p-5  flex items-center justify-between bg-[#F5F7FA]'>
      {/* Logo and Name */}
      <div className='flex items-center space-x-2'>
        <Image src='/logo.png' alt='Innonsh Technologies' width={60} height={60} />
        <span className=' text-lg font-bold text-[#011630] flex flex-col items-start'><span>Innonsh</span><span>Technologies</span></span>
      </div>
      
      {/* Navigation Links */}
      <div className='flex space-x-6 phone:hidden'>
        <Link href='#' className='hover:text-[#8B5CF6] transition-all ease-in-out duration-150'>Home</Link>
        <Link href='#' className='hover:text-[#8B5CF6] transition-all ease-in-out duration-150'>Solutions</Link>
        <Link href='#' className='hover:text-[#8B5CF6] transition-all ease-in-out duration-150'>Industries</Link>
        <Link href='#' className='hover:text-[#8B5CF6] transition-all ease-in-out duration-150'>About Us</Link>
        <Link href='#' className='hover:text-[#8B5CF6] transition-all ease-in-out duration-150'>Contact Us</Link>
      </div>
      
      {/* Schedule a Meet Button */}
      <div className='phone:hidden'>
        <button className='bg-[#8B5CF6] text-white transition-all ease-in-out duration-300 border border=[#8B5CF6]  px-4 py-2 rounded-lg font-medium hover:bg-transparent hover:border hover:border-[#8B5CF6] hover:text-[#8B5CF6]'>
          Schedule a Meet
        </button>
      </div>
    </div>
  );
};

export default Navbar;