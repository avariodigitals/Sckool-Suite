import React from "react";

interface SectionLabelProps {
  text: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ text }) => (
  <span className="inline-block px-4 py-1 rounded-full bg-brand-50 text-brand-600
    text-xs font-bold uppercase tracking-wider mb-3 font-jakarta">
    {text}
  </span>
);

export default SectionLabel;
