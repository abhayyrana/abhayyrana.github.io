import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ top: "20%", left: "10%" }} />
        <div className="absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ bottom: "20%", right: "10%" }} />
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="mb-6 inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold">
              AR
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">Abhay Rana</h1>
        <p className="text-xl md:text-2xl mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          B.Tech in Robotics & Artificial Intelligence
        </p>
        <p className="text-lg text-gray-400 mb-8">K.J. Somaiya College of Engineering, Mumbai</p>

        <div className="flex justify-center gap-4 mb-12">
          <a href="https://github.com/abhayyrana" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-all hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/abhayyrana/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-all hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:abhay.rana@example.com" className="p-3 rounded-full bg-gray-800 hover:bg-pink-600 transition-all hover:scale-110">
            <Mail size={24} />
          </a>
        </div>

        <button onClick={() => scrollToSection("about")} className="animate-bounce">
          <ChevronDown size={32} className="text-purple-500" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
