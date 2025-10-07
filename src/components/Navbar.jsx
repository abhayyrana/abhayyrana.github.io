import React from "react"
import { Moon, Sun, Home, User, FolderGit2, Wrench, Mail } from "lucide-react"

const sections = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "projects", icon: FolderGit2, label: "Projects" },
  { id: "skills", icon: Wrench, label: "Skills" },
  { id: "contact", icon: Mail, label: "Contact" },
]

export default function Navbar({ darkMode, setDarkMode, activeSection }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-2xl">
        {sections.map(({ id, icon: Icon, label }) => {
          const active = activeSection === id
          return (
            <button
              key={id}
              aria-label={label}
              onClick={() => scrollTo(id)}
              className={`group relative grid place-items-center h-12 w-12 rounded-xl transition-all
                ${active ? "bg-white/10" : "hover:bg-white/5"}
              `}
            >
              <Icon
                size={22}
                className={`transition-transform duration-200 group-hover:scale-110
                  ${active ? "text-purple-400" : "text-white/80"}
                `}
              />
              <span className="pointer-events-none absolute -top-7 opacity-0 group-hover:opacity-100 transition text-xs text-white/90">
                {label}
              </span>
            </button>
          )
        })}

        <div className="mx-1 h-6 w-px bg-white/10" />

        <button
          aria-label="Toggle theme"
          onClick={() => setDarkMode(!darkMode)}
          className="grid place-items-center h-12 w-12 rounded-xl hover:bg-white/5 transition"
        >
          {darkMode ? <Sun size={22} className="text-yellow-300" /> : <Moon size={22} className="text-white/80" />}
        </button>
      </div>
    </div>
  )
}