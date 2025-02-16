"use client";
import React from "react";
import { motion } from "framer-motion";

const stories = [
  {
    title: "Enterprise Resource Planning (ERP) for Manufacturing",
    description:
      "We developed a custom ERP system for a manufacturing client that streamlined inventory management, automated order processing, and improved workflow efficiency. The implementation resulted in a 30% increase in operational efficiency.",
  },
  {
    title: "AI-Powered Chatbot for Customer Support",
    description:
      "Our AI-driven chatbot solution for a leading e-commerce company reduced response times by 40%, improved customer satisfaction, and enhanced sales conversions.",
  },
];

const Story = () => {
  return (
    <div className=" h-[550px] bg-gradient-to-r from-blue-500 to-purple-600 p-10 flex flex-col items-center text-white">
      <h1 className="text-4xl font-bold mb-12">Success Stories</h1>
      
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 shadow-2xl rounded-xl text-gray-900 transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-3">{story.title}</h2>
            <p className="text-gray-700">{story.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Story;
