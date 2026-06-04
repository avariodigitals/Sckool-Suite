import React from "react";
import { Zap, CreditCard, MessageSquare, BarChart2, Shield, Smartphone } from "lucide-react";
import { C, INT, PJSBold } from "@/lib/tokens";
import SectionLabel from "./ui/SectionLabel";

const DATA = [
  { icon: Zap,           title: "Faster Report Generation",     text: "Generate complete student report cards in minutes instead of days. Automated computation eliminates manual errors and saves staff hours." },
  { icon: CreditCard,    title: "Better Fee Tracking",          text: "Know exactly who has paid, who hasn't, and how much is outstanding — across every class and every student, in real time." },
  { icon: MessageSquare, title: "Improved Parent Communication", text: "Automate repetitive tasks so your admin team can focus on what matters — running an excellent school, not managing paperwork." },
  { icon: BarChart2,     title: "Real-Time Reporting",          text: "Access live school performance data, attendance trends, fee collection summaries, and academic analytics from your dashboard." },
  { icon: Shield,        title: "Secure School Data",           text: "Your school's data is protected with enterprise-grade security, role-based access, and regular encrypted backups." },
  { icon: Smartphone,    title: "Mobile Accessibility",         text: "Access Sckool Suite from any device — desktop, tablet, or mobile — ensuring administrators, teachers, and parents are always connected." },
];

export default function ValueProp() {
  return (
    <section id="why-choose-us" style={{ background: C.gray50, padding: "80px 80px" }} className="ss-pad">
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <SectionLabel text="Why Choose Us" />
          <h2 style={{ ...PJSBold, fontSize: 34, color: C.black, margin: "0 0 12px" }}>Measurable Outcomes. Real Transformation.</h2>
          <p style={{ ...INT, fontSize: 17, color: C.gray600, maxWidth: 600, margin: "0 auto" }}>
            Schools using Sckool Suite see operational improvements within the first term — and transformational change within the first year.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
          {DATA.map(({ icon: Icon, title, text }) => (
            <div key={title} style={{ background: "#fff", border: `1px solid ${C.gray200}`, borderRadius: 14, padding: "28px 28px" }}>
              <div style={{ width: 44, height: 44, background: C.indigoLight, borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Icon size={20} color={C.indigo} />
              </div>
              <h3 style={{ ...PJSBold, fontSize: 17, color: C.black, margin: "0 0 10px" }}>{title}</h3>
              <p style={{ ...INT, fontSize: 14, lineHeight: 1.65, color: C.gray600, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
