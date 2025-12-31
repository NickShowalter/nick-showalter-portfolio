"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background border-t py-8"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">© 2026 Nick Showalter. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}

