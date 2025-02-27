import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
export const metadata = {
  title: "Innonsh Technologies | Innonvation Begins with Every Ansh",
  description:
    "Innonsh Technologies provides IT solutions, including AI/ML, Cloud, Cybersecurity, and Software Development. Transform your business with us!",
  keywords:
    "IT Services, AI/ML, Cloud Computing, Cybersecurity, Software Development",
  openGraph: {
    title: "Innonsh Technologies",
    description:
      "Deliver Excellence with Innovation - Explore IT solutions with Innonsh Technologies.",
    url: "https://www.innonsh.com/",
    images: "/favicon-SVG.svg",
  },
  twitter: {
    card: "summary_large_image",
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${montserrat.variable} antialiased overflow-y-auto scrollbar-thin scrollbar-thumb-[#8B5CF6] scrollbar-track-transparent`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
