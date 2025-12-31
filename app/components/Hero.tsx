"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    projectsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 pt-16 overflow-hidden"
    >
      {/* Clean gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        {/* Subtle accent orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto mb-8"
          >
            {/* Profile picture with ring */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-full blur-sm" />
              <Image
                src="/profile_picture.jpeg"
                alt="Nick Showalter"
                width={180}
                height={180}
                className="relative rounded-full ring-4 ring-background"
                priority
              />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 neon-text"
          >
            Nick Showalter
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold mb-6 text-neon-blue"
          >
            Innovating at the Intersection of Data, AI, and Automation
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg mb-8 max-w-4xl space-y-6"
          >
            <p className="text-muted-foreground">
              With 7+ years of experience in data engineering, analytics, and AI-driven solutions, I specialize in
              transforming complex data into actionable insights. My expertise spans SQL, Python, cloud platforms (AWS,
              Azure, Snowflake), and BI tools (Tableau, Power BI) to build scalable, high-performance data
              architectures.
            </p>
            <p className="text-muted-foreground">
              As the Founder of Gov-ConData, I develop AI-powered automation and data solutions that help businesses
              identify, propose, and win government contracts. By integrating machine learning, NLP, and intelligent
              workflows, I streamline decision-making and unlock hidden opportunities.
            </p>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-azure text-white px-8 py-3 rounded-full text-lg font-semibold glow cursor-pointer"
          >
            Explore My Work
          </motion.button>
        </div>
      </div>
    </section>
  )
}

