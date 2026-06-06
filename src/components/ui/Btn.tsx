import React from "react";

type BtnVariant = "dark" | "ghost" | "indigo" | "outline" | "white" | "whiteOutline";

interface BtnProps {
  children:  React.ReactNode;
  variant?:  BtnVariant;
  className?: string;
  onClick?:  () => void;
  type?:     "button" | "submit" | "reset";
  disabled?: boolean;
}

const VARIANT_CLASSES: Record<BtnVariant, string> = {
  dark:         "bg-gray-900 text-white hover:bg-gray-800",
  ghost:        "bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200",
  indigo:       "bg-brand-600 text-white hover:bg-brand-700",
  outline:      "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50",
  white:        "bg-white text-brand-600 hover:bg-gray-50",
  whiteOutline: "bg-white/10 text-white border border-white/30 hover:bg-white/20",
};

const Btn: React.FC<BtnProps> = ({
  children, variant = "dark", className = "", onClick, type = "button", disabled = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={[
      "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl",
      "text-sm font-bold font-jakarta cursor-pointer transition-all duration-150",
      "disabled:opacity-60 disabled:cursor-not-allowed",
      VARIANT_CLASSES[variant],
      className,
    ].join(" ")}
  >
    {children}
  </button>
);

export default Btn;
