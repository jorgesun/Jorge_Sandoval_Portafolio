"use client"

import { Building2, Factory, Microscope, GraduationCap, Mail, Phone, MapPin, ExternalLink, Award, Printer } from "lucide-react"
import Link from "next/link"

// ─── Data ────────────────────────────────────────────────────────────────────

const profile = {
  name: "Jorge Sandoval",
  title: "Principal Process Engineer | Engineering Manager (Acting)",
  location: "Tijuana, B.C., México",
  email: "jorge.sandoval@example.com",
  phone: "+52 664 000 0000",
  linkedin: "linkedin.com/in/jorgesandoval",
  summary:
    "30+ years driving operational excellence in scientific injection molding for medical, agricultural, and high-spec manufacturing. Proven record of $1M+ annual cost savings, double-digit scrap reductions, and cross-functional team leadership. IATF 16949 and ISO 13485 expert. RJG Master Molder certified.",
}

const experiences = [
  {
    period: "Oct 2022 – Present",
    company: "Rain Bird Corporation",
    role: "Principal Engineer / Engineering Manager (Acting)",
    location: "Tijuana, B.C.",
    icon: Building2,
    achievements: [
      "Drove $1M/yr savings by replacing premium resins with cost-effective equivalents",
      "Insourced critical molds, avoiding $2.5M in CAPEX",
      "Led global advanced DOE for tooling optimization",
      "CAPEX administrator and Continuous Improvement SME",
    ],
    current: true,
  },
  {
    period: "Jun 2020 – Oct 2022",
    company: "Formula Plastics",
    role: "Sr. Molding Engineering Manager",
    location: "Tecate, B.C.",
    icon: Factory,
    achievements: [
      "Launched medical unit to $1M revenue/month within 12 months",
      "Cut scrap by $200K using DOE & SPC",
      "Completed ISO 13485 mold validations in 4 weeks during Covid-19",
    ],
    current: false,
  },
  {
    period: "Feb 2018 – May 2020",
    company: "Rain Bird Corporation",
    role: "Principal Engineer",
    location: "Tijuana, B.C.",
    icon: Building2,
    achievements: [
      "Led new mold validations (DFM, FAT/SAT, DOE, Cpk) with global suppliers",
      "$250K scrap reduction through DOE & SPC (2019)",
      "$400K savings by insourcing molds from external suppliers (2019)",
    ],
    current: false,
  },
  {
    period: "Dec 2009 – Nov 2017",
    company: "Nypro Healthcare",
    role: "Molding Engineering Manager",
    location: "Tijuana, B.C.",
    icon: Microscope,
    achievements: [
      "Managed $2M tooling budget optimizing resources",
      "Transitioned legacy molding to cavity pressure control",
      "Launched new extrusion line and led high-impact engineering project validations",
    ],
    current: false,
  },
  {
    period: "Jun 1997 – Oct 2008",
    company: "Kodak de México / Nypro",
    role: "Molding Process Engineer",
    location: "Guadalajara, Jal.",
    icon: GraduationCap,
    achievements: [
      "Deployed Scientific Molding at Nypro, raising First-Pass Yield 10%",
      "Qualified 20+ transferred molds (Asia → MX)",
      "Kodak: $150K/yr scrap reduction; pelletizing project $500K/yr savings",
    ],
    current: false,
  },
]

const skills = {
  "Core Expertise": [
    "Scientific Injection Molding",
    "DOE / SPC",
    "Mold Validation (FAT/SAT)",
    "Cavity Pressure Control",
    "DFM Analysis",
    "Cpk / Process Capability",
  ],
  "Quality Systems": [
    "IATF 16949",
    "ISO 13485",
    "ISO 9001",
    "PPAP / APQP",
    "FMEA",
    "MSA",
  ],
  "Leadership": [
    "Engineering Management",
    "Cross-functional Team Leadership",
    "CAPEX Administration",
    "Supplier Development",
    "Continuous Improvement",
    "Change Management",
  ],
  "Tools & Methods": [
    "RJG Master Molder (Certified)",
    "Minitab / Statistical Software",
    "CAD Review",
    "Cost-Down Engineering",
    "Lean Manufacturing",
    "Project Management",
  ],
}

const education = [
  {
    degree: "B.S. in Mechatronics Engineering",
    school: "CETYS Universidad",
    location: "Tijuana, B.C.",
    year: "2002",
  },
]

const certifications = [
  "RJG Master Molder Certified",
  "IATF 16949 Internal Auditor",
  "ISO 13485 Process Validation",
  "Scientific Molding Practitioner",
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function CVPage() {
  // SSR-safe: window is only accessed inside an event handler, never during render
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print()
    }
  }

  return (
    <div className="min-h-screen bg-[#0A1F35]">
      {/* ── Top nav bar (hidden on print) ── */}
      <nav className="print:hidden sticky top-0 z-50 border-b border-[rgba(74,158,214,0.15)] bg-[#0A1F35]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm text-[#4A9ED6] hover:text-[#6AB4E2] transition-colors"
          >
            ← Back to Portfolio
          </Link>
          <button
            id="print-cv-button"
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2 bg-[#4A9ED6] text-[#0A1F35] font-semibold rounded-lg hover:bg-[#6AB4E2] transition-all duration-300 text-sm"
          >
            <Printer size={16} />
            Print / Save PDF
          </button>
        </div>
      </nav>

      {/* ── Main CV content ── */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 print:py-4 print:px-0 print:max-w-none">

        {/* ── Header ── */}
        <header className="mb-10 border-b border-[rgba(74,158,214,0.2)] pb-8">
          <h1 className="font-bold text-4xl md:text-5xl text-[#E8F4FD] mb-2 tracking-tight">
            {profile.name}
          </h1>
          <p className="text-lg text-[#4A9ED6] mb-4">{profile.title}</p>
          <div className="flex flex-wrap gap-4 text-sm text-[#7BA3C4] font-mono">
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-[#4A9ED6]" />
              {profile.location}
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} className="text-[#4A9ED6]" />
              {profile.email}
            </span>
            <span className="flex items-center gap-1">
              <Phone size={14} className="text-[#4A9ED6]" />
              {profile.phone}
            </span>
            <span className="flex items-center gap-1">
              <ExternalLink size={14} className="text-[#4A9ED6]" />
              {profile.linkedin}
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Left column ── */}
          <aside className="lg:col-span-1 space-y-8">

            {/* Summary */}
            <section>
              <h2 className="font-bold text-xs uppercase tracking-widest text-[#4A9ED6] mb-3 font-mono">
                Professional Summary
              </h2>
              <p className="text-sm leading-relaxed text-[#7BA3C4]">
                {profile.summary}
              </p>
            </section>

            {/* Skills */}
            {Object.entries(skills).map(([category, items]) => (
              <section key={category}>
                <h2 className="font-bold text-xs uppercase tracking-widest text-[#4A9ED6] mb-3 font-mono">
                  {category}
                </h2>
                <ul className="space-y-1">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2 text-sm text-[#7BA3C4]"
                    >
                      <span className="text-[#4A9ED6] mt-1 leading-none select-none">▸</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            {/* Certifications */}
            <section>
              <h2 className="font-bold text-xs uppercase tracking-widest text-[#4A9ED6] mb-3 font-mono flex items-center gap-2">
                <Award size={14} />
                Certifications
              </h2>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="text-sm text-[#7BA3C4] pl-3 border-l-2 border-[rgba(74,158,214,0.3)]"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </section>

            {/* Education */}
            <section>
              <h2 className="font-bold text-xs uppercase tracking-widest text-[#4A9ED6] mb-3 font-mono">
                Education
              </h2>
              {education.map((edu) => (
                <div key={edu.degree}>
                  <p className="text-sm font-semibold text-[#E8F4FD]">{edu.degree}</p>
                  <p className="text-sm text-[#7BA3C4]">{edu.school}</p>
                  <p className="font-mono text-xs text-[#4A9ED6]">
                    {edu.location} · {edu.year}
                  </p>
                </div>
              ))}
            </section>
          </aside>

          {/* ── Right column – Experience ── */}
          <section className="lg:col-span-2">
            <h2 className="font-bold text-xs uppercase tracking-widest text-[#4A9ED6] mb-6 font-mono">
              Professional Experience
            </h2>

            <div className="relative space-y-8">
              {/* Timeline line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-[#4A9ED6] via-[#2D6BA0] to-transparent" />

              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.period}`} className="relative pl-10">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-0 w-7 h-7 rounded-full flex items-center justify-center ${
                      exp.current
                        ? "bg-[#4A9ED6]"
                        : "bg-[#1B3A5C] border border-[#4A9ED6]"
                    }`}
                  >
                    <exp.icon
                      className={`w-3.5 h-3.5 ${exp.current ? "text-[#0A1F35]" : "text-[#4A9ED6]"}`}
                    />
                  </div>

                  {/* Card */}
                  <div className="bg-[rgba(27,58,92,0.4)] border border-[rgba(74,158,214,0.15)] rounded-xl p-5">
                    {/* Period badge */}
                    <span className="inline-block font-mono text-xs text-[#4A9ED6] bg-[rgba(74,158,214,0.1)] border border-[rgba(74,158,214,0.2)] px-2 py-0.5 rounded-full mb-3">
                      {exp.period}
                    </span>

                    <h3 className="font-bold text-lg text-[#E8F4FD] mb-0.5">{exp.company}</h3>
                    <p className="text-sm text-[#4A9ED6] mb-0.5">{exp.role}</p>
                    <p className="font-mono text-xs text-[#7BA3C4] mb-3">{exp.location}</p>

                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#7BA3C4]">
                          <span className="text-[#4A9ED6] mt-0.5 leading-none select-none shrink-0">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* ── Print styles injected inline ── */}
      <style>{`
        @media print {
          body { background: white !important; color: #111 !important; }
          .print\\:hidden { display: none !important; }
          .print\\:py-4 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
          .print\\:px-0 { padding-left: 0 !important; padding-right: 0 !important; }
          .print\\:max-w-none { max-width: none !important; }
        }
      `}</style>
    </div>
  )
}
