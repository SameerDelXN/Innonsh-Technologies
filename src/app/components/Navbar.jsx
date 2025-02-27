"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when user clicks outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "menu-overlay") {
      setMenuOpen(false);
    }
  };

  return (
    <div className="w-full h-auto px-5 py-2 flex items-center justify-between bg-[#F5F7FA] relative">
      {/* Logo and Name */}
      <Link href="/" className="flex items-center space-x-2 gap-2 ">
        <Image
          src="/logo-SVG.svg"
          alt="Innonsh Technologies"
          className="w-52 h-24 phone:w-32 phone:h-16 "
          width={1920}
          height={1080}

        />
      {/* <div className="flex flex-col items-start gap-1">
  <span className="text-lg font-bold text-[#011630] flex flex-col items-start leading-5 gap-1">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EE4E94] to-[#924CE8]">Innonsh</span>
    <span>Technologies</span>
  </span> */}
  {/* <span className="text-sm">
    Innovation Begins with Every 
    <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#EE4E94] to-[#924CE8]"> Ansh</span>, Shaping a Brighter 
    <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#EE4E94] to-[#924CE8]"> Future</span>.
  </span> */}
{/* </div> */}

      </Link>

      {/* Navigation Links (Hidden on phone) */}
      <div className="flex space-x-6 phone:hidden">
        <Link
          href="/"
          className="hover:text-[#EE4E94] transition-all ease-in-out duration-150"
        >
          Home
        </Link>
        <Link
          href="/solutions"
          className="hover:text-[#EE4E94] transition-all ease-in-out duration-150"
        >
          Solutions
        </Link>
        <Link
          href="/Industries"
          className="hover:text-[#EE4E94] transition-all ease-in-out duration-150"
        >
          Industries
        </Link>
        <Link
          href="/about-us"
          className="hover:text-[#EE4E94] transition-all ease-in-out duration-150"
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className="hover:text-[#EE4E94] transition-all ease-in-out duration-150"
        >
          Contact Us
        </Link>
      </div>

      {/* Schedule a Meet Button */}
      <div className="phone:hidden">
        <a
          href="mailto:info@innonsh.com"
          className="bg-gradient-to-r from-[#EE4E94] to-[#924CE8] text-white transition-all ease-in-out duration-300 border border-none  px-4 py-3 rounded-lg font-medium hover:bg-transparent hover:border-[#924CE8] hover:text-[#924CE8]"
        >
          Schedule a Meet
        </a>
      </div>

      {/* Hamburger Menu Icon */}
      <button
        className="hidden phone:block text-2xl text-[#011630]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Overlay and Mobile Menu */}
      {menuOpen && (
        <div
          id="menu-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={handleOutsideClick}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
            className="absolute top-0 right-0 w-1/2 h-screen bg-[#F5F7FA] shadow-lg p-5 flex flex-col items-start space-y-4 z-50"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center justify-center space-x-2 mb-4 w-full"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/logo-SVG.svg"
                alt="Innonsh Technologies"
                className="w-full h-24"
                width={48}
                height={48}
              />
            
            </Link>

            {/* Navigation Links */}
            <Link
              href="/"
              className="hover:text-[#EE4E94] transition-all ease-in-out duration-150"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="hover:text-[#EE4E94] transition-all ease-in-out duration-150"
              onClick={() => setMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/Industries"
              className="hover:text-[#EE4E94] transition-all ease-in-out duration-150"
              onClick={() => setMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/about-us"
              className="hover:text-[#EE4E94] transition-all ease-in-out duration-150"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-[#EE4E94] transition-all ease-in-out duration-150"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* Schedule a Meet Button */}
            <a
              href="mailto:info@innonsh.com"
              className="bg-gradient-to-r phone:w-full phone:text-center from-[#EE4E94] to-[#924CE8] text-white transition-all ease-in-out duration-300 border-none border-[#924CE8] px-4 py-2 rounded-lg font-medium hover:bg-transparent hover:border-[#924CE8] hover:text-[#924CE8]"
              onClick={() => setMenuOpen(false)}
            >
              Schedule a Meet
            </a>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
