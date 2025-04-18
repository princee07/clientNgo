import React, { useState } from "react";
import Layout from "../components/Layout";

const Donate = () => {
  const [amount, setAmount] = useState("");

  const handlePayment = () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_API_KEY", // Replace with your Razorpay API Key
      amount: amount * 100, // Amount in paise (multiply by 100 for INR)
      currency: "INR",
      name: "NGO Website",
      description: "Donation",
      image: "/path-to-your-logo.png", // Optional: Add your logo here
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Your Name", // Optional: Prefill user's name
        email: "your-email@example.com", // Optional: Prefill user's email
        contact: "9999999999", // Optional: Prefill user's contact
      },
      theme: {
        color: "#F37254", // Customize the modal color
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] flex items-center" style={{ backgroundImage: `url('/path-to-your-donation-image.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto text-center text-white px-4">
          <h1 className="text-5xl font-bold">Donate</h1>
          <p className="text-lg mt-4">
            <span className="text-orange-500">Home</span> &gt; Donate
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Make a Difference Today</h2>
            <p className="text-lg text-gray-600 mt-4">
              Your donation helps us provide essential services to those in need. Every contribution counts!
            </p>
          </div>

          {/* Donation Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlePayment();
              }}
            >
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Donation Amount (INR)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter Amount (e.g., 500)"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
              >
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;