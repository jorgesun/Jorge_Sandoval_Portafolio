"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-24 md:py-32">
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
            <span className="font-mono text-sm text-[#4A9ED6]">01</span>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl text-[#E8F4FD]">
              About
            </h2>
            <div className="flex-1 h-px bg-[rgba(74,158,214,0.2)]" />
          </div>

          {/* Two column layout */}
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 flex justify-center"
            >
              <div className="relative">
                {/* Profile Photo */}
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden metallic-glow">
                  <Image
                    src="/jorge-sandoval.jpg"
                    alt="Jorge Sandoval — Engineering Manager"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                </div>
                {/* Decorative corners */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-[#4A9ED6]" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-[#4A9ED6]" />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-3"
            >
              <p className="font-sans text-lg leading-relaxed text-[#7BA3C4]">
                <span className="text-[#E8F4FD] font-semibold">Jorge Sandoval</span> is a Principal Engineer and Acting Engineering Manager at{" "}
                <span className="text-[#4A9ED6]">Rain Bird Corporation</span>, based in Tijuana, B.C.
              </p>
              <p className="font-sans text-lg leading-relaxed text-[#7BA3C4] mt-4">
                With over <span className="font-mono text-[#4A9ED6] font-semibold">30 years</span> of hands-on expertise in scientific injection molding for medical and high-spec products, he has driven over{" "}
                <span className="font-mono text-[#4A9ED6] font-semibold">$1M+</span> in documented savings through scrap reduction, process optimization, and CAPEX avoidance.
              </p>
              <p className="font-sans text-lg leading-relaxed text-[#7BA3C4] mt-4">
                Expert in <span className="font-mono text-[#4A9ED6]">Lean Six Sigma, DOE, and Decoupled Molding</span>. Led cross-functional teams in Mexico and the U.S. while coordinating suppliers across Asia. Regulatory experience includes{" "}
                <span className="font-mono text-[#4A9ED6]">ISO 13485, IQ/OQ/PQ, and FDA QSR</span>.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
