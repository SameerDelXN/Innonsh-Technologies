import React from 'react';
import Image from 'next/image';
import Man from "../../../public/assets/why_choose_us_man.png";

const Why_Choose_Us = () => {
  return (
    <div className='w-full min-h-[100vh] p-10 bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] flex flex-col items-start relative phone:p-2 phone:pt-10'>
      {/* Title */}
      <div className='flex flex-col items-start gap-3'>
        <h1 className='text-2xl font-medium text-[#8B5CF6] text-center phone:text-start phone:text-lg'>
          Why Businesses Trust Innonsh for Digital Innovation?
        </h1>
        <hr className='w-32 h-0.5 bg-[#8B5CF6]' />
      </div>

      {/* Cards Positioned in Circular Layout */}
      <div className="relative w-full flex justify-center items-center mt-16 min-h-[50vh]">
        {/* Card 1 (Top-Left) */}
        <div className="absolute top-0 left-32 phone:left-3 w-80 h-40 phone:w-40 phone:h-32 bg-white shadow-lg rounded-lg flex flex-col items-center gap-2 justify-center text-center p-4 bg-opacity-40 border border-[#e4e4e4]">
          <p className="text-xl font-medium phone:text-sm">AI-Powered Solutions</p>
          <p className='text-sm phone:text-xs'>Automate repetitive tasks with intelligent solutions.</p>
        </div>

        {/* Card 2 (Top-Right) */}
        <div className="absolute top-0 right-32 phone:right-3  w-80 h-40 phone:w-40 phone:h-32 bg-white shadow-lg rounded-lg flex flex-col items-center gap-2 justify-center text-center p-4 bg-opacity-40 border border-[#e4e4e4]">
          <p className="text-xl font-medium phone:text-sm">Scalable Technology</p>
          <p className='text-sm phone:text-xs'>Flexible solutions that grow with your business.</p>
        </div>

        {/* Card 3 (Bottom-Left) */}
        <div className="absolute top-64 left-10 w-80 h-40 phone:top-44 phone:left-3 phone:w-40 phone:h-32 bg-white shadow-lg rounded-lg flex flex-col items-center gap-2 justify-center text-center p-4 bg-opacity-40 border border-[#e4e4e4]">
          <p className="text-xl font-medium phone:text-sm">Robust Security</p>
          <p className='text-sm phone:text-xs'>GDPR, SOC2, and ISO-certified security compliance.</p>
        </div>

        {/* Card 4 (Bottom-Right) */}
        <div className="absolute top-64 right-10 phone:top-44 phone:right-3 w-80 h-40 phone:w-40 phone:h-32 bg-white shadow-lg rounded-lg flex flex-col items-center gap-2 justify-center text-center p-4 bg-opacity-40 border border-[#e4e4e4]">
          <p className="text-xl font-medium phone:text-sm">End-to-End Support</p>
          <p className='text-sm phone:text-xs'>Get up and running in weeks, not months.</p>
        </div>
      </div>

      {/* Man Illustration Positioned at Bottom Center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 phone:w-full">
        <Image src={Man} alt="Man Illustration" width={600} height={600} />
      </div>
    </div>
  );
};

export default Why_Choose_Us;
