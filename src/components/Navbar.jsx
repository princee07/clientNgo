import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaHandsHelping,
  FaQuestionCircle,
  FaPhone,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-20 px-4 lg:h-28">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          NGO Website
        </Link>

        {/* Centered NavLinks */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-14">
          <li>
            <Link
              to="/"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <FaHome className="text-xl lg:text-3xl" />
              <span className="text-xs lg:text-sm font-semibold">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <FaInfoCircle className="text-xl lg:text-3xl" />
              <span className="text-xs lg:text-sm font-semibold">About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <FaProjectDiagram className="text-xl lg:text-3xl" />
              <span className="text-xs lg:text-sm font-semibold">Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="/ngos"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <FaHandsHelping className="text-xl lg:text-3xl" />
              <span className="text-xs lg:text-sm font-semibold">NGOs</span>
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <FaQuestionCircle className="text-xl lg:text-3xl" />
              <span className="text-xs lg:text-sm font-semibold">FAQ</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <FaPhone className="text-xl lg:text-3xl" />
              <span className="text-xs lg:text-sm font-semibold">Contact</span>
            </Link>
          </li>
        </ul>

        {/* Profile Icon */}
        <Link
          to="/profile"
          className="hidden md:flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <FaUser className="text-xl lg:text-3xl" />
          <span className="text-xs lg:text-sm font-semibold">Profile</span>
        </Link>

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
              <Link
                to="/"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/ngos"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                NGOs
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
