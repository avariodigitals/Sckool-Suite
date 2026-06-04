import React from "react";

export default function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="10" fill="url(#lg)" />
      <circle cx="18" cy="18" r="11" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" fill="none" />
      <path d="M18 8 L26 13.5 L26 22.5 L18 28 L10 22.5 L10 13.5 Z" fill="rgba(255,255,255,0.12)" />
      <path d="M11 15 L18 11 L25 15 L18 19 Z" fill="white" />
      <circle cx="25" cy="21" r="2" fill="rgba(255,255,255,0.7)" />
      <line x1="25" y1="19" x2="25" y2="15" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#3730A3" />
        </linearGradient>
      </defs>
    </svg>
  );
}
