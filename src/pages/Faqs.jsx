import React, { useState } from "react";
import Layout from "../components/Layout";
import faqImage from "../assets/image/faq.jpg"; // Replace with your image path

const faqs = [
  {
    question: "How are recipients matched to donors?",
    answer:
      "Serenity is a multi-faceted blockchain-based ecosystem focusing on sustainable living, renewable energy production, and smart energy grid utility services.",
  },
  {
    question: "Why donate for charity foundations?",
    answer:
      "Donations help us provide essential services to those in need, including education, healthcare, and community development.",
  },
  {
    question: "What are the steps involved in organ and tissue donation?",
    answer:
      "Organ and tissue donation involves registration, medical evaluation, and matching with recipients in need.",
  },
  {
    question: "How can I build a newsletter without losing my mind?",
    answer:
      "Use our tools and templates to create engaging newsletters that keep your audience informed and connected.",
  },
  {
    question: "What is the ultimate digital clean-up you prepared this year?",
    answer:
      "Our digital clean-up initiative focuses on reducing digital waste and promoting sustainable online practices.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center"
        style={{ backgroundImage: `url(${faqImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto text-center text-white px-4">
          <h1 className="text-5xl font-bold">FAQ's</h1>
          <p className="text-lg mt-4">
            Home &gt; FAQ's
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h3 className="text-orange-500 text-xl font-semibold mb-2">
              Asked Questions
            </h3>
            <h2 className="text-4xl font-bold text-gray-800">
              Have Any Questions on Your Minds!
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Left Image */}
            <div className="lg:w-1/2">
              <img
                src={faqImage} // Replace with your image URL
                alt="FAQ"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* FAQ List */}
            <div className="lg:w-1/2 space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-6 shadow-md ${
                    activeIndex === index ? "bg-orange-100" : "bg-white"
                  }`}
                >
                  <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <span className="text-orange-500 text-2xl">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="mt-4 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Helping is Great Virtue for Every Human’s
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              For example, a child builds self-worth by getting good grades to
              earn their parents' approval, then grows up and gets a fancy
              corporate job to earn the approval of their larger culture.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">Donations</h3>
              <p className="text-gray-600 mt-4">
                A donation is a gift for charity, humanitarian aid, or to
                benefit a cause.
              </p>
              <a
                href="#"
                className="text-orange-500 font-semibold mt-4 inline-block"
              >
                Read More
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">Volunteer</h3>
              <p className="text-gray-600 mt-4">
                Act of an individual or group freely giving time and labor.
              </p>
              <a
                href="#"
                className="text-orange-500 font-semibold mt-4 inline-block"
              >
                Read More
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">ECO Caring</h3>
              <p className="text-gray-600 mt-4">
                This book applies ecofeminist ethics to the realm of aesthetics.
              </p>
              <a
                href="#"
                className="text-orange-500 font-semibold mt-4 inline-block"
              >
                Read More
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">Programme</h3>
              <p className="text-gray-600 mt-4">
                Offer a special incentive to encourage them to get started.
              </p>
              <a
                href="#"
                className="text-orange-500 font-semibold mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;