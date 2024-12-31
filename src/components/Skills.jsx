import React from "react";
import { FaJava, FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiKotlin, SiFirebase, SiMysql, SiMongodb, SiJavascript } from "react-icons/si";
import { DiAndroid } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";

const Skills = () => {
  const skills = [
    { name: "Java", icon: <FaJava className="text-3xl" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-3xl" /> },
    { name: "C++", icon: <CgCPlusPlus className="text-3xl" /> },
    { name: "Kotlin", icon: <SiKotlin className="text-3xl" /> },
    { name: "Python", icon: <FaPython className="text-3xl" /> },
    { name: "DSA", icon: <FaDatabase className="text-3xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-3xl" /> },
    { name: "Android Studio", icon: <DiAndroid className="text-3xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-3xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-3xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-3xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-3xl" /> },
  ];

  return (
    <section id="skills" className="bg-gradient-to-r from-black via-gray-900 to-black px-8 py-16 text-white">
      <div className="mx-auto container">
        <h2 className="mb-10 font-extrabold text-5xl text-center text-white">Skills</h2>
        <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 shadow-lg px-6 py-6 rounded-lg text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">{skill.icon}</div>
              <p className="font-semibold text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
