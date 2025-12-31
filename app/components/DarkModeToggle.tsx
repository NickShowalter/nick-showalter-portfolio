"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { FaSun, FaMoon } from "react-icons/fa"

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 p-2 rounded-full bg-primary text-primary-foreground z-50 transition-colors duration-200 ease-in-out hover:bg-secondary"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
    </button>
  )
}

