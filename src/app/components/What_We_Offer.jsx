import React from 'react';
import Image from 'next/image';
import BottomShape from "../../../public/Shapes/What_we_Offer_Bottom_Shape.png";
import AIMLIcon from "../../../public/icons/aiml.png"
import CloudIcon from "../../../public/icons/cloud.png"
import SoftwareIcon from "../../../public/icons/software.png"
import CyberIcon from "../../../public/icons/cyber.png"
import APIIcon from "../../../public/icons/api.png"
const What_We_Offer = () => {
  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-b from-[#E3E9F0] to-[#F5F7FA] relative phone:pt-10'>
      <div className='w-full h-full flex flex-col items-start gap-10 p-10 phone:p-3'>
        <div className='flex flex-col items-start gap-3'>
          <h1 className='text-2xl font-medium text-[#8B5CF6] phone:text-lg '>What we Offer</h1>
          <hr className='w-32 h-0.5 bg-[#8B5CF6]' />
        </div>
        <div className='w-full flex flex-col gap-10 relative'>
          {/* Shape Positioned at Left Corner with Text */}
          <div className='absolute left-0 -translate-x-10 bottom-0 w-1/2 h-1/2 opacity-75 phone:hidden'>
            <Image src={BottomShape} alt="Shape" className='w-full h-full' />
            <p className="absolute bottom-24 left-24 text-3xl text-white  font-semibold text-start w-[30%]">
              End-to-End Software Solutions for Every Business Need
            </p>
          </div>

          <div className='w-full flex items-center justify-start gap-5 phone:flex-col'>
            <div className='w-72 h-96 phone:w-56 phone:h-72 bg-white rounded-lg flex flex-col items-center justify-center gap-5 p-5 bg-opacity-40 border border-[#e4e4e4]'>
              <Image alt='AIML Icon' src={AIMLIcon} width={1920} height={1080} className='w-32 h-32 phone:w-24 phone:h-24'/>
              <h1 className='text-3xl opacity-80 phone:text-lg phone:text-center'>AI & Machine Learning Solutions</h1>
            </div>
            <div className='w-72 h-96 phone:w-56 phone:h-72 bg-white rounded-lg flex flex-col items-center justify-center gap-5 p-5 bg-opacity-40 border border-[#e4e4e4]'>
            <Image alt='Cloud Icon' src={CloudIcon} width={1920} height={1080} className='w-32 h-32 phone:w-24 phone:h-24'/>
            <h1 className='text-3xl opacity-80 phone:text-lg phone:text-center'>Cloud-Based SaaS Products</h1>
            </div>
            <div className='w-72 h-96 phone:w-56 phone:h-72 bg-white rounded-lg flex flex-col items-center justify-center gap-5 p-5 bg-opacity-40 border border-[#e4e4e4]'>
            <Image alt='Software Icon' src={SoftwareIcon} width={1920} height={1080} className='w-32 h-32 phone:w-24 phone:h-24'/>
            <h1 className='text-3xl opacity-80 phone:text-lg phone:text-center'>Custom Software Development</h1>
            </div>
          </div>
          <div className='w-full flex items-center justify-end gap-5 phone:flex-col'>
            <div className='w-72 h-96 phone:w-56 phone:h-72 bg-white rounded-lg flex flex-col items-center justify-center gap-5 p-5 bg-opacity-40 border border-[#e4e4e4]'>
            <Image alt='Cyber Icon' src={CyberIcon} width={1920} height={1080} className='w-32 h-32 phone:w-24 phone:h-24'/>
            <h1 className='text-3xl opacity-80 phone:text-lg phone:text-center'>Cybersecurity & Data Protection</h1>
            </div>
            <div className='w-72 h-96 phone:w-56 phone:h-72 bg-white rounded-lg flex flex-col items-center justify-center gap-5 p-5 bg-opacity-40 border border-[#e4e4e4]'>
            <Image alt='API Icon' src={APIIcon} width={1920} height={1080} className='w-32 h-32 phone:w-24 phone:h-24'/>
            <h1 className='text-3xl opacity-80 phone:text-lg phone:text-center'>API & System Integrations</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What_We_Offer;
