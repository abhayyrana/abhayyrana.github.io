import React from "react";

const Footer = ({ darkMode }) => (
  <footer className="relative py-6 text-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animate-pulse" />
    <p className="relative z-10 text-gray-400 text-sm">
      © {new Date().getFullYear()} Abhay Rana — Built with React + Tailwind
    </p>
  </footer>
);

export default Footer;
