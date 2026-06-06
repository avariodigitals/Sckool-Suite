"use client";

import React, { useState } from "react";
import {
  CheckCircle, Calendar, MessageSquare,
  Users, CreditCard, FileText, TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import LogoMark  from "@/components/ui/LogoMark";
import Btn       from "@/components/ui/Btn";
import DemoModal from "@/components/DemoModal";

interface MetricCardProps {
  icon:  LucideIcon;
  label: string;
  value: string;
  trend: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon: Icon, label, value, trend }) => (
  <div className="w-40 min-w-40 p-3.5 rounded-2xl bg-white shadow-xl
    flex flex-col items-start gap-1">
    <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center">
      <Icon size={15} className="text-brand-600" />
    </div>
    <p className="text-[11px] font-semibold text-gray-500 font-inter mt-0.5">{label}</p>
    <p className="text-lg font-bold font-jakarta text-gray-900 leading-none">{value}</p>
    <span className="inline-flex items-center gap-1 bg-green-100 text-green-800
      text-[10px] font-bold font-jakarta px-2 py-0.5 rounded-md mt-0.5">
      <TrendingUp size={9} /> {trend}
    </span>
  </div>
);

interface MetricItem {
  icon:  LucideIcon;
  label: string;
  value: string;
  trend: string;
}

const METRICS: MetricItem[] = [
  { icon: Users,      label: "Students Managed",  value: "48,200+",  trend: "23% this year" },
  { icon: CreditCard, label: "Fees Processed",     value: "₦2.1B+",   trend: "41% this year" },
  { icon: FileText,   label: "Reports Generated",  value: "184,000+", trend: "67% this year" },
];

const MODULE_TAGS: string[] = ["Admissions", "Academics", "Finance", "Communication"];

const Hero: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <section
        id="challenge"
        aria-label="Hero — Run Your Entire School From One Platform"
        className="max-w-[1440px] mx-auto px-4 sm:px-16 py-16 sm:py-20"
      >
        <div className="flex flex-col items-center gap-5 text-center">

          {/* Trust badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-500 font-inter">
            <CheckCircle size={14} className="text-brand-600" />
            Trusted by 200+ schools across Nigeria &amp; Africa
          </span>

          <h1 className="font-jakarta font-extrabold text-gray-900
            text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] tracking-tight max-w-4xl mt-1">
            Run Your Entire School<br />From One Platform
          </h1>

          <p className="font-inter text-base sm:text-lg text-gray-500
            leading-relaxed max-w-2xl">
            Manage admissions, attendance, results, report cards, fees, communication,
            teachers, parents, and students through one fully integrated school
            management system.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-1">
            <Btn onClick={() => setModal(true)}>
              <Calendar size={15} /> Book A Demo
            </Btn>
            <Btn variant="ghost">
              <MessageSquare size={15} /> Chat on WhatsApp
            </Btn>
          </div>

          {/* Dashboard canvas with floating metric cards */}
          <div className="relative w-full max-w-4xl mt-8">
            <div className="w-full h-[280px] sm:h-[380px] lg:h-[440px] rounded-2xl
              bg-gradient-to-br from-indigo-100 to-indigo-200
              border border-gray-200 flex items-center justify-center overflow-hidden relative">

              {/* Dot grid */}
              <div className="absolute inset-0"
                style={{ backgroundImage: "radial-gradient(circle,rgba(79,70,229,0.08) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

              {/* Centre card */}
              <div className="relative bg-white/75 backdrop-blur-sm rounded-2xl
                px-10 py-7 text-center border border-white/80 shadow-sm">
                <LogoMark size={52} />
                <p className="font-jakarta font-bold text-xl text-gray-900 mt-3">
                  Sckool Suite
                </p>
                <p className="font-inter text-sm text-gray-500 mt-1">
                  School Management Platform
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {MODULE_TAGS.map(tag => (
                    <span key={tag} className="font-inter text-[11px] font-semibold
                      px-3 py-1 bg-brand-50 text-brand-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating cards — hidden below 1100 px */}
            <div className="hidden xl:block absolute -left-5 top-[38%] z-10">
              <MetricCard {...METRICS[0]} />
            </div>
            <div className="hidden xl:block absolute -right-5 top-[15%] z-10">
              <MetricCard {...METRICS[1]} />
            </div>
            <div className="hidden xl:block absolute -right-5 bottom-[12%] z-10">
              <MetricCard {...METRICS[2]} />
            </div>
          </div>

          {/* Mobile metric row */}
          <div className="flex xl:hidden flex-wrap gap-3 justify-center mt-4">
            {METRICS.map(m => <MetricCard key={m.label} {...m} />)}
          </div>
        </div>
      </section>

      <DemoModal isOpen={modal} onClose={() => setModal(false)} />
    </>
  );
};

export default Hero;
