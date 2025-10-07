import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = ({ darkMode }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-16 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* 🌈 Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl animate-pulse ${
            darkMode
              ? "bg-purple-500/30"
              : "bg-purple-300/40"
          }`}
          style={{ top: "20%", left: "10%" }}
        />
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl animate-pulse ${
            darkMode
              ? "bg-pink-500/30"
              : "bg-pink-300/40"
          }`}
          style={{ bottom: "20%", right: "10%" }}
        />
      </div>

      {/* 🧑‍💻 Main content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        {/* Avatar circle */}
        <div className="mb-6 inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 animate-spin-slow">
            <div
              className={`w-full h-full rounded-full flex items-center justify-center text-4xl font-bold ${
                darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
              }`}
            >
              AR
            </div>
          </div>
        </div>

        {/* Texts */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Abhay Rana</h1>
        <p
          className={`text-xl md:text-2xl mb-6 bg-gradient-to-r bg-clip-text text-transparent ${
            darkMode
              ? "from-purple-400 to-pink-400"
              : "from-purple-600 to-pink-600"
          }`}
        >
          B.Tech in Robotics & Artificial Intelligence
        </p>
        <p
          className={`text-lg mb-8 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          K.J. Somaiya College of Engineering, Mumbai
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://github.com/abhayyrana"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all hover:scale-110 ${
              darkMode
                ? "bg-gray-800 hover:bg-purple-600"
                : "bg-gray-200 hover:bg-purple-500"
            }`}
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhayyrana/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all hover:scale-110 ${
              darkMode
                ? "bg-gray-800 hover:bg-blue-600"
                : "bg-gray-200 hover:bg-blue-500"
            }`}
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:abhay.rana@example.com"
            className={`p-3 rounded-full transition-all hover:scale-110 ${
              darkMode
                ? "bg-gray-800 hover:bg-pink-600"
                : "bg-gray-200 hover:bg-pink-500"
            }`}
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Down Icon */}
        <button onClick={() => scrollToSection("about")} className="animate-bounce">
          <ChevronDown
            size={32}
            className={`${
              darkMode ? "text-purple-400" : "text-purple-600"
            } transition-colors`}
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;
