import React from "react";
import { Settings, BookOpen, CreditCard, Bell } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import LogoMark    from "@/components/ui/LogoMark";

interface WingCard {
  icon:  LucideIcon;
  title: string;
  sub:   string;
}

const LEFT_CARDS: WingCard[]  = [
  { icon: Settings, title: "Administration",     sub: "Central control & reporting" },
  { icon: BookOpen, title: "Academics",          sub: "Grading & curriculum" },
];
const RIGHT_CARDS: WingCard[] = [
  { icon: CreditCard, title: "Finance",           sub: "Fee management & payroll" },
  { icon: Bell,       title: "Parents & Students",sub: "Engagement & updates" },
];

const Wing: React.FC<{ items: WingCard[] }> = ({ items }) => (
  <div className="flex flex-col gap-4">
    {items.map(({ icon: Icon, title, sub }) => (
      <div key={title}
        className="bg-white border border-gray-200 rounded-xl px-6 py-5
          shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <Icon size={22} className="text-brand-600 mb-2.5" />
        <p className="font-jakarta font-bold text-sm text-gray-900">{title}</p>
        <p className="font-inter text-xs text-gray-500">{sub}</p>
      </div>
    ))}
  </div>
);

const Ecosystem: React.FC = () => (
  <section
    id="platform"
    aria-labelledby="ecosystem-heading"
    className="px-4 sm:px-16 py-16 sm:py-20"
  >
    <div className="max-w-[1440px] mx-auto">
      <div className="text-center mb-14">
        <SectionLabel text="Ecosystem" />
        <h2 id="ecosystem-heading"
          className="font-jakarta font-bold text-3xl text-gray-900 mt-1 mb-3">
          The Sckool Suite Ecosystem
        </h2>
        <p className="font-inter text-base text-gray-500 max-w-lg mx-auto">
          A single source of truth connecting every stakeholder in your institution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_200px_1fr]
        gap-8 max-w-3xl mx-auto items-center">
        <Wing items={LEFT_CARDS} />

        {/* Hub circle */}
        <div className="flex items-center justify-center
          bg-gray-200/50 rounded-full w-[200px] h-[200px] mx-auto">
          <div className="w-40 h-40 rounded-full
            bg-gradient-to-br from-brand-500 to-brand-800
            border-4 border-white shadow-[0_8px_32px_rgba(79,70,229,0.3)]
            flex flex-col items-center justify-center">
            <LogoMark size={36} />
            <p className="font-jakarta font-bold text-white text-xs mt-2">
              School Hub
            </p>
          </div>
        </div>

        <Wing items={RIGHT_CARDS} />
      </div>
    </div>
  </section>
);

export default Ecosystem;
