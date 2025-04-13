import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaProjectDiagram, FaHandsHelping, FaQuestionCircle, FaPhone, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-20 px-4 lg:h-28">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-blue-600">
          NGO Website
        </a>

        {/* Centered NavLinks */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-14">
          <li>
            <a
              href="#home"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <FaHome className="text-xl lg:text-3xl" />
              <span className="text-xs lg:text-sm font-semibold">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <FaInfoCircle className="text-xl lg:text-3xl" />
              <span className="text-xs lg:text-sm font-semibold">About</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <FaProjectDiagram className="text-xl lg:text-3xl" />
              <span className="text-xs lg:text-sm font-semibold">Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#ngos"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <FaHandsHelping className="text-xl lg:text-3xl" />
              <span className="text-xs lg:text-sm font-semibold">NGOs</span>
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <FaQuestionCircle className="text-xl lg:text-3xl" />
              <span className="text-xs lg:text-sm font-semibold">FAQ</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <FaPhone className="text-xl lg:text-3xl" />
              <span className="text-xs lg:text-sm font-semibold">Contact</span>
            </a>
          </li>
        </ul>

        {/* Profile Icon */}
        <a
          href="#profile"
          className="hidden md:flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <FaUser className="text-xl lg:text-3xl" />
          <span className="text-xs lg:text-sm font-semibold">Profile</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <ul className="space-y-4 text-center">
            <li>
              <a
                href="#home"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#ngos"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                NGOs
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#profile"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;