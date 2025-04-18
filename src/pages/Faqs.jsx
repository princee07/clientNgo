import React, { useState } from "react";
import Layout from "../components/Layout";
import faq1 from "../assets/image/faq.jpg";
import faqImage from "../assets/image/faqImage.jpg";
import { Link } from "react-router-dom";

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
  const [question, setQuestion] = useState("");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleQuestionSubmit = () => {
    if (question.trim()) {
      alert(`Your question has been submitted: "${question}"`);
      setQuestion("");
    } else {
      alert("Please write a question before submitting.");
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center"
        style={{ backgroundImage: `url(${faqImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 container mx-auto text-center text-white px-4">
          <h1 className="text-5xl font-bold">FAQ's</h1>
          <p className="text-lg mt-4">
            <Link
              to="/"
              className="text-orange-500 hover:underline hover:text-orange-400 transition duration-200 ease-in-out cursor-pointer"
            >
              Home
            </Link>{" "}
            &gt; FAQ's
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h3 className="text-orange-500 text-xl font-semibold mb-2">
              Asked Questions
            </h3>
            <h2 className="text-4xl font-bold text-gray-800">
              Have Any Questions on Your Minds!
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="lg:w-1/2">
              <img
                src={faq1}
                alt="FAQ"
                className="rounded-lg shadow-lg"
              />
            </div>

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
                    <div className="mt-4 text-gray-600">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Write Your Question Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Write Your Question Here
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              If you have any questions that are not listed above, feel free to
              ask us.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="w-full lg:w-2/3 p-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="5"
            ></textarea>
            <button
              onClick={handleQuestionSubmit}
              className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
            >
              Submit Question
            </button>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Donations",
                text: "A donation is a gift for charity, humanitarian aid, or to benefit a cause.",
              },
              {
                title: "Volunteer",
                text: "Act of an individual or group freely giving time and labor.",
              },
              {
                title: "ECO Caring",
                text: "This book applies ecofeminist ethics to the realm of aesthetics.",
              },
              {
                title: "Programme",
                text: "Offer a special incentive to encourage them to get started.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-lg p-6 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-4">{item.text}</p>
                <a
                  href="#"
                  className="text-orange-500 font-semibold mt-4 inline-block hover:underline"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
