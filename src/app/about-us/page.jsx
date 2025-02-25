"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Building, Globe, ArrowRight, Laptop, Heart } from 'lucide-react';
import Image from 'next/image';


const AboutPage = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Projects Delivered" },
    { number: "20+", label: "Team Members" },
    { number: "50+", label: "Happy Clients" }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation First",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through dedication and trust."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in every project we undertake."
    }
  ];

  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started with a team of 5 passionate developers"
    },
    {
      year: "2016",
      title: "First Major Client",
      description: "Partnered with a Fortune 500 company"
    },
    {
      year: "2018",
      title: "International Expansion",
      description: "Opened offices in multiple countries"
    },
    {
      year: "2020",
      title: "Innovation Award",
      description: "Recognized for technological excellence"
    },
    {
      year: "2023",
      title: "Sustainable Growth",
      description: "Reached 200+ successful project deliveries"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] p-10 phone:p-4">
      {/* Header Section */}
      <div className="flex flex-col items-start gap-3 mb-16">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EE4E94] to-[#924CE8] phone:text-xl">
          About Innonsh Technologies
        </h1>
        <div className="w-72 h-1 bg-gradient-to-r from-[#EE4E94] to-[#924CE8] rounded-full" />
      </div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-8 mb-16"
      >
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          At Innonsh Technologies, we're more than just a software development company.
          We're innovators, problem-solvers, and technology enthusiasts dedicated to transforming
          businesses through cutting-edge digital solutions.
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-6 mb-16 phone:grid-cols-2">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EE4E94] to-[#924CE8] mb-2">
              {stat.number}
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Our Values */}
      <h2 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#EE4E94] to-[#924CE8]">
        Our Core Values
      </h2>
      <div className="grid grid-cols-3 gap-8 mb-16 phone:grid-cols-1">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden group"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#EE4E94] to-[#924CE8]" />
            <div className="p-6">
              <div className="text-[#EE4E94] mb-4 transform group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#EE4E94] to-[#924CE8]">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join us in creating innovative solutions that drive business success.
        </p>
        <a href="mailto:info@innonsh.com">
          <button className="bg-gradient-to-r from-[#EE4E94] to-[#924CE8] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Let's Work Together
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default AboutPage;
