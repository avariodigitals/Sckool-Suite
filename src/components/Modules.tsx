import React from "react";
import { GraduationCap, BarChart2, CreditCard, Send, CheckCircle } from "lucide-react";
import { C, INT, PJSBold } from "@/lib/tokens";
import SectionLabel from "./ui/SectionLabel";

const DATA = [
  { icon: GraduationCap, title: "Admissions Management",
    desc: "Digitise your entire admission process — from online applications to enrollment confirmation — with automated workflows and real-time tracking.",
    features: ["Online application forms","Enrollment confirmation","Automated workflows","Real-time tracking"] },
  { icon: BarChart2, title: "Academics & Results",
    desc: "Automate result computation, generate report cards, manage exams and timetables, and track every student's academic performance term by term.",
    features: ["Automated result computation","Report card generation","Exam & timetable management","Term-by-term tracking"] },
  { icon: CreditCard, title: "Finance & Fee Management",
    desc: "Track every naira — from fee invoicing to payment receipts, with bank integrations, financial reports, and real-time collection dashboards.",
    features: ["Fee invoicing & receipts","Bank integrations","Outstanding payment alerts","Real-time finance dashboard"] },
  { icon: Send, title: "Communication Hub",
    desc: "Send targeted messages to parents, students, and staff via SMS, email, and in-app notifications — directly from your school dashboard.",
    features: ["SMS & email notifications","In-app announcements","Parent-teacher messaging","Broadcast to all classes"] },
];

export default function Modules() {
  return (
    <section id="modules" style={{ background: C.gray50, padding: "80px 80px" }} className="ss-pad">
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <SectionLabel text="Platform Modules" />
          <h2 style={{ ...PJSBold, fontSize: 34, color: C.black, margin: "0 0 12px" }}>Powerful Modules. One Unified System.</h2>
          <p style={{ ...INT, fontSize: 17, color: C.gray600, maxWidth: 600, margin: "0 auto" }}>
            Each module is purpose-built for African schools and integrates seamlessly with the rest of the platform.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 28 }}>
          {DATA.map(({ icon: Icon, title, desc, features }) => (
            <div key={title} style={{ background: "#fff", border: `1px solid ${C.gray200}`, borderRadius: 16, padding: 32,
              display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ width: 48, height: 48, background: C.indigoLight, borderRadius: 12,
                display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={22} color={C.indigo} />
              </div>
              <h3 style={{ ...PJSBold, fontSize: 19, color: C.black, margin: 0 }}>{title}</h3>
              <p style={{ ...INT, fontSize: 14, lineHeight: 1.65, color: C.gray600, margin: 0 }}>{desc}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                {features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <CheckCircle size={15} color={C.indigo} style={{ flexShrink: 0 } as React.CSSProperties} />
                    <span style={{ ...INT, fontSize: 14, color: C.black }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
