import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import volunteerImage from "../assets/image/2.png"; // Replace with your image path
import foodImage from "../assets/image/about.png"; // Replace with your image path
import greenImage from "../assets/image/2.png"; // Replace with your image path

const AboutUs = () => {
  return (
    <section className="py-16 px-4 lg:px-16 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-700">Who We Are</h2>
          <p className="text-lg text-gray-600 mt-4">
            Organization set up to provide help and raise money for those in
            need
          </p>
          <div className="mt-2 w-16 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={volunteerImage}
                alt="Volunteer"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  Places To Get Lost
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam blandit hendrerit faucibus. Suspendisse hendrerit
                  turpis dui, eget ultricies erat consequat ut.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={foodImage}
                alt="Healthy Food"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  Healthy Food For All
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam blandit hendrerit faucibus. Suspendisse hendrerit
                  turpis dui, eget ultricies erat consequat ut.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={foodImage}
                alt="Healthy Food"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  Healthy Food For All
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam blandit hendrerit faucibus. Suspendisse hendrerit
                  turpis dui, eget ultricies erat consequat ut.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={greenImage}
                alt="Green Organization"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  Green Organization
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam blandit hendrerit faucibus. Suspendisse hendrerit
                  turpis dui, eget ultricies erat consequat ut.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default AboutUs;
