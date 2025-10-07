import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = ({ darkMode }) => (
  <section
    id="contact"
    className={`min-h-screen py-20 px-6 transition-colors duration-500 ${
      darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
    }`}
  >
    <h2 className="text-5xl font-bold text-center mb-12">
      Get In{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Touch
      </span>
    </h2>

    <form
      action="https://formsubmit.co/your-email@example.com"
      method="POST"
      className={`max-w-xl mx-auto rounded-2xl p-8 flex flex-col gap-4 border transition-all duration-300 ${
        darkMode
          ? "bg-gray-800/50 border-gray-700"
          : "bg-white border-gray-300 shadow-lg"
      }`}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className={`p-3 rounded outline-none transition-colors duration-300 ${
          darkMode
            ? "bg-gray-900 text-white placeholder-gray-400"
            : "bg-gray-100 text-gray-800 placeholder-gray-500"
        }`}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className={`p-3 rounded outline-none transition-colors duration-300 ${
          darkMode
            ? "bg-gray-900 text-white placeholder-gray-400"
            : "bg-gray-100 text-gray-800 placeholder-gray-500"
        }`}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className={`p-3 rounded h-32 outline-none transition-colors duration-300 ${
          darkMode
            ? "bg-gray-900 text-white placeholder-gray-400"
            : "bg-gray-100 text-gray-800 placeholder-gray-500"
        }`}
      ></textarea>
      <button
        type="submit"
        className="bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded font-bold hover:opacity-90 transition"
      >
        Send
      </button>
    </form>

    <div className="flex justify-center gap-6 mt-10">
      <a
        href="https://github.com/abhayyrana"
        target="_blank"
        rel="noreferrer"
        className={`transition ${
          darkMode ? "text-white hover:text-purple-400" : "text-gray-700 hover:text-purple-600"
        }`}
      >
        <Github size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/abhayyrana/"
        target="_blank"
        rel="noreferrer"
        className={`transition ${
          darkMode ? "text-white hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
        }`}
      >
        <Linkedin size={28} />
      </a>
      <a
        href="mailto:abhay.rana@example.com"
        className={`transition ${
          darkMode ? "text-white hover:text-pink-400" : "text-gray-700 hover:text-pink-600"
        }`}
      >
        <Mail size={28} />
      </a>
    </div>
  </section>
);

export default Contact;
