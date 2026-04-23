"use client"

import {
  Building2,
  Factory,
  Microscope,
  GraduationCap,
  Wrench,
  FlaskConical,
  Camera,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  Printer,
} from "lucide-react"
import Link from "next/link"


// ─── Data ────────────────────────────────────────────────────────────────────

const profile = {
  name: "Jorge Sandoval",
  title: "Principal Process Engineer | Engineering Manager (Acting)",
  location: "Tijuana, B.C., México",
  email: "jorgesun@gmail.com",
  phone: "664-520-4587",
  linkedin: "linkedin.com/in/jorgesandoval",
  summary:
    "Operations & Engineering leader with 30+ years in scientific injection molding for medical and high-spec products. Expert in Lean Six Sigma, DOE and Decoupled Molding, delivering over $1 million in cost savings and double-digit scrap reductions. Led cross-functional teams in Mexico and the U.S. while coordinating suppliers across Asia.",
}

const experiences = [
  {
    period: "Oct 2022 – Present",
    company: "Rain Bird",
    role: "Principal Engineer / Engineering Manager (Acting)",
    location: "Tijuana",
    icon: Building2,
    achievements: [
      "Drove US $1M/yr savings by replacing premium resins with cost-effective equivalents.",
      "Insourced critical molds, avoiding US $2.5M in CAPEX.",
      "Drove global advanced DOE for tooling optimization.",
      "CAPEX administrator and Continuous Improvement SME.",
    ],
    current: true,
  },
  {
    period: "Jun 2020 – Oct 2022",
    company: "Formula Plastics",
    role: "Sr. Molding Engineering Manager",
    location: "Tecate",
    icon: Factory,
    achievements: [
      "Launched medical unit to US $1M revenue per month within 12 months.",
      "Cut scrap by US $200K using DOE & SPC.",
      "Completed ISO 13485 mold validations in 4 weeks, safeguarding launch timeline supporting Covid-19 crisis.",
    ],
    current: false,
  },
  {
    period: "Feb 2018 – May 2020",
    company: "Rain Bird",
    role: "Principal Engineer",
    location: "Tijuana",
    icon: Building2,
    achievements: [
      "Led new mold validations (DFM, FAT/SAT, DOE, Cpk analysis) with global suppliers.",
      "Achieved US $250K scrap reduction through DOE & SPC initiatives.",
      "Delivered US $400K savings by insourcing molds from external suppliers.",
    ],
    current: false,
  },
  {
    period: "Dec 2009 – Nov 2017",
    company: "Nypro Healthcare",
    role: "Molding Engineering Manager",
    location: "Tijuana",
    icon: Microscope,
    achievements: [
      "Managed a US $2M tooling budget, optimizing resources and transitioning legacy processes to cavity pressure control.",
      "Launched a new extrusion line, overseeing equipment installation and production ramp up.",
      "Led project management activities for high impact engineering projects.",
    ],
    current: false,
  },
  {
    period: "Oct 2008 – Jun 2009",
    company: "The Graduate Technology Group",
    role: "Engineering Manager",
    location: "Guadalajara",
    icon: Wrench,
    achievements: [
      "Relocated US-MX plant with zero customer disruption, avoiding US $600K.",
      "Managed tool room, maintenance, and molding processes ensuring equipment reliability.",
    ],
    current: false,
  },
  {
    period: "Jun 2006 – Oct 2008",
    company: "Nypro",
    role: "Molding Process Engineer",
    location: "Guadalajara",
    icon: FlaskConical,
    achievements: [
      "Deployed Scientific Molding, raising First-Pass Yield 10%.",
      "Qualified 20+ transferred molds (Asia → MX).",
      "RJG Master Molder Certified: led comprehensive internal training.",
    ],
    current: false,
  },
  {
    period: "Jun 1997 – Jun 2006",
    company: "Kodak de México",
    role: "Molding Process Engineer",
    location: "Guadalajara",
    icon: Camera,
    achievements: [
      "Saved US $150K/yr via scrap reduction.",
      "Pelletizing project delivered US $500K/yr savings.",
      "Two-shot molding transfer US → MX.",
    ],
    current: false,
  },
]

const skills = [
  "Engineering Project Management",
  "Tool Room and Mold Maintenance",
  "Strategic Decision Making",
  "Statistical Analysis",
  "Scientific Injection Molding",
  "Regulatory & Medical Compliance",
  "Technical Communication",
  "Automation & Validation Leadership",
  "Cross-Functional Team Leadership",
  "Cost Reduction & CAPEX Optimization",
]

const techStack = [
  {
    category: "Process Optimization",
    tools: ["DOE", "SPC", "Minitab", "Cpk/Ppk", "ANOVA", "Root Cause Analysis"],
  },
  {
    category: "Regulatory Compliance",
    tools: ["ISO 13485", "IQ/OQ/PQ", "FDA QSR", "IATF 16949"],
  },
  {
    category: "Scientific Molding",
    tools: ["RJG", "Cavity Pressure", "Transfer Mold Validations", "Two-Shot", "Extrusion"],
  },
  {
    category: "Data & Reporting",
    tools: ["Excel VBA", "Power BI", "Python"],
  },
]

const education = [
  {
    school: "Universidad de Guadalajara",
    degree: "B.S. Mechanical and Electrical Engineering",
    year: "2003",
  },
  {
    school: "CETYS University",
    degree: "MBA",
    year: "2019",
  },
]

const certifications = [
  "Master Molder I",
  "Master Molder II",
  "RJG Train the Trainer – 2006 (Recert. 2012/2015/2019)",
  "Black Belt",
]

const awards = [
  { name: "Most Significant Cost Reduction", org: "Rain Bird", year: "2024" },
  { name: "Largest Impact of Alternative Material", org: "Rain Bird", year: "2025" },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function CVPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.open("/cv/print", "_blank")
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

        {/* ── Summary ── */}
        <section className="mb-10 p-5 rounded-xl bg-[rgba(74,158,214,0.05)] border border-[rgba(74,158,214,0.12)]">
          <p className="text-sm leading-relaxed text-[#7BA3C4]">{profile.summary}</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Right sidebar ── */}
          <aside className="lg:col-span-1 space-y-8 lg:order-2">

            {/* Skills */}
            <section>
              <h2 className="font-bold text-xs uppercase tracking-widest text-[#4A9ED6] mb-3 font-mono border-b border-[rgba(74,158,214,0.2)] pb-2">
                Skills
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-2 py-1 rounded text-[10px] font-semibold tracking-wide bg-[rgba(74,158,214,0.1)] text-[#7BA3C4] border border-[rgba(74,158,214,0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="font-bold text-xs uppercase tracking-widest text-[#4A9ED6] mb-3 font-mono border-b border-[rgba(74,158,214,0.2)] pb-2">
                Tech Stack
              </h2>
              <div className="space-y-4">
                {techStack.map((cat) => (
                  <div key={cat.category}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#4A9ED6] mb-2">
                      {cat.category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.tools.map((tool) => (
                        <span
                          key={tool}
                          className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-[rgba(74,158,214,0.08)] text-[#6AB4E2] border border-[rgba(74,158,214,0.18)]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="font-bold text-xs uppercase tracking-widest text-[#4A9ED6] mb-3 font-mono border-b border-[rgba(74,158,214,0.2)] pb-2">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree}>
                    <p className="text-sm font-semibold text-[#E8F4FD]">{edu.school}</p>
                    <p className="text-sm text-[#7BA3C4]">{edu.degree}</p>
                    <p className="font-mono text-xs text-[#4A9ED6]">{edu.year}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="font-bold text-xs uppercase tracking-widest text-[#4A9ED6] mb-3 font-mono border-b border-[rgba(74,158,214,0.2)] pb-2 flex items-center gap-2">
                <Award size={12} />
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

            {/* Awards */}
            <section>
              <h2 className="font-bold text-xs uppercase tracking-widest text-[#4A9ED6] mb-3 font-mono border-b border-[rgba(74,158,214,0.2)] pb-2">
                Awards
              </h2>
              <div className="space-y-2">
                {awards.map((a) => (
                  <div
                    key={a.name}
                    className="p-3 rounded-lg bg-[rgba(74,158,214,0.07)] border border-[rgba(74,158,214,0.15)]"
                  >
                    <p className="text-sm font-semibold text-[#E8F4FD]">{a.name}</p>
                    <p className="font-mono text-xs text-[#4A9ED6]">
                      {a.org} · {a.year}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          {/* ── Left column – Experience ── */}
          <section className="lg:col-span-2 lg:order-1">
            <h2 className="font-bold text-xs uppercase tracking-widest text-[#4A9ED6] mb-6 font-mono border-b border-[rgba(74,158,214,0.2)] pb-2">
              Professional Experience
            </h2>

            <div className="relative space-y-6">
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

                    <h3 className="font-bold text-base text-[#E8F4FD] mb-0.5">{exp.company}</h3>
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
