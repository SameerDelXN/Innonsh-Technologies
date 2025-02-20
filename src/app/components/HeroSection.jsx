"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Shape1 from "../../../public/Shapes/HomeShape1.png";
import Shape2 from "../../../public/Shapes/HomeShape2.png";
import Shape3 from "../../../public/Shapes/HomeShape3.png";
import Shape4 from "../../../public/Shapes/HomeShape4.png";
import { Link } from 'react-scroll';
const HeroSection = () => {
  const [scrollStep, setScrollStep] = useState(0);
  const [animationsComplete, setAnimationsComplete] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());
  const heroRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (animationsComplete) return;

      event.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime < 500) return;

      if (event.deltaY > 0) {
        setScrollStep((prev) => (prev < 4 ? prev + 1 : prev));
      } else {
        setScrollStep((prev) => (prev > 0 ? prev - 1 : prev));
      }

      setLastScrollTime(now);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [animationsComplete, lastScrollTime]);

  useEffect(() => {
    if (scrollStep === 4) {
      setTimeout(() => {
        setAnimationsComplete(true);
      }, 800);
    }
  }, [scrollStep]);

  const shapeVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div
      ref={heroRef}
      className={`
        w-full min-h-screen 
        flex flex-col items-center justify-center 
        bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] 
        relative overflow-hidden 
        phone:min-h-[75vh]
        tablet:min-h-[85vh]
        laptop:min-h-[90vh]
        p-4
      `}
    >
      {/* Main Content */}
      <div className="
        flex flex-col items-center justify-center 
        gap-6 text-center px-4 z-40
        w-full max-w-6xl mx-auto
      ">
        <h1 className='
          text-4xl font-semibold
          phone:text-2xl
          tablet:text-3xl
          laptop:text-4xl
          desktopxl:text-5xl
          desktop3xl:text-6xl
        '>
          Welcome to Innonsh Technologies
        </h1>
        <p className='
          text-sm font-medium
          phone:text-xs
          tablet:text-sm
          laptop:text-base
          desktopxl:text-lg
          desktop3xl:text-xl
          max-w-2xl mx-auto
        '>
          Your Trusted Partner in Technology Consulting and Solutions
        </p>
        
        {/* Buttons Container */}
        <div className='
          flex items-center gap-3
          phone:flex-row phone:gap-2
          tablet:gap-4
          laptop:gap-6
        '>
          {/* Get Started Button */}
          <Link to='services' smooth={true} className="
          cursor-pointer
            p-3 bg-transparent border-2 font-medium rounded-lg 
            text-transparent text-center
            border-[#B32AFF] 
            bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] 
            bg-clip-border bg-clip-text
            transition-transform duration-300 hover:scale-105
            phone:w-40 phone:p-2 phone:text-sm
            tablet:w-48 tablet:p-3
            laptop:w-56
            desktopxl:w-64 desktopxl:text-lg
            desktop3xl:w-72 desktop3xl:text-xl
          ">
            Get Started
          </Link>

          {/* How It Works Button */}
          <Link to='work' smooth={true}  className="
            relative p-[2px] rounded-lg cursor-pointer
            cursor-pointer 
            bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] 
            hover:scale-105 transition-transform duration-300
            phone:w-40
            tablet:w-48
            laptop:w-56
            desktopxl:w-64
            desktop3xl:w-72
          ">
            <div className="
              p-3 rounded-md bg-gradient-to-r 
              font-medium from-[#B32AFF] to-[#4C24B1] 
              text-white text-center
              phone:p-2 phone:text-sm
              tablet:p-3
              desktopxl:text-lg
              desktop3xl:text-xl
            ">
              How It Works
            </div>
          </Link>
        </div>
      </div>

      {/* Shape 1 */}
      <motion.div
        variants={shapeVariants}
        initial="animate"
        animate={scrollStep >= 1 ? "animate" : "initial"}
        transition="transition"
        className='
          absolute
          phone:hidden
          phone:w-32 phone:left-4
          tablet:w-40 tablet:left-6
          laptop:w-44 laptop:left-8
          desktopxl:w-52 desktopxl:left-24
          desktop3xl:w-64 desktop3xl:left-12
          top-0
        '
      >
        <Image src={Shape1} alt='shape1' width={1920} height={1080} sizes="100vw" style={{width: '100%', height: 'auto'}}/>
      </motion.div>

      {/* Shape 2 */}
      <motion.div
        variants={shapeVariants}
        initial="animate"
        animate={scrollStep >= 2 ? "animate" : "initial"}
        transition="transition"
        className='
          absolute
          phone:hidden
          phone:w-3/4 phone:left-8
          tablet:w-2/3 tablet:left-12
          laptop:w-1/2 laptop:left-16
          desktopxl:w-1/2 desktopxl:left-20
          desktop3xl:w-1/2 desktop3xl:left-24
          -top-10
        '
      >
        <Image src={Shape2} alt='shape2' width={1920} height={1080} sizes="100vw" style={{width: '100%', height: 'auto'}}/>
      </motion.div>

      {/* Shape 3 */}
      <motion.div
        variants={shapeVariants}
        initial="animate"
        animate={scrollStep >= 3 ? "animate" : "initial"}
        transition="transition"
        className='
          absolute
          phone:hidden
          phone:w-full phone:left-24
          tablet:w-3/4 tablet:left-32
          laptop:w-2/3 laptop:left-44
          desktopxl:w-2/3 desktopxl:left-52
          desktop3xl:w-2/3 desktop3xl:left-64
          -top-10
        '
      >
        <Image src={Shape3} alt='shape3' width={1920} height={1080} sizes="100vw" style={{width: '100%', height: 'auto'}}/>
      </motion.div>

      {/* Shape 4 */}
      <motion.div
        variants={shapeVariants}
        initial="animate"
        animate={scrollStep >= 4 ? "animate" : "initial"}
        transition="transition"
        className='
          absolute
          phone:hidden
          phone:w-3/4 phone:left-32
          tablet:w-2/3 tablet:left-40
          laptop:w-1/2 laptop:left-56
          desktopxl:w-1/2 desktopxl:left-64
          desktop3xl:w-1/2 desktop3xl:left-72
          -top-12
        '
      >
        <Image src={Shape4} alt='shape4' width={1920} height={1080} sizes="100vw" style={{width: '100%', height: 'auto'}}/>
      </motion.div>
    </div>
  );
};

export default HeroSection;