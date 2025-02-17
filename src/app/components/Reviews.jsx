"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    icon: "man",
    name: "John Doe",
    position: "CEO of XYZ Corp",
    text: "Innonsh Technologies transformed our outdated processes into an efficient, automated system. Their expertise and dedication were exceptional.",
  },
  {
    icon: "woman",
    name: "Jane Smith",
    position: "CTO of ABC Ltd.",
    text: "Their AI and analytics solutions helped us unlock valuable insights, leading to a 25% increase in operational efficiency. Highly recommended!",
  },
  {
    icon: "man",
    name: "Michael Johnson",
    position: "Director at DEF Solutions",
    text: "Working with Innonsh Technologies was a game-changer. Their team's professionalism and technical skills exceeded our expectations.",
  },
  {
    icon: "woman",
    name: "Sophia Davis",
    position: "Head of IT, GHI Innovations",
    text: "Their software solutions streamlined our workflow, reducing manual effort by 40%. The Innonsh Technologies team is truly outstanding!",
  },
  {
    icon: "woman",
    name: "Nina Sharma",
    position: "COO, JKL Enterprises",
    text: "From consultation to implementation, Innonsh Technologies delivered beyond expectations. Our business efficiency skyrocketed!",
  },
  {
    icon: "woman",
    name: "Emily Carter",
    position: "VP of Operations, MNO Systems",
    text: "Their deep expertise in AI and cloud computing helped us modernize our IT infrastructure with ease. Innonsh Technologies is a trusted partner.",
  },
  {
    icon: "man",
    name: "David Wilson",
    position: "Product Manager, PQR Solutions",
    text: "The team's problem-solving skills and innovative approach made a significant impact on our SaaS product's performance and reliability.",
  },
  {
    icon: "woman",
    name: "Emma White",
    position: "Managing Director, STU Tech",
    text: "Their customer support is exceptional. Any technical challenges were addressed swiftly, ensuring seamless operations for our company.",
  },
  {
    icon: "man",
    name: "Robert Brown",
    position: "Founder, VWX Innovations",
    text: "We saw an immediate improvement in our system's efficiency after implementing their automation tools. Highly professional team!",
  },
];

const Reviews = () => {
  const [page, setPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [page, isAnimating]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setPage((prev) => (prev + 1) % totalPages);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setPage((prev) => (prev - 1 + totalPages) % totalPages);
    }
  };

  const handleDotClick = (index) => {
    if (!isAnimating && index !== page) {
      setIsAnimating(true);
      setPage(index);
    }
  };

  const visibleTestimonials = isMobile
    ? testimonials
    : testimonials.slice(page * 3, (page * 3) + 3);

  return (
    <div className='w-full min-h-[87vh] bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] p-10 flex flex-col justify-evenly gap-10 phone:p-3 phone:gap-10 phone:pt-10'>
      {/* Header Section */}
      <div className='flex flex-col items-start gap-3'>
        <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] phone:text-lg'>
          Helping Businesses Scale Faster & Smarter
        </h1>
        <hr className="w-32 h-0.5 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] border-0 rounded" />
      </div>

      {/* Carousel Container */}
      <div className='relative w-full px-12 phone:px-4'>
        <div className='overflow-hidden'>
          <motion.div
            className='flex gap-6 phone:gap-0'
            animate={{ x: `${-page * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`${isMobile ? 'w-full' : 'min-w-[calc(33.333%-1rem)]'} 
                           bg-white bg-opacity-40 border border-[#e4e4e4] p-6 rounded-lg
                           ${isMobile ? 'flex-shrink-0' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className='flex flex-col gap-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 rounded-full bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] flex items-center justify-center text-white text-xl'>
                      {testimonial.icon === 'man' ? '👨' : '👩'}
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-800'>{testimonial.name}</h3>
                      <p className='text-sm text-gray-600'>{testimonial.position}</p>
                    </div>
                  </div>
                  <p className='text-gray-700 leading-relaxed'>{testimonial.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full shadow-lg hover:bg-opacity-75 transition-all z-10 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={isAnimating}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full shadow-lg hover:bg-opacity-75 transition-all z-10 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className='flex justify-center gap-2 mt-6'>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              disabled={isAnimating}
              className={`transition-all duration-300 ${
                page === index 
                  ? 'w-8 h-2 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] rounded-full' 
                  : 'w-2 h-2 bg-gray-300 rounded-full'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;