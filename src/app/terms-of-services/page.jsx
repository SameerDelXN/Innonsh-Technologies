"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, FileCheck, AlertCircle, MessagesSquare, Rocket, Ban } from 'lucide-react';

const TermsOfService = () => {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Agreement Terms",
      content: `By accessing our services, you agree to be bound by these terms. Innonsh Technologies reserves 
      the right to modify these terms at any time. Continued use of our services after changes constitutes 
      acceptance of the modified terms.`
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Services & Delivery",
      content: `We provide software development, MVP creation, and enterprise solutions. Project timelines and 
      deliverables will be specified in individual service agreements. We strive to meet all deadlines but 
      are not liable for delays due to factors beyond our control.`
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Intellectual Property",
      content: `All intellectual property rights for custom solutions belong to the client upon full payment. 
      Our proprietary frameworks and tools remain our property. We respect third-party intellectual property 
      rights and expect clients to do the same.`
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Liability & Warranty",
      content: `Services are provided "as is" without warranty of any kind. We're not liable for any indirect, 
      consequential, or incidental damages. Our total liability is limited to the amount paid for services 
      in the previous 12 months.`
    },
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      title: "Communication",
      content: `All project-related communication must be through approved channels. We maintain confidentiality 
      of all client information and expect the same from our clients regarding our proprietary information.`
    },
    {
      icon: <Ban className="w-6 h-6" />,
      title: "Termination",
      content: `Either party may terminate services with written notice as specified in the service agreement. 
      You remain liable for all fees incurred up to the termination date. Certain obligations survive 
      termination, including confidentiality and payment obligations.`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] p-10 phone:p-4">
      {/* Header Section */}
      <div className="flex flex-col items-start gap-3 mb-16">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] phone:text-xl">
          Terms of Service
        </h1>
        <div className="w-72 h-1 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] rounded-full" />
      </div>

      {/* Introduction Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6 mb-10"
      >
        <div className="flex items-center gap-4 mb-4">
          <FileCheck className="w-8 h-8 text-[#B32AFF]" />
          <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]">
            Our Service Agreement
          </h2>
        </div>
        <p className="text-gray-600">
          Welcome to Innonsh Technologies. These Terms of Service govern your use of our software development 
          services and solutions. Please read these terms carefully before engaging our services. By using 
          our services, you agree to these terms and conditions.
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
            <div className="h-1 w-full bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]" />
            <button
              onClick={() => setOpenSection(openSection === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="text-[#B32AFF]">{section.icon}</div>
                <h3 className="text-xl phone:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]">
                  {section.title}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: openSection === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-6 h-6 text-[#B32AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Section */}
      <div className="text-center mt-12 text-gray-500">
        <p>Last Updated: February 17, 2025</p>
        <p className="mt-2">© 2025 Innonsh Technologies. All rights reserved.</p>
        <p className="mt-4 max-w-lg mx-auto text-sm">
          By using our services, you acknowledge that you have read and understood these terms. 
          For questions about these terms, please contact our legal team.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;