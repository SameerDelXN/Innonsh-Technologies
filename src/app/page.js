import Image from "next/image";
import HeroSection from "./components/HeroSection";
import What_We_Offer from "./components/What_We_Offer";
import Why_Choose_Us from "./components/Why_Choose_Us";
import Steps from "./components/Steps";
import Reviews from "./components/Reviews";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";
import Story from "./components/Story";
import Customer from "./components/Customer";

export default function Home() {
  return (
   <div className="scrollbar scrollbar-none">
    <HeroSection/>
    <What_We_Offer/>
    <Why_Choose_Us/>
    <Steps/>
    <Story/>
    <Reviews/>
    <Blogs/>
    <ContactUs/>
   </div>
  );
}
