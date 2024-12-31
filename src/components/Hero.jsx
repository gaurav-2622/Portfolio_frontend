import React, { useEffect } from 'react';
import profilePhoto from '../assets/profile.png'; // Adjust the path as needed

const Hero = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty('--gradient-x', `${x}%`);
      document.documentElement.style.setProperty('--gradient-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative flex items-center bg-gradient-to-r from-black via-gray-900 to-black h-screen text-white">
      {/* Dynamic Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black transition-all duration-700"
        style={{
          backgroundPosition: 'var(--gradient-x, 50%) var(--gradient-y, 50%)',
        }}
      ></div>

      {/* Main Container */}
      <div className="relative z-10 flex lg:flex-row flex-col items-center mx-auto px-6 lg:px-20 container">
        {/* Left Section (Text) */}
        <div className="mb-12 lg:mb-0 lg:w-1/2 text-center lg:text-left">
          <h1 className="bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 mb-6 font-extrabold text-5xl text-transparent lg:text-6xl leading-tight tracking-tight">
            Hello, I'm <span className="text-teal-400">Gaurav Kumar Singh</span>
          </h1>
          <p className="max-w-lg text-gray-300 text-xl lg:text-2xl">
            A passionate{' '}
            <span className="text-teal-300">Android Developer</span> and
            3rd-year CSE student at IIIT Sonepat. I specialize in building
            modern, efficient, and user-friendly mobile applications.
          </p>
          <div className="flex justify-center lg:justify-start space-x-8 mt-8">
            {/* Resume Button */}
            <a
              href="/resume.pdf"  // Path to your resume file in the public folder
              download="Gaurav_Kumar_Singh_Resume.pdf" // Optional: Specify a custom filename for download
              className="bg-teal-400 hover:bg-teal-500 shadow-lg hover:shadow-2xl px-8 py-4 rounded-lg font-semibold text-indigo-900 transform transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>
            {/* Contact Button */}
            <a
              href="#contact"
              className="border-2 bg-transparent hover:bg-teal-400 hover:shadow-2xl px-8 py-4 border-teal-400 rounded-lg font-semibold text-teal-400 hover:text-indigo-900 transform transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Section (Profile Image) */}
        <div className="flex justify-center mt-10 lg:mt-0 lg:w-1/2">
          <img
            src={profilePhoto}
            alt="Gaurav Kumar Singh"
            className="border-4 shadow-xl hover:shadow-2xl border-teal-400 rounded-full w-[350px] lg:w-[450px] h-[350px] lg:h-[450px] transform transition-all duration-500 hover:scale-110 object-cover"
          />
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="right-0 bottom-6 left-0 absolute text-center">
        <p className="text-gray-400 text-sm">Scroll down to know more about me</p>
        <span className="text-2xl text-teal-400 animate-bounce cursor-pointer">↓</span>
      </div>
    </div>
  );
};

export default Hero;
