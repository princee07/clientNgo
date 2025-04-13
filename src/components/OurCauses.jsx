import React from "react";
import educationImage from "../assets/image/education.png"; // Replace with your image path
import environmentImage from "../assets/image/plant.png"; // Replace with your image path
import healthImage from "../assets/image/medical.png"; // Replace with your image path
import animalImage from "../assets/image/cow.png"; // Replace with your image path
import needyPeopleImage from "../assets/image/child.png"; // Replace with your image path

const OurCauses = () => {
  return (
    <section className="py-16 px-4 lg:px-16 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-700">Our Causes</h2>
          <p className="text-lg text-gray-600 mt-4">
            Organization set up to provide help and raise money for those in
            need
          </p>
          <div className="mt-2 w-16 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Causes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1: Education */}
          <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={educationImage}
              alt="Education"
              className="w-full h-100 object-cover transition duration-300 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-3xl font-bold text-white mb-2">Education</h3>
              <p className="text-white text-center mb-4">
                Empowering children and adults through education and
                skill-building.
              </p>
              <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600">
                Donate Now
              </button>
            </div>
          </div>

          {/* Card 2: Environment */}
          <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={environmentImage}
              alt="Environment"
              className="w-full h-100 object-cover transition duration-300 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-3xl font-bold text-white mb-2">
                Environment
              </h3>
              <p className="text-white text-center mb-4">
                Protecting the planet through tree plantation and conservation
                efforts.
              </p>
              <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600">
                Donate Now
              </button>
            </div>
          </div>

          {/* Card 3: Health */}
          <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={healthImage}
              alt="Health"
              className="w-full h-100 object-cover transition duration-300 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-3xl font-bold text-white mb-2">Health</h3>
              <p className="text-white text-center mb-4">
                Providing healthcare and support to underprivileged communities.
              </p>
              <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600">
                Donate Now
              </button>
            </div>
          </div>

          {/* Card 4: Animal Welfare */}
          <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={animalImage}
              alt="Animal Welfare"
              className="w-full h-100  object-cover transition duration-300 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 lg:col-span justify-self-center">
              <h3 className="text-3xl font-bold text-white mb-2">
                Animal Welfare
              </h3>
              <p className="text-white text-center mb-4">
                Caring for stray and injured animals and promoting animal
                welfare.
              </p>
              <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600">
                Donate Now
              </button>
            </div>
          </div>

          {/* Card 5: Needy People */}
          <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ">
            <img
              src={needyPeopleImage}
              alt="Needy People"
              className="w-full h-100 object-cover transition duration-300 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-3xl font-bold text-white mb-2">
                Needy People
              </h3>
              <p className="text-white text-center mb-4">
                Supporting individuals and families in need with essential
                resources.
              </p>
              <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCauses;
