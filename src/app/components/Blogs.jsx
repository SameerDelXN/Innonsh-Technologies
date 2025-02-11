import React from 'react';
import Image from 'next/image';
import BlogImg1 from "../../../public/Blog/blog1Img.png"
import BlogImg2 from "../../../public/Blog/blog2Img.png"
import BlogImg3 from "../../../public/Blog/blog3Img.png"
import BlogImg4 from "../../../public/Blog/blog4Img.png"
const Blogs = () => {
  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-b from-[#E3E9F0] to-[#F5F7FA] p-10 flex flex-col items-start gap-5 phone:p-3 phone:pt-10'>
      <div className='flex flex-col items-start gap-3 '>
        <h1 className='text-2xl font-medium text-[#8B5CF6] phone:text-lg phone:text-start'>Stay Ahead with Our Insights</h1>
        <hr className='w-32 h-0.5 bg-[#8B5CF6]' />
      </div>

      {/* Ensure the container takes full height */}
      <div className='w-full flex-1 flex items-center justify-evenly gap-2 phone:flex-col phone:gap-1'>
        <div className='w-1/2 h-[700px] bg-white bg-opacity-40 border border-[#e4e4e4] rounded-lg phone:w-full phone:h-[450px]'>
          <Image
            src={BlogImg1}
            width={1920}
            height={1080}
            className='w-full h-2/3 object-cover rounded-tl-lg rounded-tr-lg '
          />
          <p className='w-full text-end p-3 text-sm opacity-50'>JAN-2025</p>
          <h1 className='p-3 font-semibold  text-2xl phone:text-sm'>AI-powered business workflow automation image</h1>
          <p className='p-3 text-lg opacity-50 phone:text-xs'>How AI and machine learning are transforming business operations, reducing manual work, and boosting productivity.</p>
        </div>
        <div className='w-1/2 h-[700px] flex flex-col items-center gap-1 phone:h-[450px] phone:w-full'>
          <div className='w-full h-1/3 bg-white bg-opacity-40 border border-[#e4e4e4] rounded-lg p-5 flex items-center gap-3'>
            <Image src={BlogImg2} width={1920} height={1080} className='w-48 h-48 object-cover rounded-lg phone:w-32 phone:h-32'/>
            <div className='w-3/4'>
              <p className='w-full text-end opacity-50 text-sm phone:text-xs'>FEB-2025</p>
              <h1 className='text-xl phone:text-sm'>Cloud computing & SaaS architecture illustration</h1>
              <p className='text-md opacity-50 phone:text-xs'>Discover why businesses are rapidly moving to cloud-native SaaS platforms and how they improve scalability, security, and cost efficiency.</p>
            </div>
          </div>
          <div className='w-full h-1/3 bg-white bg-opacity-40 border border-[#e4e4e4] rounded-lg p-5 flex items-center gap-3'>
          <Image src={BlogImg3} width={1920} height={1080} className='w-48 h-48 object-cover rounded-lg phone:w-32 phone:h-32'/>
            <div className='w-3/4'>
              <p className='w-full text-end opacity-50 text-sm phone:text-xs'>FEB-2025</p>
              <h1 className='text-xl phone:text-sm'>How to protect enterprise data from cyberattacks</h1>
              <p className='text-md opacity-50 phone:text-xs'>With increasing cyber threats, businesses must adopt robust security strategies. Learn key cybersecurity best practices for modern enterprises.</p>
            </div>
          </div>
          <div className='w-full h-1/3 bg-white bg-opacity-40 border border-[#e4e4e4] rounded-lg p-5 flex items-center gap-3'>
          <Image src={BlogImg4} width={1920} height={1080} className='w-48 h-48 object-cover rounded-lg phone:w-32 phone:h-32'/>
            <div className='w-3/4'>
              <p className='w-full text-end opacity-50 text-sm phone:text-xs'>FEB-2025</p>
              <h1 className='text-xl phone:text-xs'>Benefits of AI chatbots vs. traditional support</h1>
              <p className='text-md opacity-50 phone:text-xs'>AI-powered chatbots are reducing support costs and improving customer experience. Learn how businesses are integrating AI chatbots.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
