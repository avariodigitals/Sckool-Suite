import React from "react";
import { Settings, BookOpen, CreditCard, Bell } from "lucide-react";
import { C, INT, PJSBold } from "@/lib/tokens";
import SectionLabel from "./ui/SectionLabel";
import LogoMark from "./ui/LogoMark";

const LEFT  = [{ icon: Settings,    title: "Administration",    sub: "Central control & reporting" },
               { icon: BookOpen,    title: "Academics",         sub: "Grading & curriculum" }];
const RIGHT = [{ icon: CreditCard,  title: "Finance",           sub: "Fee management & payroll" },
               { icon: Bell,        title: "Parents & Students",sub: "Engagement & updates" }];

function Wing({ items }: { items: typeof LEFT }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {items.map(({ icon: Icon, title, sub }) => (
        <div key={title} style={{ background: "#fff", border: `1px solid ${C.gray200}`,
          borderRadius: 12, padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <Icon size={22} color={C.indigo} style={{ marginBottom: 10 } as React.CSSProperties} />
          <div style={{ ...PJSBold, fontSize: 15, color: C.black }}>{title}</div>
          <div style={{ ...INT, fontSize: 13, color: C.gray600 }}>{sub}</div>
        </div>
      ))}
    </div>
  );
}

export default function Ecosystem() {
  return (
    <section id="platform" style={{ padding: "80px 80px", maxWidth: 1440, margin: "0 auto" }} className="ss-pad">
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <SectionLabel text="Ecosystem" />
        <h2 style={{ ...PJSBold, fontSize: 34, color: C.black, margin: "0 0 12px" }}>The Sckool Suite Ecosystem</h2>
        <p style={{ ...INT, fontSize: 17, color: C.gray600, maxWidth: 520, margin: "0 auto" }}>
          A single source of truth connecting every stakeholder in your institution.
        </p>
      </div>
      <div className="ss-eco-grid" style={{ display: "grid", gridTemplateColumns: "1fr 200px 1fr",
        gap: 32, maxWidth: 860, margin: "0 auto", alignItems: "center" }}>
        <Wing items={LEFT} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(135,135,135,0.08)", borderRadius: "50%", width: 200, height: 200, margin: "0 auto" }}>
          <div style={{ width: 160, height: 160, borderRadius: "50%",
            background: `linear-gradient(135deg,${C.indigo},${C.indigoDark})`,
            border: "4px solid #fff", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            boxShadow: "0 8px 32px rgba(79,70,229,0.3)" }}>
            <LogoMark size={36} />
            <div style={{ ...PJSBold, color: "#fff", fontSize: 13, marginTop: 8 }}>School Hub</div>
          </div>
        </div>
        <Wing items={RIGHT} />
      </div>
      <style>{`@media(max-width:768px){.ss-eco-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
