import React from "react";
import { FaHandsHelping, FaDonate, FaHandHoldingHeart } from "react-icons/fa";

const ActionCards = () => {
  return (
    <section className="py-16 px-4 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Become a Volunteer */}
          <div className="bg-blue-50 rounded-lg shadow-lg p-6 text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <FaHandsHelping />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Become a Volunteer
            </h3>
            <p className="text-gray-600">
              Alone, I can do little. Together, we can do anything.
            </p>
          </div>

          {/* Card 2: Quick Fundraising */}
          <div className="bg-yellow-50 rounded-lg shadow-lg p-6 text-center">
            <div className="text-yellow-600 text-4xl mb-4">
              <FaHandHoldingHeart />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Quick Fundraising
            </h3>
            <p className="text-gray-600">
              Alone, I can do little. Together, we can do anything.
            </p>
          </div>

          {/* Card 3: Start Donating */}
          <div className="bg-green-50 rounded-lg shadow-lg p-6 text-center">
            <div className="text-green-600 text-4xl mb-4">
              <FaDonate />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Start Donating
            </h3>
            <p className="text-gray-600">
              Alone, I can do little. Together, we can do anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionCards;
