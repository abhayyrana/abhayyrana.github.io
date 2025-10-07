import React, { useEffect, useState } from "react";
import { Github } from "lucide-react";

const Projects = ({ darkMode }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/abhayyrana/repos?per_page=9&sort=updated",
          { headers: { Accept: "application/vnd.github+json" } }
        );
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const data = await res.json();
        setRepos(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching repos:", err);
        setRepos([]);
      }
    };
    getRepos();
  }, []);

  return (
    <section
      id="projects"
      className={`relative min-h-screen py-20 px-6 overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* 🌈 Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl animate-pulse ${
            darkMode ? "bg-purple-500/30" : "bg-purple-300/40"
          }`}
          style={{ top: "15%", left: "10%" }}
        />
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl animate-pulse ${
            darkMode ? "bg-pink-500/30" : "bg-pink-300/40"
          }`}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      {/* 🧩 Section Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Projects
          </span>
        </h2>
        <p
          className={`max-w-2xl mx-auto text-lg ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          A collection of my recent repositories — exploring React, Embedded Systems,
          and creative coding experiments.
        </p>
      </div>

      {/* 🧠 Projects Grid */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                darkMode
                  ? "bg-gray-800/70 border-gray-700 hover:border-purple-500/60"
                  : "bg-white/70 border-gray-200 hover:border-purple-400/50"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-2 bg-gradient-to-r bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 ${
                  darkMode
                    ? "from-purple-300 to-pink-300"
                    : "from-purple-600 to-pink-600"
                }`}
              >
                {repo.name}
              </h3>

              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {repo.description || "No description available"}
              </p>

              <div
                className={`flex justify-between items-center text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <span>⭐ {repo.stargazers_count}</span>
                <Github
                  size={18}
                  className={`transition-transform group-hover:scale-110 ${
                    darkMode
                      ? "text-purple-400"
                      : "text-purple-600"
                  }`}
                />
              </div>
            </a>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            Loading repositories...
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
