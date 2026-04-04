"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Package, Shield, TrendingUp } from "lucide-react"

const projects = [
  {
    title: "Resin Substitution — $1M/yr Savings",
    tags: ["Cost Reduction", "Rain Bird 2024"],
    description: "Replaced premium resins with cost-effective equivalents across injection molding lines, delivering $1M per year in material savings. Recognized with the 'Most Significant Cost Reduction' award (2024) and 'Largest Impact of Alternative Material' (2025).",
    icon: TrendingUp,
  },
  {
    title: "Mold Insourcing — $2.5M CAPEX Avoided",
    tags: ["Insourcing", "CAPEX Optimization"],
    description: "Insourced critical molds to internal facility, avoiding $2.5M in capital expenditure. Drove global advanced DOE for tooling optimization across suppliers in Asia and North America.",
    icon: Package,
  },
  {
    title: "Medical Unit Launch — $1M/month Revenue",
    tags: ["Medical", "ISO 13485"],
    description: "Launched a new medical injection molding unit at Formula Plastics, reaching $1M monthly revenue within 12 months. Completed ISO 13485 mold validations in 4 weeks to safeguard the launch timeline during the Covid-19 crisis.",
    icon: Shield,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[#0A1F35] dot-grid opacity-50" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-sm text-[#4A9ED6]">04</span>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl text-[#E8F4FD]">
              Featured Projects
            </h2>
            <div className="flex-1 h-px bg-[rgba(74,158,214,0.2)]" />
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group glass-card rounded-xl overflow-hidden hover:border-[#4A9ED6]/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Top accent border */}
                <div className="h-1 bg-gradient-to-r from-[#4A9ED6] to-[#2D6BA0]" />
                
                <div className="p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[rgba(74,158,214,0.1)] border border-[rgba(74,158,214,0.3)] flex items-center justify-center mb-5 group-hover:bg-[rgba(74,158,214,0.2)] transition-colors">
                    <project.icon className="w-6 h-6 text-[#4A9ED6]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg md:text-xl text-[#E8F4FD] mb-3 group-hover:text-[#4A9ED6] transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono text-[#4A9ED6] border border-[rgba(74,158,214,0.3)] rounded bg-[rgba(74,158,214,0.05)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Description */}
                  <p className="font-sans text-sm leading-relaxed text-[#7BA3C4]">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
