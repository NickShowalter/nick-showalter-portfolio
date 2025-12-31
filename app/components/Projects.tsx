"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const projects = [
  {
    title: "GovCon Data Platform",
    description:
      "An innovative platform that streamlines the process of finding and bidding on government contracts for businesses. Leveraging advanced AI and machine learning capabilities, the platform automates opportunity discovery, analysis, and proposal development, making government contracting more accessible and efficient for businesses of all sizes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jtoEV68ILvrA2VYKXjNG6AkFUyX1kf.png",
    tags: ["Python", "Snowflake", "SQL", "ETL", "TypeScript", "Advanced AI", "Machine Learning", "NLP"],
  },
  {
    title: "BMS RFP Resource",
    description:
      "End-to-end system automating the process of finding and bidding on government contracts in the commercial printing and mailing industry. This platform streamlines the entire workflow from opportunity discovery to proposal submission, leveraging advanced data processing and AI-driven insights.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-10%20at%2011.04.02%E2%80%AFPM-uNE2UImMmYbfR23LypmcoCogLWCWGl.png",
    tags: ["Python", "MongoDB", "React", "ETL", "AI/ML", "Automation"],
  },
  {
    title: "SAP S/4HANA Supply Chain Data Platform",
    description:
      "Architected an end-to-end data pipeline from SAP S/4HANA Material Master data into Azure using Synapse Pipelines and Azure Data Lake Storage (ADLS) with medallion architecture (Bronze, Silver, Gold layers). Built Power BI dashboards with advanced DAX measures connected to the curated Gold layer, automating material search and deduplication for the Supply Chain department. Enables automated material cleanup, classification analysis, and stock-level reporting—saving 25,000+ hours per year while providing real-time insights for supply chain optimization.",
    image: "/Materials_Search.png",
    tags: ["SAP S/4HANA", "Azure Synapse", "ADLS", "Medallion Architecture", "Power BI", "DAX", "Data Engineering", "Supply Chain"],
  },
  {
    title: "FERC Regulatory Reporting Automation",
    description:
      "Developed a comprehensive automation system for Federal Energy Regulatory Commission (FERC) reporting requirements. Utilizing advanced SQL operations (including PARTITION BY, GROUP BY, Window Functions, CTEs, and complex aggregations like SUM, AVG, MAX/MIN with CASE statements) and Python, the system automatically processes and validates regulatory data. This solution reduced reporting time by 75% while ensuring 100% compliance accuracy.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LX3lR8t22T3lDgVy5vQF6rA2bC4Mr0.png",
    tags: ["Python", "Advanced SQL", "Power BI", "ETL", "Automation", "Regulatory Compliance"],
  },
  {
    title: "Enterprise SharePoint Intranet Portal",
    description:
      "Designed and implemented a comprehensive SharePoint intranet solution for WhiteWater Midstream, featuring advanced access controls, automated workflows, and integrated weather services. The solution includes custom SharePoint Framework (SPFx) web parts, Power Automate flows for process automation, and seamless integration with Microsoft 365 services. Key features include role-based access control, document management with version control, and real-time collaborative tools.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_460FC6208D5F-1-vsy8J1He4YqSxGncvFQ49mLBIa5Xyt.jpeg",
    tags: ["SharePoint", "Microsoft 365", "SPFx", "Power Automate", "Azure AD", "TypeScript"],
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0)

  const goToPrevious = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center neon-text"
        >
          Featured Projects
        </motion.h2>
        
        {/* Main content with navigation arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card border border-border shadow-lg hover:bg-accent transition-all duration-200 hover:scale-110 -translate-x-2 md:-translate-x-6"
            aria-label="Previous project"
          >
            <FaChevronLeft className="w-5 h-5 text-primary" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card border border-border shadow-lg hover:bg-accent transition-all duration-200 hover:scale-110 translate-x-2 md:translate-x-6"
            aria-label="Next project"
          >
            <FaChevronRight className="w-5 h-5 text-primary" />
          </button>

          {/* Project Content */}
          <div className="flex flex-col md:flex-row items-center justify-center px-12 md:px-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[16/10] bg-secondary/30 rounded-lg overflow-hidden"
              >
                <Image
                  src={projects[activeProject].image || "/placeholder.svg"}
                  alt={projects[activeProject].title}
                  fill
                  className="rounded-lg shadow-lg object-contain"
                  priority={activeProject === 0}
                />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <motion.h3
                key={`title-${activeProject}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold mb-4 neon-text"
              >
                {projects[activeProject].title}
              </motion.h3>
              <motion.p
                key={`description-${activeProject}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-muted-foreground mb-4"
              >
                {projects[activeProject].description}
              </motion.p>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeProject].tags.map((tag, index) => (
                  <span key={index} className="bg-secondary text-primary text-sm font-medium px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Dots indicator with project counter */}
              <div className="flex items-center gap-4">
                <div className="flex space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProject(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                        index === activeProject 
                          ? "bg-primary w-6" 
                          : "bg-secondary hover:bg-muted-foreground"
                      }`}
                      aria-label={`View project ${index + 1}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {activeProject + 1} / {projects.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

