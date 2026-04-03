"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const metrics = [
  {
    value: "30+",
    label: "Years of Experience",
    description: "Injection Molding Industry",
  },
  {
    value: "$1M+",
    label: "Cost Savings Delivered",
    description: "Documented Savings",
  },
  {
    value: "4",
    label: "Plants Managed",
    description: "Tecate, El Lago, Nogales, Azusa",
  },
  {
    value: "IATF 16949",
    label: "Quality System Certified",
    description: "Automotive Standard",
  },
]

export function MetricsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[#1B3A5C]/30" />
      <div className="absolute inset-0 dot-grid opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover:border-[#4A9ED6] transition-all duration-300"
            >
              <div className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A9ED6] text-glow mb-2">
                {metric.value}
              </div>
              <div className="font-[family-name:var(--font-syne)] text-sm md:text-base text-[#E8F4FD] font-semibold mb-1">
                {metric.label}
              </div>
              <div className="font-mono text-xs text-[#7BA3C4]">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
