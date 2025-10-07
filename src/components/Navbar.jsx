import React from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode, activeSection }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-lg ${
        darkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-200"
      } border-b`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          AR
        </div>

        <div className="hidden md:flex space-x-8">
          {["home", "about", "projects", "skills", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-colors ${
                activeSection === section ? "text-purple-500" : "hover:text-purple-400"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
