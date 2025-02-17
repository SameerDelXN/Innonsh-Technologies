"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Stethoscope, 
  Wallet, 
  ShoppingCart, 
  GraduationCap, 
  Factory,
  Truck,
  Timer,
  Users,
  ArrowRight
} from 'lucide-react';

const IndustriesPage = () => {
  const industries = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Banking & Finance",
      description: "Digital transformation solutions for modern banking needs",
      solutions: [
        "Core Banking Systems",
        "Payment Processing Solutions",
        "Fraud Detection Systems"
      ]
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "Healthcare",
      description: "Innovative healthcare technology solutions",
      solutions: [
        "Electronic Health Records",
        "Telemedicine Platforms",
        "Healthcare Analytics"
      ]
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: "Manufacturing",
      description: "Smart manufacturing and Industry 4.0 solutions",
      solutions: [
        "Supply Chain Management",
        "IoT Integration",
        "Predictive Maintenance"
      ]
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Retail & E-commerce",
      description: "End-to-end retail technology solutions",
      solutions: [
        "E-commerce Platforms",
        "Inventory Management",
        "Customer Analytics"
      ]
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Education",
      description: "Digital learning and educational management solutions",
      solutions: [
        "Learning Management Systems",
        "Student Information Systems",
        "Virtual Classrooms"
      ]
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Logistics",
      description: "Smart logistics and transportation solutions",
      solutions: [
        "Fleet Management",
        "Route Optimization",
        "Warehouse Management"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Quick Time-to-Market",
      description: "Accelerate your digital transformation with our industry-specific expertise"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Domain Experts",
      description: "Work with teams that understand your industry's unique challenges"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Cost-Effective",
      description: "Optimize operations and reduce costs with tailored solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] p-10 phone:p-4">
      {/* Header Section */}
      <div className="flex flex-col items-start gap-3 mb-16">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] phone:text-xl">
          Industry-Specific Solutions
        </h1>
        <div className="w-72 h-1 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] rounded-full" />
      </div>

      {/* Introduction */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-8 mb-16"
      >
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          We deliver cutting-edge software solutions across various industries, combining deep domain 
          expertise with advanced technology to drive digital transformation and business growth.
        </p>
      </motion.div>

      {/* Industries Grid */}
      <div className="grid grid-cols-3 gap-8 mb-16 phone:grid-cols-1 tablet:grid-cols-2">
        {industries.map((industry, index) => (
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
            <div className="h-1 w-full bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]" />
            <div className="p-6">
              <div className="text-[#B32AFF] mb-4 transform group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <h2 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]">
                {industry.title}
              </h2>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <ul className="space-y-2">
                {industry.solutions.map((solution, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-[#B32AFF]" />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Benefits Section */}
      <h2 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]">
        Why Choose Our Industry Solutions?
      </h2>
      <div className="grid grid-cols-3 gap-6 mb-16 phone:grid-cols-1">
        {benefits.map((benefit, index) => (
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
            <div className="text-[#B32AFF] mb-3">{benefit.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]">
              {benefit.title}
            </h3>
            <p className="text-gray-600">{benefit.description}</p>
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
          Ready to Transform Your Industry?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's discuss how our industry-specific solutions can drive innovation and growth for your business.
        </p>
        <button className="bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
          Schedule a Consultation
        </button>
      </motion.div>
    </div>
  );
};

export default IndustriesPage;