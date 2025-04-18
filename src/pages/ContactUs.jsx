import React from "react";
import Layout from "../components/Layout";
import faqImage from "../assets/image/faqImage.jpg";

const ContactUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center"
        style={{ backgroundImage: `url(${faqImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 container mx-auto text-center text-white px-4">
          <h1 className="text-5xl font-bold">Contact Us</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h3 className="text-orange-500 text-xl font-semibold mb-4">
                Contact Us
              </h3>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Ready to Contact Us? Say Hello
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                I'm always available to be reached for additional details.
                Maybe, “Let me know if I can help. Call me anytime and I'll fill
                you in with the latest information.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-orange-500 text-2xl">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <p className="text-gray-600">
                    575 Main Street, D-block, 2nd floor, South Africa
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-orange-500 text-2xl">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <p className="text-gray-600">sendmail@getus.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-orange-500 text-2xl">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <p className="text-gray-600">+98 060 712 34</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="#"
                  className="text-orange-500 text-2xl hover:text-orange-600"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-orange-500 text-2xl hover:text-orange-600"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-orange-500 text-2xl hover:text-orange-600"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-orange-500 text-2xl hover:text-orange-600"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Full Name"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Your Mail Id"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Phone Number Here"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Website
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Website Link"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Subject"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Message (optional)
                  </label>
                  <textarea
                    placeholder="Enter Your Message Here ..."
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
