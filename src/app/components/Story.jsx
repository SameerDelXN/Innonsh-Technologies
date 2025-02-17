"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, MessageCircle } from 'lucide-react';

const stories = [
  {
    icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
    title: "Enterprise Resource Planning (ERP) for Manufacturing",
    description:
      "We developed a custom ERP system for a manufacturing client that streamlined inventory management, automated order processing, and improved workflow efficiency. The implementation resulted in a 30% increase in operational efficiency.",
    stats: "30% efficiency increase",
    tags: ["ERP", "Manufacturing", "Automation"]
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
    title: "AI-Powered Chatbot for Customer Support",
    description:
      "Our AI-driven chatbot solution for a leading e-commerce company reduced response times by 40%, improved customer satisfaction, and enhanced sales conversions.",
    stats: "40% faster response",
    tags: ["AI", "Customer Support", "E-commerce"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Story = () => {
  return (
    <div className="min-h-[650px] bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 p-10 flex flex-col items-center text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-48 -right-48"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
            Success Stories
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable results
          </p>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-gray-900 flex flex-col gap-4 border border-white/20"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 rounded-xl">
                  {story.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    {story.title}
                  </h2>
                  <p className="text-purple-600 font-semibold mt-1">
                    {story.stats}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {story.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {story.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Story;