import React from "react";
import { Clock, Settings, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import LogoMark    from "@/components/ui/LogoMark";

interface StepItem {
  icon:  LucideIcon;
  n:     string;
  title: string;
  text:  string;
}

const STEPS: StepItem[] = [
  {
    icon: Clock, n: "01", title: "Assess & Plan",
    text: "We evaluate your school's current processes, identify operational challenges, and create a digitization plan tailored to your needs.",
  },
  {
    icon: Settings, n: "02", title: "Setup & Train",
    text: "Our team configures Sckool Suite for your school, migrates necessary data, and trains administrators, teachers, and staff.",
  },
  {
    icon: TrendingUp, n: "03", title: "Manage & Grow",
    text: "Run your school's academics, administration, finance, and communication from one platform while receiving ongoing support as your school grows.",
  },
];

const PROGRESS_STEPS: string[] = ["Assess", "Configure", "Train", "Go Live"];

const HowItWorks: React.FC = () => (
  <section
    id="how-it-works"
    aria-labelledby="hiw-heading"
    className="px-4 sm:px-16 py-16 sm:py-20"
  >
    <div className="max-w-[1440px] mx-auto">
      <div className="text-center mb-14">
        <SectionLabel text="How it works" />
        <h2 id="hiw-heading"
          className="font-jakarta font-bold text-3xl text-gray-900 mt-1 mb-3">
          How we help schools get started
        </h2>
        <p className="font-inter text-base text-gray-500 max-w-xl mx-auto">
          Our structured implementation process ensures your school is fully
          operational on Sckool Suite within weeks — not months.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl mx-auto items-start">

        {/* Left — visual backdrop */}
        <div className="bg-gradient-to-br from-indigo-100 to-indigo-200
          rounded-2xl min-h-[420px] flex flex-col items-center
          justify-center gap-6 p-10 border border-gray-200">
          <LogoMark size={56} />
          <p className="font-jakarta font-bold text-xl text-gray-900">
            Quick Implementation
          </p>
          <p className="font-inter text-sm text-gray-500 text-center
            max-w-[280px] leading-relaxed">
            Most schools are fully live within 2–4 weeks. We handle
            configuration, data migration, and training.
          </p>
          <div className="flex flex-col gap-2.5 w-full max-w-[280px]">
            {PROGRESS_STEPS.map((step, i) => (
              <div key={step}
                className="flex items-center gap-3 bg-white/70 rounded-xl px-4 py-2.5">
                <span className="w-6 h-6 rounded-full bg-brand-600 text-white
                  font-jakarta font-bold text-[11px] flex items-center
                  justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="font-inter font-semibold text-sm text-gray-900">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — vertical timeline */}
        <div className="flex flex-col">
          {STEPS.map(({ icon: Icon, n, title, text }, idx) => (
            <div key={n} className="flex gap-5">
              {/* Track spine */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-brand-50
                  border-2 border-brand-600 flex items-center
                  justify-center shrink-0">
                  <Icon size={17} className="text-brand-600" />
                </div>
                {idx < STEPS.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-200 min-h-12 my-1" />
                )}
              </div>
              {/* Content */}
              <div className={idx < STEPS.length - 1 ? "pb-10 pt-1" : "pt-1"}>
                <p className="font-jakarta font-bold text-[11px] text-brand-600
                  uppercase tracking-widest mb-1">
                  Step {n}
                </p>
                <h3 className="font-jakarta font-bold text-lg text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="font-inter text-sm leading-relaxed text-gray-500">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
