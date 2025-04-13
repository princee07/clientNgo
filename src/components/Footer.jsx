import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-purple-800 text-gray-300 py-16">
      {/* Curved Background */}
      <div className="absolute inset-0 -top-10 bg-purple-800 rounded-t-[50%] h-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Your NGO Name
            </h3>
            <p className="text-gray-400">
              We are committed to creating a better world by empowering
              communities through education, healthcare, and sustainable
              development.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition duration-300"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition duration-300"
                >
                  Our Projects
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-white transition duration-300"
                >
                  Blog & Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start">
                <i className="fas fa-phone-alt mr-2"></i>
                <span>+123-456-7890</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <i className="fas fa-envelope mr-2"></i>
                <span>info@yourngo.org</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>123 NGO Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Your NGO Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
