import React from "react";
import { Calendar, MessageSquare, Phone, Mail } from "lucide-react";
import { C, INT, PJSBold } from "@/lib/tokens";
import LogoMark from "./ui/LogoMark";
import Btn from "./ui/Btn";

const COLS = [
  { title: "Platform",  links: ["Admissions","Academics","Finance","Communication","Administration","Analytics"] },
  { title: "Portals",   links: ["Admin Portal","Teacher Portal","Parent Portal","Student Portal"] },
  { title: "Resources", links: ["Documentation","Video Tutorials","Case Studies","Implementation Guide","API Reference"] },
];

export default function Footer() {
  return (
    <footer>
      <div className="ss-cta-banner" style={{
        background: `linear-gradient(135deg,${C.indigo} 0%,${C.indigoDark} 100%)`,
        padding: "72px 80px", textAlign: "center" }}>
        <h2 style={{ ...PJSBold, fontSize: 38, color: "#fff", margin: "0 0 14px" }}>Ready To Modernise Your School?</h2>
        <p style={{ ...INT, fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 36px" }}>
          Join hundreds of forward-thinking institutions upgrading their operations with Sckool Suite.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn variant="white"><Calendar size={15} /> Book a Demo</Btn>
          <Btn variant="whiteOutline"><MessageSquare size={15} /> Chat on WhatsApp</Btn>
        </div>
      </div>

      <div className="ss-footer-body" style={{ background: C.black, padding: "64px 80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="ss-footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <LogoMark size={32} />
                <span style={{ ...PJSBold, fontSize: 18, color: "#fff" }}>Sckool Suite</span>
              </div>
              <p style={{ ...INT, fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: "0 0 20px" }}>
                The complete school operations platform for modern African schools.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ ...INT, fontSize: 13, color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: 8 }}>
                  <Phone size={13} /> +234 800 000 0000
                </span>
                <span style={{ ...INT, fontSize: 13, color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: 8 }}>
                  <Mail size={13} /> hello@sckoolsuite.com
                </span>
                <a href="#" style={{ ...INT, fontSize: 13, color: "#818CF8", textDecoration: "none", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                  <MessageSquare size={13} /> WhatsApp Us
                </a>
              </div>
            </div>
            {COLS.map(col => (
              <div key={col.title}>
                <div style={{ ...PJSBold, fontSize: 12, color: "#fff", letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 16 }}>{col.title}</div>
                {col.links.map(l => (
                  <div key={l} style={{ marginBottom: 11 }}>
                    <a href="#" style={{ ...INT, fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{l}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24,
            display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ ...INT, fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
              © 2026 Sckool Suite. All rights reserved. Built for Africa. Built by{" "}
              <a href="https://avariodigitals.com/" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "underline" }}>Avario Digital</a>
            </span>
            <div style={{ display: "flex", gap: 20 }}>
              {["Privacy Policy","Terms of Service","Data Security"].map(l => (
                <a key={l} href="#" style={{ ...INT, fontSize: 13, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .ss-cta-banner{padding:72px 80px}
        .ss-footer-body{padding:64px 80px 40px}
        .ss-footer-grid{grid-template-columns:2fr 1fr 1fr 1fr}
        @media(max-width:900px){.ss-footer-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:768px){.ss-cta-banner{padding:48px 16px!important}.ss-footer-body{padding:40px 16px!important}}
      `}</style>
    </footer>
  );
}
