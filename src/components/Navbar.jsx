import React from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode, activeSection }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-lg border-b transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900/80 border-gray-800 text-white"
          : "bg-white/80 border-gray-200 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          AR
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {["home", "about", "projects", "skills", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-colors duration-300 ${
                activeSection === section
                  ? "text-purple-500"
                  : darkMode
                  ? "text-gray-300 hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition-all duration-300 ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-purple-600" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
