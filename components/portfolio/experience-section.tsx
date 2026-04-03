"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Factory, Award } from "lucide-react"

const experiences = [
  {
    period: "2022 – Present",
    company: "Rain Bird Corporation",
    role: "Principal Process Engineer | Acting Engineering Manager",
    location: "Arimex, Tecate B.C. (+ El Lago, Nogales, Azusa)",
    description: "Capital equipment justification, IATF 16949 compliance, injection molding optimization, multi-plant CI initiatives, 2-shot mold transfer insourcing project.",
    icon: Building2,
    current: true,
  },
  {
    period: "Prior",
    company: "Formula Plastics",
    role: "Director de Operaciones",
    location: "Tecate, B.C.",
    description: "Operations leadership, efficiency improvement through automation, team building, key project execution.",
    icon: Factory,
    current: false,
  },
  {
    period: "30+ Years",
    company: "Injection Molding Industry",
    role: "Progressive Career Development",
    location: "Multiple Facilities",
    description: "Progressive roles from process technician to engineering management. Specialization in mold validation, process parameters, tooling, and quality systems.",
    icon: Award,
    current: false,
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[#1B3A5C]/20" />
      <div className="absolute inset-0 dot-grid opacity-30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-sm text-[#4A9ED6]">03</span>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl text-[#E8F4FD]">
              Experience
            </h2>
            <div className="flex-1 h-px bg-[rgba(74,158,214,0.2)]" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#4A9ED6] via-[#2D6BA0] to-[rgba(74,158,214,0.2)] timeline-glow" />
            
            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-0 w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center ${
                    exp.current 
                      ? "bg-[#4A9ED6] timeline-glow" 
                      : "bg-[#1B3A5C] border border-[#4A9ED6]"
                  }`}>
                    <exp.icon className={`w-4 h-4 md:w-5 md:h-5 ${exp.current ? "text-[#0A1F35]" : "text-[#4A9ED6]"}`} />
                  </div>

                  {/* Content card */}
                  <div className="glass-card rounded-xl p-6 hover:border-[#4A9ED6]/50 transition-all duration-300">
                    {/* Period badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[rgba(74,158,214,0.15)] border border-[rgba(74,158,214,0.3)] mb-4">
                      <span className="font-mono text-xs text-[#4A9ED6]">{exp.period}</span>
                    </div>
                    
                    {/* Company */}
                    <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl md:text-2xl text-[#E8F4FD] mb-2">
                      {exp.company}
                    </h3>
                    
                    {/* Role */}
                    <p className="font-sans text-base text-[#4A9ED6] mb-1">
                      {exp.role}
                    </p>
                    
                    {/* Location */}
                    <p className="font-mono text-sm text-[#7BA3C4] mb-4">
                      {exp.location}
                    </p>
                    
                    {/* Description */}
                    <p className="font-sans text-sm leading-relaxed text-[#7BA3C4]">
                      <span className="text-[#E8F4FD]/80 font-medium">Key:</span> {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
