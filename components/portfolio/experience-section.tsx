"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Factory, Award, Microscope, GraduationCap } from "lucide-react"

const experiences = [
  {
    period: "Oct 2022 – Present",
    company: "Rain Bird Corporation",
    role: "Principal Engineer / Engineering Manager (Acting)",
    location: "Tijuana, B.C.",
    description: "Drove $1M/yr savings by replacing premium resins with cost-effective equivalents. Insourced critical molds, avoiding $2.5M in CAPEX. Drove global advanced DOE for tooling optimization. CAPEX administrator and Continuous Improvement SME.",
    icon: Building2,
    current: true,
  },
  {
    period: "Jun 2020 – Oct 2022",
    company: "Formula Plastics",
    role: "Sr. Molding Engineering Manager",
    location: "Tecate, B.C.",
    description: "Launched medical unit to $1M revenue per month within 12 months. Cut scrap by $200K using DOE & SPC. Completed ISO 13485 mold validations in 4 weeks, safeguarding launch timeline during Covid-19 crisis.",
    icon: Factory,
    current: false,
  },
  {
    period: "Feb 2018 – May 2020",
    company: "Rain Bird Corporation",
    role: "Principal Engineer",
    location: "Tijuana, B.C.",
    description: "Led new mold validations (DFM, FAT/SAT, DOE, Cpk analysis) with global suppliers. Achieved $250K scrap reduction through DOE & SPC (2019). Delivered $400K savings by insourcing molds from external suppliers (2019).",
    icon: Building2,
    current: false,
  },
  {
    period: "Dec 2009 – Nov 2017",
    company: "Nypro Healthcare",
    role: "Molding Engineering Manager",
    location: "Tijuana, B.C.",
    description: "Managed $2M tooling budget, optimizing resources and transitioning legacy molding processes to cavity pressure control. Launched new extrusion line. Led project management for introduction and validation of high-impact engineering projects.",
    icon: Microscope,
    current: false,
  },
  {
    period: "Jun 1997 – Oct 2008",
    company: "Kodak de México / Nypro",
    role: "Molding Process Engineer",
    location: "Guadalajara, Jal.",
    description: "Deployed Scientific Molding at Nypro, raising First-Pass Yield 10%. Qualified 20+ transferred molds (Asia → MX). RJG Master Molder Certified. At Kodak: saved $150K/yr via scrap reduction; pelletizing project delivered $500K/yr savings.",
    icon: GraduationCap,
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
