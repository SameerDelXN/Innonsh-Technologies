"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../../public/whiteLogo.png";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

const FooterLink = ({ href, children }) => (
  <Link 
    href={href} 
    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-200"
  >
    {children}
  </Link>
);

const SocialIcon = ({ href, icon: Icon, label }) => (
  <Link 
    href={href}
    aria-label={label}
    className="w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-lg flex items-center justify-center hover:bg-white hover:text-[#3c2475] transition-all duration-200"
  >
    <Icon className="text-lg md:text-2xl" />
  </Link>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: "Products",
      links: [
        { text: "Overview", href: "/products" },
        { text: "Features", href: "/features" },
        { text: "Solutions", href: "/solutions" },
        { text: "Tutorial", href: "/tutorial" },
        { text: "Releases", href: "/releases" }
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Careers", href: "/careers" },
        { text: "Press", href: "/press" },
        { text: "News", href: "/news" },
        { text: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", href: "/blog" },
        { text: "Newsletter", href: "/newsletter" },
        { text: "Events", href: "/events" },
        { text: "Help Center", href: "/help" },
        { text: "Support", href: "/support" }
      ]
    }
  ];

  const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com/innonshtech", label: "Follow us on Instagram" },
    { icon: FaFacebook, href: "https://facebook.com/innonshtech", label: "Like us on Facebook" },
    { icon: FaLinkedin, href: "https://linkedin.com/company/innonshtech", label: "Connect with us on LinkedIn" },
    { icon: FaYoutube, href: "https://youtube.com/innonshtech", label: "Subscribe to our YouTube channel" }
  ];

  return (
    <footer className="w-full bg-[#3c2475] px-6 py-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-10 md:gap-16">
          {/* Logo & Social Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="inline-block">
              <Image 
                src={Logo} 
                width={128}
                height={128}
                alt="Innonsh Technologies Logo"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </Link>
            <h1 className="text-xl md:text-2xl font-semibold">Innonsh Technologies</h1>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <SocialIcon key={index} {...social} />
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full md:w-auto">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col items-center md:items-start gap-3">
                <h2 className="text-lg md:text-xl font-medium mb-2">{section.title}</h2>
                {section.links.map((link, linkIndex) => (
                  <FooterLink key={linkIndex} href={link.href}>
                    {link.text}
                  </FooterLink>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="w-full text-center mt-12 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base opacity-90 mb-6">
            Let's work together to build innovative solutions and drive your business forward. 
            Contact us today to learn more about how we can assist you.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm md:text-base">
            <a href="mailto:info@innonsh.com" className="hover:underline flex items-center gap-2">
              📧 info@innonsh.com
            </a>
            <a href="tel:+918446544495" className="hover:underline flex items-center gap-2">
              📞 +91 8446544495
            </a>
            <a href="https://innonsh.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
              🌐 innonsh.com
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative pt-8 mt-8 border-t border-white/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-base opacity-90">
            <p>© {currentYear} Innonsh Technologies. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              <Link href="/terms-of-services" className="hover:underline">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;