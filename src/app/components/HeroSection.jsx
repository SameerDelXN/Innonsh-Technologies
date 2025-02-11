"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Shape1 from "../../../public/Shapes/HomeShape1.png";
import Shape2 from "../../../public/Shapes/HomeShape2.png";
import Shape3 from "../../../public/Shapes/HomeShape3.png";
import Shape4 from "../../../public/Shapes/HomeShape4.png";

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
      className={`w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] relative overflow-hidden phone:min-h-[75vh]`}
    >
      <div className="flex flex-col items-center justify-center gap-6 text-center px-4">
        <h1 className='text-4xl font-semibold phone:text-2xl'>
          AI-Powered Software Solutions for the Future
        </h1>
        <p className='text-sm font-medium phone:text-xs'>
          Empowering businesses with scalable, secure, and intelligent digital transformation.
        </p>
        <div className='flex  phone:flex-row items-center gap-3'>
          <button className='p-3 bg-transparent border-2 border-[#8B5CF6] rounded-lg text-[#8B5CF6] text-center w-56 phone:w-40 cursor-pointer'>
            Get Started
          </button>
          <button className='p-3 bg-[#8B5CF6] rounded-lg border-2 border-[#8B5CF6] text-white text-center w-56 phone:w-40 cursor-pointer hover:bg-transparent hover:border hover:bg-black'>
            How It Works
          </button>
        </div>
      </div>

      <motion.div
        variants={shapeVariants}
        initial="animate" // Always animate on phone
        animate={scrollStep >= 1 ? "animate" : "initial"} // Animate on scroll on larger screens
        transition="transition"
        className='absolute w-44 top-0 left-6 phone:left-4 phone:w-32'
      >
        <Image src={Shape1} alt='shape1' width={1920} height={1080} sizes="100vw" style={{width: '100%', height: 'auto'}}/>
      </motion.div>

      <motion.div
        variants={shapeVariants}
        initial="animate" // Always animate on phone
        animate={scrollStep >= 2 ? "animate" : "initial"} // Animate on scroll on larger screens
        transition="transition"
        className='absolute w-1/2 top-0 left-12 phone:left-8 phone:w-3/4'
      >
        <Image src={Shape2} alt='shape2' width={1920} height={1080} sizes="100vw" style={{width: '100%', height: 'auto'}}/>
      </motion.div>

      <motion.div
        variants={shapeVariants}
        initial="animate" // Always animate on phone
        animate={scrollStep >= 3 ? "animate" : "initial"} // Animate on scroll on larger screens
        transition="transition"
        className='absolute w-2/3 -top-10 left-44 phone:left-24 phone:w-full'
      >
        <Image src={Shape3} alt='shape3' width={1920} height={1080} sizes="100vw" style={{width: '100%', height: 'auto'}}/>
      </motion.div>

      <motion.div
        variants={shapeVariants}
        initial="animate" // Always animate on phone
        animate={scrollStep >= 4 ? "animate" : "initial"} // Animate on scroll on larger screens
        transition="transition"
        className='absolute w-1/2 -top-12 left-56 phone:left-32 phone:w-3/4'
      >
        <Image src={Shape4} alt='shape4' width={1920} height={1080} sizes="100vw" style={{width: '100%', height: 'auto'}}/>
      </motion.div>
    </div>
  );
};

export default HeroSection;