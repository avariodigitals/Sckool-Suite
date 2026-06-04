import React from "react";
import { BookOpen, Layers, DollarSign, MessageSquare } from "lucide-react";
import { C, INT, PJSBold } from "@/lib/tokens";
import SectionLabel from "./ui/SectionLabel";

const DATA = [
  { icon: BookOpen,      title: "Academic",       desc: "Messy curriculums and untracked student progress reports." },
  { icon: Layers,        title: "Administrative", desc: "Paper-heavy processes and disjointed departmental records." },
  { icon: DollarSign,    title: "Financial",      desc: "Uncollected fees and lack of real-time financial transparency." },
  { icon: MessageSquare, title: "Communication",  desc: "Missed updates and poor parent-teacher-student engagement." },
];

export default function Challenges() {
  return (
    <section id="solutions" style={{ background: C.gray50, padding: "72px 80px" }} className="ss-pad">
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <SectionLabel text="Challenges" />
          <h2 style={{ ...PJSBold, fontSize: 32, color: C.black, margin: "0 0 12px" }}>Solves Every School Challenge</h2>
          <p style={{ ...INT, fontSize: 16, color: C.gray600, margin: "0 auto" }}>Overcome the operational hurdles that slow your growth.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
          {DATA.map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{ background: "#fff", border: `1px solid ${C.gray200}`, borderRadius: 12, padding: 32 }}>
              <div style={{ width: 48, height: 48, background: C.gray100, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <Icon size={20} color={C.gray700} />
              </div>
              <h3 style={{ ...PJSBold, fontSize: 18, color: "#111827", margin: "0 0 8px" }}>{title}</h3>
              <p style={{ ...INT, fontSize: 14, lineHeight: 1.6, color: C.gray600, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`.ss-pad{padding:72px 80px}@media(max-width:768px){.ss-pad{padding:48px 16px!important}}`}</style>
    </section>
  );
}
