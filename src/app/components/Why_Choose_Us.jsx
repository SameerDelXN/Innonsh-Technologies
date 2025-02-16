import React from 'react';
import Image from 'next/image';
import Man from "../../../public/assets/why_choose_us_man.png";

const Why_Choose_Us = () => {
  return (
    <div className='w-full min-h-[100vh] p-10 bg-gradient-to-b from-[#F5F7FA] to-[#E3E9F0] flex flex-col items-start relative phone:p-2 phone:pt-10'>
      {/* Title */}
      <div className='flex flex-col items-start gap-3'>
        <h1 className='text-2xl font-medium text-[#8B5CF6] text-center phone:text-start phone:text-lg'>
          Why Choose Us?
        </h1>
        <hr className='w-32 h-0.5 bg-[#8B5CF6]' />
      </div>

      {/* Cards Positioned in Circular Layout */}
      <div className="relative w-full flex justify-center items-center mt-16 min-h-[50vh]">
        {/* Card 1 */}
        <div className="absolute top-0 left-32 phone:left-3 w-80 h-40 phone:w-40 phone:h-32 bg-white shadow-lg rounded-lg flex flex-col items-center gap-2 justify-center text-center p-4 bg-opacity-40 border border-[#e4e4e4]">
          <p className="text-xl font-medium phone:text-sm">MVP & Product Development</p>
          <p className='text-sm phone:text-xs'>Expertise in building MVPs and delivering end-to-end product development.</p>
        </div>

        {/* Card 2 */}
        <div className="absolute top-0 right-32 phone:right-3 w-80 h-40 phone:w-40 phone:h-32 bg-white shadow-lg rounded-lg flex flex-col items-center gap-2 justify-center text-center p-4 bg-opacity-40 border border-[#e4e4e4]">
          <p className="text-xl font-medium phone:text-sm">Enterprise-Grade Software</p>
          <p className='text-sm phone:text-xs'>Specialists in creating high-quality, scalable enterprise solutions.</p>
        </div>

        {/* Card 3 */}
        <div className="absolute top-48 left-10 w-80 h-40 phone:top-44 phone:left-3 phone:w-40 phone:h-32 bg-white shadow-lg rounded-lg flex flex-col items-center gap-2 justify-center text-center p-4 bg-opacity-40 border border-[#e4e4e4]">
          <p className="text-xl font-medium phone:text-sm">Flexible Staff Augmentation</p>
          <p className='text-sm phone:text-xs'>Optimize costs and boost efficiency with our expert team.</p>
        </div>

        {/* Card 4 */}
        <div className="absolute top-48 right-10 phone:top-44 phone:right-3 w-80 h-40 phone:w-40 phone:h-32 bg-white shadow-lg rounded-lg flex flex-col items-center gap-2 justify-center text-center p-4 bg-opacity-40 border border-[#e4e4e4]">
          <p className="text-xl font-medium phone:text-sm">Client-Centric Approach</p>
          <p className='text-sm phone:text-xs'>We prioritize client needs and customize solutions for efficiency.</p>
        </div>

        {/* Card 5 */}
        <div className="absolute  top-96  left-10 phone:left-3 w-80 h-40 phone:w-40 phone:h-32 bg-white shadow-lg rounded-lg flex flex-col items-center gap-2 justify-center text-center p-4 bg-opacity-40 border border-[#e4e4e4]">
          <p className="text-xl font-medium phone:text-sm">Quality & Security</p>
          <p className='text-sm phone:text-xs'>We adhere to the highest standards of quality and data security.</p>
        </div>

        {/* Card 6 */}
        <div className="absolute top-96 right-10 phone:right-3 w-80 h-40 phone:w-40 phone:h-32 bg-white shadow-lg rounded-lg flex flex-col items-center gap-2 justify-center text-center p-4 bg-opacity-40 border border-[#e4e4e4]">
          <p className="text-xl font-medium phone:text-sm">Scalability & Flexibility</p>
          <p className='text-sm phone:text-xs'>Our solutions are designed to scale with your business growth.</p>
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
