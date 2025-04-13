import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import OurCauses from "../components/OurCauses";
import ActionCards from "../components/ActionCards";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <div>
         <Navbar />
      {/* Hero Section */}  
      <HeroSection/>
      {/* Placeholder for Sections */}
   
        {/* Add your sections here */}
       <ActionCards/>
      <AboutUs/>
      <OurCauses/>
      <Testimonials/>
      <Footer />
    </div>
  );
};

export default HomePage;
