  import React from 'react';
  import Image from 'next/image';
  import Shape1 from '../../../public/Shapes/Step_Connection_1.png';
  import Shape2 from '../../../public/Shapes/Step_Connection_2.png';

  const Steps = () => {
    const stepsData = [
      {
        number: 1,
        title: 'Consultation & Strategy',
        description: 'Identify business challenges and opportunities.',
      },
      {
        number: 2,
        title: 'Custom Development & Integration',
        description: 'Build and optimize solutions for growth.',
      },
      {
        number: 3,
        title: 'Deployment & Continuous Support',
        description: 'Ongoing monitoring and upgrades.',
      },
    ];

    return (
      <div className='w-full min-h-[70vh] phone:min-h-[100vh] bg-gradient-to-b from-[#E3E9F0] to-[#F5F7FA] p-10  flex flex-col justify-evenly items-start phone:p-3 phone:gap-10 phone:pt-10'>
        {/* Title */}
        <div className=' flex flex-col items-start gap-3'>
          <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] phone:text-lg'>
            Seamless Digital Transformation in 3 Simple Steps
          </h1>
          <hr className="w-56 h-0.5 bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] border-0 rounded" />

        </div>

        {/* Steps Container */}
        <div className='flex items-center justify-center gap-20 w-full phone:flex-col'> {/* Adjust gap as needed */}
          {stepsData.map((step, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
              <div className='relative'>
              <div className="bg-gradient-to-r from-[#B32AFF] to-[#4C24B1] rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold text-white z-10 relative">
  {step.number}
</div>

              </div>
              <h2 className='text-xl font-medium mt-4'>{step.title}</h2>
              <p className='text-gray-600 mt-2 w-64'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Steps;