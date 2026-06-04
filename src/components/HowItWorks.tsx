import React from "react";
import { Clock, Settings, TrendingUp } from "lucide-react";
import { C, INT, PJSBold } from "@/lib/tokens";
import SectionLabel from "./ui/SectionLabel";
import LogoMark from "./ui/LogoMark";

const STEPS = [
  { icon: Clock,      n: "01", title: "Assess & Plan",
    text: "We evaluate your school's current processes, identify operational challenges, and create a digitization plan tailored to your needs." },
  { icon: Settings,   n: "02", title: "Setup & Train",
    text: "Our team configures Sckool Suite for your school, migrates necessary data, and trains administrators, teachers, and staff." },
  { icon: TrendingUp, n: "03", title: "Manage & Grow",
    text: "Run your school's academics, administration, finance, and communication from one platform while receiving ongoing support as your school grows." },
];

export default function HowItWorks() {
  return (
    <>
      <section id="how-it-works" style={{ padding: "80px 80px", maxWidth: 1440, margin: "0 auto" }} className="ss-pad">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <SectionLabel text="How it works" />
          <h2 style={{ ...PJSBold, fontSize: 34, color: C.black, margin: "0 0 12px" }}>How we help schools get started</h2>
          <p style={{ ...INT, fontSize: 17, color: C.gray600, maxWidth: 600, margin: "0 auto" }}>
            Our structured implementation process ensures your school is fully operational on Sckool Suite within weeks — not months.
          </p>
        </div>
        <div className="ss-hiw-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, maxWidth: 1100, margin: "0 auto", alignItems: "start" }}>
          {/* Left backdrop */}
          <div style={{ background: "linear-gradient(145deg,#e8eaf6 0%,#c5cae9 100%)", borderRadius: 20,
            minHeight: 420, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 24, padding: 40,
            border: `1px solid ${C.gray200}` }}>
            <LogoMark size={56} />
            <div style={{ ...PJSBold, fontSize: 20, color: C.black }}>Quick Implementation</div>
            <p style={{ ...INT, fontSize: 14, color: C.gray600, textAlign: "center", maxWidth: 280, lineHeight: 1.7, margin: 0 }}>
              Most schools are fully live within 2–4 weeks. We handle configuration, data migration, and training.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%", maxWidth: 280 }}>
              {["Assess","Configure","Train","Go Live"].map((s,i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 12,
                  background: "rgba(255,255,255,0.7)", borderRadius: 10, padding: "10px 16px" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: C.indigo,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    ...PJSBold, fontSize: 11, color: "#fff", flexShrink: 0 }}>{i+1}</div>
                  <span style={{ ...INT, fontSize: 14, fontWeight: 600, color: C.black }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {STEPS.map(({ icon: Icon, n, title, text }, idx) => (
              <div key={n} style={{ display: "flex", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.indigoLight,
                    border: `2px solid ${C.indigo}`, display: "flex", alignItems: "center",
                    justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={17} color={C.indigo} />
                  </div>
                  {idx < STEPS.length-1 && (
                    <div style={{ width: 2, flex: 1, background: C.gray200, minHeight: 48, margin: "4px 0" }} />
                  )}
                </div>
                <div style={{ paddingBottom: idx < STEPS.length-1 ? 40 : 0, paddingTop: 4 }}>
                  <div style={{ ...PJSBold, fontSize: 11, color: C.indigo, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 4 }}>Step {n}</div>
                  <h3 style={{ ...PJSBold, fontSize: 18, color: C.black, margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ ...INT, fontSize: 14, lineHeight: 1.7, color: C.gray600, margin: 0 }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .ss-hiw-grid{grid-template-columns:1fr 1fr}
        @media(max-width:860px){.ss-hiw-grid{grid-template-columns:1fr!important}}
      `}</style>
    </>
  );
}
