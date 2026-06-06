import React from "react";
import { Star } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

interface TestimonialItem {
  name:   string;
  role:   string;
  school: string;
  init:   string;
  text:   string;
}

const TESTIMONIALS: TestimonialItem[] = [
  { name: "Mrs Ibrahim",  role: "Principal",     school: "Heroes Might Schools",
    init: "MI",
    text: "Tracking fees and outstanding payments is now straightforward. We have better visibility into our finances and fewer administrative errors." },
  { name: "Mr Paul",      role: "Bursar",         school: "Corona Schools",
    init: "MP",
    text: "The fee management module alone has paid for itself. Every payment is recorded, every receipt is digital, and parents can check their payment status themselves. The finance team now focuses on analysis, not reconciliation." },
  { name: "Mr Eze",       role: "Director",       school: "Pinnacle Schools",
    init: "ME",
    text: "The parent communication portal alone was worth the investment. Engagement is up, and administrative complaints are down significantly." },
  { name: "Mrs Ajala",    role: "Proprietress",   school: "Harmony Intl. Schools",
    init: "MA",
    text: "What used to take our admin team three weeks — result computation, report cards, parent notifications — now takes three days. Our parents are happier, and our school looks more professional." },
  { name: "Mr Chidinma",  role: "Proprietor",     school: "Bright Future Academy",
    init: "MC",
    text: "The implementation process was smooth, and the training provided helped our staff adopt the system quickly." },
  { name: "Mr Chukwu",    role: "Vice Principal", school: "Smart Academy",
    init: "MK",
    text: "I can see real-time attendance, finance, and academic performance across both campuses at any time. Sckool Suite does exactly that." },
];

const StarRow: React.FC = () => (
  <div className="flex gap-1" aria-label="5 out of 5 stars">
    {[0,1,2,3,4].map(i => (
      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const Testimonials: React.FC = () => (
  <section
    id="testimonials"
    aria-labelledby="testi-heading"
    className="bg-gray-50 px-4 sm:px-16 py-16 sm:py-20"
  >
    <div className="max-w-[1280px] mx-auto">
      <div className="text-center mb-14">
        <SectionLabel text="Success Stories" />
        <h2 id="testi-heading"
          className="font-jakarta font-bold text-3xl text-gray-900 mt-1 mb-3">
          Trusted by school leaders across Nigeria
        </h2>
        <p className="font-inter text-base text-gray-500 max-w-md mx-auto">
          Hear from school proprietors, directors, and head teachers who have
          transformed their institutions with Sckool Suite.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map(({ name, role, school, text, init }) => (
          <article key={name}
            className="bg-white border border-gray-200 rounded-2xl p-7
              flex flex-col gap-4">

            {/* Author — always at the top */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-brand-50
                flex items-center justify-center shrink-0
                font-jakarta font-bold text-xs text-brand-600">
                {init}
              </div>
              <div>
                <p className="font-jakarta font-bold text-sm text-gray-900 italic">
                  {name}
                </p>
                <p className="font-inter text-xs text-gray-500 italic">
                  {role} • {school}
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Quote */}
            <p className="font-inter text-sm leading-relaxed text-gray-700
              italic flex-1">
              &ldquo;{text}&rdquo;
            </p>

            <StarRow />
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
