import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import image1 from "../assets/image/project1.png"; // Replace with your image path
import image2 from "../assets/image/project2.png"; // Replace with your image path  
import image3 from "../assets/image/project3.png"; // Replace with your image path
import image4 from "../assets/image/project4.png"; // Replace with your image path
import image5 from "../assets/image/project5.png"; // Replace with your image path
import education from "../assets/image/education.jpg"; // Replace with your image path
import environment from "../assets/image/nature.jpg"; // Replace with your image path
import health from "../assets/image/health.jpg"; // Replace with your image path
import animal from "../assets/image/animla.jpg"; // Replace with your image path
import needyPeople from "../assets/image/needy.jpg"; // Replace with your image path
import volunteer from "../assets/image/volunteer.png"; // Replace with your image path
const projects = [
  {
    id: 1,
    title: "Education for All",
    description:
      "Providing quality education to underprivileged children in rural areas.",
    image: education// Replace with your image URL
  },
  {
    id: 2,
    title: "Healthcare Access",
    description:
      "Ensuring access to basic healthcare facilities in remote communities.",
    image: health// Replace with your image URL
  },
  {
    id: 3,
    title: "Sustainable Development",
    description:
      "Promoting sustainable development through clean energy and water projects.",
    image:environment // Replace with your image URL
  },
  {
    id:4,
    title: "Animal Welfare",
    description:
      "Rescuing and rehabilitating abandoned and abused animals.",
    image: animal// Replace with your image URL
    },
{
    id: 5,
    title: "Community Empowerment",
    description:
      "Empowering local communities through skill development and entrepreneurship.",   
      image:needyPeople // Replace with your image URL
}
  
];

const heroImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    // Add more images as needed
];

const Project = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[700px] transition-all duration-1000"
        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl lg:text-6xl font-bold mb-5">
            DONATE FOR A GOOD CAUSE
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            Join us in making a difference. Your support helps us provide education, healthcare, and sustainable development to those in need.
          </p>
          <div className="flex space-x-4">
            <a
              href="#donate"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              DONATE NOW
            </a>
         
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          {/* Page Heading */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800">Be a chance to be God</h2>
            <p className="text-lg text-gray-600 mt-4">
              Discover the initiatives we are working on to make a difference in
              the world.
            </p>
            <div className="mt-4 w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-4">{project.description}</p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="bg-orange-500  text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
                    >
                      Learn More
                    </a>
                    <a
                      href="#"
                      className="bg-green-400 mx-5 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
                    >
                    Donate Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Become a volunteer */}
      <section className="bg-gray-900 mx-5  text-white py-10">
        <div className="container mx-auto h-120  flex flex-col lg:flex-row items-center px-4 lg:px-16">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h3 className="text-orange-400 text-xl font-semibold mb-4">
              Become a Volunteer
            </h3>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Become a Volunteer? <br/> Join With Our Team
            </h2>
            <p className="text-lg text-gray-300 mx-2.5 mb-8">
              I would love to volunteer with your organization because I share
              similar values in wanting to protect the environment, and I
              believe that focusing on reducing waste is a great place to start.
              I'm also looking forward to getting more involved with the local
              community and meeting.
            </p>
            <div className="flex  items-center">
              <input
                type="email"
                placeholder="Enter Your email address"
                className="px-4 py-3 rounded-l-lg w-full lg:w-auto text-white-300"
              />
              <b className="bg-orange-500 text-white px-6 py-4 rounded-r-lg font-semibold hover:bg-orange-600 transition duration-300">
                Sign up
              </b>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2  lg:mt-2">
            <img
              src= {volunteer} // Replace with your image URL
              alt="Volunteer"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Project;