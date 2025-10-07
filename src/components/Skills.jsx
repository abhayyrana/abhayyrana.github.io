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
  <section
    id="skills"
    className={`relative min-h-screen py-20 px-6 overflow-hidden transition-colors duration-500 ${
      darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
    }`}
  >
    {/* 🌈 Background gradient orbs */}
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={`absolute w-96 h-96 rounded-full blur-3xl animate-pulse ${
          darkMode ? "bg-purple-500/30" : "bg-purple-300/40"
        }`}
        style={{ top: "15%", left: "10%" }}
      />
      <div
        className={`absolute w-96 h-96 rounded-full blur-3xl animate-pulse ${
          darkMode ? "bg-pink-500/30" : "bg-pink-300/40"
        }`}
        style={{ bottom: "15%", right: "10%" }}
      />
    </div>

    {/* 🧠 Section Title */}
    <div className="relative z-10 text-center mb-16">
      <h2 className="text-5xl font-bold mb-4">
        Technical{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Skills
        </span>
      </h2>
      <p
        className={`max-w-2xl mx-auto text-lg ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Technologies, tools, and frameworks I use to build projects and explore
        new ideas in robotics and AI.
      </p>
    </div>

    {/* 💻 Skills Grid */}
    <div className="relative z-10 flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className={`px-8 py-4 rounded-full border text-lg font-medium shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
            darkMode
              ? "bg-gray-800 border-gray-700 text-gray-200 hover:border-purple-400/60"
              : "bg-white border-gray-200 text-gray-800 hover:border-purple-400/50"
          }`}
        >
          <span
            className={`bg-gradient-to-r bg-clip-text text-transparent ${
              darkMode
                ? "from-purple-300 to-pink-300"
                : "from-purple-600 to-pink-600"
            }`}
          >
            {skill}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
