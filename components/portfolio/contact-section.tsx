"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from "lucide-react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqegggve"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jorgesun@gmail.com",
      href: "mailto:jorgesun@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "664-520-4587",
      href: "tel:+526645204587",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jorgesandoval",
      href: "https://linkedin.com/in/jorgesandoval",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tijuana, Baja California, México",
      href: null,
    },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32">
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
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-sm text-[#4A9ED6]">05</span>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl text-[#E8F4FD]">
              Contact
            </h2>
            <div className="flex-1 h-px bg-[rgba(74,158,214,0.2)]" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#E8F4FD] mb-6">
                {"Let's Connect"}
              </h3>
              <p className="font-sans text-[#7BA3C4] mb-8 leading-relaxed">
                Interested in discussing manufacturing engineering, process optimization, or potential collaboration? I would be glad to connect.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(74,158,214,0.1)] border border-[rgba(74,158,214,0.3)] flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#4A9ED6]" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-[#7BA3C4] uppercase tracking-wider">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-sans text-[#E8F4FD] hover:text-[#4A9ED6] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-sans text-[#E8F4FD]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs text-[#7BA3C4] uppercase tracking-wider mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[rgba(74,158,214,0.05)] border border-[rgba(74,158,214,0.2)] rounded-lg text-[#E8F4FD] placeholder-[#7BA3C4]/50 focus:outline-none focus:border-[#4A9ED6] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs text-[#7BA3C4] uppercase tracking-wider mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[rgba(74,158,214,0.05)] border border-[rgba(74,158,214,0.2)] rounded-lg text-[#E8F4FD] placeholder-[#7BA3C4]/50 focus:outline-none focus:border-[#4A9ED6] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs text-[#7BA3C4] uppercase tracking-wider mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-[rgba(74,158,214,0.05)] border border-[rgba(74,158,214,0.2)] rounded-lg text-[#E8F4FD] placeholder-[#7BA3C4]/50 focus:outline-none focus:border-[#4A9ED6] transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  {status === "success" ? (
                    <div className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[rgba(74,214,120,0.15)] border border-[rgba(74,214,120,0.4)] text-[#4AD678] font-[family-name:var(--font-syne)] font-semibold rounded-lg">
                      <CheckCircle className="w-5 h-5" />
                      Message sent — I will get back to you soon!
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#4A9ED6] text-[#0A1F35] font-[family-name:var(--font-syne)] font-semibold rounded-lg hover:bg-[#6AB4E2] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 metallic-glow"
                    >
                      <Send className="w-5 h-5" />
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                  )}
                  {status === "error" && (
                    <p className="text-center font-mono text-xs text-red-400 mt-2">
                      Something went wrong. Try emailing directly at jorgesun@gmail.com
                    </p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
