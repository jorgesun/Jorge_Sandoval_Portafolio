"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Cog, Users, Wrench, Lightbulb } from "lucide-react"

const expertiseCategories = [
  {
    title: "PROCESS ENGINEERING",
    icon: Cog,
    skills: [
      "Injection Molding",
      "DOE",
      "PFMEA",
      "APQP",
      "IATF 16949",
      "Control Plans",
      "GR&R",
      "SPC",
      "Cpk Analysis",
    ],
  },
  {
    title: "MANAGEMENT",
    icon: Users,
    skills: [
      "CAPEX Justification",
      "PAR Documentation",
      "Budget Management",
      "Cross-Plant Coordination",
      "Continuous Improvement",
      "RCA",
    ],
  },
  {
    title: "TOOLS & TECH",
    icon: Wrench,
    skills: [
      "Smartsheet",
      "OmniFocus",
      "Minitab",
      "Python",
      "Excel",
      "Obsidian",
    ],
  },
  {
    title: "METHODOLOGIES",
    icon: Lightbulb,
    skills: [
      "Kepner-Tregoe IS/IS NOT",
      "5 Whys",
      "Ishikawa",
      "Lean Manufacturing",
      "ANOVA",
      "DOE",
    ],
  },
]

export function ExpertiseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="expertise" className="relative py-24 md:py-32">
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
            <span className="font-mono text-sm text-[#4A9ED6]">02</span>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl text-[#E8F4FD]">
              Expertise
            </h2>
            <div className="flex-1 h-px bg-[rgba(74,158,214,0.2)]" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {expertiseCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                className="glass-card rounded-xl p-6 hover:border-[#4A9ED6]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <category.icon className="w-5 h-5 text-[#4A9ED6]" />
                  <h3 className="font-mono text-sm font-semibold text-[#4A9ED6] tracking-wider">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.15 + skillIndex * 0.05 
                      }}
                      className="px-3 py-1.5 text-sm font-mono text-[#E8F4FD] border border-[rgba(74,158,214,0.3)] rounded-md bg-[rgba(74,158,214,0.05)] hover:bg-[rgba(74,158,214,0.15)] hover:border-[#4A9ED6] pill-glow transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
