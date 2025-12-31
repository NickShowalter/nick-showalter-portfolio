"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Monitor, Moon, Sun, Laptop } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "system", icon: Laptop, label: "System" },
  ]

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-card hover:bg-accent transition-colors duration-200 border border-border flex items-center gap-2"
      >
        <Monitor className="h-4 w-4" />
        <span className="text-sm">Theme</span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 py-2 w-32 bg-card rounded-lg shadow-lg border border-border"
        >
          {themes.map(({ name, icon: Icon, label }) => (
            <button
              key={name}
              onClick={() => {
                setTheme(name)
                setIsOpen(false)
              }}
              className={`w-full px-3 py-2 text-sm flex items-center gap-2 hover:bg-accent transition-colors duration-200 ${
                theme === name ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

