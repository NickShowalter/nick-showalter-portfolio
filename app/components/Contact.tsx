"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center neon-text"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-lg mb-8 text-muted-foreground"
        >
          If you're interested in my consulting services, looking to hire me, or have any questions, please don't
          hesitate to reach out. I'm always open to new opportunities and collaborations.
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <FaMapMarkerAlt className="text-4xl text-neon-blue mb-2" />
            <p className="text-muted-foreground">Bend, OR</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <FaEnvelope className="text-4xl text-neon-cyan mb-2" />
            <a
              href="mailto:nickshowalter@protonmail.ch"
              className="text-muted-foreground hover:text-neon-blue transition-colors duration-300"
            >
              nickshowalter@protonmail.ch
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <FaPhone className="text-4xl text-neon-azure mb-2" />
            <a
              href="tel:503-962-9593"
              className="text-muted-foreground hover:text-neon-blue transition-colors duration-300"
            >
              503-962-9593
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center space-x-6 mt-12"
        >
          <a
            href="https://github.com/nickshowalter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-muted-foreground hover:text-neon-blue transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nicholasshowalter/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-muted-foreground hover:text-neon-cyan transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

