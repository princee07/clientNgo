import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import AboutImage from "../assets/image/AboutPage.png"; // Replace with your image path
import MissionImage from "../assets/image/MissionImage.png"; // Replace with your mission image path
import map from "../assets/image/Map.png"; // Replace with your map image path
const About = () => {
  const [stats, setStats] = useState({
    volunteers: 0,
    peopleHelped: 0,
    donors: 0,
  });

  const [activeAccordion, setActiveAccordion] = useState(null);

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

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="relative bg-gray-50">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:px-16">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-7xl lg:text-8xl font-bold text-gray-800 leading-tight">
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
        <section className="py-4 px-4 lg:px-16 bg-white -mt-10">
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

        {/* Mission Section */}
        <section className="px-4 lg:px-16 bg-white mb-0">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h2 className="text-sm font-semibold text-gray-500 uppercase">
                To Help People and the World
              </h2>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-4">
                We're on a Mission of Big Changes
              </h1>
              <div className="mt-8">
                {/* Accordion Item 1 */}
                <div
                  className={`border-b ${
                    activeAccordion === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <button
                    className="w-full flex justify-between items-center py-4 px-4 text-left"
                    onClick={() => toggleAccordion(0)}
                  >
                    <span className="text-lg font-semibold text-gray-800">
                      We're fighting for mental health
                    </span>
                    <span className="text-gray-500">
                      {activeAccordion === 0 ? "-" : "+"}
                    </span>
                  </button>
                  {activeAccordion === 0 && (
                    <div className="px-4 pb-4 text-gray-600">
                      Nobody should face a mental health problem alone. We need
                      your help so we can be there – on the other end of the
                      phone or in the community.
                    </div>
                  )}
                </div>

                {/* Accordion Item 2 */}
                <div
                  className={`border-b ${
                    activeAccordion === 1 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <button
                    className="w-full flex justify-between items-center py-4 px-4 text-left"
                    onClick={() => toggleAccordion(1)}
                  >
                    <span className="text-lg font-semibold text-gray-800">
                      Where your money goes
                    </span>
                    <span className="text-gray-500">
                      {activeAccordion === 1 ? "-" : "+"}
                    </span>
                  </button>
                  {activeAccordion === 1 && (
                    <div className="px-4 pb-4 text-gray-600">
                      Your donations help us provide essential services and
                      support to those in need, ensuring every penny counts.
                    </div>
                  )}
                </div>

                {/* Accordion Item 3 */}
                <div
                  className={`border-b ${
                    activeAccordion === 2 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <button
                    className="w-full flex justify-between items-center py-4 px-4 text-left"
                    onClick={() => toggleAccordion(2)}
                  >
                    <span className="text-lg font-semibold text-gray-800">
                      Donate or fundraise
                    </span>
                    <span className="text-gray-500">
                      {activeAccordion === 2 ? "-" : "+"}
                    </span>
                  </button>
                  {activeAccordion === 2 && (
                    <div className="px-4 pb-4 text-gray-600">
                      Join us in making a difference by donating or organizing
                      fundraising events to support our mission.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 mt-5 lg:mt-0">
              <img
                src={MissionImage}
                alt="Mission Section"
                className="rounded-lg "
              />
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-0 px-4 lg:px-16 bg-gray-50">
          <div className="container mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-gray-800">Who We Are</h2>
              <p className="text-lg text-gray-600 mt-4">
                We are an organization dedicated to empowering communities,
                providing help, and raising funds for those in need. Together,
                we strive to create a better future.
              </p>
              <div className="mt-4 w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Our Mission"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-800">
                  Our Mission
                </h3>
                <p className="text-gray-600 mt-1">
                  To provide education, healthcare, and sustainable development
                  opportunities to underprivileged communities.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Our Vision"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                <p className="text-gray-600 mt-4">
                  A world where every individual has access to basic needs and
                  opportunities to thrive.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Our Values"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
                <p className="text-gray-600 mt-4">
                  Compassion, integrity, and collaboration are at the heart of
                  everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Where We Work Section */}
        <section className="py-20 mt-22 bg-orange-100">
          <div className="container mx-auto max-w-6xl px-4 lg:px-8">
            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-gray-800">
                Where We Work
              </h2>
              <p className="text-2xl text-gray-700 mt-4">
                Explore the areas where we are making an impact across India.
                Together, we are building a brighter future.
                <br />
                <span className="text-orange-500 font-bold">Your</span> support
                is crucial in helping us reach more communities and provide the resources they need to thrive. Together, we can make a lasting difference.
                  

              </p>
              <div className="mt-4 w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            {/* Map and Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Map Section */}
              <div className="rounded-lg p-6 w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Our Reach
                </h3>
                <img
                  src={map} // Replace with your map image URL
                  alt="India Map"
                  className="w-full h-auto rounded-lg"
                />
               
              </div>

              {/* Content Section */}
              <div className="bg-orange-200 rounded-lg shadow-lg p-6 w-full lg:w-1/2">
                <h3 className="text-3xl font-bold text-gray-800 mb-5 text-center">
                  Your Impact
                </h3>
                <p className="text-2xl text-gray-700 mb-8 text-center">
                  90% of our funds are dedicated to long-term solutions for
                  poverty, education, and healthcare. The remaining 10% is used
                  for emergency responses and rehabilitation.
                  You can clearly see the prove of that bill here and feel freee to donate our platform 
                  your money will be used for the right purpose.
                  <br />
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="#annual-report"
                    className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                  >
                    View Annual Report
                  </a>
                  <a
                    href="#donate"
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 px-4 lg:px-16 bg-white">
          <div className="container mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-gray-800">
                See How We Are Helping
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Watch this video to learn more about the impact we are making in
                the lives of those in need.
              </p>
              <div className="mt-4 w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            {/* Video Container */}
            <div className="flex justify-center">
              <div className="w-full lg:w-3/4 rounded-lg overflow-hidden shadow-lg">
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video URL
                  autoPlay
                  loop
                  muted
                  controls
                  className="w-full h-auto"
                ></video>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
