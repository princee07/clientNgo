import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import AboutImage from "../assets/image/AboutPage.png"; // Replace with your image path

const About = () => {
  const [stats, setStats] = useState({
    volunteers: 0,
    peopleHelped: 0,
    donors: 0,
  });

  // Simulate dynamic number updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        volunteers: prevStats.volunteers < 50 ? prevStats.volunteers + 1 : 50,
        peopleHelped:
          prevStats.peopleHelped < 1000 ? prevStats.peopleHelped + 10 : 1000,
        donors: prevStats.donors < 200 ? prevStats.donors + 1 : 200,
      }));
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="relative bg-gray-50">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-20 px-4 lg:px-16">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                <span className="text-orange-500">Together</span> We Will <br />
                Rebuild Our Future
              </h1>
              <p className="text-lg text-gray-600 mt-4">
                Donority is here to build a safe future for the next
                generations.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start space-x-4">
                <a
                  href="#donate"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
                >
                  Donate Now
                </a>
                <a
                  href="#volunteer"
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
                >
                  Volunteer
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
              <div className="relative">
                <img
                  src={AboutImage}
                  alt="Hero Section"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 px-4 lg:px-16 bg-white -mt-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Volunteers */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-10">
                <h3 className="text-9xl font-bold text-orange-500">
                  {stats.volunteers}+
                </h3>
                <p className="text-xl text-gray-700 mt-4">Volunteers</p>
              </div>

              {/* People Helped */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-10">
                <h3 className="text-9xl font-bold text-orange-500">
                  {stats.peopleHelped}+
                </h3>
                <p className="text-xl text-gray-700 mt-4">People Helped</p>
              </div>

              {/* Donors */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-10">
                <h3 className="text-9xl font-bold text-orange-500">
                  {stats.donors}+
                </h3>
                <p className="text-xl text-gray-700 mt-4">Donors</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 px-4 lg:px-16 bg-gray-50">
          <div className="container mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-700">Who We Are</h2>
              <p className="text-lg text-gray-600 mt-4">
                Organization set up to provide help and raise money for those in
                need
              </p>
              <div className="mt-2 w-16 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            {/* Swiper Carousel */}
            {/* Add your Swiper component here */}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
