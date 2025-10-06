import React from "react";

const skills = [
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Python",
  "OpenCV",
  "Machine Learning",
  "GitHub",
  "Arduino",
  "C/C++",
];

const Skills = ({ darkMode }) => (
  <section id="skills" className="min-h-screen py-20 px-6">
    <h2 className="text-5xl font-bold text-center mb-12">
      Technical{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Skills
      </span>
    </h2>

    <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className={`px-6 py-3 rounded-full border transition-all hover:scale-110 ${
            darkMode
              ? "bg-gray-800 border-gray-700 text-gray-200"
              : "bg-white border-gray-200 text-gray-700"
          }`}
        >
          {skill}
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
