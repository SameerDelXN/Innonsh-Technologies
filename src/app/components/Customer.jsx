"use client";
import React, { useRef, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import man from "../../../public/icons/Flaticons/man.png";
import woman from "../../../public/icons/Flaticons/woman.png";
import Image from "next/image";

const testimonials = [
  {
    icon: man,
    name: "John Doe",
    position: "CEO of XYZ Corp",
    text: "Innonsh Technologies transformed our outdated processes into an efficient, automated system. Their expertise and dedication were exceptional.",
  },
  {
    icon: woman,
    name: "Jane Smith",
    position: "CTO of ABC Ltd.",
    text: "Their AI and analytics solutions helped us unlock valuable insights, leading to a 25% increase in operational efficiency. Highly recommended!",
  },
  {
    icon: man,
    name: "Michael Johnson",
    position: "Director at DEF Solutions",
    text: "Working with Innonsh Technologies was a game-changer. Their team’s professionalism and technical skills exceeded our expectations.",
  },
  {
    icon: woman,
    name: "Sophia Davis",
    position: "Head of IT, GHI Innovations",
    text: "Their software solutions streamlined our workflow, reducing manual effort by 40%. The Innonsh Technologies team is truly outstanding!",
  },
  {
    icon: woman,
    name: "Nina Sharma",
    position: "COO, JKL Enterprises",
    text: "From consultation to implementation, Innonsh Technologies delivered beyond expectations. Our business efficiency skyrocketed!",
  },
  {
    icon: woman,
    name: "Emily Carter",
    position: "VP of Operations, MNO Systems",
    text: "Their deep expertise in AI and cloud computing helped us modernize our IT infrastructure with ease. Innonsh Technologies is a trusted partner.",
  },
  {
    icon: man,
    name: "David Wilson",
    position: "Product Manager, PQR Solutions",
    text: "The team's problem-solving skills and innovative approach made a significant impact on our SaaS product’s performance and reliability.",
  },
  {
    icon: woman,
    name: "Emma White",
    position: "Managing Director, STU Tech",
    text: "Their customer support is exceptional. Any technical challenges were addressed swiftly, ensuring seamless operations for our company.",
  },
  {
    icon: man,
    name: "Robert Brown",
    position: "Founder, VWX Innovations",
    text: "We saw an immediate improvement in our system's efficiency after implementing their automation tools. Highly professional team!",
  },
];

const Customer = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const animateTestimonials = async () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = containerRef.current.scrollWidth;

        if (contentWidth > containerWidth) {
          await controls.start({
            x: [0, -(contentWidth - containerWidth)],
            transition: { duration: 60, ease: "linear", repeat: Infinity },
          });
        }
      }
    };

    animateTestimonials();
  }, []);

  return (
    <div className="w-full bg-[#E6ECFF] h-[550px] flex flex-col items-center justify-start gap-4">
      <h2 className="text-2xl font-bold text-center text-black mt-12">
        What Our Clients Say
      </h2>
      <p className="text-center text-gray-700 mb-6 px-6 max-w-3xl">
        We take pride in delivering top-notch solutions that make a difference. Here’s what our customers have to say about working with Innonsh Technologies.
      </p>
      <div className="relative w-full" ref={containerRef}>
        <motion.div
          className="inline-flex gap-6 px-6 absolute left-0 top-0"
          style={{ width: "fit-content" }}
          animate={controls}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md w-96 shrink-0"
              style={{ minWidth: "24rem" }}
            >
              <MessageSquare className="text-blue-500 mb-4 h-8 w-8" />
              <p className="text-base mb-4 text-gray-700">"{testimonial.text}"</p>
              <div className="flex flex-col items-center">
                <Image
                  src={testimonial.icon}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <span className="font-semibold text-sm mt-2">{testimonial.name}</span>
                <span className="text-xs text-gray-500">{testimonial.position}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Customer;
