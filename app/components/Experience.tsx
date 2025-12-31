"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "IT Business Systems Analyst",
    company: "Marathon Petroleum Corporation",
    date: "March 2025 – Present",
    description:
      "Led the architecture and design of an SAP S/4HANA MM supply chain data pipeline into Azure with medallion architecture. Designed analytics-ready star schemas for Power BI enterprise reports, enabling standardized KPIs and saving 13,000 hours. Rebuilt data architecture for legacy .NET applications and delivered AI capability presentations for Supply Chain leadership.",
  },
  {
    title: "Data Engineer",
    company: "BMS Technologies",
    date: "May 2024 – March 2025",
    description:
      "Developed comprehensive analytics roadmaps, implemented scalable data models and ETL pipelines, and enhanced data accuracy by reducing error rates.",
  },
  {
    title: "Senior Data Analyst",
    company: "Whitewater Midstream LLC",
    date: "January 2023 – March 2024",
    description:
      "Worked with enterprise data teams to rationalize data objects, eliminate redundancy, and optimize data pipeline workflows. Created and maintained data dictionaries and metadata catalogs. Partnered with stakeholders to define KPIs and implement data structures that improve decision-making efficiency.",
  },
  {
    title: "Data Analyst (Contract)",
    company: "Whole Foods Inc",
    date: "January 2022 – January 2023",
    description:
      "Designed and deployed interactive Tableau dashboards and SQL-based reports to track marketing and regional supply chain performance. Conducted data validation and quality assurance. Defined and refined data models for operational analysis, improving reporting efficiency and decision-making.",
  },
  {
    title: "Data Analyst",
    company: "Radcat Design & Inbound Fit",
    date: "June 2019 – January 2022",
    description:
      "Developed Power BI and Tableau dashboards for monitoring KPIs and user behavior. Built automated data workflows, reducing manual errors and enhancing efficiency by 60%. Worked closely with business teams to improve reporting accuracy and optimize customer acquisition strategies.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center neon-text"
        >
          Professional Experience
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary"
            >
              <h3 className="text-2xl font-semibold mb-2 text-primary">{experience.title}</h3>
              <h4 className="text-xl text-muted-foreground mb-2">{experience.company}</h4>
              <p className="text-sm text-muted-foreground mb-4">{experience.date}</p>
              <p className="text-muted-foreground">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

