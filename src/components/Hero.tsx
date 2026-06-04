"use client";
import React from "react";
import { CheckCircle, Calendar, MessageSquare, Users, CreditCard, FileText, TrendingUp } from "lucide-react";
import { C, INT, PJS, PJSBold } from "@/lib/tokens";
import LogoMark from "./ui/LogoMark";
import Btn from "./ui/Btn";

function FloatingCard({
  icon: Icon, label, value, trend, style = {}
}: { icon: any; label: string; value: string; trend: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      width: 160, minWidth: 160, padding: 14, borderRadius: 14,
      background: "#fff", boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
      display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4, ...style
    }}>
      <div style={{ width: 30, height: 30, borderRadius: 8, background: C.indigoLight,
        display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon size={15} color={C.indigo} />
      </div>
      <div style={{ ...INT, fontSize: 11, fontWeight: 600, color: C.gray600, marginTop: 2 }}>{label}</div>
      <div style={{ ...PJSBold, fontSize: 18, color: C.black, lineHeight: 1 }}>{value}</div>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 3,
        background: C.greenBg, borderRadius: 6, padding: "2px 7px",
        fontSize: 10, fontWeight: 700, color: C.green, ...PJSBold, marginTop: 2
      }}>
        <TrendingUp size={9} /> {trend}
      </div>
    </div>
  );
}

export default function Hero() {
  const cards = [
    { icon: Users,      label: "Students Managed",  value: "48,200+",   trend: "23% this year" },
    { icon: CreditCard, label: "Fees Processed",     value: "₦2.1B+",    trend: "41% this year" },
    { icon: FileText,   label: "Reports Generated",  value: "184,000+",  trend: "67% this year" },
  ];
  return (
    <>
      <section id="challenge" className="ss-hero" style={{ maxWidth: 1440, margin: "0 auto", padding: "80px 80px 100px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
          <span style={{ ...INT, display: "inline-flex", alignItems: "center", gap: 8,
            padding: "7px 16px", borderRadius: 9999,
            background: "rgba(135,135,135,0.07)", border: "1px solid rgba(135,135,135,0.2)",
            fontSize: 13, fontWeight: 600, color: C.gray600 }}>
            <CheckCircle size={14} color={C.indigo} />
            Trusted by 200+ schools across Nigeria &amp; Africa
          </span>

          <h1 style={{ ...PJS, fontWeight: 800, fontSize: "clamp(32px,4vw,54px)",
            lineHeight: 1.1, letterSpacing: "-1.2px", color: C.black,
            maxWidth: 860, margin: "4px 0 0" }}>
            Run Your Entire School<br />From One Platform
          </h1>

          <p style={{ ...INT, fontSize: "clamp(15px,1.3vw,18px)", lineHeight: 1.75,
            color: "rgba(107,114,128,0.9)", maxWidth: 640, margin: 0 }}>
            Manage admissions, attendance, results, report cards, fees, communication,
            teachers, parents, and students through one fully integrated school management system.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 4 }}>
            <Btn><Calendar size={15} /> Book A Demo</Btn>
            <Btn variant="ghost"><MessageSquare size={15} /> Chat on WhatsApp</Btn>
          </div>

          {/* Dashboard canvas */}
          <div style={{ position: "relative", width: "100%", maxWidth: 900, marginTop: 32 }}>
            <div style={{ width: "100%", height: 440, borderRadius: 20,
              background: "linear-gradient(145deg,#e8eaf6 0%,#c5cae9 100%)",
              border: `1px solid ${C.gray200}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0,
                backgroundImage: "radial-gradient(circle,rgba(79,70,229,0.08) 1px,transparent 1px)",
                backgroundSize: "28px 28px" }} />
              <div style={{ background: "rgba(255,255,255,0.75)", borderRadius: 16,
                padding: "28px 40px", textAlign: "center",
                backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.8)" }}>
                <LogoMark size={52} />
                <div style={{ ...PJSBold, fontSize: 22, color: C.black, marginTop: 14 }}>Sckool Suite</div>
                <div style={{ ...INT, fontSize: 14, color: C.gray600, marginTop: 6 }}>School Management Platform</div>
                <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 18, flexWrap: "wrap" }}>
                  {["Admissions","Academics","Finance","Communication"].map(t => (
                    <span key={t} style={{ ...INT, fontSize: 11, fontWeight: 600, padding: "4px 10px",
                      background: C.indigoLight, color: C.indigo, borderRadius: 9999 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="ss-float-left"  style={{ position: "absolute", left: -20, top: "38%", zIndex: 5 }}>
              <FloatingCard {...cards[0]} />
            </div>
            <div className="ss-float-right" style={{ position: "absolute", right: -20, top: "15%", zIndex: 5 }}>
              <FloatingCard {...cards[1]} />
            </div>
            <div className="ss-float-right" style={{ position: "absolute", right: -20, bottom: "12%", zIndex: 5 }}>
              <FloatingCard {...cards[2]} />
            </div>
          </div>

          {/* Mobile metrics fallback */}
          <div className="ss-mobile-metrics" style={{ display: "none", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 16 }}>
            {cards.map(c => <FloatingCard key={c.label} {...c} />)}
          </div>
        </div>
      </section>
      <style>{`
        .ss-hero{padding:80px 80px 100px}
        @media(max-width:1100px){.ss-float-left,.ss-float-right{display:none!important}.ss-mobile-metrics{display:flex!important}}
        @media(max-width:768px){.ss-hero{padding:40px 16px 60px!important}}
      `}</style>
    </>
  );
}
