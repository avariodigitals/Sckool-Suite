"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  { q: "How is Sckool Suite priced?",
    a: "Sckool Suite is priced based on school size and the modules you need. We offer flexible plans for primary schools, secondary schools, and multi-campus institutions. Contact us for a customized quote." },
  { q: "How long does it take to set up Sckool Suite for our school?",
    a: "Most schools are fully operational within 2–4 weeks. Our team handles configuration, data migration, and staff training to ensure a smooth transition." },
  { q: "What training is provided for our staff?",
    a: "We provide comprehensive onboarding training for administrators, teachers, and support staff — including live sessions, video tutorials, and documentation." },
  { q: "Can we migrate our existing student and staff records?",
    a: "Yes. Our implementation team assists with data migration from spreadsheets, legacy systems, or paper records into Sckool Suite." },
  { q: "Does Sckool Suite work with poor internet connectivity?",
    a: "Sckool Suite is optimized for Nigerian internet conditions, with lightweight interfaces, offline-capable features, and efficient data usage." },
  { q: "What kind of ongoing support is available?",
    a: "We provide dedicated support via phone, email, and WhatsApp. All plans include access to our support team and regular platform updates." },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="px-4 sm:px-16 py-16 sm:py-20"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel text="FAQ" />
          <h2 id="faq-heading"
            className="font-jakarta font-bold text-3xl text-gray-900 mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div role="list" className="flex flex-col gap-2.5">
          {FAQS.map((item, i) => (
            <div key={i} role="listitem"
              className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-ans-${i}`}
                className="w-full text-left px-6 py-4 flex justify-between
                  items-center gap-3 hover:bg-gray-50 transition-colors"
              >
                <span className="font-jakarta font-bold text-sm text-gray-900">
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-brand-600 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div id={`faq-ans-${i}`}
                  className="px-6 pb-5 font-inter text-sm leading-relaxed text-gray-500">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
