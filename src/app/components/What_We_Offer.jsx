// import React from 'react';
// import Image from 'next/image';
// import BottomShape from "../../../public/Shapes/What_we_Offer_Bottom_Shape.png";
// import AIMLIcon from "../../../public/icons/aiml.png"
// import CloudIcon from "../../../public/icons/cloud.png"
// import SoftwareIcon from "../../../public/icons/software.png"
// import CyberIcon from "../../../public/icons/cyber.png"
// import APIIcon from "../../../public/icons/api.png"
// const What_We_Offer = () => {
//   return (
//     <div className='w-full min-h-[100vh] bg-gradient-to-b from-[#E3E9F0] to-[#F5F7FA] relative phone:pt-10'>
//       <div className='w-full h-full flex flex-col items-start gap-10 p-10 phone:p-3'>
//         <div className='flex flex-col items-start gap-3'>
//           <h1 className='text-2xl font-medium text-[#8B5CF6] phone:text-lg '>What we Offer</h1>
//           <hr className='w-32 h-0.5 bg-[#8B5CF6]' />
//         </div>
//         <div className='w-full flex flex-col gap-10 relative'>
//           {/* Shape Positioned at Left Corner with Text */}
//           <div className='absolute left-0 -translate-x-10 bottom-0 w-1/2 h-1/2 opacity-75 phone:hidden'>
//             <Image src={BottomShape} alt="Shape" className='w-full h-full' />
//             <p className="absolute bottom-24 left-24 text-3xl text-white  font-semibold text-start w-[30%]">
//               End-to-End Software Solutions for Every Business Need
//             </p>
//           </div>

//           <div className='w-full flex items-center justify-start gap-5 phone:flex-col'>
//             <div className='w-72 h-96 phone:w-56 phone:h-72 bg-white rounded-lg flex flex-col items-center justify-center gap-5 p-5 bg-opacity-40 border border-[#e4e4e4]'>
//               <Image alt='AIML Icon' src={AIMLIcon} width={1920} height={1080} className='w-32 h-32 phone:w-24 phone:h-24'/>
//               <h1 className='text-3xl opacity-80 phone:text-lg phone:text-center'>AI & Machine Learning Solutions</h1>
//             </div>
//             <div className='w-72 h-96 phone:w-56 phone:h-72 bg-white rounded-lg flex flex-col items-center justify-center gap-5 p-5 bg-opacity-40 border border-[#e4e4e4]'>
//             <Image alt='Cloud Icon' src={CloudIcon} width={1920} height={1080} className='w-32 h-32 phone:w-24 phone:h-24'/>
//             <h1 className='text-3xl opacity-80 phone:text-lg phone:text-center'>Cloud-Based SaaS Products</h1>
//             </div>
//             <div className='w-72 h-96 phone:w-56 phone:h-72 bg-white rounded-lg flex flex-col items-center justify-center gap-5 p-5 bg-opacity-40 border border-[#e4e4e4]'>
//             <Image alt='Software Icon' src={SoftwareIcon} width={1920} height={1080} className='w-32 h-32 phone:w-24 phone:h-24'/>
//             <h1 className='text-3xl opacity-80 phone:text-lg phone:text-center'>Custom Software Development</h1>
//             </div>
//           </div>
//           <div className='w-full flex items-center justify-end gap-5 phone:flex-col'>
//             <div className='w-72 h-96 phone:w-56 phone:h-72 bg-white rounded-lg flex flex-col items-center justify-center gap-5 p-5 bg-opacity-40 border border-[#e4e4e4]'>
//             <Image alt='Cyber Icon' src={CyberIcon} width={1920} height={1080} className='w-32 h-32 phone:w-24 phone:h-24'/>
//             <h1 className='text-3xl opacity-80 phone:text-lg phone:text-center'>Cybersecurity & Data Protection</h1>
//             </div>
//             <div className='w-72 h-96 phone:w-56 phone:h-72 bg-white rounded-lg flex flex-col items-center justify-center gap-5 p-5 bg-opacity-40 border border-[#e4e4e4]'>
//             <Image alt='API Icon' src={APIIcon} width={1920} height={1080} className='w-32 h-32 phone:w-24 phone:h-24'/>
//             <h1 className='text-3xl opacity-80 phone:text-lg phone:text-center'>API & System Integrations</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default What_We_Offer;
"use client";
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,   
  CheckCircle, 
  Server, 
  Code, 
  Cloud, 
  Brain, 
  Cog, 
  Shield, 
  Palette, 
  Database, 
  Users, 
  Settings,
  ChevronDown ,
  Headset,
  Network
} from 'lucide-react';
import { Link } from 'react-scroll';
import Link1 from 'next/link';
const What_We_Offer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Custom Software Development",
      icon: <Code className="w-8 h-8 text-[#EE4E94]" />,
      description: "We design and develop custom software tailored to your business needs.",
      features: [
        "Business process automation",
        "Custom CRM and ERP solutions",
        "System integrations",
        "Software maintenance and support"
      ],
      stats: { projects: "200+", clients: "150+", satisfaction: "98%" }
    },
    {
      title: "Web & Mobile Development",
      icon: <Server className="w-8 h-8 text-[#EE4E94]" />,
      description: "Creating responsive, user-friendly applications for web and mobile platforms.",
      features: [
        "Full-stack web development",
        "Mobile app development",
        "Progressive Web Apps",
        "E-commerce solutions"
      ],
      stats: { projects: "300+", clients: "180+", satisfaction: "97%" }
    },
    {
      title: "Cloud Solutions",
      icon: <Cloud className="w-8 h-8 text-[#EE4E94]" />,
      description: "Harness the power of cloud computing with our comprehensive solutions.",
      features: [
        "Cloud migration",
        "Serverless computing",
        "Cloud security",
        "Infrastructure management"
      ],
      stats: { projects: "150+", clients: "100+", satisfaction: "99%" }
    },
    {
      title: "AI & Data Analytics",
      icon: <Brain className="w-8 h-8 text-[#EE4E94]" />,
      description: "Unlock insights with AI-powered analytics and machine learning solutions.",
      features: [
        "Machine learning",
        "Business intelligence",
        "Predictive analytics",
        "Data visualization"
      ],
      stats: { projects: "100+", clients: "75+", satisfaction: "96%" }
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-8 h-8 text-[#EE4E94]" />,
      description: "Protect your business with comprehensive security solutions.",
      features: [
        "Security assessment",
        "Threat protection",
        "Compliance management",
        "Security training"
      ],
      stats: { projects: "200+", clients: "120+", satisfaction: "98%" }
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8 text-[#EE4E94]" />,
      description: "Create engaging user experiences with our design expertise.",
      features: ["User research", "Interface design", "Prototyping", "Usability testing"],
      stats: { projects: "250+", clients: "160+", satisfaction: "97%" }
    },
    {
      title: "IT Staff Augmentation",
      icon: <Settings className="w-8 h-8 text-[#EE4E94]" />,
      description: "Scale your IT team with experienced professionals to meet project demands.",
      features: [
        "Flexibility & Scalability",
        "Cost Efficiency",
        "Access to Specialized Skills",
        "Faster Time to Market",
        "Reduced HR Burden"
      ],
      stats: { projects: "250+", clients: "160+", satisfaction: "97%" }
    },
    {
      title: "Project-Based IT Consulting",
      icon: <Headset className="w-8 h-8 text-[#EE4E94]" />,
      description:
        "Get expert guidance for your IT projects to ensure efficient execution and delivery.",
      features: [
        "Access to Expertise",
        "Cost Efficiency",
        "Faster Project Execution",
        "Reduced Risk",
        "Scalability"
      ],
      stats: { projects: "250+", clients: "160+", satisfaction: "97%" }
    },
    {
      title: "Blockchain Development Services",
      icon: <Network className="w-8 h-8 text-[#EE4E94]" />,
      description:
        "Leverage blockchain technology to enhance security, transparency, and automation.",
      features: [
        "Enhanced Security",
        "Transparency",
        "Decentralization",
        "Reduced Risk",
        "Automation with Smart Contracts",
        "Improved Traceability"
      ],
      stats: { projects: "250+", clients: "160+", satisfaction: "97%" }
    }
  ];
  

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Hero Section */}
      <div className="relative bg-gradient-to-r from-[#924CE8 ] to-[violet-800] text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10"></div>
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/90 to-violet-800/90 animate-gradient"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-32">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Innovative Tech Solutions
              <span className="block text-violet-300">for Your Business</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-8 text-violet-100">
              Transform your business with cutting-edge technology solutions tailored to your needs
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to='services' smooth={true} className="cursor-pointer bg-white text-[#924CE8] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-violet-100 transition-all transform hover:scale-105 shadow-lg">
                Explore Services
              </Link>
              <Link1 href={"/contact-us"} className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all">
                Contact Us
              </Link1>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Floating Stats Section */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Projects Completed', 'Happy Clients', 'Team Experts'].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-6 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl font-bold text-[#924CE8] mb-2">
                {['200+', '50+', '20+'][index]}
              </div>
              <div className="text-gray-600">{stat}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Services Grid */}
      <div className="container mx-auto px-4 py-24" name="services">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-violet-100 hover:border-[#EE4E94]"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#ee4e9348] rounded-lg group-hover:bg-[#ee4e9348] transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-800 group-hover:text-[#EE4E94] transition-colors">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start group/item">
                    <CheckCircle className="w-5 h-5 text-[#EE4E94] mr-2 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

             
            </div>
          ))}
        </div>
      </div>

      {/* Animated CTA Section */}
      <div className="relative bg-violet-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated background patterns */}
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-violet-200 mb-12 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="mailto:info@innonsh.com" className="bg-white text-[#924CE8] px-12 py-4 rounded-lg text-lg font-semibold hover:bg-violet-100 transition-all transform hover:scale-105 shadow-lg">
              Schedule a Consultation
            </a>
            
          </div>
        </div>
      </div>

      {/* Interactive Features Section */}
      {/* <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Us?
            </h3>
            <div className="space-y-6">
              {[
                "Expert team with proven track record",
                "Cutting-edge technology solutions",
                "Dedicated support and maintenance",
                "Scalable and future-proof solutions"
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 rounded-lg hover:bg-violet-50 transition-colors cursor-pointer"
                >
                  <CheckCircle className="w-6 h-6 text-violet-600 mr-3 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature}</h4>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/api/placeholder/600/400" 
              alt="Technology Solutions" 
              className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
             Decorative elements
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-violet-300 rounded-full opacity-50"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default What_We_Offer;