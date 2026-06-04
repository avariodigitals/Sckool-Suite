"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { C, INT, PJSBold } from "@/lib/tokens";
import SectionLabel from "./ui/SectionLabel";

const DATA = [
  { q: "How is Sckool Suite priced?",
    a: "Sckool Suite is priced based on school size and the modules you need. We offer flexible plans for primary schools, secondary schools, and multi-campus institutions. Contact us for a customized quote." },
  { q: "How long does it take to set up Sckool Suite for our school?",
    a: "Most schools are fully operational within 2–4 weeks. Our team handles configuration, data migration, and staff training to ensure a smooth transition." },
  { q: "What training is provided for our staff?",
    a: "We provide comprehensive onboarding training for administrators, teachers, and support staff — including live sessions, video tutorials, and documentation." },
  { q: "Can we migrate our existing student and staff records?",
    a: "Yes. Our implementation team assists with data migration from spreadsheets, legacy systems, or paper records into Sckool Suite." },
  { q: "Does Sckool Suite work with poor internet connectivity?",
    a: "Sckool Suite is optimized for Nigerian internet conditions, with lightweight interfaces, offline-capable features, and efficient data usage." },
  { q: "What kind of ongoing support is available?",
    a: "We provide dedicated support via phone, email, and WhatsApp. All plans include access to our support team and regular platform updates." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <section id="faq" style={{ padding: "80px 80px", maxWidth: 1440, margin: "0 auto" }} className="ss-pad">
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <SectionLabel text="FAQ" />
          <h2 style={{ ...PJSBold, fontSize: 34, color: C.black, margin: "0 0 12px" }}>Frequently Asked Questions</h2>
        </div>
        {DATA.map((f,i) => (
          <div key={i} style={{ border: `1px solid ${C.gray200}`, borderRadius: 12, marginBottom: 10, overflow: "hidden", background: "#fff" }}>
            <button onClick={() => setOpen(open===i ? null : i)} style={{
              width: "100%", textAlign: "left", padding: "18px 24px",
              background: "none", border: "none", cursor: "pointer",
              display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <span style={{ ...PJSBold, fontSize: 15, color: C.black }}>{f.q}</span>
              <ChevronDown size={18} color={C.indigo} style={{ flexShrink: 0, transition: "transform 0.2s",
                transform: open===i ? "rotate(180deg)" : "none" }} />
            </button>
            {open===i && (
              <div style={{ padding: "0 24px 18px", ...INT, fontSize: 14, lineHeight: 1.75, color: C.gray600 }}>{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
