import React from "react";
import { Dock } from "react-bits";
import { Moon, Sun, Home, User, Code2, Wrench, Mail } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode, activeSection }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "home", icon: <Home size={22} />, label: "Home" },
    { id: "about", icon: <User size={22} />, label: "About" },
    { id: "projects", icon: <Code2 size={22} />, label: "Projects" },
    { id: "skills", icon: <Wrench size={22} />, label: "Skills" },
    { id: "contact", icon: <Mail size={22} />, label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-lg border-b ${
        darkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          AR
        </div>

        {/* Dock Navigation */}
        <div className="hidden md:block">
          <Dock
            magnification={70}
            distance={80}
            className="flex space-x-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center transition-colors ${
                  activeSection === item.id
                    ? "text-purple-500"
                    : "text-gray-500 hover:text-purple-400"
                }`}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            ))}
          </Dock>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition-colors ${
            darkMode ? "hover:bg-gray-800 text-yellow-400" : "hover:bg-gray-200 text-gray-600"
          }`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
