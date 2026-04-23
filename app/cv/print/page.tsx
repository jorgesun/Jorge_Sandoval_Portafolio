"use client"

import Link from "next/link"
import { Printer, ArrowLeft } from "lucide-react"

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
    current: true,
    achievements: [
      "Drove US $1M/yr savings by replacing premium resins with cost-effective equivalents.",
      "Insourced critical molds, avoiding US $2.5M in CAPEX.",
      "Drove global advanced DOE for tooling optimization.",
      "CAPEX administrator and Continuous Improvement SME.",
    ],
  },
  {
    period: "Jun 2020 – Oct 2022",
    company: "Formula Plastics",
    role: "Sr. Molding Engineering Manager",
    location: "Tecate",
    current: false,
    achievements: [
      "Launched medical unit to US $1M revenue per month within 12 months.",
      "Cut scrap by US $200K using DOE & SPC.",
      "Completed ISO 13485 mold validations in 4 weeks, safeguarding launch timeline during Covid-19.",
    ],
  },
  {
    period: "Feb 2018 – May 2020",
    company: "Rain Bird",
    role: "Principal Engineer",
    location: "Tijuana",
    current: false,
    achievements: [
      "Led new mold validations (DFM, FAT/SAT, DOE, Cpk analysis) with global suppliers.",
      "Achieved US $250K scrap reduction through DOE & SPC initiatives.",
      "Delivered US $400K savings by insourcing molds from external suppliers.",
    ],
  },
  {
    period: "Dec 2009 – Nov 2017",
    company: "Nypro Healthcare",
    role: "Molding Engineering Manager",
    location: "Tijuana",
    current: false,
    achievements: [
      "Managed a US $2M tooling budget, optimizing resources and transitioning legacy processes to cavity pressure control.",
      "Launched a new extrusion line, overseeing equipment installation and production ramp up.",
      "Led project management activities for high impact engineering projects.",
    ],
  },
  {
    period: "Oct 2008 – Jun 2009",
    company: "The Graduate Technology Group",
    role: "Engineering Manager",
    location: "Guadalajara",
    current: false,
    achievements: [
      "Relocated US-MX plant with zero customer disruption, avoiding US $600K.",
      "Managed tool room, maintenance, and molding processes ensuring equipment reliability.",
    ],
  },
  {
    period: "Jun 2006 – Oct 2008",
    company: "Nypro",
    role: "Molding Process Engineer",
    location: "Guadalajara",
    current: false,
    achievements: [
      "Deployed Scientific Molding, raising First-Pass Yield 10%.",
      "Qualified 20+ transferred molds (Asia → MX).",
      "RJG Master Molder Certified: led comprehensive internal training.",
    ],
  },
  {
    period: "Jun 1997 – Jun 2006",
    company: "Kodak de México",
    role: "Molding Process Engineer",
    location: "Guadalajara",
    current: false,
    achievements: [
      "Saved US $150K/yr via scrap reduction.",
      "Pelletizing project delivered US $500K/yr savings.",
      "Two-shot molding transfer US → MX.",
    ],
  },
]

const skills = [
  "Engineering Project Management",
  "Tool Room & Mold Maintenance",
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
  { category: "Process Optimization", tools: ["DOE", "SPC", "Minitab", "Cpk/Ppk", "ANOVA", "Root Cause Analysis"] },
  { category: "Regulatory Compliance", tools: ["ISO 13485", "IQ/OQ/PQ", "FDA QSR", "IATF 16949"] },
  { category: "Scientific Molding", tools: ["RJG", "Cavity Pressure", "Mold Validations", "Two-Shot", "Extrusion"] },
  { category: "Data & Reporting", tools: ["Excel VBA", "Power BI", "Python"] },
]

const education = [
  { school: "Universidad de Guadalajara", degree: "B.S. Mechanical and Electrical Engineering", year: "2003" },
  { school: "CETYS University", degree: "MBA", year: "2019" },
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

// ─── Helpers ─────────────────────────────────────────────────────────────────

const ACCENT = "#1A3A50"
const ACCENT_LIGHT = "#3B82A0"

function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", borderBottom: `1.5px solid ${ACCENT}`, paddingBottom: "4px" }}>
      <h2 style={{ margin: 0, fontSize: "9px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: ACCENT, fontFamily: "'Playfair Display', Georgia, serif" }}>
        {children}
      </h2>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CVPrintPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") window.print()
  }

  return (
    <>
      {/* ── Screen-only toolbar ── */}
      <div id="cv-toolbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 24px", background: "#0A1628", borderBottom: "1px solid rgba(255,255,255,0.08)", position: "sticky", top: 0, zIndex: 100, gap: "16px", flexWrap: "wrap" }}>
        <Link href="/cv" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#4A9ED6", textDecoration: "none", fontSize: "13px", fontFamily: "monospace" }}>
          <ArrowLeft size={14} /> Back to CV
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <p style={{ margin: 0, fontSize: "11px", color: "#7BA3C4", fontFamily: "monospace" }}>
            💡 En el diálogo de impresión: desactiva <strong style={{ color: "#4A9ED6" }}>Encabezados y pies de página</strong>, activa <strong style={{ color: "#4A9ED6" }}>Gráficos de fondo</strong>.
          </p>
          <button onClick={handlePrint} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 18px", background: "#4A9ED6", color: "#0A1628", fontWeight: 700, fontSize: "12px", border: "none", borderRadius: "8px", cursor: "pointer" }}>
            <Printer size={14} /> Print / Save PDF
          </button>
        </div>
      </div>

      {/* ── A4 Page ── */}
      <div style={{ background: "#e8ecef", padding: "30px 20px", minHeight: "calc(100vh - 60px)" }}>
        <div id="cv-page" style={{ width: "216mm", margin: "0 auto", background: "white", boxShadow: "0 8px 40px rgba(0,0,0,0.25)", fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif", color: "#1E293B", fontSize: "10.5px", lineHeight: 1.45 }}>

          {/* ── Header ── */}
          <div style={{ background: "linear-gradient(135deg, #0D1F2D 0%, #1A3A50 50%, #0D1F2D 100%)", padding: "22px 26px 18px", position: "relative", overflow: "hidden", borderBottom: `3px solid ${ACCENT_LIGHT}` }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "220px", height: "100%", background: "repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(59,130,160,0.04) 18px, rgba(59,130,160,0.04) 19px)" }} />
            <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <h1 style={{ margin: "0 0 3px", fontSize: "30px", fontWeight: 800, fontFamily: "'Playfair Display', Georgia, serif", color: "#FFFFFF", letterSpacing: "0.5px", lineHeight: 1.1 }}>
                  {profile.name}
                </h1>
                <p style={{ margin: 0, fontSize: "11px", color: "#9AB8CC", fontWeight: 500, letterSpacing: "0.3px" }}>
                  {profile.title}
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "10px", color: "#B0C8D8", textAlign: "right" }}>
                <span>📍 {profile.location}</span>
                <span>📞 {profile.phone}</span>
                <span>✉ {profile.email}</span>
                <span>🔗 {profile.linkedin}</span>
              </div>
            </div>
          </div>

          {/* ── Summary ── */}
          <div style={{ padding: "10px 26px", background: "rgba(59,130,160,0.04)", borderBottom: "1px solid rgba(26,58,80,0.08)", fontSize: "10px", lineHeight: 1.65, color: "#475569", fontWeight: 300 }}>
            {profile.summary}
          </div>

          {/* ── Main Grid ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 172px" }}>

            {/* ── Left — Experience ── */}
            <div style={{ padding: "14px 16px 14px 26px", borderRight: "1px solid rgba(26,58,80,0.08)" }}>
              <SectionHead>Experience</SectionHead>
              <div style={{ paddingLeft: "10px", borderLeft: `1.5px solid rgba(26,58,80,0.15)` }}>
                {experiences.map((exp, i) => (
                  <div key={i} style={{ marginBottom: "9px", paddingLeft: "10px", paddingBottom: "9px", borderBottom: i < experiences.length - 1 ? "1px solid rgba(26,58,80,0.06)" : "none" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "6px", marginBottom: "1px" }}>
                      <h3 style={{ margin: 0, fontSize: "10.5px", fontWeight: 700, color: "#1E293B", fontFamily: "'Playfair Display', Georgia, serif" }}>
                        {exp.role}
                      </h3>
                      <span style={{ fontSize: "9px", color: "#64748B", flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>
                        {exp.period}
                      </span>
                    </div>
                    <p style={{ margin: "0 0 4px", fontSize: "9.5px", color: ACCENT_LIGHT, fontWeight: 600 }}>
                      {exp.company} · {exp.location}
                      {exp.current && <span style={{ marginLeft: "6px", padding: "1px 5px", borderRadius: "3px", background: "rgba(59,130,160,0.12)", color: ACCENT_LIGHT, fontSize: "8px", fontWeight: 700 }}>CURRENT</span>}
                    </p>
                    <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
                      {exp.achievements.map((b, j) => (
                        <li key={j} style={{ fontSize: "9.5px", lineHeight: 1.5, color: "#475569", paddingLeft: "10px", position: "relative", marginBottom: "2px" }}>
                          <span style={{ position: "absolute", left: 0, top: "6px", width: "3px", height: "3px", borderRadius: "50%", background: ACCENT_LIGHT }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right — Sidebar ── */}
            <div style={{ padding: "14px 18px 14px 14px" }}>

              {/* Skills */}
              <div style={{ marginBottom: "14px" }}>
                <SectionHead>Skills</SectionHead>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
                  {skills.map((s, i) => (
                    <span key={i} style={{ display: "inline-block", padding: "2px 5px", borderRadius: "3px", fontSize: "8px", fontWeight: 600, background: "rgba(26,58,80,0.06)", color: "#334155", border: "1px solid rgba(26,58,80,0.12)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{ marginBottom: "14px" }}>
                <SectionHead>Tech Stack</SectionHead>
                {techStack.map((cat, i) => (
                  <div key={i} style={{ marginBottom: "7px" }}>
                    <p style={{ margin: "0 0 3px", fontSize: "8px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", color: ACCENT }}>
                      {cat.category}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
                      {cat.tools.map((tool, j) => (
                        <span key={j} style={{ display: "inline-block", padding: "1px 5px", borderRadius: "3px", fontSize: "8px", fontWeight: 600, background: "rgba(59,130,160,0.08)", color: "#3B82A0", border: "1px solid rgba(59,130,160,0.2)" }}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div style={{ marginBottom: "14px" }}>
                <SectionHead>Education</SectionHead>
                {education.map((edu, i) => (
                  <div key={i} style={{ marginBottom: "8px" }}>
                    <p style={{ margin: 0, fontSize: "9.5px", fontWeight: 700, color: "#1E293B" }}>{edu.school}</p>
                    <p style={{ margin: "1px 0 0", fontSize: "9px", color: "#64748B" }}>{edu.degree}</p>
                    <p style={{ margin: 0, fontSize: "8.5px", color: ACCENT_LIGHT, fontWeight: 600 }}>{edu.year}</p>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div style={{ marginBottom: "14px" }}>
                <SectionHead>Certifications</SectionHead>
                {certifications.map((c, i) => (
                  <p key={i} style={{ margin: "0 0 4px", fontSize: "9px", color: "#475569", paddingLeft: "9px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: "5px", width: "3px", height: "3px", background: ACCENT_LIGHT, transform: "rotate(45deg)" }} />
                    {c}
                  </p>
                ))}
              </div>

              {/* Awards */}
              <div>
                <SectionHead>Awards</SectionHead>
                {awards.map((a, i) => (
                  <div key={i} style={{ marginBottom: "6px", padding: "6px 8px", borderRadius: "4px", background: "rgba(26,58,80,0.04)", border: "1px solid rgba(26,58,80,0.10)" }}>
                    <p style={{ margin: 0, fontSize: "9.5px", fontWeight: 700, color: "#1E293B" }}>{a.name}</p>
                    <p style={{ margin: "1px 0 0", fontSize: "8.5px", color: "#64748B" }}>{a.org} · {a.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Print & Font styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        @media print {
          @page {
            size: letter;
            margin: 0;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          #cv-toolbar {
            display: none !important;
          }
          #cv-page {
            width: 216mm !important;
            min-height: 279mm !important;
            margin: 0 !important;
            box-shadow: none !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </>
  )
}
