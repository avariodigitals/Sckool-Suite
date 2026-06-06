import React from "react";
import { GraduationCap, BarChart2, CreditCard, Send, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

interface ModuleItem {
  icon:     LucideIcon;
  title:    string;
  desc:     string;
  features: string[];
}

const MODULES: ModuleItem[] = [
  {
    icon: GraduationCap, title: "Admissions Management",
    desc: "Digitise your entire admission process — from online applications to enrollment confirmation — with automated workflows and real-time tracking.",
    features: ["Online application forms","Enrollment confirmation","Automated workflows","Real-time tracking"],
  },
  {
    icon: BarChart2, title: "Academics & Results",
    desc: "Automate result computation, generate report cards, manage exams and timetables, and track every student's academic performance term by term.",
    features: ["Automated result computation","Report card generation","Exam & timetable management","Term-by-term tracking"],
  },
  {
    icon: CreditCard, title: "Finance & Fee Management",
    desc: "Track every naira — from fee invoicing to payment receipts, with bank integrations, financial reports, and real-time collection dashboards.",
    features: ["Fee invoicing & receipts","Bank integrations","Outstanding payment alerts","Real-time finance dashboard"],
  },
  {
    icon: Send, title: "Communication Hub",
    desc: "Send targeted messages to parents, students, and staff via SMS, email, and in-app notifications — directly from your school dashboard.",
    features: ["SMS & email notifications","In-app announcements","Parent-teacher messaging","Broadcast to all classes"],
  },
];

const Modules: React.FC = () => (
  <section
    id="modules"
    aria-labelledby="modules-heading"
    className="bg-gray-50 px-4 sm:px-16 py-16 sm:py-20"
  >
    <div className="max-w-[1280px] mx-auto">
      <div className="text-center mb-14">
        <SectionLabel text="Platform Modules" />
        <h2 id="modules-heading"
          className="font-jakarta font-bold text-3xl text-gray-900 mt-1 mb-3">
          Powerful Modules. One Unified System.
        </h2>
        <p className="font-inter text-base text-gray-500 max-w-xl mx-auto">
          Each module is purpose-built for African schools and integrates
          seamlessly with the rest of the platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {MODULES.map(({ icon: Icon, title, desc, features }) => (
          <div key={title}
            className="bg-white border border-gray-200 rounded-2xl p-8
              flex flex-col gap-4">
            <div className="w-12 h-12 bg-brand-50 rounded-xl
              flex items-center justify-center">
              <Icon size={22} className="text-brand-600" />
            </div>
            <h3 className="font-jakarta font-bold text-lg text-gray-900">{title}</h3>
            <p className="font-inter text-sm leading-relaxed text-gray-500">{desc}</p>
            <ul className="flex flex-col gap-2.5 mt-1">
              {features.map(f => (
                <li key={f} className="flex items-center gap-2.5">
                  <CheckCircle size={15} className="text-brand-600 shrink-0" />
                  <span className="font-inter text-sm text-gray-800">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Modules;
