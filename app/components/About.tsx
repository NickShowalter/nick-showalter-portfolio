"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section ref={ref} id="about" className="py-20 relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-50" />
        <div className="w-full h-full bg-[url('/circuit-board.svg')] opacity-10" />
      </motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center neon-text"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg space-y-6"
        >
          <p className="text-muted-foreground">
            I am a data engineer and analytics expert with a strong foundation in data modeling, ETL automation,
            real-time analytics, and governance. My expertise in SQL extends to query optimization, performance tuning,
            and building complex relational data structures that support high-volume data processing. I also specialize
            in Python-based data engineering, leveraging libraries like Pandas, NumPy, and SQLAlchemy to automate and
            scale data workflows.
          </p>
          <p className="text-muted-foreground">
            Beyond traditional analytics, I leverage advanced AI methodologies, including Retrieval-Augmented Generation
            (RAG), fine-tuned LLMs, and predictive modeling, to drive data accessibility, automation, and intelligent
            decision-making. My expertise in DevOps-driven workflows and cloud-native architectures ensures seamless
            deployment of scalable, production-ready solutions.
          </p>
          <p className="text-muted-foreground">
            As the Founder of Gov-ConData, I focus on leveraging AI, machine learning, and workflow automation to
            revolutionize how businesses engage with government contracting—making the process faster, smarter, and more
            strategic.
          </p>
          <p className="text-muted-foreground">
            I hold a B.S. in Finance from Portland State University and certifications in Azure, Snowflake, and AWS,
            reflecting my commitment to staying ahead in the evolving data and AI landscape.
          </p>
          <p className="text-muted-foreground font-semibold">
            Let's build the future of data, automation, and AI-driven insights—one breakthrough at a time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

