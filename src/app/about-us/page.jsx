"use client";
import React from "react";
import Image from "next/image";
import AboutImage from "../../../public/assets/handshake.png";

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center p-6 md:p-12">
      {/* Hero Section */}
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center gap-10 bg-white p-8 shadow-lg rounded-lg">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={AboutImage}
            width={600}
            height={400}
            className="rounded-lg shadow-md"
            alt="About Innonsh Technologies"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">About Us</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Innonsh Technologies specializes in transforming ideas into innovative,
            scalable, and efficient digital solutions. With a team of experienced
            professionals and cutting-edge technology, we help businesses
            streamline operations, optimize resources, and drive digital
            transformation.
          </p>
          <p className="mt-4 text-gray-600 text-lg">
            Our mission is to deliver high-quality, scalable, and secure solutions
            that empower businesses to achieve their goals efficiently.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#3c2475] text-white font-semibold rounded-lg shadow-md hover:bg-[#2a1855] transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
