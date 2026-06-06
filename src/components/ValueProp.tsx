import React from "react";
import { Zap, CreditCard, MessageSquare, BarChart2, Shield, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

interface ValueItem {
  icon:  LucideIcon;
  title: string;
  text:  string;
}

const VALUES: ValueItem[] = [
  { icon: Zap,            title: "Faster Report Generation",
    text: "Generate complete student report cards in minutes instead of days. Automated computation eliminates manual errors and saves staff hours." },
  { icon: CreditCard,     title: "Better Fee Tracking",
    text: "Know exactly who has paid, who hasn't, and how much is outstanding — across every class and every student, in real time." },
  { icon: MessageSquare,  title: "Improved Parent Communication",
    text: "Automate repetitive tasks so your admin team can focus on what matters — running an excellent school, not managing paperwork." },
  { icon: BarChart2,      title: "Real-Time Reporting",
    text: "Access live school performance data, attendance trends, fee collection summaries, and academic analytics from your dashboard." },
  { icon: Shield,         title: "Secure School Data",
    text: "Your school's data is protected with enterprise-grade security, role-based access, and regular encrypted backups." },
  { icon: Smartphone,     title: "Mobile Accessibility",
    text: "Access Sckool Suite from any device — desktop, tablet, or mobile — ensuring administrators, teachers, and parents are always connected." },
];

const ValueProp: React.FC = () => (
  <section
    id="why-choose-us"
    aria-labelledby="valueprop-heading"
    className="bg-gray-50 px-4 sm:px-16 py-16 sm:py-20"
  >
    <div className="max-w-[1280px] mx-auto">
      <div className="text-center mb-14">
        <SectionLabel text="Why Choose Us" />
        <h2 id="valueprop-heading"
          className="font-jakarta font-bold text-3xl text-gray-900 mt-1 mb-3">
          Measurable Outcomes. Real Transformation.
        </h2>
        <p className="font-inter text-base text-gray-500 max-w-xl mx-auto">
          Schools using Sckool Suite see operational improvements within the first
          term — and transformational change within the first year.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {VALUES.map(({ icon: Icon, title, text }) => (
          <div key={title}
            className="bg-white border border-gray-200 rounded-2xl p-7">
            <div className="w-11 h-11 bg-brand-50 rounded-xl
              flex items-center justify-center mb-4">
              <Icon size={20} className="text-brand-600" />
            </div>
            <h3 className="font-jakarta font-bold text-base text-gray-900 mb-2">
              {title}
            </h3>
            <p className="font-inter text-sm leading-relaxed text-gray-500">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProp;
