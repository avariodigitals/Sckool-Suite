import React from "react";
import { BookOpen, Layers, DollarSign, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

interface ChallengeItem {
  icon:  LucideIcon;
  title: string;
  desc:  string;
}

const CHALLENGES: ChallengeItem[] = [
  { icon: BookOpen,       title: "Academic",
    desc: "Messy curriculums and untracked student progress reports." },
  { icon: Layers,         title: "Administrative",
    desc: "Paper-heavy processes and disjointed departmental records." },
  { icon: DollarSign,     title: "Financial",
    desc: "Uncollected fees and lack of real-time financial transparency." },
  { icon: MessageSquare,  title: "Communication",
    desc: "Missed updates and poor parent-teacher-student engagement." },
];

const Challenges: React.FC = () => (
  <section
    id="solutions"
    aria-labelledby="challenges-heading"
    className="bg-gray-50 px-4 sm:px-16 py-16 sm:py-20"
  >
    <div className="max-w-[1280px] mx-auto">
      <div className="mb-12 text-center">
        <SectionLabel text="Challenges" />
        <h2 id="challenges-heading"
          className="font-jakarta font-bold text-3xl text-gray-900 mt-1 mb-2">
          Solves Every School Challenge
        </h2>
        <p className="font-inter text-base text-gray-500 mx-auto max-w-2xl">
          Overcome the operational hurdles that slow your growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {CHALLENGES.map(({ icon: Icon, title, desc }) => (
          <div key={title}
            className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="w-12 h-12 rounded-full bg-gray-100
              flex items-center justify-center mb-5">
              <Icon size={20} className="text-gray-700" />
            </div>
            <h3 className="font-jakarta font-bold text-lg text-gray-900 mb-2">
              {title}
            </h3>
            <p className="font-inter text-sm leading-relaxed text-gray-500">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Challenges;
