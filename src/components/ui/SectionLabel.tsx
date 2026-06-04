import React from "react";
import { C, PJSBold } from "@/lib/tokens";

export default function SectionLabel({ text }: { text: string }) {
  return (
    <span style={{
      ...PJSBold, display: "inline-block", padding: "5px 14px",
      borderRadius: 9999, background: C.indigoLight, color: C.indigo,
      fontSize: 12, letterSpacing: "0.4px", textTransform: "uppercase", marginBottom: 12
    }}>{text}</span>
  );
}
