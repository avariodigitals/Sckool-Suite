"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { C, INT, PJSBold } from "@/lib/tokens";
import LogoMark from "./ui/LogoMark";
import Btn from "./ui/Btn";

const LINKS = ["Challenge","Solutions","Platform","Modules","Why Choose Us","How it works","FAQ"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, width: "100%", zIndex: 100,
        background: "rgba(255,255,255,0.97)",
        borderBottom: "1px solid rgba(15,42,94,0.08)",
        boxShadow: "0 1px 32px rgba(15,42,94,0.06)",
      }}>
        <div style={{
          maxWidth: 1440, margin: "0 auto", padding: "0 32px", height: 73,
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <LogoMark size={36} />
            <span style={{ ...PJSBold, fontSize: 20, letterSpacing: "-0.5px", color: C.black }}>Sckool Suite</span>
          </div>

          <div className="ss-desktop-nav" style={{ display: "flex", gap: 26, alignItems: "center" }}>
            {LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g,"-")}`} style={{
                ...INT, fontWeight: 600, fontSize: 14,
                color: C.gray600, textDecoration: "none", whiteSpace: "nowrap"
              }}>{l}</a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Btn style={{ minWidth: 131 }}>Book A Demo</Btn>
            <button onClick={() => setOpen(!open)} className="ss-ham-btn"
              style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4, color: C.black }}
              aria-label="Menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div style={{
            position: "absolute", top: 73, left: 0, right: 0, background: "#fff",
            borderBottom: `1px solid ${C.gray200}`, padding: "16px 24px",
            display: "flex", flexDirection: "column", gap: 4
          }}>
            {LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g,"-")}`}
                onClick={() => setOpen(false)}
                style={{ ...INT, fontWeight: 600, fontSize: 15, color: C.gray700,
                  textDecoration: "none", padding: "10px 0", borderBottom: `1px solid ${C.gray200}` }}>{l}</a>
            ))}
            <Btn style={{ marginTop: 10 }}>Book A Demo</Btn>
          </div>
        )}
      </nav>
      <div style={{ height: 73 }} aria-hidden="true" />
      <style>{`
        @media(max-width:1024px){.ss-desktop-nav{display:none!important}.ss-ham-btn{display:flex!important}}
      `}</style>
    </>
  );
}
