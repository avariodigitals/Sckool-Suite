import React from "react";
import { Star } from "lucide-react";
import { C, INT, PJSBold } from "@/lib/tokens";
import SectionLabel from "./ui/SectionLabel";

const DATA = [
  { name: "Mrs Ibrahim",  role: "Principal",    school: "Heroes Might Schools",  init: "MI",
    text: "Tracking fees and outstanding payments is now straightforward. We have better visibility into our finances and fewer administrative errors." },
  { name: "Mr Paul",      role: "Bursar",        school: "Corona Schools",        init: "MP",
    text: "The fee management module alone has paid for itself. Every payment is recorded, every receipt is digital, and parents can check their payment status themselves. The finance team now focuses on analysis, not reconciliation." },
  { name: "Mr Eze",       role: "Director",      school: "Pinnacle Schools",      init: "ME",
    text: "The parent communication portal alone was worth the investment. Engagement is up, and administrative complaints are down significantly." },
  { name: "Mrs Ajala",    role: "Proprietress",  school: "Harmony Intl. Schools", init: "MA",
    text: "What used to take our admin team three weeks — result computation, report cards, parent notifications — now takes three days. Our parents are happier, and our school looks more professional." },
  { name: "Mr Chidinma",  role: "Proprietor",    school: "Bright Future Academy", init: "MC",
    text: "The implementation process was smooth, and the training provided helped our staff adopt the system quickly." },
  { name: "Mr Chukwu",    role: "Vice Principal",school: "Smart Academy",         init: "MK",
    text: "I can see real-time attendance, finance, and academic performance across both campuses at any time. Sckool Suite does exactly that." },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[0,1,2,3,4].map(i => <Star key={i} size={14} style={{ fill: "#FBBF24", color: "#FBBF24" }} />)}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: C.gray50, padding: "80px 80px" }} className="ss-pad">
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <SectionLabel text="Success Stories" />
          <h2 style={{ ...PJSBold, fontSize: 34, color: C.black, margin: "0 0 12px" }}>Trusted by school leaders across Nigeria</h2>
          <p style={{ ...INT, fontSize: 17, color: C.gray600, maxWidth: 560, margin: "0 auto" }}>
            Hear from school proprietors, directors, and head teachers who have transformed their institutions with Sckool Suite.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {DATA.map(({ name, role, school, text, init }) => (
            <div key={name} style={{ background: "#fff", border: `1px solid ${C.gray200}`,
              borderRadius: 16, padding: "28px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Author — TOP */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: C.indigoLight,
                  flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
                  ...PJSBold, fontSize: 12, color: C.indigo }}>{init}</div>
                <div>
                  <div style={{ ...PJSBold, fontSize: 14, color: C.black, fontStyle: "italic" }}>{name}</div>
                  <div style={{ ...INT, fontSize: 12, color: C.gray600, fontStyle: "italic" }}>{role} • {school}</div>
                </div>
              </div>
              <div style={{ height: 1, background: C.gray200 }} />
              <p style={{ ...INT, fontSize: 14, lineHeight: 1.7, color: C.gray700,
                margin: 0, fontStyle: "italic", flex: 1 }}>&ldquo;{text}&rdquo;</p>
              <Stars />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
