import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = ({ darkMode }) => (
  <section id="contact" className="min-h-screen py-20 px-6">
    <h2 className="text-5xl font-bold text-center mb-12">
      Get In{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Touch
      </span>
    </h2>

    <form
      action="https://formsubmit.co/your-email@example.com"
      method="POST"
      className="max-w-xl mx-auto bg-gray-800/50 rounded-2xl p-8 flex flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="p-3 rounded bg-gray-900 text-white outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="p-3 rounded bg-gray-900 text-white outline-none"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="p-3 rounded bg-gray-900 text-white h-32 outline-none"
      ></textarea>
      <button
        type="submit"
        className="bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded font-bold hover:opacity-90"
      >
        Send
      </button>
    </form>

    <div className="flex justify-center gap-6 mt-10">
      <a href="https://github.com/abhayyrana" target="_blank" rel="noreferrer">
        <Github className="hover:text-purple-500 transition" />
      </a>
      <a href="https://www.linkedin.com/in/abhayyrana/" target="_blank" rel="noreferrer">
        <Linkedin className="hover:text-blue-500 transition" />
      </a>
      <a href="mailto:abhay.rana@example.com">
        <Mail className="hover:text-pink-500 transition" />
      </a>
    </div>
  </section>
);

export default Contact;
