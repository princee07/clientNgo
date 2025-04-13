import React from "react";
import heroImage from "../assets/image/2.png"; // Replace with your image path

const HeroSection = () => {
  return (
    <section className=" py-0 px-4 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-6xl lg:text-8xl font-bold text-gray-700 mb-6">
            Join Us in Making a Difference
          </h1>
          <p className="text-2xl text-gray-700 mb-10">
            Together, we can create a better world by supporting those in need,
            protecting the environment, and building a brighter future for
            everyone.
          </p>
          <button className="bg-green-500 text-white text-2xl py-3 px-6 rounded-lg hover:bg-green-790 transition">
            Get Involved
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={heroImage}
            alt="Hero Section"
            className="w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
