import React from "react";
import { Code, Brain } from "lucide-react";

const About = ({ darkMode }) => (
  <section id="about" className="min-h-screen flex items-center py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold mb-12 text-center">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Me</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className={`p-8 rounded-2xl ${darkMode ? "bg-gray-800/50" : "bg-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:scale-105 transition-transform`}>
          <Code className="text-purple-500 mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-4">Student & Developer</h3>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Pursuing B.Tech in Robotics & AI at K.J. Somaiya College of Engineering. Passionate about creating intelligent systems that merge hardware and software seamlessly.
          </p>
        </div>

        <div className={`p-8 rounded-2xl ${darkMode ? "bg-gray-800/50" : "bg-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:scale-105 transition-transform`}>
          <Brain className="text-pink-500 mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-4">Learning Journey</h3>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Exploring OpenCV, Machine Learning, and Robotics frameworks. Focused on developing real-world robotic systems and AI-driven perception.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
