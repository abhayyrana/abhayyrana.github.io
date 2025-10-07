import React from "react";
import { Code, Brain } from "lucide-react";

const About = ({ darkMode }) => (
  <section
    id="about"
    className={`min-h-screen flex items-center py-20 px-4 transition-colors duration-500 ${
      darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
    }`}
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold mb-12 text-center">
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Me
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* 🧑‍💻 Card 1 */}
        <div
          className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl ${
            darkMode
              ? "bg-gray-800/60 border-gray-700 hover:shadow-purple-500/20"
              : "bg-white border-gray-200 hover:shadow-pink-400/30"
          }`}
        >
          <Code
            className={`mb-4 ${
              darkMode ? "text-purple-400" : "text-purple-600"
            }`}
            size={40}
          />
          <h3 className="text-2xl font-bold mb-4">Student & Developer</h3>
          <p
            className={`transition-colors duration-500 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Pursuing B.Tech in Robotics & AI at K.J. Somaiya College of
            Engineering. Passionate about creating intelligent systems that
            merge hardware and software seamlessly.
          </p>
        </div>

        {/* 🧠 Card 2 */}
        <div
          className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl ${
            darkMode
              ? "bg-gray-800/60 border-gray-700 hover:shadow-pink-500/20"
              : "bg-white border-gray-200 hover:shadow-purple-400/30"
          }`}
        >
          <Brain
            className={`mb-4 ${
              darkMode ? "text-pink-400" : "text-pink-600"
            }`}
            size={40}
          />
          <h3 className="text-2xl font-bold mb-4">Learning Journey</h3>
          <p
            className={`transition-colors duration-500 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Exploring OpenCV, Machine Learning, and Robotics frameworks.
            Focused on developing real-world robotic systems and AI-driven
            perception.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
