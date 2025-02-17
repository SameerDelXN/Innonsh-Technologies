"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const cards = [
    {
      title: "MVP & Product Development",
      description: "Expertise in building MVPs and delivering end-to-end product development.",
      icon: "🚀",
      position: "top-0 left-32 phone:left-3"
    },
    {
      title: "Enterprise-Grade Software",
      description: "Specialists in creating high-quality, scalable enterprise solutions.",
      icon: "🏢",
      position: "top-0 right-32 phone:right-3"
    },
    {
      title: "Flexible Staff Augmentation",
      description: "Optimize costs and boost efficiency with our expert team.",
      icon: "👥",
      position: "top-48 left-10 phone:top-44 phone:left-3"
    },
    {
      title: "Client-Centric Approach",
      description: "We prioritize client needs and customize solutions for efficiency.",
      icon: "🤝",
      position: "top-48 right-10 phone:top-44 phone:right-3"
    },
    {
      title: "Quality & Security",
      description: "We adhere to the highest standards of quality and data security.",
      icon: "🛡️",
      position: "top-96 left-10 phone:left-3"
    },
    {
      title: "Scalability & Flexibility",
      description: "Our solutions are designed to scale with your business growth.",
      icon: "📈",
      position: "top-96 right-10 phone:right-3"
    }
  ];

  return (
    <div className="w-full min-h-screen p-10 bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] flex flex-col items-start relative phone:p-2 phone:pt-10">
      {/* Title Section */}
      <div className="flex flex-col items-start gap-3 ">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] phone:text-xl">
          Why Businesses Trust Innonsh for Digital Innovation?
        </h1>
        <div className="w-72 h-1 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] rounded-full" />
      </div>

      {/* Cards Layout */}
      <div className="relative w-full flex justify-center items-center mt-16 min-h-[50vh] phone:z-50">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`absolute w-80 h-40 phone:w-40 phone:h-32 bg-white shadow-lg rounded-xl overflow-hidden ${card.position}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              y: -5
            }}
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]" />
            <div className="p-4 phone:p-3">
              <h3 className="text-xl phone:text-sm font-semibold mb-1 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] bg-clip-text text-transparent">
                {card.title}
              </h3>
              <p className="text-sm phone:text-xs text-gray-600">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Man Illustration */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 phone:w-full phone:opacity-90">
        <Image src="/assets/why_choose_us_man.png" alt="Man Illustration" width={600} height={600} />
      </div>
    </div>
  );
};

export default WhyChooseUs;