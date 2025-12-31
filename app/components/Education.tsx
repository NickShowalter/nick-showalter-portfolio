"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaCertificate, FaGoogle, FaMicrosoft, FaBrain } from "react-icons/fa"

const education = {
  degree: "Bachelor of Science (B.S.), Finance",
  school: "Portland State University",
  location: "Portland, OR",
}

const certifications = [
  {
    name: "Google Data Analytics Certification",
    icon: <FaGoogle />,
    color: "text-neon-blue",
  },
  {
    name: "Power BI Data Analyst Certification",
    icon: <FaMicrosoft />,
    color: "text-neon-cyan",
  },
  {
    name: "DeepLearning.ai Certification",
    icon: <FaBrain />,
    color: "text-neon-azure",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center neon-text"
        >
          Education & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-card p-8 rounded-lg shadow-lg border border-secondary relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neon-blue/10 to-transparent rounded-bl-full" />
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-full">
                <FaGraduationCap className="text-3xl text-neon-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Education</h3>
                <h4 className="text-lg font-medium mb-2">{education.degree}</h4>
                <p className="text-muted-foreground">{education.school}</p>
                <p className="text-sm text-muted-foreground">{education.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-card p-8 rounded-lg shadow-lg border border-secondary relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neon-cyan/10 to-transparent rounded-bl-full" />
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-full">
                <FaCertificate className="text-3xl text-neon-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-primary mb-4">Certifications</h3>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className={`text-xl ${cert.color}`}>{cert.icon}</span>
                      <span className="text-muted-foreground">{cert.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

