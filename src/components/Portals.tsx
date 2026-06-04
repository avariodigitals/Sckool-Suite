"use client";
import React, { useState } from "react";
import { Settings, GraduationCap, Bell, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { C, INT, PJSBold } from "@/lib/tokens";
import SectionLabel from "./ui/SectionLabel";
import Btn from "./ui/Btn";

const PORTALS: Record<string,{ icon: any; heading: string; copy: string; features: string[] }> = {
  "Admin Portal":   { icon: Settings,      heading: "Complete control over your school",
    copy: "Manage users, configure academic calendars, view real-time analytics, and oversee every department.",
    features: ["User & role management","School settings & config","Real-time analytics","Multi-campus support"] },
  "Teacher Portal": { icon: GraduationCap, heading: "Tools that empower every teacher",
    copy: "Enter continuous assessments, record attendance, manage timetables, and generate result sheets.",
    features: ["Result & CA entry","Attendance recording","Timetable management","Student record access"] },
  "Parent Portal":  { icon: Bell,          heading: "Keeping parents always informed",
    copy: "Parents can view results, attendance, school fees, and receive instant notifications — anytime.",
    features: ["Result & report access","Fee payment status","School announcements","Direct school contact"] },
  "Student Portal": { icon: BookOpen,      heading: "Learning tools for every student",
    copy: "Students can access timetables, check results, view assignments, and stay up to date with announcements.",
    features: ["Timetable & schedule","Result & report access","Assignment submissions","Attendance history"] },
};

export default function Portals() {
  const [active, setActive] = useState("Student Portal");
  const p = PORTALS[active];
  const Icon = p.icon;
  return (
    <>
      <section id="portals" style={{ padding: "80px 80px", maxWidth: 1440, margin: "0 auto" }} className="ss-pad">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <SectionLabel text="Portals" />
          <h2 style={{ ...PJSBold, fontSize: 34, color: C.black, margin: "0 0 12px" }}>Tailored Experiences For Everyone</h2>
          <p style={{ ...INT, fontSize: 17, color: C.gray600 }}>Purpose-built portals that give each user exactly what they need.</p>
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          {Object.keys(PORTALS).map(t => (
            <button key={t} onClick={() => setActive(t)} style={{
              ...PJSBold, fontSize: 14, padding: "10px 22px", borderRadius: 10,
              border: `1.5px solid ${active===t ? C.indigo : C.gray200}`,
              background: active===t ? C.indigoLight : "#fff",
              color: active===t ? C.indigo : C.gray700, cursor: "pointer" }}>{t}</button>
          ))}
        </div>
        <div className="ss-portal-card" style={{ maxWidth: 800, margin: "0 auto", background: "#fff",
          border: `1px solid ${C.gray200}`, borderRadius: 20, padding: "40px 48px",
          display: "flex", gap: 36, alignItems: "flex-start" }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: C.indigoLight,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon size={30} color={C.indigo} />
          </div>
          <div>
            <h3 style={{ ...PJSBold, fontSize: 22, color: C.black, margin: "0 0 12px" }}>{p.heading}</h3>
            <p style={{ ...INT, fontSize: 15, color: C.gray600, lineHeight: 1.7, margin: "0 0 20px" }}>{p.copy}</p>
            <ul style={{ margin: "0 0 24px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {p.features.map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle size={16} color={C.indigo} />
                  <span style={{ ...INT, fontSize: 15, color: C.black }}>{f}</span>
                </li>
              ))}
            </ul>
            <Btn variant="indigo">See {active} in Action <ArrowRight size={14} /></Btn>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){.ss-portal-card{flex-direction:column!important;padding:24px!important}}`}</style>
    </>
  );
}
