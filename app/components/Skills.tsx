"use client"

import { motion } from "framer-motion"
import { FaDatabase, FaCloud, FaCode, FaRobot, FaUserTie } from "react-icons/fa"

const skills = [
  {
    category: "Data Analysis & BI",
    items: [
      { name: "Advanced SQL", level: 95 },
      { name: "Python", level: 90 },
      { name: "Tableau", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "Advanced Excel", level: 95 },
      { name: "Statistical Analysis", level: 85 },
    ],
    icon: <FaDatabase />,
  },
  {
    category: "Database & Cloud Technologies",
    items: [
      { name: "Snowflake", level: 90 },
      { name: "Databricks", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Azure", level: 85 },
      { name: "ETL Pipeline Development", level: 90 },
    ],
    icon: <FaCloud />,
  },
  {
    category: "Data Engineering & DevOps",
    items: [
      { name: "AWS Lambda", level: 90 },
      { name: "Apache Airflow", level: 85 },
      { name: "Cron / Task Scheduling", level: 90 },
      { name: "GitHub Actions", level: 85 },
      { name: "DBT", level: 88 },
      { name: "AWS S3", level: 92 },
      { name: "Docker", level: 85 },
      { name: "Azure DevOps", level: 88 },
    ],
    icon: <FaCode />,
  },
  {
    category: "Full-Stack & AI Engineering",
    items: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Next.js", level: 85 },
      { name: "LLMs (OpenAI, Anthropic)", level: 85 },
      { name: "AI Model Fine-tuning", level: 80 },
    ],
    icon: <FaRobot />,
  },
  {
    category: "Professional Skills",
    items: [
      { name: "Leadership & Team Management", level: 95 },
      { name: "Strategic Planning", level: 90 },
      { name: "Technical Presentations", level: 95 },
      { name: "Cross-functional Communication", level: 90 },
      { name: "Project Management", level: 85 },
      { name: "Problem-Solving", level: 95 },
    ],
    icon: <FaUserTie />,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center neon-text"
        >
          Skills & Tools
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl text-neon-blue mr-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground">
                    <div className="flex justify-between mb-1">
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-neon-blue to-neon-azure h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: itemIndex * 0.1 }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

