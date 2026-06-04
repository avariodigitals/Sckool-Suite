import React from "react";
import { C, PJSBold } from "@/lib/tokens";

type Variant = "dark"|"ghost"|"indigo"|"outline"|"white"|"whiteOutline";

interface BtnProps {
  children: React.ReactNode;
  variant?: Variant;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const MAP: Record<Variant, React.CSSProperties> = {
  dark:         { background: "#111827",                        color: "#fff" },
  ghost:        { background: "rgba(135,135,135,0.1)",  border: "1px solid rgba(135,135,135,0.22)", color: "#555" },
  indigo:       { background: C.indigo,                         color: "#fff" },
  outline:      { background: "#fff", border: `1.5px solid ${C.gray200}`, color: "#111827" },
  white:        { background: "#fff",                           color: C.indigo },
  whiteOutline: { background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff" },
};

export default function Btn({ children, variant = "dark", style = {}, onClick }: BtnProps) {
  return (
    <button onClick={onClick} style={{
      ...PJSBold, display: "inline-flex", alignItems: "center",
      justifyContent: "center", gap: 7, padding: "13px 26px",
      borderRadius: 14, fontSize: 14, cursor: "pointer", border: "none",
      transition: "opacity .15s", ...MAP[variant], ...style
    }}>{children}</button>
  );
}
