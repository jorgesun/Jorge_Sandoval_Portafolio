"use client";

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
      { title: "Molding Process Engineer", company: "Nypro", location: "Guadalajara", period: "Jun 2006 - Oct 2008", bullets: ["Deployed Scientific Molding, raising First-Pass Yield 10%.", "Qualified 20+ transferred molds (Asia to MX).", "RJG Master Molder Certified: led comprehensive internal training."] },
      { title: "Molding Process Engineer", company: "Kodak de Mexico", location: "Guadalajara", period: "Jun 1997 - Jun 2006", bullets: ["Saved US $150K/yr via scrap reduction.", "Pelletizing project delivered US $500K/yr savings.", "Two-shot molding transfer US to MX."] },
      ];

const PRINT_CSS = [
        "@media print {",
        "  @page { size: A4; margin: 0; }",
        "  body { margin: 0 !important; padding: 0 !important; }",
        "  #cv-toolbar { display: none !important; }",
        "  #cv-content { width: 210mm !important; min-height: 297mm !important; box-shadow: none !important; }",
        "}",
      ].join("\n");

const skills = ["Engineering Project Management", "Tool Room and Mold Maintenance", "Strategic Decision Making", "Statistical Analysis", "Scientific Injection Molding", "Regulatory & Medical Compliance", "Technical Communication", "Automation & Validation Leadership", "Cross-Functional Team Leadership", "Cost Reduction & CAPEX Optimization"];
const certificates = ["Master Molder I", "Master Molder II", "RJG Train the Trainer - 2006 (Recert. 2012/2015/2019)", "Black Belt"];
const awards = [{ name: "Most Significant Cost Reduction", org: "Rain Bird", year: "2024" }, { name: "Largest Impact of Alternative Material", org: "Rain Bird", year: "2025" }];

function SectionTitle({ icon, children, theme }: { icon: string; children: React.ReactNode; theme: Theme }) {
        return (
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", borderBottom: "2px solid " + theme.sectionBorder, paddingBottom: "8px" }}>
                              <span style={{ fontSize: "14px", opacity: 0.6 }}>{icon}</span>span>
                              <h2 style={{ margin: 0, fontSize: "13px", fontWeight: "700", letterSpacing: "2.5px", textTransform: "uppercase", color: theme.sectionTitle, fontFamily: "'Playfair Display', Georgia, serif" }}>{children}</h2>h2>
                  </div>div>
                );
}

export default function CVPage() {
        const [mode, setMode] = useState<"dark" | "light">("dark");
        const [hoveredExp, setHoveredExp] = useState<number | null>(null);
        const t = themes[mode];

  useEffect(() => {
            const styleId = "c
