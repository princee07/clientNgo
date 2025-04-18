import React from "react";
import Layout from "../components/Layout";

const projects = [
  {
    id: 1,
    title: "Education for All",
    description:
      "Providing quality education to underprivileged children in rural areas.",
    image: "https://via.placeholder.com/300", // Replace with your image URL
  },
  {
    id: 2,
    title: "Healthcare Access",
    description:
      "Ensuring access to basic healthcare facilities in remote communities.",
    image: "https://via.placeholder.com/300", // Replace with your image URL
  },
  {
    id: 3,
    title: "Sustainable Development",
    description:
      "Promoting sustainable development through clean energy and water projects.",
    image: "https://via.placeholder.com/300", // Replace with your image URL
  },
];

const Project = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('https://via.placeholder.com/1200x500')" }}> {/* Replace with your background image */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
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
            <a
              href="#raised-funds"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
            >
              RAISED FUNDS
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          {/* Page Heading */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800">Our Projects</h2>
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
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-4">{project.description}</p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project;