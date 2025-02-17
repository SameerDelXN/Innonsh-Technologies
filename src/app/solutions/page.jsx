"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Smartphone, Database, Shield, Braces, Cpu, BarChart, Globe, Boxes } from 'lucide-react';
import Image from 'next/image';

const SolutionsPage = () => {
  const mainSolutions = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Tailored solutions designed to address your unique business challenges and requirements.",
      features: ["Enterprise Applications", "Workflow Automation", "Integration Services"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and applications for modern business needs.",
      features: ["Cloud Migration", "AWS/Azure Services", "Cloud-Native Apps"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["iOS & Android Apps", "React Native", "Progressive Web Apps"]
    }
  ];

  const specializedSolutions = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Protect your digital assets and infrastructure"
    },
    {
      icon: <Braces className="w-6 h-6" />,
      title: "API Development",
      description: "Build robust and scalable APIs"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI & ML Solutions",
      description: "Intelligent automation and predictive analytics"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Business Intelligence",
      description: "Data-driven decision making tools"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Applications",
      description: "Modern and responsive web solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] p-10 phone:p-4">
      {/* Header Section */}
      <div className="flex flex-col items-start gap-3 mb-16">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] phone:text-xl">
          Enterprise Software Solutions
        </h1>
        <div className="w-72 h-1 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] rounded-full" />
      </div>

      {/* Main Solutions */}
      <div className="grid grid-cols-3 gap-8 mb-16 phone:grid-cols-1 tablet:grid-cols-2">
        {mainSolutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]" />
            <div className="p-6">
              <div className="text-[#B32AFF] mb-4">{solution.icon}</div>
              <h2 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]">
                {solution.title}
              </h2>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-[#B32AFF]" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Specialized Solutions Grid */}
      <h2 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]">
        Specialized Solutions
      </h2>
      <div className="grid grid-cols-3 gap-6 mb-16 phone:grid-cols-1 tablet:grid-cols-2">
        {specializedSolutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div className="text-[#B32AFF] mb-3">{solution.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]">
              {solution.title}
            </h3>
            <p className="text-gray-600">{solution.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's discuss how our solutions can help you achieve your business goals. Our team of experts
          is ready to create the perfect solution for your needs.
        </p>
        <button className="bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
          Schedule a Consultation
        </button>
      </motion.div>
    </div>
  );
};

export default SolutionsPage;