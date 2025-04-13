import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Registered Nurse",
    feedback:
      "I found my dream nursing job quickly thanks to this user-friendly portal. The search filters are excellent. Highly recommend it!",
    image: "https://via.placeholder.com/100", // Replace with actual image path
    rating: 4,
  },
  {
    name: "John M.",
    role: "Healthcare Admin",
    feedback:
      "This job portal streamlined our hiring process, helping us find qualified candidates effortlessly. It's a game-changer for healthcare recruitment.",
    image: "https://via.placeholder.com/100", // Replace with actual image path
    rating: 5,
  },
  {
    name: "Emily R.",
    role: "Junior Doctor",
    feedback:
      "This site made my job search easy, and I secured a fantastic position within weeks. The resources provided are invaluable.",
    image: "https://via.placeholder.com/100", // Replace with actual image path
    rating: 5,
  },
  {
    name: "Sarah J.",
    role: "Registered Nurse",
    feedback:
      "I found my dream nursing job quickly thanks to this user-friendly portal. The search filters are excellent. Highly recommend it!",
    image: "https://via.placeholder.com/100", // Replace with actual image path
    rating: 4,
  },
  {
    name: "John M.",
    role: "Healthcare Admin",
    feedback:
      "This job portal streamlined our hiring process, helping us find qualified candidates effortlessly. It's a game-changer for healthcare recruitment.",
    image: "https://via.placeholder.com/100", // Replace with actual image path
    rating: 5,
  },
  {
    name: "Emily R.",
    role: "Junior Doctor",
    feedback:
      "This site made my job search easy, and I secured a fantastic position within weeks. The resources provided are invaluable.",
    image: "https://via.placeholder.com/100", // Replace with actual image path
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 lg:px-16 bg-gray-50 relative">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-700">
          Let’s Hear What Our Candidates Have to Say About Us!
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Don’t believe us, let’s hear from the candidates who have registered
          with us for their job needs and what they have to say about their
          experience.
        </p>
      </div>

      {/* Background Image Container */}
      <div
        className="relative w-[90%] lg:w-[95%] mx-auto bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/54/ae/23/54ae238def7ffdf7791add73e37e0fc9.jpg')", // Replace with your background image URL
        }}
      >
        <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm rounded-lg"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto py-16">
          {/* Swiper Slider */}
          <Swiper
            slidesPerView={1}
            spaceBetween={40} // Increased space between cards
            autoplay={{
              delay: 3000, // Auto-slide every 3 seconds
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center h-[400px] w-[350px]">
                  {/* Profile Image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mb-6 object-cover border-4 border-white shadow-md"
                  />
                  {/* Name and Role */}
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-yellow-500 text-sm mb-4">
                    {testimonial.role}
                  </p>
                  {/* Feedback */}
                  <p className="text-gray-600 mb-6">{testimonial.feedback}</p>
                  {/* Rating */}
                  <div className="flex justify-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className={`w-6 h-6 ${
                          i < testimonial.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;