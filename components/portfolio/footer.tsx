"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative py-8 border-t border-[rgba(74,158,214,0.2)]">
      <div className="absolute inset-0 bg-[#0A1F35] dot-grid opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-sm text-[#7BA3C4]">
            Jorge Sandoval © {new Date().getFullYear()}
          </p>
          
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#7BA3C4]/60">
              Principal Process Engineer
            </span>
            <span className="text-[#4A9ED6]">|</span>
            <span className="font-mono text-xs text-[#7BA3C4]/60">
              Engineering Manager
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
