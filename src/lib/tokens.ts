export const C = {
  indigo:     "#4F46E5",
  indigoDark: "#3730A3",
  indigoMid:  "#6366F1",
  indigoLight:"#EEF2FF",
  black:      "#111827",
  gray50:     "#F9FAFB",
  gray100:    "#F3F4F6",
  gray200:    "#E5E7EB",
  gray400:    "#9CA3AF",
  gray600:    "#6B7280",
  gray700:    "#374151",
  white:      "#FFFFFF",
  green:      "#166534",
  greenBg:    "#DCFCE7",
} as const;

export const PJS: React.CSSProperties = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
export const INT: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };
export const PJSBold: React.CSSProperties = { ...PJS, fontWeight: 700 };

import React from "react";
