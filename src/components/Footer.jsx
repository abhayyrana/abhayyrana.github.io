import React from "react";

const Footer = ({ darkMode }) => (
  <footer
    className={`relative py-6 text-center overflow-hidden transition-colors duration-500 ${
      darkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-700"
    }`}
  >
    {/* Animated gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animate-pulse" />

    {/* Footer content */}
    <p className="relative z-10 text-sm">
      © {new Date().getFullYear()}{" "}
      <span
        className={`font-semibold ${
          darkMode
            ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
            : "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
        }`}
      >
        Abhay Rana
      </span>{" "}
      — Built with <span className="font-medium">React</span> +{" "}
      <span className="font-medium">Tailwind</span>
    </p>
  </footer>
);

export default Footer;
