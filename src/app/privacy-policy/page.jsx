"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Lock, Database, Bell, Eye, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Data Collection",
      content: "We collect essential information to enhance your experience, including contact details and usage data. Your trust is our priority in handling this information."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Usage & Storage",
      content: "Your data helps us improve our services and deliver personalized solutions. We implement robust storage systems with industry-leading security measures."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Security Measures",
      content: "We employ enterprise-grade security protocols to protect your information. Regular audits and updates ensure your data remains safe."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Your Privacy Rights",
      content: "Control your data with comprehensive privacy rights. Access, modify, or delete your information at any time through our secure platform."
    }
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] p-10 phone:p-4">
      {/* Header Section */}
      <div className="flex flex-col items-start gap-3 mb-16">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EE4E94] to-[#924CE8] phone:text-xl">
          Privacy Policy & Data Protection
        </h1>
        <div className="w-72 h-1 bg-gradient-to-r from-[#EE4E94] to-[#924CE8] rounded-full" />
      </div>

      {/* Introduction Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6 mb-10"
      >
        <div className="flex items-center gap-4 mb-4">
          <Shield className="w-8 h-8 text-[#EE4E94]" />
          <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#EE4E94] to-[#924CE8]">
            Our Commitment to Your Privacy
          </h2>
        </div>
        <p className="text-gray-600">
          At Innonsh Technologies, we prioritize the protection of your personal information. 
          Our comprehensive privacy policy outlines how we collect, use, and safeguard your data 
          while delivering innovative software solutions.
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-6 max-w-4xl mx-auto"
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#EE4E94] to-[#924CE8]" />
            <button
              onClick={() => setOpenSection(openSection === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="text-[#EE4E94]">{section.icon}</div>
                <h3 className="text-xl phone:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#EE4E94] to-[#924CE8]">
                  {section.title}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: openSection === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-6 h-6 text-[#EE4E94]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </button>
            <motion.div
              initial={false}
              animate={{
                height: openSection === index ? "auto" : 0,
                opacity: openSection === index ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0">
                <p className="text-gray-600">{section.content}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Section */}
      <div className="text-center mt-12 text-gray-500">
        <p>Last Updated: February 17, 2025</p>
        <p className="mt-2">© 2025 Innonsh Technologies. All rights reserved.</p>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;