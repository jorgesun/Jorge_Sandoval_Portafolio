"use client"

import { motion } from "framer-motion"
import { ArrowDown, Briefcase, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with dot grid */}
      <div className="absolute inset-0 bg-[#0A1F35] dot-grid" />
      
      {/* Radial glow effect */}
      <div className="absolute inset-0 hero-glow" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Pre-title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-sm md:text-base text-[#4A9ED6] mb-4 tracking-wider"
          >
            ENGINEERING MANAGER
          </motion.p>

          {/* Name */}
          <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E8F4FD] mb-6 tracking-tight">
            Jorge Sandoval
          </h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-[family-name:var(--font-syne)] text-xl md:text-2xl text-[#7BA3C4] mb-4"
          >
            Principal Engineer | Engineering Manager (Acting)
          </motion.p>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-mono text-sm text-[#4A9ED6] mb-8"
          >
            Tijuana, B.C. | Rain Bird Corporation
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-sans text-lg md:text-xl text-[#7BA3C4] max-w-2xl mx-auto mb-12"
          >
            30+ years in scientific injection molding for medical and high-spec products — delivering $1M+ in cost savings and double-digit scrap reductions
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 bg-[#4A9ED6] text-[#0A1F35] font-[family-name:var(--font-syne)] font-semibold rounded-lg hover:bg-[#6AB4E2] transition-all duration-300 metallic-glow"
            >
              <Briefcase size={20} />
              View Projects
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 border border-[rgba(74,158,214,0.4)] text-[#E8F4FD] font-[family-name:var(--font-syne)] font-semibold rounded-lg hover:bg-[rgba(74,158,214,0.1)] hover:border-[#4A9ED6] transition-all duration-300"
            >
              <Mail size={20} />
              Contact
            </a>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs text-[#7BA3C4]">SCROLL</span>
            <ArrowDown size={20} className="text-[#4A9ED6]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
