"use client";

import React, { useState } from "react";
import { Settings, GraduationCap, Bell, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Btn          from "@/components/ui/Btn";

interface PortalConfig {
  icon:     LucideIcon;
  heading:  string;
  copy:     string;
  features: string[];
}

const PORTALS: Record<string, PortalConfig> = {
  "Admin Portal": {
    icon: Settings,
    heading: "Complete control over your school",
    copy: "Manage users, configure academic calendars, view real-time analytics, and oversee every department — all from one powerful admin dashboard.",
    features: ["User & role management","School settings & config","Real-time analytics","Multi-campus support"],
  },
  "Teacher Portal": {
    icon: GraduationCap,
    heading: "Tools that empower every teacher",
    copy: "Enter continuous assessments, record attendance, manage timetables, and generate result sheets — saving hours every week.",
    features: ["Result & CA entry","Attendance recording","Timetable management","Student record access"],
  },
  "Parent Portal": {
    icon: Bell,
    heading: "Keeping parents always informed",
    copy: "Parents can view their child's results, attendance, school fees, and receive instant notifications — anytime, anywhere.",
    features: ["Result & report access","Fee payment status","School announcements","Direct school contact"],
  },
  "Student Portal": {
    icon: BookOpen,
    heading: "Learning tools for every student",
    copy: "Students can access their timetables, check results, view assignments, and stay up to date with school announcements.",
    features: ["Timetable & schedule","Result & report access","Assignment submissions","Attendance history"],
  },
};

const Portals: React.FC = () => {
  const [active, setActive] = useState<string>("Student Portal");
  const p: PortalConfig     = PORTALS[active];
  const Icon: LucideIcon    = p.icon;

  return (
    <section
      id="portals"
      aria-labelledby="portals-heading"
      className="px-4 sm:px-16 py-16 sm:py-20"
    >
      <div className="text-center mb-12">
        <SectionLabel text="Portals" />
        <h2 id="portals-heading"
          className="font-jakarta font-bold text-3xl text-gray-900 mt-1 mb-3">
          Tailored Experiences For Everyone
        </h2>
        <p className="font-inter text-base text-gray-500">
          Purpose-built portals that give each user exactly what they need.
        </p>
      </div>

      {/* Tab row */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {Object.keys(PORTALS).map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={[
              "font-jakarta font-bold text-sm px-5 py-2.5 rounded-xl border transition-colors",
              active === tab
                ? "border-brand-600 bg-brand-50 text-brand-600"
                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300",
            ].join(" ")}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content card */}
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl
        p-6 sm:p-12 flex flex-col sm:flex-row gap-9 items-start">
        <div className="w-16 h-16 rounded-2xl bg-brand-50
          flex items-center justify-center shrink-0">
          <Icon size={30} className="text-brand-600" />
        </div>
        <div>
          <h3 className="font-jakarta font-bold text-xl text-gray-900 mb-3">
            {p.heading}
          </h3>
          <p className="font-inter text-sm text-gray-500 leading-relaxed mb-5">
            {p.copy}
          </p>
          <ul className="flex flex-col gap-2.5 mb-6">
            {p.features.map(f => (
              <li key={f} className="flex items-center gap-2.5">
                <CheckCircle size={16} className="text-brand-600" />
                <span className="font-inter text-sm text-gray-800">{f}</span>
              </li>
            ))}
          </ul>
          <Btn variant="indigo">
            See {active} in Action <ArrowRight size={14} />
          </Btn>
        </div>
      </div>
    </section>
  );
};

export default Portals;
