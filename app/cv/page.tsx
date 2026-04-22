f"use client";

import { useState, useEffect } from "react";

interface Theme {
    bg: string;
  headerBg: string;
  pitchBg: string;
  pitchBorder: string;
  textPrimary: string;
  textSecondary: string;
  textBody: string;
  textMuted: string;
  textSubtitle: string;
  textPitch: string;
  accent: string;
  sectionTitle: string;
  cardHover: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  awardBg: string;
  awardBorder: string;
  awardText: string;
  timelineLine: string;
  timelineDotBg: string;
  colDivider: string;
  headerPattern: string;
  headerBottomLine: string;
  sectionBorder: string;
  expTitle: string;
  eduTitle: string;
  eduSub: string;
}

const themes: Record<"dark" | "light", Theme> = {
  dark: {
    bg: "linear-gradient(170deg, #0A1628 0%, #0F2A3D 40%, #0D1F2D 100%)",
          headerBg: "linear-gradient(135deg, #0D1F2D 0%, #1A3A50 50%, #0D1F2D 100%)",
          pitchBg: "rgba(59,130,160,0.06)",
          pitchBorder: "rgba(59,130,160,0.15)",
          textPrimary: "#FFFFFF",
          textSecondary: "#D0DCE6",
          textBody: "#A0B8C8",
          textMuted: "#6A8DA0",
          textSubtitle: "#8CA8BC",
          textPitch: "#B0C8D8",
          accent: "#3B82A0",
          sectionTitle: "#C8D8E4",
          cardHover: "rgba(59,130,160,0.08)",
          badgeBg: "rgba(59,130,160,0.12)",
          badgeBorder: "rgba(59,130,160,0.2)",
          badgeText: "#8CB8D0",
          awardBg: "rgba(59,130,160,0.08)",
          awardBorder: "rgba(59,130,160,0.15)",
          awardText: "#C8D8E4",
          timelineLine: "linear-gradient(180deg, #3B82A0 0%, rgba(59,130,160,0.2) 100%)",
          timelineDotBg: "#0F2A3D",
          colDivider: "rgba(59,130,160,0.12)",
          headerPattern: "rgba(59,130,160,0.03)",
          headerBottomLine: "#3B82A0",
          sectionBorder: "#3B82A0",
          expTitle: "#E8F0F6",
          eduTitle: "#D0DCE6",
          eduSub: "#7A98AC",
      },
        light: {
    bg: "#FFFFFF",
          headerBg: "linear-gradient(135deg, #1A3A50 0%, #234B63 50%, #1A3A50 100%)",
          pitchBg: "rgba(26,58,80,0.03)",
          pitchBorder: "rgba(26,58,80,0.08)",
          textPrimary: "#FFFFFF",
          textSecondary: "#1E293B",
          textBody: "#475569",
          textMuted: "#64748B",
          textSubtitle: "#CBD5E1",
          textPitch: "#475569",
          accent: "#1A3A50",
          sectionTitle: "#1E293B",
          cardHover: "rgba(26,58,80,0.04)",
          badgeBg: "rgba(26,58,80,0.06)",
          badgeBorder: "rgba(26,58,80,0.12)",
          badgeText: "#334155",
          awardBg: "rgba(26,58,80,0.04)",
          awardBorder: "rgba(26,58,80,0.10)",
          awardText: "#1E293B",
          timelineLine: "linear-gradient(180deg, #1A3A50 0%, rgba(26,58,80,0.15) 100%)",
          timelineDotBg: "#FFFFFF",
          colDivider: "rgba(26,58,80,0.08)",
          headerPattern: "rgba(255,255,255,0.04)",
          headerBottomLine: "#3B82A0",
          sectionBorder: "#1A3A50",
          expTitle: "#1E293B",
          eduTitle: "#1E293B",
          eduSub: "#64748B",
      },
};

const techStackCategories = [
{ category: "Process Optimization", tools: ["DOE", "SPC", "Minitab", "Cpk/Ppk", "ANOVA", "Root Cause Analysis"], darkColor: "#3B82A0", lightColor: "#1A5276" },
{ category: "Regulatory Compliance", tools: ["ISO 13485", "IQ/OQ/PQ", "FDA QSR", "IATF 16949"], darkColor: "#2D8B6F", lightColor: "#1E6B50" },
{ category: "Scientific Molding", tools: ["RJG", "Cavity Pressure", "Transfer Mold Validations", "Two-Shot", "Extrusion"], darkColor: "#8B6B2D", lightColor: "#7A5C1E" },
{ category: "Data & Reporting", tools: ["Excel VBA", "Power BI", "Python"], darkColor: "#6B3FA0", lightColor: "#5B2D90" },
];

const experiences = [
{ title: "Principal Engineer / Engineering Manager (Acting)", company: "Rain Bird", location: "Tijuana", period: "Oct 2022 - Present", bullets: ["Drove US $1M/yr savings by replacing premium resins with cost-effective equivalents.", "Insourced critical molds, avoiding US $2.5M in CAPEX.", "Drove global advanced DOE for tooling optimization.", "CAPEX administrator and Continuous Improvement SME."] },
{ title: "Sr. Molding Engineering Manager", company: "Formula Plastics", location: "Tecate", period: "Jun 2020 - Oct 2022", bullets: ["Launched medical unit to US $1M revenue per month within 12 months.", "Cut scrap by US $200K using DOE & SPC.", "Completed ISO 13485 mold validations in 4 weeks, safeguarding launch timeline supporting Covid-19 crisis."] },
{ title: "Principal Engineer", company: "Rain Bird", location: "Tijuana", period: "Feb 2018 - May 2020", bullets: ["Led new mold validations (DFM, FAT/SAT, DOE, Cpk analysis) with global suppliers.", "Achieved US $250K scrap reduction through DOE & SPC initiatives.", "Delivered US $400K savings by insourcing molds from external suppliers."] },
{ title: "Molding Engineering Manager", company: "Nypro Healthcare", location: "Tijuana", period: "Dec 2009 - Nov 2017", bullets: ["Managed a US $2M tooling budget, optimizing resources and transitioning legacy processes to cavity pressure control.", "Launched a new extrusion line, overseeing equipment installation and production ramp up.", "Led project management activities for high impact engineering projects."] },
{ title: "Engineering Manager", company: "The Graduate Technology Group", location: "Guadalajara", period: "Oct 2008 - Jun 2009", bullets: ["Relocated US-MX plant with zero customer disruption, avoiding US $600K.", "Managed tool room, maintenance, and molding processes ensuring equipment reliability."] },
{ title: "Molding Process Engineer", company: "Nypro", location: "Guadalajara", period: "Jun 2006 - Oct 2008", bullets: ["Deployed Scientific Molding, raising First-Pass Yield 10%.", "Qualified 20+ transferred molds (Asia -> MX).", "RJG Master Molder Certified: led comprehensive internal training."] },
{ title: "Molding Process Engineer", company: "Kodak de Mexico", location: "Guadalajara", period: "Jun 1997 - Jun 2006", bullets: ["Saved US $150K/yr via scrap reduction.", "Pelletizing project delivered US $500K/yr savings.", "Two-shot molding transfer US -> MX."] },
];

const skills = ["Engineering Project Management", "Tool Room and Mold Maintenance", "Strategic Decision Making", "Statistical Analysis", "Scientific Injection Molding", "Regulatory & Medical Compliance", "Technical Communication", "Automation & Validation Leadership", "Cross-Functional Team Leadership", "Cost Reduction & CAPEX Optimization"];
const certificates = ["Master Molder I", "Master Molder II", "RJG Train the Trainer - 2006 (Recert. 2012/2015/2019)", "Black Belt"];
const awards = [{ name: "Most Significant Cost Reduction", org: "Rain Bird", year: "2024" }, { name: "Largest Impact of Alternative Material", org: "Rain Bird", year: "2025" }];

function SectionTitle({ icon, children, theme }: { icon: string; children: React.ReactNode; theme: Theme }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", borderBottom: `2px solid \${theme.sectionBorder}`, paddingBottom: "8px" }}>
      <span style={{ fontSize: "14px", opacity: 0.6 }}>{icon}</span>
      <h2 style={{ margin: 0, fontSize: "13px", fontWeight: "700", letterSpacing: "2.5px", textTransform: "uppercase", color: theme.sectionTitle, fontFamily: "'Playfair Display', Georgia, serif" }}>{children}</h2>
    </div>
  );
}

export default function CVPage() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  const t = themes[mode];

  useEffect(() => {
    const styleId = "cv-print-style";
    let el = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!el) {
      el = document.createElement("style");
      el.id = styleId;
      document.head.appendChild(el);
    }
    el.textContent = \`
            @media print {
              @page { size: A4; margin: 0; }
        body { margin: 0 !important; padding: 0 !important; }
        #cv-toolbar { display: none !important; }
        #cv-content {
          width: 210mm !important;
          min-height: 297mm !important;
          box-shadow: none !important;
}
}
    \`;
    return () => { el && el.remove(); };
}, []);

  const handlePrint = () => {
      if (typeof window === "undefined") return;
    const wasLight = mode === "light";
    if (!wasLight) setMode("light");
    setTimeout(() => {
            window.print();
      if (!wasLight) setTimeout(() => setMode("dark"), 500);
  }, 300);
};

  const btnBase: React.CSSProperties = { padding: "6px 16px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.5px", border: "none", cursor: "pointer", fontFamily: "inherit", transition: "all 0.25s ease", borderRadius: "6px" };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <div id="cv-toolbar" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px", padding: "10px 20px", background: "#0A1628", borderBottom: "1px solid rgba(255,255,255,0.08)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "inline-flex", borderRadius: "6px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)" }}>
{([{ key: "dark", label: "Dark Screen" }, { key: "light", label: "Light Print" }] as const).map((opt) => (
            <button key={opt.key} onClick={() => setMode(opt.key)} style={{ ...btnBase, borderRadius: 0, background: mode === opt.key ? "#3B82A0" : "transparent", color: mode === opt.key ? "#fff" : "rgba(255,255,255,0.45)" }}>
  {opt.label}
              </button>
            ))}
          </div>
        <button onClick={handlePrint} style={{ ...btnBase, background: "#3B82A0", color: "#fff", display: "flex", alignItems: "center", gap: "6px" }}>
          Print / Save as PDF
        </button>
      </div>

{mode === "light" && (
        <div style={{ background: "#EFF6FF", borderBottom: "1px solid #BFDBFE", padding: "8px 20px", fontSize: "12px", color: "#1E40AF", display: "flex", alignItems: "center", gap: "8px" }}>
          <span>Tip:</span>
          <span>En el dialogo de impresion: activa "Background graphics", selecciona "Save as PDF" como destino, y desactiva headers/footers.</span>
        </div>
      )}

      <div id="cv-content" style={{ background: t.bg, fontFamily: "'Source Sans 3', sans-serif", color: t.textSecondary, transition: "all 0.4s ease" }}>

        <div style={{ background: t.headerBg, borderBottom: \`1px solid \${t.pitchBorder}\`, padding: "38px 48px 32px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "100%", background: \`repeating-linear-gradient(45deg, transparent, transparent 20px, \${t.headerPattern} 20px, \${t.headerPattern} 21px)\` }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "3px", background: \`linear-gradient(90deg, transparent, \${t.headerBottomLine} 30%, \${t.headerBottomLine} 70%, transparent)\` }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", position: "relative", zIndex: 1 }}>
            <div>
              <h1 style={{ margin: 0, fontSize: "40px", fontWeight: "800", fontFamily: "'Playfair Display', Georgia, serif", color: "#FFFFFF", letterSpacing: "1px", lineHeight: 1.1 }}>Jorge Sandoval</h1>
            </div>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", fontSize: "12px", color: t.textSubtitle }}>
{[{ icon: "Location:", text: "Tijuana, B.C." }, { icon: "Phone:", text: "664-520-4587" }, { icon: "Email:", text: "jorgesun@gmail.com" }, { icon: "Link:", text: "linkedin.com/in/jorgesandoval" }].map((item, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: "5px" }}><span>{item.icon}</span>{item.text}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: "22px 48px", background: t.pitchBg, borderBottom: \`1px solid \${t.pitchBorder}\` }}>
          <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.75, color: t.textPitch, maxWidth: "900px", fontWeight: "300" }}>
            Operations and Engineering leader with 30+ years in scientific injection molding for medical and high-spec products. Expert in Lean Six Sigma, DOE and Decoupled Molding, delivering over $1 million in cost savings and double-digit scrap reductions. Led cross-functional teams in Mexico and the U.S. while coordinating suppliers across Asia.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "0" }}>

          <div style={{ padding: "32px 36px 32px 48px", borderRight: \`1px solid \${t.colDivider}\` }}>
            <SectionTitle icon="*" theme={t}>Experience</SectionTitle>
            <div style={{ position: "relative", paddingLeft: "18px" }}>
              <div style={{ position: "absolute", left: 0, top: "8px", bottom: 0, width: "1px", background: t.timelineLine }} />
{experiences.map((exp, i) => (
                <div key={i} style={{ marginBottom: "20px", position: "relative", padding: "10px 14px", borderRadius: "6px", background: hoveredExp === i ? t.cardHover : "transparent", transition: "background 0.2s ease" }}
                  onMouseEnter={() => setHoveredExp(i)} onMouseLeave={() => setHoveredExp(null)}>
                  <div style={{ width: "9px", height: "9px", borderRadius: "50%", border: \`2px solid \${t.accent}\`, backgroundColor: t.timelineDotBg, position: "absolute", left: "-5px", top: "14px" }} />
                  <h3 style={{ margin: "0 0 2px", fontSize: "13px", fontWeight: "700", color: t.expTitle, fontFamily: "'Playfair Display', Georgia, serif" }}>{exp.title}</h3>
                  <p style={{ margin: "0 0 6px", fontSize: "12px", color: t.accent, fontWeight: "600" }}>
{exp.company} - {exp.location}
                    <span style={{ float: "right", color: t.textMuted, fontWeight: "400", fontSize: "11px" }}>{exp.period}</span>
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 0, listStyleType: "none" }}>
{exp.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: "12px", lineHeight: 1.55, color: t.textBody, marginBottom: "3px", paddingLeft: "12px", position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, top: "6px", width: "4px", height: "4px", borderRadius: "50%", backgroundColor: t.accent }} />
{b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "32px 28px" }}>
            <SectionTitle icon="*" theme={t}>Skills</SectionTitle>
            <div style={{ marginBottom: "22px", display: "flex", flexWrap: "wrap" }}>
{skills.map((s, i) => (
                <span key={i} style={{ display: "inline-block", padding: "3px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: "600", letterSpacing: "0.4px", marginRight: "4px", marginBottom: "4px", backgroundColor: t.badgeBg, color: t.badgeText, border: \`1px solid \${t.badgeBorder}\` }}>{s}</span>
              ))}
            </div>

            <SectionTitle icon="**" theme={t}>Tech Stack</SectionTitle>
            <div style={{ marginBottom: "22px" }}>
{techStackCategories.map((cat, i) => {
                const color = mode === "dark" ? cat.darkColor : cat.lightColor;
                return (
                  <div key={i} style={{ marginBottom: "12px" }}>
                    <p style={{ margin: "0 0 5px", fontSize: "10px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", color }}>{cat.category}</p>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
{cat.tools.map((tool, j) => (
                        <span key={j} style={{ display: "inline-block", padding: "3px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: "600", letterSpacing: "0.4px", marginRight: "4px", marginBottom: "4px", backgroundColor: \`\${color}18\`, color: \`\${color}CC\`, border: \`1px solid \${color}30\` }}>{tool}</span>
                      ))}
                    </div>
                  </div>
                );
})}
            </div>

            <SectionTitle icon="***" theme={t}>Education</SectionTitle>
            <div style={{ marginBottom: "22px" }}>
{[{ school: "Universidad de Guadalajara", degree: "B.S. Mechanical and Electrical Engineering", year: "2003" }, { school: "CETYS University", degree: "MBA", year: "2019" }].map((edu, i) => (
                <div key={i} style={{ marginBottom: "10px" }}>
                  <p style={{ margin: 0, fontSize: "12px", fontWeight: "600", color: t.eduTitle }}>{edu.school}</p>
                  <p style={{ margin: "2px 0 0", fontSize: "11px", color: t.eduSub }}>{edu.degree} - {edu.year}</p>
                </div>
              ))}
            </div>

            <SectionTitle icon="****" theme={t}>Certificates</SectionTitle>
            <div style={{ marginBottom: "22px" }}>
{certificates.map((c, i) => (
                <p key={i} style={{ margin: "0 0 5px", fontSize: "11px", color: t.textBody, paddingLeft: "12px", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: "5px", width: "5px", height: "5px", borderRadius: "1px", backgroundColor: t.accent, transform: "rotate(45deg)" }} />
{c}
                </p>
              ))}
            </div>

            <SectionTitle icon="*****" theme={t}>Awards</SectionTitle>
            <div>
{awards.map((a, i) => (
                <div key={i} style={{ marginBottom: "9px", padding: "8px 11px", borderRadius: "5px", background: t.awardBg, border: \`1px solid \${t.awardBorder}\` }}>
                  <p style={{ margin: 0, fontSize: "11px", fontWeight: "600", color: t.awardText }}>{a.name}</p>
                  <p style={{ margin: "2px 0 0", fontSize: "10px", color: t.textMuted }}>{a.org} - {a.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
