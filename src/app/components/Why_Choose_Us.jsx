// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const WhyChooseUs = () => {
//   const cards = [
//     {
//       title: "MVP & Product Development",
//       description: "Expertise in building MVPs and delivering end-to-end product development.",
//       icon: "🚀",
//       position: "top-0 left-32"
//     },
//     {
//       title: "Enterprise-Grade Software",
//       description: "Specialists in creating high-quality, scalable enterprise solutions.",
//       icon: "🏢",
//       position: "top-0 right-32"
//     },
//     {
//       title: "Flexible Staff Augmentation",
//       description: "Optimize costs and boost efficiency with our expert team.",
//       icon: "👥",
//       position: "top-48 left-10"
//     },
//     {
//       title: "Client-Centric Approach",
//       description: "We prioritize client needs and customize solutions for efficiency.",
//       icon: "🤝",
//       position: "top-48 right-10"
//     },
//     {
//       title: "Quality & Security",
//       description: "We adhere to the highest standards of quality and data security.",
//       icon: "🛡️",
//       position: "top-96 left-10"
//     },
//     {
//       title: "Scalability & Flexibility",
//       description: "Our solutions are designed to scale with your business growth.",
//       icon: "📈",
//       position: "top-96 right-10"
//     }
//   ];

//   return (
//     <div className="w-full min-h-screen p-10 bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] flex flex-col items-start relative 
//       phone:p-2 phone:pt-10">
//       {/* Title Section */}
//       <div className="flex flex-col items-start gap-3">
//         <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] 
//           phone:text-xl 
//           desktopxl:text-4xl 
//           desktop3xl:text-5xl">
//           Why Businesses Trust Innonsh for Digital Innovation?
//         </h1>
//         <div className="w-72 h-1 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] rounded-full" />
//       </div>

//       {/* Cards Layout */}
//       <div className="relative w-full flex justify-center items-center mt-16 min-h-[50vh] 
//         phone:flex-wrap phone:justify-center phone:gap-4 phone:static phone:z-50">
//         {cards.map((card, index) => (
//           <motion.div
//             key={index}
//             className={`absolute w-80 h-40 bg-white shadow-lg rounded-xl overflow-hidden ${card.position}
//               phone:w-full phone:static phone:h-auto phone:min-h-[8rem]
//               desktopxl:w-96 desktopxl:h-48
//               desktop3xl:w-[28rem] desktop3xl:h-56`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//               y: -5
//             }}
//           >
//             <div className="h-1 w-full bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]" />
//             <div className="p-4 phone:p-2">
//               <div className="flex items-center gap-2 mb-2">
//                 <span className="text-2xl">{card.icon}</span>
//                 <h3 className="text-xl font-semibold bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] bg-clip-text text-transparent 
//                   phone:text-sm
//                   desktopxl:text-2xl
//                   desktop3xl:text-3xl">
//                   {card.title}
//                 </h3>
//               </div>
//               <p className="text-sm text-gray-600 
//                 phone:text-xs
//                 desktopxl:text-base
//                 desktop3xl:text-lg">
//                 {card.description}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Man Illustration */}
//       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
//         phone:hidden 
//         desktopxl:block desktop3xl:block">
//         <Image 
//           src="/assets/why_choose_us_man.png" 
//           alt="Man Illustration" 
//           width={600} 
//           height={600}
//           className="w-auto h-auto
//             desktopxl:w-[700px]
//             desktop3xl:w-[900px]"
//         />
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;



"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const cards = [
    {
      title: "MVP & Product Development",
      description: "Expertise in building MVPs and delivering end-to-end product development.",
      icon: "🚀",
    },
    {
      title: "Enterprise-Grade Software",
      description: "Specialists in creating high-quality, scalable enterprise solutions.",
      icon: "🏢",
    },
    {
      title: "Flexible Staff Augmentation",
      description: "Optimize costs and boost efficiency with our expert team.",
      icon: "👥",
    },
    {
      title: "Client-Centric Approach",
      description: "We prioritize client needs and customize solutions for efficiency.",
      icon: "🤝",
    },
    {
      title: "Quality & Security",
      description: "We adhere to the highest standards of quality and data security.",
      icon: "🛡️",
    },
    {
      title: "Scalability & Flexibility",
      description: "Our solutions are designed to scale with your business growth.",
      icon: "📈",
    }
  ];

  const getGridPositionClass = (index) => {
    // Desktop XL and above positioning
    const positions = [
      "lg:top-0 lg:left-32",
      "lg:top-0 lg:right-32",
      "lg:top-48 lg:left-10",
      "lg:top-48 lg:right-10",
      "lg:top-96 lg:left-10",
      "lg:top-96 lg:right-10"
    ];
    return positions[index];
  };

  return (
    <div name="work" className="w-full laptop:min-h-[120vh] desktopxl:min-h-screen bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] flex flex-col items-start relative p-2 sm:p-4 md:p-6 lg:p-10">
      {/* Title Section */}
      <div className="flex flex-col items-start gap-3 w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EE4E94] to-[#924CE8] max-w-3xl">
          Why Businesses Trust Innonsh for Digital Innovation?
        </h1>
        <div className="w-36 sm:w-48 md:w-72 h-1 bg-gradient-to-r from-[#EE4E94] to-[#924CE8] rounded-full" />
      </div>

      {/* Cards Layout */}
      <div className="relative w-full flex flex-wrap justify-center gap-4 mt-8 md:mt-12 lg:mt-16 min-h-[50vh] lg:flex-nowrap lg:justify-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`w-full sm:w-64 md:w-72 lg:w-80 h-auto min-h-[8rem] lg:h-40 bg-white shadow-lg rounded-xl overflow-hidden lg:absolute ${getGridPositionClass(index)}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              y: -5
            }}
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#EE4E94] to-[#924CE8]" />
            <div className="p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{card.icon}</span>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold bg-gradient-to-r from-[#EE4E94] to-[#924CE8] bg-clip-text text-transparent">
                  {card.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Man Illustration */}
      <div className="hidden lg:block absolute laptop:-bottom-10 desktopxl:bottom-0 left-1/2 transform -translate-x-1/2">
        <Image 
          src="/assets/why_choose_us_man.png" 
          alt="Man Illustration" 
          width={600} 
          height={600}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;



// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const WhyChooseUs = () => {
//   const cards = [
//     {
//       title: "MVP & Product Development",
//       description: "Expertise in building MVPs and delivering end-to-end product development.",
//       icon: "🚀",
//       position: "top-0 left-32 phone:static"
//     },
//     {
//       title: "Enterprise-Grade Software",
//       description: "Specialists in creating high-quality, scalable enterprise solutions.",
//       icon: "🏢",
//       position: "top-0 right-32 phone:static"
//     },
//     {
//       title: "Flexible Staff Augmentation",
//       description: "Optimize costs and boost efficiency with our expert team.",
//       icon: "👥",
//       position: "top-48 left-10 phone:static"
//     },
//     {
//       title: "Client-Centric Approach",
//       description: "We prioritize client needs and customize solutions for efficiency.",
//       icon: "🤝",
//       position: "top-48 right-10 phone:static"
//     },
//     {
//       title: "Quality & Security",
//       description: "We adhere to the highest standards of quality and data security.",
//       icon: "🛡️",
//       position: "top-96 left-10 phone:static"
//     },
//     {
//       title: "Scalability & Flexibility",
//       description: "Our solutions are designed to scale with your business growth.",
//       icon: "📈",
//       position: "top-96 right-10 phone:static"
//     }
//   ];

//   return (
//     <div className="w-full min-h-screen p-10 bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] flex flex-col items-start relative phone:p-2 phone:pt-10">
//       {/* Title Section */}
//       <div className="flex flex-col items-start gap-3">
//         <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] phone:text-xl">
//           Why Businesses Trust Innonsh for Digital Innovation?
//         </h1>
//         <div className="w-72 h-1 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] rounded-full" />
//       </div>

//       {/* Cards Layout */}
//       <div className="relative w-full flex justify-center items-center mt-16 min-h-[50vh] phone:flex-wrap phone:justify-center phone:gap-4 phone:z-50 phone:absolute">
//         {cards.map((card, index) => (
//           <motion.div
//             key={index}
//             className={`absolute w-80 h-40 phone:w-44 phone:h-32 bg-white shadow-lg rounded-xl overflow-hidden ${card.position} phone:static`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//               y: -5
//             }}
//           >
//             <div className="h-1 w-full bg-gradient-to-r from-[#B32AFF] to-[#4C24B1]" />
//             <div className="p-4 phone:p-2">
//               <h3 className="text-xl phone:text-sm font-semibold mb-1 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] bg-clip-text text-transparent">
//                 {card.title}
//               </h3>
//               <p className="text-sm phone:text-xs text-gray-600">{card.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Man Illustration */}
//       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 phone:hidden">
//         <Image src="/assets/why_choose_us_man.png" alt="Man Illustration" width={600} height={600} />
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;
