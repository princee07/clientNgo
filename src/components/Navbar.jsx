import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"; // Import your logo image here
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaQuestionCircle,
  FaPhone,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Define isOpen state for the mobile menu

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center h-20 px-5 lg:h-28">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="Logo" className="h-28 lg:h-32 object-contain" />

          </NavLink>

          {/* Centered NavLinks */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-14">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex flex-col items-center ${
                    isActive
                      ? "text-blue-600 underline"
                      : "text-gray-600 hover:text-blue-600 hover:underline"
                  }`
                }
              >
                <FaHome className="text-xl lg:text-3xl" />
                <span className="text-xs lg:text-sm font-semibold">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex flex-col items-center ${
                    isActive
                      ? "text-blue-600 underline"
                      : "text-gray-600 hover:text-blue-600 hover:underline"
                  }`
                }
              >
                <FaInfoCircle className="text-xl lg:text-3xl" />
                <span className="text-xs lg:text-sm font-semibold">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `flex flex-col items-center ${
                    isActive
                      ? "text-blue-600 underline"
                      : "text-gray-600 hover:text-blue-600 hover:underline"
                  }`
                }
              >
                <FaProjectDiagram className="text-xl lg:text-3xl" />
                <span className="text-xs lg:text-sm font-semibold">
                  Projects
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `flex flex-col items-center ${
                    isActive
                      ? "text-blue-600 underline"
                      : "text-gray-600 hover:text-blue-600 hover:underline"
                  }`
                }
              >
                <FaQuestionCircle className="text-xl lg:text-3xl" />
                <span className="text-xs lg:text-sm font-semibold">FAQ</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex flex-col items-center ${
                    isActive
                      ? "text-blue-600 underline"
                      : "text-gray-600 hover:text-blue-600 hover:underline"
                  }`
                }
              >
                <FaPhone className="text-xl lg:text-3xl" />
                <span className="text-xs lg:text-sm font-semibold">Contact</span>
              </NavLink>
            </li>
          </ul>

          {/* Donate Button */}
          <NavLink
            to="/donate"
            className="hidden md:flex bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
          >
            Donate
          </NavLink>

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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block ${
                      isActive ? "text-blue-600 underline" : "text-gray-600"
                    } hover:text-blue-600 hover:underline`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block ${
                      isActive ? "text-blue-600 underline" : "text-gray-600"
                    } hover:text-blue-600 hover:underline`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block ${
                      isActive ? "text-blue-600 underline" : "text-gray-600"
                    } hover:text-blue-600 hover:underline`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    `block ${
                      isActive ? "text-blue-600 underline" : "text-gray-600"
                    } hover:text-blue-600 hover:underline`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block ${
                      isActive ? "text-blue-600 underline" : "text-gray-600"
                    } hover:text-blue-600 hover:underline`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donate"
                  className="block bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Donate
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;