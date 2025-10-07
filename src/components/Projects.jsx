import React, { useEffect, useState } from "react";
import { Github } from "lucide-react"

const Projects = ({ darkMode }) => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const getRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/abhayyrana/repos?per_page=9&sort=updated", {
          headers: { Accept: "application/vnd.github+json" },
        })
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
        const data = await res.json()
        setRepos(Array.isArray(data) ? data : [])
      } catch (err) {
        setRepos([])
      }
    }
    getRepos()
  }, [])

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <h2 className="text-5xl font-bold text-center mb-12">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Projects</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 rounded-2xl border transition-transform transform hover:-translate-y-2 hover:shadow-xl ${
              darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-400">{repo.name}</h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
              {repo.description || "No description available"}
            </p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>⭐ {repo.stargazers_count}</span>
              <Github size={16} />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
