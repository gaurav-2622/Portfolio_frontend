import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaCogs,
  FaProjectDiagram,
  FaEnvelope
} from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="top-0 z-50 sticky bg-gradient-to-r from-black via-gray-900 to-black shadow-lg">
      <nav className="flex justify-between items-center mx-auto px-6 py-4 text-white container">
        {/* Header Title */}
        <h1 className="bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-600 hover:to-indigo-700 font-extrabold text-xl tracking-wide transition duration-300 cursor-pointer transparent">
          <a
            href="mailto:myselfgaurav2527@gmail.com"
            className="hover:text-teal-400 transition duration-300"
          >
            myselfgaurav2527@gmail.com
          </a>
        </h1>

        {/* Desktop Navigation */}
        <ul className="lg:flex space-x-8 hidden font-semibold text-lg">
          <li>
            <Link
              to="/"
              className="flex items-center text-teal-300 hover:text-teal-400 transition duration-300"
            >
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <a
              href="#about"
              className="flex items-center text-teal-300 hover:text-teal-400 transition duration-300"
            >
              <FaUser className="mr-2" /> About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="flex items-center text-teal-300 hover:text-teal-400 transition duration-300"
            >
              <FaCogs className="mr-2" /> Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="flex items-center text-teal-300 hover:text-teal-400 transition duration-300"
            >
              <FaProjectDiagram className="mr-2" /> Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center text-teal-300 hover:text-teal-400 transition duration-300"
            >
              <FaEnvelope className="mr-2" /> Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl text-teal-300">
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="space-y-4 lg:hidden bg-gray-800 py-4 text-center text-white">
          <ul>
            <li>
              <Link
                to="/"
                className="flex justify-center items-center text-teal-300 hover:text-teal-400 transition duration-300"
              >
                <FaHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="flex justify-center items-center text-teal-300 hover:text-teal-400 transition duration-300"
              >
                <FaUser className="mr-2" /> About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="flex justify-center items-center text-teal-300 hover:text-teal-400 transition duration-300"
              >
                <FaCogs className="mr-2" /> Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="flex justify-center items-center text-teal-300 hover:text-teal-400 transition duration-300"
              >
                <FaProjectDiagram className="mr-2" /> Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex justify-center items-center text-teal-300 hover:text-teal-400 transition duration-300"
              >
                <FaEnvelope className="mr-2" /> Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
